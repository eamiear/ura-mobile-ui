/**
 * Created by skz on 2017/10/10 18:13
 */
/**
 * AJax 请求
 * 封装签名
 * Methods:
 *   1. request
 *   2. get
 *   3. post
 * params: 方法请求参数与 axios 请求参数基本相同，比 axios 多了一个 reqMethod 字段
 *   req = {
 *    url: '',
 *    method: 'get',
 *    params: {},
 *    reqVersion: '1.0',                    // 接口请求版本，默认1.0
 *    reqMethod: 'account.session.gen'      // 请求方法
 *   }
 * 使用:
 * request(req)
 * get({params: {}, reqMethod: ''})
 * post({params: {}, reqMethod: ''})
 */
/*eslint-disable*/
import { Helper } from '@/common/helper'
import Storage from '@/common/cache'
import * as Constants from '@/common/constants'
import fetch from '@/common/fetch'
import md5 from 'blueimp-md5'
let requestTimes = 0 // 请求用户信息次数
let sessionRequestTimes = 0 // 请求用户信息次数
import _ from 'lodash'

/*eslint-disable no-useless-call*/
function getAuthInfo () {
  return Storage.get('auth') && JSON.parse(Storage.get('auth'))
}
function setAuthInfo (authInfo) {
  Storage.set('auth', JSON.stringify(authInfo))
}
function removeAuthInfo () {
  Storage.remove('auth')
}

// 获取会话
function getSession () {
  let authInfo = getAuthInfo()
  if (!authInfo) {
    return fetch({
      method: 'post',
      params: {method: Constants.SESSION_REQUEST}
    }).then((response) => {
      if (response.code === 0) {
        try {
          authInfo = response.data
          authInfo.difference = authInfo.timestamp - Math.floor(Date.now() / 1000)
          setAuthInfo(authInfo)
        } catch (err) {
          removeAuthInfo()
        }
      }
    })
  }
}

// 会话续约
function reNewSession (reNewSessionReq, reqParam, reqVersion) {
  let authInfo = getAuthInfo()
  let reqParams = Object.assign({accessToken: Storage.get('token'), sessionKey: authInfo['sessionKey']}, reqParam || {})
  reNewSessionReq['data'] = 'params=' + encodeURIComponent(JSON.stringify(reqParams))
  reNewSessionReq['params'] = getReqParams(Constants.RENEW_SESSION_REQUEST, reqParams, reqVersion)
  return fetch(reNewSessionReq).then((response) => {
    if (response.code === 0) {
      try {
        authInfo = response.data
        authInfo.difference = authInfo.timestamp - Math.floor(Date.now() / 1000)
        setAuthInfo(authInfo)
      } catch (err) {
        removeAuthInfo()
      }
    }
  })
}

// token 续约
// function reNewToken (reNewSessionReq, reqParam, reqVersion) {
//   let reqParams = Object.assign({accessToken: Storage.get('token')}, reqParam || {})
//   reNewSessionReq['data'] = 'params=' + encodeURIComponent(JSON.stringify(reqParams))
//   reNewSessionReq['params'] = getReqParams(Constants.RENEW_TOKEN_REQUEST, reqParams, reqVersion)
//   return fetch(reNewSessionReq).then((response) => {
//     if (response.code === 0) {
//       store.dispatch('RenewAccessToken', response.data.accessToken)
//     }
//   })
// }

// 获取签名
function getSign (method, params, interfaceVer = Constants.INTERFACE_VERSION) {
  let paramsStr = JSON.stringify(Helper.deepSort(params))
  paramsStr = paramsStr.replace(/(\/)/g, '\\$1')
  let authInfo = getAuthInfo()
  const timestamp = Math.floor(Date.now() / 1000) + authInfo['difference']
  authInfo['timestamp'] = timestamp
  setAuthInfo(authInfo)
  const sessionKey = authInfo['sessionKey']
  const sessionSecret = authInfo['sessionSecret']
  const mix = `method=${method}` + `&params=${paramsStr}` + `&sessionKey=${sessionKey}` + `&sysId=${sysId}` + `&timestamp=${timestamp}` + `&ver=${interfaceVer}` + sessionSecret
  return md5(mix)
}

// 获取请求参数
function getReqParams (method, params, interfaceVer = Constants.INTERFACE_VERSION) {
  const sign = getSign(method, params, interfaceVer)
  const authInfo = getAuthInfo()
  return {
    method: method,
    ver: interfaceVer,
    timestamp: authInfo['timestamp'],
    sessionKey: authInfo['sessionKey'],
    sysId: Constants.CLIENT_TYPES.INTEL_BUILDING_PLATFORM,
    sign: sign
  }
}

// ajax 请求
async function request (req) {
  const args = [].slice.call(arguments)
  let tmpReq = _.cloneDeep(req)
  let authInfo = getAuthInfo()
  if (!authInfo) {
    await getSession()
  }
  const reqParams = tmpReq.params
  const reqMethod = tmpReq.reqMethod
  const reqVersion = tmpReq.reqVersion
  let requestParams = Object.assign({accessToken: Storage.get('token')}, reqParams || {})
  tmpReq['data'] = 'params=' + encodeURIComponent(JSON.stringify(requestParams || {}))
  tmpReq['params'] = getReqParams(reqMethod, requestParams, reqVersion)
  return new Promise((resolve, reject) => {
    fetch(tmpReq).then((response) => {
      resolve(response)
      const statusCode = response.code
      if ([Const.INVALID_SESSION, Const.SESSION_EXPIRE, Const.INVALID_SIGN].includes(statusCode)) {
        removeAuthorityInfo()
        requestTimes++
        if (requestTimes >= Constants.RENEW_REQUEST_TIMES) {
          requestTimes = 0
          return
        }
        getSession().then(() => {
          request.apply(null, args)
        })
      } else if ([Constants.NOT_LOGIN_USER, Const.TOKEN_EXPIRE].includes(statusCode)) {
        // Storage.clearAuth()
        // location.reload()
      } else if (Constants.TOKEN_RENEW === statusCode) {
        // tokenRequestTimes++
        // if (tokenRequestTimes >= Const.RENEW_REQUEST_TIMES) {
        //   tokenRequestTimes = 0
        //   return
        // }
        // reNewToken(_.cloneDeep(tmpReq), reqParams, reqVersion).then(() => {
        //   request.apply(null, args)
        // })
      } else if (Constants.SESSION_RENEW === statusCode) {
        sessionRequestTimes++
        if (sessionRequestTimes >= Constants.RENEW_REQUEST_TIMES) {
          sessionRequestTimes = 0
          return
        }
        reNewSession(_.cloneDeep(tmpReq), reqParams, reqVersion).then(() => {
          request.apply(null, args)
        })
      }
    }).catch((response) => {
      window.console && console.error('[ajax] ', '服务出错\n\t error path: \n', location.href, response)
      reject(response)
    })
  })
}

// get 请求
function get (req) {
  return request(Object.assign(req, {method: 'get'}))
}

// post 请求
function post (req) {
  return request(Object.assign(req, {method: 'post'}))
}

/**
 * 解析请求参数
 * @param searchParam
 * @param params
 * @returns {*}  ['q=2', 'b=1', ....]
 */
function searchParams (searchParam, params) {
  for (let i in params) {
    if (i === 'data' && params[i]) {
      searchParam.push('params=' + encodeURIComponent(JSON.stringify(params[i])))
    } else if (i === 'params' && params[i]) {
      searchParams(searchParam, params[i])
    } else {
      searchParam.push(i + '=' + params[i])
    }
  }
  return searchParam
}

/**
 * 获取请求绝对URL
 * @param req
 * @returns {string}
 */
function getRequestUrl (req) {
  let baseUrl = process.env.BASE_API
  try {
    baseUrl = window.Utopa.SysConfig.BASE_API
  } catch {
    baseUrl = process.env.BASE_API
  }

  let tmpReq = _.cloneDeep(req)
  const reqParams = tmpReq.params
  const reqMethod = tmpReq.reqMethod
  const reqVersion = tmpReq.reqVersion
  let requestParams = Object.assign({accessToken: Storage.get('token')}, reqParams || {})
  tmpReq['params'] = getReqParams(reqMethod, requestParams, reqVersion)
  tmpReq['data'] = requestParams
  delete tmpReq.reqMethod
  return baseUrl + '?' + searchParams([], tmpReq).join('&').toString()
}

export default {
  // get,
  post,
  getRequestUrl,
  request
}
