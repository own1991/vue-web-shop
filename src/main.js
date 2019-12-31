import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//引入dayjs
import dayjs from 'dayjs'
//引入axios
import axios from './http'
//引入vant
import Vant from 'vant';
import 'vant/lib/index.css';
//引入封装的全局方法
import './global/'
import api from './http/api.js'
Vue.use(Vant);
Vue.config.productionTip = false
Vue.prototype.$dayjs = dayjs
Vue.prototype.$axios = axios
    //引入api.js
Vue.prototype.$api = api
    //
import FastClick from 'fastclick'
FastClick.attach(document.body);
import Router from 'vue-router'
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')