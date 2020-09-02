import '../../api/index'
import { getGoods } from '../../api/home'

// 宫格导航
const Goods = {
  state: {
    goods: [],
    type: [
      {
        "name": '流行',
        "type": "syn"
      },
      {
        "name": "新款",
        "type": "new"
      },
      {
        "name": "精选",
        "type": "sell"
      }
    ],
    defaultIndex: 0
  },
  mutations: {
    getGoods(state, item) {
      state.goods = [...item]
    },
    getIndex(state, index) {
      state.defaultIndex = index

      var temp = state.type[state.defaultIndex].type

      state.goods = []
      
      getGoods({
        page: 1,
        sortType: temp
      }).then(res => {
        state.goods = [...res.data]
      })
    }
  },
  actions: {
    getGoods(context) {
      getGoods({
        page: 1,
        sortType: "syn"
      }).then(res => {
        context.commit('getGoods', res.data)
      })

    },
    getIndex(context, index) {
      context.commit('getIndex', index)
    }
  }

}

export default Goods