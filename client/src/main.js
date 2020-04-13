import Vue from 'vue'
import App from './App.vue'
import { router } from './routes'
import store from './store/store'
import axios from 'axios'

// FontAwesome
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

require('./store/subscriber')

// we use this so that we only need to use /accounts or /anything  everytime we request
axios.defaults.baseURL = '/api/v1'

Vue.config.productionTip = true
Vue.config.devtools = true

store.dispatch('attempt', localStorage.getItem('token'))
.then(() => {
  new Vue({
	  router,
	  store,
	  render: h => h(App),
	}).$mount('#app')
  })
