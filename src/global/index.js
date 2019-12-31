import Vue from 'vue'
import city from '../js/city'
//封装全局跳转方法
Vue.prototype.$goto = function(val) {
    if (val.indexOf("/") !== -1) {
        this.$router.push(val)
    } else {
        this.$router.push({ path: "details", query: { id: val } });
    }
}
Vue.prototype.$city = city

import Top from '../components/slot/GlobalTop'
Vue.component('globalTop', Top)