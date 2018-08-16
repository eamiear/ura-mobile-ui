/**
 * Created by skz on 2018/3/13 13:59
 */
import { AUTHORITY_KEY, USER_TOKEN_KEY, USER_ID_KEY, PERMISSION_BUTTON_KEY } from '@/common/constants'
const Cacher = {
  set (key, value) {
    localStorage.setItem(key, value)
  },
  get (key) {
    return localStorage.getItem(key)
  },
  remove (key) {
    return localStorage.removeItem(key)
  },
  clear () {
    return localStorage.clear()
  }
}

const storageMap = {
  'set-token': (token) => {
    Cacher.set(USER_TOKEN_KEY, token)
  },
  'get-token': () => {
    return Cacher.get(USER_TOKEN_KEY)
  },
  'remove-token': () => {
    return Cacher.remove(USER_TOKEN_KEY)
  },
  'get-uid': () => {
    return Cacher.get(USER_ID_KEY)
  },
  'set-uid': (uid) => {
    return Cacher.set(USER_ID_KEY, uid)
  },
  'remove-uid': () => {
    return Cacher.remove(USER_ID_KEY)
  },
  'set-auth': (auth) => {
    Cacher.set(AUTHORITY_KEY, auth)
  },
  'get-auth': () => {
    return Cacher.get(AUTHORITY_KEY)
  },
  'remove-auth': () => {
    return Cacher.remove(AUTHORITY_KEY)
  },
  'set-permission': (permission) => {
    Cacher.set(PERMISSION_BUTTON_KEY, permission)
  },
  'get-permission': () => {
    return Cacher.get(PERMISSION_BUTTON_KEY)
  },
  'remove-permission': () => {
    Cacher.remove(PERMISSION_BUTTON_KEY)
  }
}

const Storage = {
  set (key, value) {
    storageMap[`set-${key}`].call(this, value)
  },
  get (key) {
    return storageMap[`get-${key}`].call(this)
  },
  remove (key) {
    storageMap[`remove-${key}`].call()
  },
  clearAuth () {
    this.remove('token')
    this.remove('uid')
    this.remove('auth')
  }
}

export default Storage
