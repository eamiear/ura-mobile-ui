/**
 * Created by skz on 2018/5/14 15:57
 */

import Bridge from '../bridge'
/**
 * [JSBridge调用APP接口] 获取订单商品信息
 * @param {object} data        // 参数
 * @param {function} callback  // 回调函数
 * @constructor
 */
const Caller_AfterSale_getApplyAfterSaleParams = (data, callback) => {
  Bridge.WebViewJavascriptBridge.setup((JSBridge) => {
    JSBridge.callHandler('GTBridge_Liber_AfterSale_getApplyAfterSaleParams', data, callback)
  })
}

/**
 * 返回售后申请列表
 * @constructor
 */
const Caller_AfterSale_goback2AfterSaleApplyingList = () => {
  Bridge.WebViewJavascriptBridge.setup((JSBridge) => {
    JSBridge.callHandler('GTBridge_Liber_AfterSale_goback2AfterSaleApplyingList')
  })
}

export default {
  Caller_AfterSale_getApplyAfterSaleParams,
  Caller_AfterSale_goback2AfterSaleApplyingList
}
