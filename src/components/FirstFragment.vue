<template>
  <div id="first_fragment">
    <div id="searchBar">
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="brand"><span>day</span><span>life</span></span> <span class="text" placeholder="发布" v-on:click="publish()">发布</span><span id="pub" :style="pubStyle" v-on:click="myInfo()"></span>
    </div>
    <header id="navBar" :class="navBarFixed ? 'fixed' : ''">
      <router-link tag="li" :to="data.path" v-on:click="active(index)" :class="index == footerActiveIndex ? 'active' : ''" v-for="(data, index) in footer" :key="index">{{ data.text }}</router-link>
    </header>
    <div :class="navBarFixed ? 'show' : ''"></div>
    <div class="content" v-show="!showEdit">
      <keep-alive>
        <router-view/>
      </keep-alive>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FirstFragment',
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
    this.navBarHeight = document.querySelector('#navBar').offsetTop
    var token = this.$cookies.get('token')
    if (!token) {
      this.$router.push('/login')
    }
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
    },
    myInfo () {
      var token = this.$cookies.get('token')
      if (!token) {
        console.log('请登录！！')
        this.$router.push('/login')
      } else {
        console.log('跳转到我的个人信息')
        this.$router.push('/myinfo')
      }
    },
    publish () {
      this.$router.push('/edit')
    }
  },
  data () {
    return {
      footer: [{text: '关注', name: 'InfoStream', path: '/FirstFragment/InfoStream'}, {text: '我的', name: 'InfoStream', path: '/FirstFragment/MyStream'}, {text: '热门', name: 'HotStream', path: '/FirstFragment/HotStream'}],
      footerActiveIndex: 0,
      navBarFixed: false,
      navBarHeight: 200,
      pubStyle: {
        backgroundImage: 'url(' + require('../assets/iconbg.png') + ')',
        backgroundSize: '75px auto',
        backgroundPosition: '-24px 0px'
      },
      showEdit: false
    }
  }
}
</script>
<style lang="scss">
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
      background: white;
      line-height: 30px;
      color: #c0c4cc;
      font-size: 12px;
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
      width: 33.33%;
      float: left;
      list-style-type: none;
      line-height: 44px;
      box-sizing: border-box;
      font-size: 18px;
      opacity: 0.5;
      cursor: pointer;
      font-weight: bold;
    }
    .router-link-active {
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
</style>
