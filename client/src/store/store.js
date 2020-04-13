import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

import authAccount from './auth-account'
import account from './account'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
	authAccount,
	account
  }
})

export default store
