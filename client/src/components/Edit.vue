<template>
<div class="container edit-form">
  <div class="header-box">
	<h2>Edit</h2>
  </div>
  <form>
  <div class="field">
	<label for="username">username</label>
	<input v-model="username" id="username" type="text" :value="username" placeholder="username" required>
  </div>
  <div class="action">
	<button type="button" @click="edit()" class="btn post-btn">Edit</button>
	<a href="/dashboard" class="btn default-btn">Back</a>
  </div>
  </form>
</div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Edit',
  data() {
  return {
  username: null
  }
  },
  created() {
  this.$store.dispatch('get_account', this.$route.params.id)
  .then(res => {
  this.username = res.username
  })
  .catch(err => console.log(err))
  },
  methods: {
  edit() {
  const editInput = {
  username : this.username,
  id : this.$route.params.id
  }
  this.$store.dispatch('edit_account', editInput)
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

.edit-form {
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
