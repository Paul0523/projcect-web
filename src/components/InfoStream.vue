<template lang="pug">
  div(class="infoStream")
    card(v-for="(data, index) in cardInfo" :key="index" :cardInfo="data")
</template>
<script>
import Card from '@/components/Card'
export default {
  name: 'InfoStream',
  mounted () {
    this.$axios.get('/api/record/my').then((res) => {
      this.cardInfo = res.data
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
