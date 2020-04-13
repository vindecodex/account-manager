<template>
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
<span class="delete"><i class="fas fa-trash-alt"></i></span>
</td>
</tr>
</table>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Dashboard',
  data() {
  return {
  accounts: null
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
  }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

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

</style>
