import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import app from './modules/app'
import Banner from './Home/Banner'
import Grid from './Home/Grid'
import Goods from './Home/Goods'
import Details from './Home/Details'

Vue.use(Vuex)

const store = new Vuex.Store({
  store:{

  },
  modules: {
    app,
    Banner,
    Grid,
    Goods,
    Details
  },
  getters
})

export default store
