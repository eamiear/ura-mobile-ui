/**
 * Created by skz on 2018/5/11 11:54
 */

/* browsers user agent */
const browsers = (() => {
  const ua = navigator.userAgent
  const uaLowerCase = ua.toLowerCase()
  const uaMatcher = (reg) => {
    const matcher = uaLowerCase.match(reg)
    return matcher && matcher[0]
  }
  const os = (() => {
    return {
      trident: ua.indexOf('Trident') > -1, // IE内核
      presto: ua.indexOf('Presto') > -1, // opera内核
      webkit: ua.indexOf('AppleWebKit') > -1, // 苹果、谷歌内核
      gecko: ua.indexOf('Gecko') > -1 && ua.indexOf('KHTML') === -1, // 火狐内核
      ios: !!ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), // ios终端
      android: ua.indexOf('Android') > -1 || ua.indexOf('Linux') > -1, // android终端或uc浏览器
      mobile: !!ua.match(/AppleWebKit.*Mobile.*/), // 是否为移动终端
      pc: !this.mobile, // 是否为PC终端
      iPhone: ua.indexOf('iPhone') > -1, // 是否为iPhone或者QQHD浏览器
      iPad: ua.indexOf('iPad') > -1, // 是否iPad
      webApp: ua.indexOf('Safari') === -1 // 是否web应该程序，没有头部与底部
    }
  })()
  const platform = (() => {
    return {
      wechat: os.mobile && uaMatcher(/MicroMessenger/i) === 'micromessenger', // 是否微信打开页面
      alipay: os.mobile && uaMatcher(/Alipay/i) === 'alipay', // 是否支付宝打开页面
      weibo: os.mobile && uaMatcher(/WeiBo/i) === 'weibo',
      qq: os.mobile && uaMatcher(/QQ/i) === 'qq'
    }
  })()
  return {
    language: (navigator.browserLanguage || navigator.language).toLowerCase(),
    appVersion: navigator.appVersion,
    ua,
    os,
    platform
  }
})()

const ua = {browsers}

export default ua
