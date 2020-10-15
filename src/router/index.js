import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/views/Home'
import Me from '@/views/Me'
import Invest from '@/views/Invest'
import Login from '@/views/Login'
import Register from '@/views/Register'
import Bank from '@/views/Bank'
import Account from '@/views/Account'
import UserInfo from '@/views/UserInfo'
import InvestHistory from '@/views/InvestHistory'
import AccountHistory from '@/views/AccountHistory'
import Withdraw from '@/views/Withdraw'

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
    },
    {
      path: '/register',
      name: 'Register',
      component: Register,
      meta:{
        showTab:false
      }
    },{
      path: '/bank',
      name: 'Bank',
      component: Bank,
      meta:{
        showTab:false
      }
    },{
      path: '/account',
      name: 'Account',
      component: Account,
      meta:{
        showTab:false
      }
    },{
      path: '/userinfo',
      name: 'UserInfo',
      component: UserInfo,
      meta:{
        showTab:false
      }
    },{
      path: '/investHistory',
      name: 'InvestHistory',
      component: InvestHistory,
      meta:{
        showTab:false
      }
    },{
      path: '/accountHistory',
      name: 'AccountHistory',
      component: AccountHistory,
      meta:{
        showTab:false
      }
    },{
      path: '/withdraw',
      name: 'Withdraw',
      component: Withdraw,
      meta:{
        showTab:false
      }
    }
  ]
})


router.beforeEach((to, from, next) => {
  console.log(1321)
  console.log(to, from)
  if (to.path == '/login' || to.path == '/register') {
    next()
    return
  }
  if (!localStorage.getItem('user')) {
    next({path: '/login'})
  }
  next()
})

export default router

