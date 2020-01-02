import Vue from 'vue'
import util from '../js/util'
//封装全局跳转方法
Vue.prototype.$goto = function(val) {
    if (val.indexOf("/") !== -1) {
        this.$router.push(val)
    } else {
        this.$router.push({ name: "details", query: { id: val } });
    }
}

//挂载js
Vue.prototype.$util = util

// 添加购物车
Vue.prototype.$addShop = function(item) {
    this.$api.addShop(item).then(res => {
        if (res.code === 200) {
            console.log(res);
            // this.$store.state.shopNum++
            this.$toast(res.msg);
        }
    });
}

//封装组件
import betterScroll from "../components/slot/BetterScroll";
import Top from '../components/slot/GlobalTop'
Vue.component('globalTop', Top)
Vue.component('betterScroll', betterScroll)