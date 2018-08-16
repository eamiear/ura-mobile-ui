// 缓存Key
export const AUTHORITY_KEY = 'sys:auth:key'
export const USER_TOKEN_KEY = 'sys:user:token'
export const USER_ID_KEY = 'sys:user:id'
export const PERMISSION_BUTTON_KEY = 'sys:permission:key'

//
export const INTERFACE_VERSION = '1.0'
export const SESSION_REQUEST = 'account.session.gen'
export const RENEW_SESSION_REQUEST = 'account.session.renew'
export const RENEW_TOKEN_REQUEST = 'account.access.renewToken'

export const QINIU_REQUEST_BASEURL = 'http://ox2m2b48s.bkt.clouddn.com/'
export const QINIU_UPLOAD_HTTP_URL = 'http://upload-z2.qiniu.com'
export const QINIU_UPLOAD_HTTPS_URL = 'https://up-z2.qbox.me/'

// 客户端|平台类型
export const CLIENT_TYPES = {
  // 优托邦
  UTOPA: 1,
  // 小Q
  LITTLEQ: 2,
  // liber
  LIBER: 3,
  // 设计师
  DESIGNER: 4,
  // 运营平台
  OPERATION_PLATFORM: 5,
  // 优托邦商家端APP
  UTOPA_MERCHANT: 6,
  // 小Q商家端APP
  XIAOQ_MERCHANT: 7,
  // 优托邦智能楼宇平台
  INTEL_BUILDING_PLATFORM: 8
}
