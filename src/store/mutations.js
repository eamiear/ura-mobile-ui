import {APP_STATUS} from './mutation-types'

export default {
  [APP_STATUS] (state, status) {
    state.status = status
  }
}
