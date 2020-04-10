import axios from 'axios'

// accessing fields and methods in here to components or outside of store use below:
// accessing fields this.$store.fieldname
// accessing actions this.$store.dispatch(methodname, { parameters })
// accessing mutations this.$store.commit(methodname, { parameters })
// Note mostly actions used on components or routes - does not slow the frontend
// Note mostly mutations used on actions - does slow the frontend

export default {
  namespace: true,
  state: {
	token: null,
	account: null
  },
  mutations: {
	// mutations can be called by using commit('methodname')

	SET_TOKEN(state, token) {
	  state.token = token
	},
	SET_ACCOUNT(state, account) {
	  state.account = account
	}
  },
  actions: {
	// actions can be called by using dispatch('methodname')
	// inside this object you can pass { commit, dispatch, state } if you wanted
	register({ commit, state, dispatch }, registrationInput) {
	  return new Promise((resolve, reject) => {
		axios.post('/accounts', registrationInput)
		  .then(res => { 
			dispatch('attempt', res.data.token)
			resolve(res)
		  })
		  .catch(err => {
			console.log(err)
			reject(err)
		  });
	  })
	},
	attempt({ commit, state }, token) {
	  if (token) {
		commit('SET_TOKEN', token)
		// we run subscriber cuase we listen to mutation
		// which can be found on ./store/subscriber
	  }

	  if (!state.token) {
		return
	  }

	  axios.post('/accounts/authenticate')
		.then(res => {
		  commit('SET_ACCOUNT', res.data.account)
		})
		.catch(err => {
		  console.log(err)
		  commit('SET_TOKEN', null)
		  commit('SET_ACCOUNT', null)
		})
	},
	login({ commit, dispatch }, loginInput) {
	  axios.post('/accounts/login', loginInput)
		.then(res => {
		  console.log(res)
		  dispatch('attempt', res.data.token)
		})
		.catch(err => console.log(err))
	}
  },
  getters: {
	// getters for getting state fields on routes or components
	getState(state) {
	  return state
	}
  }
}
