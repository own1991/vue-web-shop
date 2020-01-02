import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        keywords: [],
        browseList: [],
        city: '',
        currentCity: '',
        nickname: '',
        shopList: []
    },
    mutations: {
        pushKeywords(state, data) {
            state.keywords.push(data)
        },
        pushBrowseList(state, data) {
            state.browseList.push(data)
        },
        editshopList(state, data) {
            state.shopList.map(item => item.check = data)
        },

    },
    actions: {},
    modules: {}
})