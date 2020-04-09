import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

import account from './account'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
	account
  }
})

export default store
