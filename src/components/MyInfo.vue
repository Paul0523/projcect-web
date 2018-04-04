<template lang="pug">
  div(id="myInfo")
    div(class="myinfo-wrapper" @click="testClick($event)")
      div(class="myinfo-title")
        span(@click="goBack()") 返回
        span(@click.stop="doShowSetting()") 设置
      div(class="myinfo-top")
        div(style="clear:both;")
        div(class="myinfo-avatar-wrapper")
          img(src="@/assets/avatar.jpg")
        div(class="myinfo-nickname-wrapper")
          span 黑米包子
    div(class="myinfo-setting" :style="showSetting ? mySettingStyle : ''")
      li(@click="exit()") 退出当前账号
      li 测试
</template>
<script>
export default {
  data () {
    return {
      showSetting: false,
      mySettingStyle: {
        display: 'block'
      }
    }
  },
  methods: {
    testClick ($event) {
      this.showSetting = false
    },
    doShowSetting () {
      this.showSetting = true
      return false
    },
    exit () {
      this.$cookies.remove('token')
      this.$cookies.remove('user_id')
      this.$router.push('/login')
    },
    goBack () {
      this.$router.go(-1)
    }
  }
}
</script>
<style lang="scss">
  #myInfo {
    height: 100%;
    .myinfo-wrapper {
      height: 100%;
      .myinfo-title {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        height: 44px;
        line-height: 44px;
        $margin-border: 25px;
        span:first-child {
          margin-left: $margin-border;
        }
        span:nth-child(2) {
          margin-right: $margin-border;
        }
      }
    }
    .myinfo-setting {
      position: absolute;
      display: none;
      bottom: 0px;
      animation: pop 500ms;
      text-align: center;
      list-style: none;
      width: 100%;
      height: 200px;
      background: beige;
      li {
        box-sizing: border-box;
        padding: 10px;
        background: lightblue;
      }
    }
    @keyframes pop {
      from {
        bottom: -200px;
      }
      to {
        bottom: 0px;
      }
    }
    .myinfo-top {
      overflow: hidden;
      height: 200px;
      background: paleturquoise;
      .myinfo-avatar-wrapper {
        margin-top: 30px;
        img {
          vertical-align: top;
          width: 60px;
          height: 60px;
          border-radius: 70px;
        }
      }
      .myinfo-nickname-wrapper {
        margin-top: 20px;
      }
    }
  }
</style>
