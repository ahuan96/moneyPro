import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/views/Home'
import Me from '@/views/Me'
import Invest from '@/views/Invest'
import Login from '@/views/Login'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta:{
        showTab:true
      }
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      meta:{
        showTab:true
      }
    },
    {
      path: '/me',
      name: 'Me',
      component: Me,
      meta:{
        showTab:true
      }
    },
    {
      path: '/invest',
      name: 'Invest',
      component: Invest,
      meta:{
        showTab:true
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta:{
        showTab:false
      }
    }
  ]
})


router.beforeEach((to, from, next) => {
  console.log(1321)
  console.log(to, from)
  if (to.path == '/login') {
    next()
  }
  if (!localStorage.getItem('user')) {
    next({path: '/login'})
  }
  next()
})

export default router

