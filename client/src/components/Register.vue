<template>
<div class="container register-form">
  <div class="header-box">
	<h2>Register</h2>
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
  <div class="field">
	<label for="password">Confirm Password</label>
	<input id="confirm_password" type="password" placeholder="confirm password" required>
  </div>
  <div class="action">
	<button class="btn post-btn">Register</button>
	<a href="/" class="btn default-btn">Back</a>
  </div>
  </form>
</div>
</template>

<script>
export default {
  name: 'Register'
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
