import state from './state'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'

export default {
  strict: true,
  namespaced: true,
  state,
  actions,
  mutations,
  getters
}
