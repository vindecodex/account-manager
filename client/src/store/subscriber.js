import store from './store'
import axios from 'axios'
import { router } from '../routes'

store.subscribe((mutation) => {
  switch(mutation.type) {
// we are listening to SET_TOKEN if it was called then run below code
	case 'SET_TOKEN':
	  if(mutation.payload) {
		axios.defaults.headers.common['Authorization'] = `Bearer ${mutation.payload}`
		localStorage.setItem('token', mutation.payload)
	  } else {
		axios.defaults.headers.common['Authorization'] = null
		localStorage.removeItem('token')
		router.push('/')
	  }
	  break;
  }
})
