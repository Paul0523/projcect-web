<template>
  <div id="first_fragment">
    <transition name="fade">
      <div id="edit" v-show="showEdit">
        <div><button class="el-button" v-on:click="closeEdit()">关闭</button></div>
      </div>
    </transition>
    <div id="searchBar">
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="brand"><span>day</span><span>life</span></span> <input class="text" placeholder="发布" v-on:click="publish()"/><span id="pub" :style="pubStyle" v-on:click="myInfo()"></span>
    </div>
    <header id="navBar" :class="navBarFixed ? 'fixed' : ''">
      <li v-on:click="active(index)" :class="index == footerActiveIndex ? 'active' : ''" v-for="(data, index) in footer" :key="index">{{ data.text }}</li>
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
    var token = this.$cookie.get('token')
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
      var token = this.$cookie.get('token')
      if (!token) {
        console.log('请登录！！')
        this.$router.push('/login')
      } else {
        console.log('跳转到我的个人信息')
        this.$router.push('/myinfo')
      }
    },
    publish () {
      this.showEdit = true
    },
    closeEdit () {
      this.showEdit = false
    }
  },
  data () {
    return {
      footer: [{text: '关注', name: 'InfoStream'}, {text: '我的', name: 'InfoStream'}, {text: '热门', name: 'InfoStream'}, {text: '其他', name: 'InfoStream'}],
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
