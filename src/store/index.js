import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import app from './modules/app'
import Banner from './Home/Banner'
import Grid from './Home/Grid'
import Goods from './Home/Goods'
import Details from './Home/Details'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    // 存储用户登录信息
    token: ''
  },
  mutations: {
    setToken(state, val) {
      state.token = val
    }
  },
  actions: {
  },
  getters: {
  },
  plugins: [
    createPersistedState({
      storage: window.sessionStorage
    })],
  modules: {
    app,
    Banner,
    Grid,
    Goods,
    Details,
    getters
  },

})

export default store
