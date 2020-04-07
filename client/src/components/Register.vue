<template>
<div class="container register-form">
  <div class="header-box">
	<h2>Register</h2>
  </div>
  <form>
  <div class="field">
	<label for="username">username</label>
	<input id="username" type="text" placeholder="username" ref="username" required>
  </div>
  <div class="field">
	<label for="password">password</label>
	<input id="password" type="password" placeholder="password" ref="password" required>
  </div>
  <div class="field">
	<label for="password">Confirm Password</label>
	<input id="confirm_password" type="password" placeholder="confirm password" ref="confirm_password" required>
  </div>
  <div class="action">
	<button @click="register()" class="btn post-btn">Register</button>
	<a href="/" class="btn default-btn">Back</a>
  </div>
  </form>
</div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Register',
  data() {
  return {
  registerInput: {}
  }
  },
  methods: {
  register() {
  this.registerInput.username = this.$refs.username.value
  this.registerInput.password = this.$refs.password.value
  this.registerInput.confirm_password = this.$refs.confirm_password.value
  axios.post('/api/v1/accounts', this.registerInput)
  .then(res => { console.log(res) })
  .catch(err => console.log(err));
  }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.register-form {
max-width: 710px;
width: 100%;
}

#password, #username {
margin: 0 0 0 122px;
}

@media only screen and (max-width: 800px) {

#password, #username {
margin: 5px 0;
}

}

</style>
