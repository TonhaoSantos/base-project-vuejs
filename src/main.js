import Vue from 'vue'
import App from '@/App.vue'
import router from '@router'
import store from '@/store'
import VueMeta from 'vue-meta'
import '@/registerServiceWorker'
import { myMixins } from '@/mixins'

// Plugins
import i18n from '@/i18n'
import '@/plugins/fontAwesome'

Vue.mixin(myMixins)

Vue.use(VueMeta)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
