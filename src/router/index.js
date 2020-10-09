import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/views/Home'
import Me from '@/views/Me'
import Invest from '@/views/Invest'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/me',
      name: 'Me',
      component: Me
    },
    {
      path: '/invest',
      name: 'Invest',
      component: Invest
    }
  ]
})
