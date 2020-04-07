import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from './components/Login'
import Register from './components/Register'

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: 'history',
  routes: [
	{ path: '', component: Login },
	{ path: '/register', component: Register }
  ]
});
