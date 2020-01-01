import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        keywords: [],
        city: '',
        currentCity: '',
        nickname: ''
    },
    mutations: {
        pushkeywords(state, data) {
            state.keywords.push(data)
        }
    },
    actions: {},
    modules: {}
})