<template>
  <div id="app">
  <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  }
}
</script>
<style>

@font-face {
font-family: 'Risque';
src: url('./assets/Risque/Risque-Regular.ttf')
format('truetype');
}

* {
font-family: 'Risque';
margin: 0;
padding: 0;
box-sizing: border-box;
text-decoration: none;
}

.container {
border: 3px solid #000;
border-radius: 25px;
margin: 80px auto;
overflow: hidden;
}

.header-box {
background: #FF0000;
padding: 20px;
}

.header-box h2 {
color: #FFF;
}

form {
padding: 20px;
font-size: 28px;
}

form .action {
margin: 10px 0;
text-align: center;
}

.btn {
padding: 10px 20px;
border: 1px solid #000;
border-radius: 10px;
display: inline-block;
margin: 5px 15px;
font-size: inherit;
cursor: pointer;
}

.post-btn {
background: #FF0000;
color: #FFF;
}

.default-btn {
background: #F4F4F4;
color: #000;
}

form .field {
margin: 10px 0;
}

.field input {
color: #000;
border: 1px solid #000;
border-radius: 10px;
padding: 0 5px;
font-size: inherit;
max-width: 420px;
width: 100%;
margin: 0 0 0 3%;
overflow: hidden;
}

.field input:focus {
outline: none;
box-shadow: 0px 0px 0px 1px #000 inset;
}

.delete {
color: #FF0000;
}

.edit {
color: #5089DE;
}

/* Media Query */

@media only screen and (max-width: 800px) {

#app {
padding: 10px;
}

.field input {
max-width: 100%;
margin: 5px 0;
}

.btn {
display: block;
width: 100%;
margin: 10px 0;
}

}

</style>
