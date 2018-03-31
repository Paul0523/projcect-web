<template lang="pug">
  div(id="edit-view")
    div(class="edit-header")
      span(class="edit-cancel") 取消
      div
        div(class="edit-title") 发微博
        div(class="edit-nickname") 黑米包子
      span(class="edit-send" v-on:click="sendRecord()") 发送
    div(class="edit-content-wrapper")
      textarea(class="edit-content" placeholder="分享新鲜事..." v-model="content")
</template>
<script>
export default {
  name: 'edit',
  data () {
    return {
      content: ''
    }
  },
  methods: {
    sendRecord () {
      var userId = this.$cookies.get('user_id')
      var token = this.$cookies.get('token')
      var data = {content: this.content}
      var headers = {user_id: userId, token: token}
      this.$axios.get('/api/record/publish', {params: data, headers: headers}).then(res => {
        this.$message(res.data.message)
        if (res.data.status === 200) {
          this.content = ''
          this.$router.push('/')
        }
      })
    }
  }
}
</script>
<style lang="scss">
  #edit-view {
    height: 100%;
    display: flex;
    flex-direction: column;
    .edit-header {
      display: flex;
      justify-content: space-between;
      height: 60px;
      line-height: 60px;
      background: #fafafa;
      .edit-cancel {
        margin-left: 20px;
      }
      .edit-title {
        height: 40px;
        line-height: 40px;
      }
      .edit-nickname {
        height: 20px;
        line-height: 20px;
        font-size: 12px;
        color: #b6b6b6;
      }
      .edit-send {
        margin-right: 20px;
      }
    }
    .edit-content-wrapper {
      flex: 1;
      box-sizing: border-box;
      .edit-content {
        border: none;
        outline: none;
        padding: 10px;
        box-sizing: border-box;
        width: 100%;
        display: block;
        height: 100%;
        font-size: 18px;
      }
    }
  }
</style>
