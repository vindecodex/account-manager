import Vue from 'vue'
import App from './App.vue'
import { router } from './routes'
import store from './store'
import axios from 'axios'

// we use this so that we only need to use /accounts or /anything  everytime we request
axios.defaults.baseURL = '/api/v1'

Vue.config.productionTip = false
Vue.config.devtools = true


new Vue({
  router,
  render: h => h(App),
  store
}).$mount('#app')
