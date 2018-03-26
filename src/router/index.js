import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Weather from '@/components/Weather'
import Pug from '@/components/Pug'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Weather',
      component: Weather
    },
    {
      path: '/pug',
      name: 'Pug',
      component: Pug
    }
  ]
})
