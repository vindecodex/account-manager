import Vue from 'vue'
import VueRouter from 'vue-router'
import store from './store/store'

import Login from './components/Login'
import Register from './components/Register'
import Dashboard from './components/Dashboard'

Vue.use(VueRouter);

const token = localStorage.getItem('token')

export const router = new VueRouter({
  mode: 'history',
  routes: [
	{ 
	  path: '/',
	  component: Login,
	  // to where it want to go (url)
	  // from where it came from (url)
	  // next proceed to a url
	  beforeEnter(to, from, next) {
		// check if token exist
		if(token) {
		  next('/dashboard')
		} else {
		  next()
		}
	  }
	},
	{ 
	  path: '/register',
	  component: Register,
	  beforeEnter(to, from, next) {
		if(token) {
		  next('/dashboard')
		} else {
		  next()
		}
	  }
	},
	{
	  path: '/dashboard',
	  component: Dashboard,
	  beforeEnter(to, from, next) {
		if(token) {
		  next()
		} else {
		  next('/')
		}
	  }
	}
  ]
});
