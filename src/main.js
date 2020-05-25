import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import api from './api'
import 'vue-select/dist/vue-select.css';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch, faBell } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import vueDebounce from 'vue-debounce'
import VueI18n from 'vue-i18n'
import vSelect from 'vue-select'

import locales from './locales.js'

library.add(faSearch)
library.add(faBell)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('v-select', vSelect)

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

Vue.use(VueI18n)
const i18n = new VueI18n({
  locale: 'ru',
  messages: locales,
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  api,
  i18n,
  render: h => h(App)
}).$mount('#app')
