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
  #edit {
    position: absolute;
    width: 100%;
    height: 300px;
    background: lightblue;
    z-index: 10000;
  }
  #searchBar {
    background: #1870fa;
    height: 44px;
    line-height: 44px;
    text-align: left;
    .brand {
      font-size: 15pt;
      span:first-child {
        color: red;
      }
      span:nth-child(2) {
        color: white;
      }
    }
    .text {
      position: absolute;
      right: 55px;
      text-indent: 15px;
      border-radius: 100px;
      border: 0px solid;
      height: 30px;
      width: 46%;
      top: 9px;
      outline: none;
    }
    #pub {
      position: absolute;
      right: 15px;
      top: 13px;
      width: 20px;
      height: 20px;
    }
  }
  .banner {
    height: 200px;
    width: 100%;
    background: gold;
  }
  header {
    width: 100%;
    height: 44px;
    background: #1870fa;
    li {
      width: 25%;
      float: left;
      list-style-type: none;
      line-height: 44px;
      box-sizing: border-box;
      font-size: 18px;
      opacity: 0.5;
      cursor: pointer;
      font-weight: bold;
    }
    .active {
      color: white;
      opacity: 1;
    }
  }
  .fixed {
    position: fixed;
    top: 0px;
    z-index: 100;
  }
  .show {
    height: 44px;
  }
  .content {
    overflow: hidden;
    min-height: 800px;
    background: blue;
    width: 100%;
  }
}
</style>
