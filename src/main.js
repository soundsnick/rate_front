import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import api from './api'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import vueDebounce from 'vue-debounce'

library.add(faSearch)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(vueDebounce)
Vue.use(vueDebounce, {
  lock: true
})
Vue.use(vueDebounce, {
  listenTo: 'input'
})
Vue.use(vueDebounce, {
  listenTo: ['input', 'keyup']
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  api,
  render: h => h(App)
}).$mount('#app')
