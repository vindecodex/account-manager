import Vue from 'vue'
import App from './App.vue'
import { router } from './routes'
import store from './store/store'
import axios from 'axios'

// we use this so that we only need to use /accounts or /anything  everytime we request
axios.defaults.baseURL = '/api/v1'

Vue.config.productionTip = false
Vue.config.devtools = true

store.dispatch('attempt', localStorage.getItem('token'))
.then(() => {
  new Vue({
	  router,
	  store,
	  render: h => h(App),
	}).$mount('#app')
  })
