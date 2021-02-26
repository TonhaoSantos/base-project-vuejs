export default {
  changeLogged (context, payload) {
    context.commit('CHANGE_LOGGED', payload)
  }
}
