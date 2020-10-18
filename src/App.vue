<template>
  <div id="app">
    <ConwayGame/>
  </div>
</template>

<script>
import ConwayGame from './components/ConwayGame.vue'

export default {
  name: 'App',
  components: {
    ConwayGame
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
