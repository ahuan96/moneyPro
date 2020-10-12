import Vue from 'vue'
import App from './App'
import router from './router'

import {fetch,post} from './utils/http.js'

Vue.config.productionTip = false


// 方法库设置
Vue.prototype.$post = post
Vue.prototype.$get = fetch

// reset.css 全局重置样式
import '../src/assets/style/reset.css'

import Mint from 'mint-ui';
import 'mint-ui/lib/style.css'
Vue.use(Mint);

import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
