<template>
  <div id="app">
    <div id="searchBar">
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="brand"><span>day</span><span>life</span></span> <input class="text" placeholder="每日生活"/>
    </div>
    <header id="navBar" :class="navBarFixed ? 'fixed' : ''">
      <li v-on:click="active(index)" :class="index == footerActiveIndex ? 'active' : ''" v-for="(data, index) in footer" :key="index">{{ data.text }}</li>
    </header>
    <div :class="navBarFixed ? 'show' : ''"></div>
    <div class="content">
      <keep-alive>
        <router-view/>
      </keep-alive>
    </div>

  </div>
</template>

<script>
export default {
  name: 'App',
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
    this.navBarHeight = document.querySelector('#navBar').offsetTop
  },
  methods: {
    active (index) {
      console.log('点击了' + index)
      this.footerActiveIndex = index
      this.$router.push(this.footer[index].name)
    },
    handleScroll () {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      if (scrollTop > this.navBarHeight) {
        this.navBarFixed = true
      } else {
        this.navBarFixed = false
      }
    }
  },
  data () {
    return {
      footer: [{text: '天气', name: 'Weather'}, {text: '我', name: 'InfoStream'}, {text: '她', name: 'Weather'}, {text: '他', name: 'Pug'}],
      footerActiveIndex: 0,
      navBarFixed: false,
      navBarHeight: 200
    }
  }
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: pink;
  position: absolute;
  bottom: 0px;
  top: 0px;
  width: 100%;
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
      right: 46px;
      text-indent: 15px;
      border-radius: 100px;
      border: 0px solid;
      height: 30px;
      width: 46%;
      top: 9px;
      outline: none;
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
    z-index: 100000;
  }
  .show {
    height: 44px;
  }
  .content {
    overflow: hidden;
    height: 900px;
    background: blue;
    width: 100%;
  }
}
</style>
