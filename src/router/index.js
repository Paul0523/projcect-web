import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Weather from '@/components/Weather'
import Pug from '@/components/Pug'
import InfoStream from '@/components/InfoStream'
import Card from '@/components/Card'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Weather',
      name: 'Weather',
      component: Weather
    },
    {
      path: '/InfoStream',
      name: 'InfoStream',
      component: InfoStream
    },
    {
      path: '/pug',
      name: 'Pug',
      component: Pug
    },
    {
      path: '/Card',
      name: 'Card',
      component: Card
    }
  ]
})
