import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import FirstFragment from '@/components/FirstFragment'
import InfoStream from '@/components/InfoStream'
import Register from '@/components/Register'
import Login from '@/components/Login'
import MyInfo from '@/components/MyInfo'
import Edit from '@/components/Edit'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/FirstFragment/InfoStream'
    },
    {
      path: '/FirstFragment',
      name: 'FirstFragment',
      component: FirstFragment,
      children: [
        {
          path: '/FirstFragment/InfoStream',
          component: InfoStream,
          name: 'InfoStream'
        }
      ]
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/myinfo',
      name: 'myinfo',
      component: MyInfo
    },
    {
      path: '/edit',
      name: 'edit',
      component: Edit
    }
  ]
})
