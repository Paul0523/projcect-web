<template lang="pug">
  div(class="card" @click="clickCard()")
    div(class="card-header")
      div(class="card-header-left")
        img(src="@/assets/avatar.jpg")
      div(class="card-header-right")
        div(class="card-header-right-top") {{ cardInfo.nickname }}
        div(class="card-header-right-bottom")
          span(class="time") {{ dealTime(cardInfo.create_at) }} &nbsp;&nbsp;&nbsp;
          span(class="from") 来自360安全浏览器
    div(class="card-content") {{ cardInfo.content }}
    div(class="card-media")
</template>
<script>
import timeUtil from '@/time_util'
export default {
  name: 'Card',
  props: ['cardInfo'],
  methods: {
    dealTime (time) {
      var date = new Date()
      var nowTs = date.getTime()
      date.setTime(time)
      var delt = nowTs - time
      if (nowTs - time < 30 * timeUtil.minute) {
        return '刚刚'
      } else if (nowTs - time < timeUtil.hour) {
        return parseInt(delt / timeUtil.minute) + '分钟前'
      } else if (delt < timeUtil.day) {
        return parseInt(delt / timeUtil.hour) + '小时前'
      } else if (delt < 2 * timeUtil.day) {
        return parseInt(delt / timeUtil.day) + '天前'
      } else {
        return timeUtil.format(date, 'yyyy-MM-dd hh:mm:ss')
      }
    },
    clickCard () {
      console.log(this.cardInfo.id)
      this.$router.push({path: '/cardDetail', query: {recordId: this.cardInfo.id}})
    }
  }
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
