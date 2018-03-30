<template lang="pug">
  div(class="infoStream")
    card(v-for="(data, index) in cardInfo" :key="index" :cardInfo="data")
</template>
<script>
import Card from '@/components/Card'
export default {
  name: 'InfoStream',
  mounted () {
    var userId = this.$cookie.get('user_id')
    var token = this.$cookie.get('token')
    var header = {user_id: userId, token: token}
    this.$axios.get('/api/record/my', {headers: header}).then(res => {
      if (res.data.status === 200) {
        this.cardInfo = res.data.data
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
