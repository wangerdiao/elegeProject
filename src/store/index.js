import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)
const actions = {

}
const mutations = {
    USER(state,value) {
        state.user = value
    }
}
const state = {
    user:''
}
export default new Vuex.Store ({
    actions,
    mutations,
    state
})