import Vue from 'vue'
import Vuex from 'vuex'
import $api from '../http/api'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        keywords: [],
        browseList: [],
        city: '',
        currentCity: '',
        nickname: '',
        shopList: [],
        address: '',
        Num: '',
        tobeEvaluated: {},
        shippingAddress: {}
    },
    mutations: {
        pushKeywords(state, data) {
            state.keywords.push(data)
        },
        pushBrowseList(state, data) {
            state.browseList.push(data)
        },
    },
    getters: {
        getSum: state => { //通过方法访问
            let add = 0;
            state.shopList.map(item => {
                if (item.check) {
                    add += item.mallPrice * item.count;
                }
            });
            return add.toFixed(2);
        },
        getnum: state => {
            if (state.Num > 0) {
                return state.Num
            } else return;
        }
    },
    actions: {
        getShopList({ state }) {
            $api.getCard().then(res => {
                if (res.code === 200) {
                    let num = 0;
                    res.shopList.map(item => {
                        num += item.count;
                    });
                    state.Num = num;
                }
            });
        }
    },
    modules: {}
})