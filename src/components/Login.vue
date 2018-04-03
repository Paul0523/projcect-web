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
    div(class="source—code")
      a(href="https://github.com/Paul0523/projcect-web")
        svg(height="32px" class="octicon octicon-mark-github" viewBox="0 0 16 16" version="1.1" width="32px" aria-hidden="true")
          path(fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z")

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
          this.$router.go(-1)
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
    height: 100%;
    overflow: hidden;
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
    .source—code {
      background: white;
      height: 50px;
      width: 50px;
      position: absolute;
      left: 50%;
      margin-left: -25px;
      bottom: 20px;
    }
  }
</style>
