<template lang="pug">
  div(id="register")
    i(class="el-icon-close" v-on:click="back()")
    div(class="register-nickname-wrapper item")
      el-input(placeholder="用户昵称")
    div(class="register-phone-wrapper item")
      el-input(placeholder="手机号码")
    div(class="register-password-wrapper item")
      el-input(type="password" placeholder="验证码")
        template(slot="append") 发送
    div(class="register-btn-wrapper item")
      el-button(class="register-btn") 注册
</template>
<script>
export default {
  methods: {
    back () {
      this.$router.push('/')
    }
  }
}
</script>
<style lang="scss">
  #register {
    background: white;
    i {
      position: absolute;
      right: 30px;
      top: 30px;
      font-size: 30px;
    }
    .item {
      margin-bottom: 15px;
    }
    .register-nickname-wrapper {
      margin-top: 80px;
      .el-input {
        width: 90%;
      }
    }
    .register-phone-wrapper {
      .el-input {
        width: 90%;
      }
    }
    .register-password-wrapper {
      .el-input {
        width: 90%;
      }
    }
    .register-btn-wrapper {
      text-align: center;
      margin-top: 30px;
      .register-btn {
        width: 80%;
        background: #ff8329;
      }
    }
  }
</style>
