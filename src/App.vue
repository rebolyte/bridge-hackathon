<template>
  <div id="app">
    <div class='navigationbar'>
      <router-link class='routerlink' to="/">Hello</router-link>
      <router-link class='routerlink' to="/page1">Page1</router-link>
    </div>
    <router-view class='contentbox'></router-view>
    <div class='somesidebar'/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
.routerlink{
  font-size: 5vh;
  margin-left: 2.5%;
  margin-right: 2.5%;
  font-weight: bold;
  text-decoration: none;
}
.navigationbar{
  grid-column: 2 / 3;
  grid-row: 1 / 2;
  background-color: skyblue;
  padding-top: 0.75%;
}
.somesidebar{
  grid-column: 1 / 2;
  grid-row: 1 / 3;
  background-color: tomato;
}
.contentbox{
  grid-column: 2 / 3;
  grid-row: 2 / 3;
  background-color: grey;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
  display: grid;
  grid-template-columns: 15vw 85vw;
  grid-template-rows: 10vh 90vh;
}
@import './assets/main.css';
</style>
