<template lang="pug">
  div(id="register")
    i(class="el-icon-close" v-on:click="back()")
    div(class="register-nickname-wrapper item")
      el-input(placeholder="用户昵称" v-model="nickname")
    div(class="register-phone-wrapper item")
      el-input(placeholder="手机号码" v-model="phone")
    div(class="register-password-wrapper item")
      el-input(placeholder="验证码" v-model="verifyCode")
        template(slot="append")
          span
            span(v-show="!verifyCodeTimeShow" v-on:click="sendVerifyCode()") {{ verifyCodeText }}
            span(v-show="verifyCodeTimeShow") {{ verifyCodeText }}
    div(class="register-btn-wrapper item")
      el-button(class="register-btn" v-on:click="register()") 注册
</template>
<script>
export default {
  data () {
    return {
      nickname: '',
      phone: '',
      verifyCode: '',
      verifyCodeText: '发送',
      verifyCodeTime: 50,
      verifyCodeTimeShow: false
    }
  },
  methods: {
    back () {
      this.$router.push('/')
    },
    register () {
      var data = {phone: this.phone, nickname: this.nickname, verify_code: this.verifyCode}
      this.$axios.get('/api/user/register', {params: data}).then(res => {
        if (res.data.status === 200) {
          this.$message('注册成功！')
          this.$router.push('/login')
        } else {
          this.$message(res.data.message)
        }
      })
    },
    sendVerifyCode () {
      console.log('发送验证码')
      this.$axios.get('/api/user/send_verify_code', {params: {phone: this.phone}}).then(res => {
        if (res.data.status === 200) {
          this.$message('发送成功')
          var timer = setInterval(() => {
            this.verifyCodeTime--
            this.verifyCodeTimeShow = true
            this.verifyCodeText = this.verifyCodeTime + 's'
            if (this.verifyCodeTime === 1) {
              clearInterval(timer)
              this.verifyCodeText = '发送'
              this.verifyCodeTime = 50
              this.verifyCodeTimeShow = false
            }
          }, 1000)
        } else {
          this.$message(res.data.message)
        }
      })
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
