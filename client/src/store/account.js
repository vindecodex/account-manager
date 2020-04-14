import axios from 'axios'

export default {
  namespace: true,
  state: {
	accounts: null,
	account: null
  },
  mutations: {

	// mutations can be called by using commit('methodname')
	
	SET_ACCOUNTS(state, accounts) {
	  state.accounts = accounts
	},

	SET_ACCOUNT(state, account) {
	  state.account = account
	}
  },
  actions: {

	// actions can be called by using dispatch('methodname')
	// inside this object you can pass { commit, dispatch, state } if you wanted
	// since our get accounts requires token headers but now we don't need to set it here because we already set it up during authentication on our subscriber.
	
	get_accounts({ commit, getters }) {
	  return new Promise((resolve, reject) => {
	  axios.get('/accounts')
	  .then(res => {
		const accounts = res.data.accounts
		commit('SET_ACCOUNTS', accounts)
		resolve(getters.get_accounts)
	  })
	  .catch(err => {
		console.log(err)
		reject(err)
	  })
	  })
	},

	get_account({ commit, getters }, id) {
	  return new Promise((resolve, reject) => {
		axios.get('/accounts/' + id)
		.then(res => {
		  const account = res.data.account
		  commit('SET_ACCOUNT', account)
		  resolve(getters.get_account)
		})
		.catch(err => {
		  console.log(err)
		  reject(err)
		})
	  })
	},

	edit_account({ commit }, editInput) {
	  return new Promise((resolve, reject) => {
		axios.patch('/accounts/' + editInput.id, { username: editInput.username })
		.then(res => {
		  console.log(res)
		  commit('SET_ACCOUNT', res.data.account)
		  resolve(res)
		})
		.catch(err => {
		  console.log(err)
		  reject(err)
		})
	  })
	},

	delete_account({ commit }, id) {
	  return new Promise((resolve, reject) => {
		axios.delete('/accounts/' + id)
		.then(res => {
		  console.log(res)
		  resolve(res)
		})
		.catch(err => {
		  console.log(err)
		  reject(err)
		})
	  })
	}

  },
  getters: {

	// getters for getting state fields on routes or components
	
	get_accounts(state) {
	  return state.accounts
	},

	get_account(state) {
	  return state.account
	}

  }
}
