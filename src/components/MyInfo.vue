<template lang="pug">
  div(id="myInfo")
    div(class="myinfo-top")
      div(style="clear:both;")
      div(class="myinfo-avatar-wrapper")
        img(src="@/assets/avatar.jpg")
      div(class="myinfo-nickname-wrapper")
        span 黑米包子
</template>
<style lang="scss">
  #myInfo {
    .myinfo-top {
      overflow: hidden;
      height: 200px;
      background: paleturquoise;
      .myinfo-avatar-wrapper {
        margin-top: 30px;
        img {
          vertical-align: top;
          width: 60px;
          height: 60px;
          border-radius: 70px;
        }
      }
      .myinfo-nickname-wrapper {
        margin-top: 20px;
      }
    }
  }
</style>
