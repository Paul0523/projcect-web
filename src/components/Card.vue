<template lang="pug">
  div(class="card")
    div(class="card-header")
      div(class="card-header-left")
        img(src="@/assets/avatar.jpg")
      div(class="card-header-right")
        div(class="card-header-right-top") 黑米包子
        div(class="card-header-right-bottom")
          span(class="time") 24分钟前 &nbsp;&nbsp;&nbsp;
          span(class="from") 来自360安全浏览器
    div(class="card-content") {{ cardInfo.content }}
    div(class="card-media")
</template>
<script>
export default {
  name: 'Card',
  props: ['cardInfo']
}
</script>
<style lang="scss">
  .card {
    margin-bottom: 10px;
    text-align: left;
    background: #fefefe;
    .card-header {
      padding-top: 10px;
      padding-bottom: 10px;
      .card-header-left {
        padding-left: 15px;
        display: inline-block;
        img {
          vertical-align: top;
          width: 40px;
          height: 40px;
          border-radius: 50px;
        }
      }
      .card-header-right {
        vertical-align: top;
        padding-left: 15px;
        display: inline-block;
        .card-header-right-top {
          color: #fe9459;
        }
        .card-header-right-bottom {
          font-size: 12px;
        }
      }
    }
    .card-content {
      padding: 15px;
      padding-top: 0px;
    }
  }
</style>
