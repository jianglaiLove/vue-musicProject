// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/stylus/index.styl'
import 'swiper/dist/css/swiper.css'
import 'animate.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import VueLazyLoad from 'vue-lazyload'
import FastClick from 'fastclick';
import store from './store'

Vue.use(VueAwesomeSwiper)
FastClick.attach(document.body)
Vue.use(VueLazyLoad,{
  loading: require('./assets/img/default.png'),
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
