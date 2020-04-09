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

	authAccount(state, accountData) {
	  state.token = accountData.token
	  state.account = accountData.account
	}
  },
  actions: {
	// actions can be called by using dispatch('methodname')

	// inside this object you can pass { commit, dispatch, state } if you wanted
	register({ commit, state }, authData) {
	  axios.post('/accounts', authData)
		.then(res => { 
		  commit('authAccount', {
			token: res.data.token,
			account: res.data.account
		  })
		})
		.catch(err => console.log(err));
	},
	login({ commit }, authData) {
	  axios.post('/accounts/login', authData)
		.then(res => {
		  console.log(res)
		  commit('authAccount', {
			token: res.data.token,
			account: res.data.account
		  })
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
