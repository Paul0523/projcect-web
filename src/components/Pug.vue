<template lang="pug">
  div hello
    div 感觉这个很好用啊！！！
    span 感觉写起来很想python！
    p {{ test }}
</template>
<style lang="scss">
  div {
    background: pink;
  }
</style>
<script>
export default {
  name: 'Pug',
  data () {
    return {
      test: '我现在正在用vue和pug写html代码，感觉写起来很爽！'
    }
  }
}
</script>
