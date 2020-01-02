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
        shopNum: 0
    },
    mutations: {
        pushKeywords(state, data) {
            state.keywords.push(data)
        },
        pushBrowseList(state, data) {
            state.browseList.push(data)
        }

    },
    actions: {},
    modules: {}
})