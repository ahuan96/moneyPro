import Vue from 'vue'
import App from './App'
import router from './router'

import {fetch,post} from './utils/http.js'

Vue.config.productionTip = false


// 方法库设置
Vue.prototype.$POST = post
Vue.prototype.$GET = fetch

// reset.css 全局重置样式
import '../src/assets/style/reset.css'

import Vant from 'vant';
import 'vant/lib/index.css';
// 配置rem根元素大小
import rem from './utils/rem'
Vue.use(Vant);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
