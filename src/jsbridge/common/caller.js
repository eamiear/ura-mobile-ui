/**
 * Created by skz on 2018/5/14 15:57
 */

import Bridge from '../bridge'
/**
 * [JSBridge调用APP接口] 获取OpenToken
 * @param {object} data        // 参数
 * @param {function} callback  // 回调函数
 * @constructor
 */
const Caller_Common_Base_getOpenToken = (data, callback) => {
  Bridge.WebViewJavascriptBridge.setup((JSBridge) => {
    JSBridge.callHandler('GTBridge_Common_Base_getOpenToken', data, callback)
  })
}

/**
 * @Test
 * [JSBridge调用APP接口] 唤起APP
 * @param data
 * @param callback
 * @constructor
 */
const Caller_Common_Base_evokeApp = (data, callback) => {
  Bridge.WebViewJavascriptBridge.setup((JSBridge) => {
    JSBridge.callHandler('GTBridge_Common_Base_evokeApp', data, callback)
  })
}

export default {
  Caller_Common_Base_getOpenToken,
  Caller_Common_Base_evokeApp
}
