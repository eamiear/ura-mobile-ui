/*
 * @Author: eamiear
 * @Date: 2018-08-17 16:57:17
 * @Last Modified by: eamiear
 * @Last Modified time: 2018-08-17 17:39:35
 */
import request from '@/common/ajax'

export function  login (username, password) {
  return request.post({
    reqMethod: 'sys.user.login',
    params: {username, password}
  })
}

/**
 * 获取七牛Token
 */
export function getQiniuToken () {
  return request.get({
    reqMethod: 'common.upload.getUpToken'
  })
}

/**
 * 根据key获取图片访问链接
 * @param {String} key 图片key
 */
export function getUrlByQiniuKey (key) {
  return request.get({
    reqMethod: 'common.upload.getUrlByKey',
    params: {key}
  })
}
