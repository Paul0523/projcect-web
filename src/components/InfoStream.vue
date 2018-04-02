<template lang="pug">
  div(class="infoStream")
    card(v-for="(data, index) in cardInfo" :key="index" :cardInfo="data")
</template>
<script>
import Card from '@/components/Card'
export default {
  name: 'InfoStream',
  mounted () {
    var userId = this.$cookies.get('user_id')
    var token = this.$cookies.get('token')
    var header = {user_id: userId, token: token}
    this.$axios.get('/api/record/my', {headers: header}).then(res => {
      if (res.data.status === 200) {
        this.cardInfo = res.data.data
      } else if (res.data.status === 600) {
        this.$message('请登录！')
        this.$router.push('/login')
        this.$cookies.remove('user_id')
        this.$cookies.remove('token')
      }
    })
  },
  components: {
    'card': Card
  },
  data () {
    return {
      cardInfo: []
    }
  }
}
</script>
<style lang="scss">
  .infoStream {
    width: 100%;
    text-align: center;
    background: #eeeeee;
    img {
      width: 90%;
    }
  }
</style>
