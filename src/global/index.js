import Vue from 'vue'
import city from '../js/city'
import util from '../js/util'
//封装全局跳转方法
Vue.prototype.$goto = function(val) {
    if (val.indexOf("/") !== -1) {
        this.$router.push(val)
    } else {
        this.$router.push({ name: "details", query: { id: val } });
    }
}
Vue.prototype.$city = city
Vue.prototype.$util = util
import betterScroll from "../components/slot/BetterScroll";
import Top from '../components/slot/GlobalTop'
Vue.component('globalTop', Top)
Vue.component('betterScroll', betterScroll)