<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <div id="navbar">
    <router-link to="/">Main</router-link> | 
    <router-link to="/conditional">Conditional</router-link> | 
    <router-link to="/looping">Looping</router-link> | 
    <router-link to="/lifecycle">Lifecycle</router-link>
    <router-view></router-view>
  </div>
   
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  // components: {
  //   // HelloWorld
  //   // LifecyleHooks,
  //   // ConditionalComponent,
  //   // LoopingComponent,
  //   // MainComponent
  // }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
