import '../../api/index'
import { getHome } from '../../api/home'

// 宫格导航
const Grid = {
  state: {
    grid: []
  },
  mutations: {
    getGrid(state, item) {
      state.grid = [...item]
      // console.log(item);
    }
  },
  actions: {
    getGrid(context) {
      getHome().then(res => {
        // console.log(res.data[0]);
        context.commit('getGrid', res.data[0])
      })

    }
  }

}

export default Grid