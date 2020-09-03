import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import app from './modules/app'
import Banner from './Home/Banner'
import Grid from './Home/Grid'
import Goods from './Home/Goods'
import Details from './Home/Details'
import login from './Login/login'
import register from './Login/register'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

const store = new Vuex.Store({
  store: {
    count: 10,
    // 存储用户登录信息
    token: ''
  },
  mutations: {
    increament(state, val) {
      state.count += val
    },
    setToken(state, val) {
      state.token = val
    }
  },
  actions: {
    getsync(context, val) {
      context.commit('increament', val)
    }
  },
  getters: {
    newVal: (state) => state.count * 2
  },
  plugins: [createPersistedState({
    storage: window.localStorage
  })],
  modules: {
    app,
    Banner,
    Grid,
    Goods,
    Details,
    login,
    register,
    getters
  },

})

export default store
