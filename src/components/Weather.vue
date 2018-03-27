<template lang="pug">
  div(id="content")
    div(class="title")
      span {{ title }}
    div(class='current_day')
      span(class='high') {{ currentDay.high }}
      span(class='mark') ℃
      div(style="clear:both")
    div(class='address') 洪山区软件园中路
    div(class="after_day" v-for="(data, index) in weatherInfo" v-bind:key="index")
      span {{ data.date}} &nbsp;&nbsp;
      span {{ data.high }} &nbsp;&nbsp;
      span {{ data.low }} &nbsp;&nbsp;
    div(class='query')
      el-button(v-on:click="queryWeather") 查询
      el-input(v-model="query.city" placeholder="请输入城市")
</template>

<script>
import ElInput from '../../node_modules/element-ui/packages/input/src/input'
import ElButton from '../../node_modules/element-ui/packages/button/src/button'
export default {
  components: {
    ElButton,
    ElInput},
  name: 'weather',
  mounted () {
    this.title = this.city
    this.query.city = this.city
    this.queryWeather()
  },
  methods: {
    emptyCity () {
      this.$message('城市不能为空！')
    },
    queryWeather () {
      var city = this.query.city
      if (city === '') {
        this.emptyCity()
        return
      }
      this.$axios.get('/api/weather?city=' + city).then(res => {
        if (parseInt(res.data.status) === 200) {
          this.weatherInfo = res.data.data.splice(1)
          this.currentDay.high = this.weatherInfo[0].high.match(/\d\d*\.\d+/)[0]
          this.currentDay.low = this.weatherInfo[0].low.match(/\d\d*\.\d+/)[0]
          this.title = city
          this.city = city
        } else {
          this.query.city = this.city
        }
      })
    }
  },
  data () {
    return {
      city: '武汉',
      title: '',
      weatherInfo: [],
      currentDay: {
        high: 0.0,
        low: 0.0
      },
      query: {
        city: ''
      }
    }
  }
}
</script>

<style lang="scss">
  #content {
    .title {
      background: deepskyblue;
      display: block;
      width: 100%;
      height: 50px;
      line-height: 50px;
      font-size: 20pt;
      font-weight: bold;
    }
    .current_day {
      text-align: left;
      position: relative;
      span {
        vertical-align: top;
      }
      .high {
        text-align: center;
        padding: 5px;
        font-size: 40px;
        float: left;
        padding-right: 0px;
        margin-left: 15px;
      }
      .mark {
        padding-top: 10px;
        float: left;
      }
    }
    .address{
      text-align: left;
    }
    .after_day {
      text-align: left;
      background: #f1f1f1;
    }
    .query {
      text-align: left;
      display: flex;
      button {
        flex: none;
        width: 100px;
      }
      .el-input {
        display: inline-block;
        flex: 1;
      }
    }
  }
</style>
