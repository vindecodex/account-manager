<template>
<div class="container login-form">
  <div class="header-box">
	<h2>LOGIN</h2>
  </div>
  <form>
  <div class="field">
	<label for="username">username</label>
	<input v-model="username" id="username" type="text" placeholder="username" required>
  </div>
  <div class="field">
	<label for="password">password</label>
	<input v-model="password" id="password" type="password" placeholder="password" required>
  </div>
  <div class="action">
  <!-- remember when using button add type="button" to avoid reloading and may destroy your ajax request -->
	<button type="button" @click="login()" class="btn post-btn">Login</button>
	<a href="/register" class="btn default-btn">Register</a>
  </div>
  </form>
</div>
</template>

<script>
export default {
  name: 'Login',
  data() {
  return {
  username: '',
  password: ''
  }
  },
  methods: {
  login() {
  const loginInput = {
  username: this.username,
  password: this.password
  }
  this.$store.dispatch('login', loginInput)
  .then(() => {
  this.$router.push('/dashboard')
  })
  .catch(err => console.log(err))
  }
  }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.login-form {
max-width: 600px;
width: 100%;
}

</style>
