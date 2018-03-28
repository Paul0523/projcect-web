<template lang="pug">
  div(class="infoStream")
    card
    card
    card
    card
    card
    card
    card
</template>
<script>
import Card from '@/components/Card'
export default {
  name: 'InfoStream',
  components: {
    'card': Card
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
