// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import './assets/reset.less'
import './assets/style.less'
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

import fastclick from 'fastclick'// 解决移动端click的300毫秒延迟问题
fastclick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
