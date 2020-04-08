<template>
<div class="container login-form">
  <div class="header-box">
	<h2>LOGIN</h2>
  </div>
  <form>
  <div class="field">
	<label for="username">username</label>
	<input id="username" type="text" placeholder="username" required>
  </div>
  <div class="field">
	<label for="password">password</label>
	<input id="password" type="password" placeholder="password" required>
  </div>
  <div class="action">
	<button class="btn post-btn">Login</button>
	<a href="/register" class="btn default-btn">Register</a>
  </div>
  </form>
</div>
</template>

<script>
export default {
  name: 'Dashboard'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.login-form {
max-width: 600px;
width: 100%;
}

</style>
