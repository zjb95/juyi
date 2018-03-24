// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import $ from 'jquery'
import Axios from "axios"

import ElementUI from 'element-ui';
import {Upload, Cascader} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
require('swiper/dist/css/swiper.css')
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false
Vue.use(Upload)
Vue.use(ElementUI);
Vue.use(Cascader);
Vue.prototype.$axios = Axios
Vue.prototype.HOST='/api'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
