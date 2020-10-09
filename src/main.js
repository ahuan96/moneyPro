import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

// reset.css 全局重置样式
import '../src/assets/style/reset.css'

import Mint from 'mint-ui';
import 'mint-ui/lib/style.css'
Vue.use(Mint);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
