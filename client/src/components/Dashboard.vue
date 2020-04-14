<template>
<div class="wrapper">
<table class="container table">
<tr class="header-box">
<th>ID</th>
<th>username</th>
<th>action</th>
</tr>
<tr class="table-data" v-for="account in accounts" :key="account._id">
<td>
{{ account._id }}
</td>
<td>
{{ account.username }}
</td>
<td>
<span class="edit" @click="edit(account._id)"><i class="far fa-edit"></i></span>
<span class="delete" @click="toggle_delete(account._id, account.username)"><i class="fas fa-trash-alt"></i></span>
</td>
</tr>
</table>


<div v-if="is_displayed" class="container delete-form">
  <div class="header-box">
	<h2>Delete</h2>
  </div>
  <div class="content-wrapper">
	<div class="field">
	<p>Are you sure you want to delete {{ delInput.username }} ?</p>
	</div>
	<div class="action">
	  <button type="button" @click="del()" class="btn post-btn">Delete</button>
	  <button type="button" @click="toggle_delete()" class="btn default-btn">Cancel</button>
	</div>
  </div>
</div>

</div>
</template>

<script>
export default {
  name: 'Dashboard',
  data() {
  return {
  accounts: null,
  is_displayed: false,
  delInput: {}
  }
  },
  created() {
  this.$store.dispatch('get_accounts')
  .then(res => {
  this.accounts = res
  })
  .catch(err => console.log(err))
  },
  methods: {
  edit(id) {
  this.$router.push('/edit/' + id)
  },
  del() {
  this.$store.dispatch('delete_account', this.delInput.id)
  .then(res => {
  this.is_displayed = !this.is_displayed
  })
  .catch(err => console.log(err))
  },
  toggle_delete(id, username) {
  this.delInput.username = username
  this.delInput.id = id
  this.is_displayed = !this.is_displayed
  }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* Delete Modal */
.delete-form {
max-width: 710px;
width: 100%;
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%,-50%);
background: #fff;
}

.action {
text-align: center;
}

.content-wrapper {
padding: 10px;
}

.field p {
margin: 15px 0;
text-align: center;
}

/* Delete Modal */

.table {
max-width: 1000px;
width: 100%;
border-spacing: 0;
border-radius: 0;
}

.header-box {
color: #fff;
text-align: left;
}

.header-box th {
padding: 20px 5px;
font-size: 20px;
}

.table td {
padding: 20px 0px;
font-size: 20px;
}

.table .table-data:hover {
background: #ececec;
}

.table .table-data:nth-child(odd) {
background: #FFEBEB;
}

span {
margin: 5px;
cursor: pointer;
}

.wrapper {
position: relative;
}

</style>
