import Vue from 'vue'

//封装全局跳转方法
Vue.prototype.$goto = function(val) {
    if (val.indexOf("/") !== -1) {
        console.log(val);
        this.$router.push(val)
    } else {
        console.log(val);
        this.$router.push({ path: "/details", query: { id: val } });
    }


}