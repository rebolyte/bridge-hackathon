<template>
  <!-- Don't drop "q-app" class -->
  <div id="q-app">
    <div class='navigationbar'>
      <router-link class='routerlink' to="/">Splash</router-link>
      <router-link class='routerlink' to="/page1">Page1</router-link>
      <router-link class='routerlink' to="/page2">Page2</router-link>
      <router-link class='routerlink' to="/page3">Page3</router-link>
      <router-link class='routerlink' to="/page4">Page4</router-link>
    </div>
    <router-view class='contentbox'></router-view>
    <div class='somesidebar'/>
  </div>
</template>

<script>
/*
 * Root component
 */
export default {}
</script>

<style lang="stylus">

.routerlink{
  font-size: 2vh;
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
#q-app {
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

@import '~variables'

header
  margin 0
  height 10px
  background-color $primary
</style>
