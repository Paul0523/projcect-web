<template>
  <div id="content">
    <header>
      <span>
        {{ city }}
      </span>
      天气信息
    </header>
    <div v-for="(data, index) in weatherInfo" :key="index">
      {{ data.date}} {{ data.hight }} {{ data.low }} {{ data.notice }}
    </div>
    <div>
      <el-input v-model="query.city"></el-input>
      <el-button v-on:click="queryWeather">
        查询
      </el-button>
    </div>
  </div>
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
    console.log('vue 页面已经挂载')
    this.$axios.get('/api/weather?city=武汉').then(res => {
      console.log(res)
      this.weatherInfo = res.data.data
    })
  },
  methods: {
    queryWeather () {
      this.$axios.get('/api/weather?city=' + this.query.city).then(res => {
        console.log(res)
        this.weatherInfo = res.data.data
      })
    }
  },
  data () {
    return {
      city: '武汉',
      weatherInfo: [],
      query: {
        city: this.city
      }
    }
  }
}
</script>

<style>
  #content header {
    background: deepskyblue;
    display: block;
    width: 100%;
  }
</style>
