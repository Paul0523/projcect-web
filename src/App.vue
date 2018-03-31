<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}

a, a:hover, a:visited, a:active {
  text-decoration: none;
  color: black;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: absolute;
  bottom: 0px;
  top: 0px;
  width: 100%;
}
</style>
