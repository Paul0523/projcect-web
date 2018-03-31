<template lang="pug">
  div(id="login")
    i(class="el-icon-close" v-on:click="back()")
    router-link(class="register" to="/register") 注册
    div(class="login-phone-wrapper item")
      el-input(placeholder="手机号码" v-model="phone")
    div(class="login-password-wrapper item")
      el-input(placeholder="验证码" v-model="verifyCode")
        template(slot="append" )
          span
            span(v-show="!verifyCodeTimeShow" v-on:click="sendVerifyCode()") {{ verifyCodeText }}
            span(v-show="verifyCodeTimeShow") {{ verifyCodeText }}
    div(class="login-btn-wrapper item")
      el-button(class="login-btn" v-on:click="login()") 登录
</template>
<script>
export default {
  data () {
    return {
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
    login () {
      var data = {phone: this.phone, verify_code: this.verifyCode}
      this.$axios.get('/api/user/login', {params: data}).then(res => {
        console.log(res.data)
        if (res.data.status === 200) {
          var data = res.data.data
          this.$message('欢迎回来' + data.nickname)
          // cookie 有效期为设为90天
          this.$cookies.set('token', data.token, '90d')
          this.$cookies.set('user_id', data.id, '90d')
          this.$router.push('/')
        } else if (res.data.status === 600) {
          this.$message(res.data.message)
          this.$router.push('/login')
        } else {
          this.$message(res.data.message)
        }
      })
    },
    sendVerifyCode () {
      this.$axios.get('/api/user/send_verify_code', {params: {phone: this.phone}}).then(res => {
        if (res.data.status === 200) {
          this.$message('发送成功')
          this.verifyCodeText = this.verifyCodeTime + 's'
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
  },
  mounted () {
    var token = this.$cookies.get('token')
    // token存在直接跳回主页
    if (token) {
      this.$router.push('/')
    }
  }
}
</script>
<style lang="scss">
  #login {
    background: white;
    .register {
      position: absolute;
      top: 30px;
      font-size: 20px;
      left: 30px;
    }
    i {
      position: absolute;
      right: 30px;
      top: 30px;
      font-size: 30px;
    }
    .item {
      margin-bottom: 15px;
    }
    .login-phone-wrapper {
      margin-top: 80px;
      .el-input {
        width: 90%;
      }
    }
    .login-password-wrapper {
      .el-input {
        width: 90%;
      }
      .el-input-group__append {
        width: 45px;
      }
    }
    .login-btn-wrapper {
      text-align: center;
      margin-top: 30px;
      .login-btn {
        width: 80%;
        background: #ff8329;
      }
    }
  }
</style>
