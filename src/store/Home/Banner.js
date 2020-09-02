import '../../api/index'
import { getHome } from '../../api/home'

const Banner = {
  state: {
    banner: []
  },
  mutations: {
    getBanner(state, item) {
      state.banner = [...item]
      // console.log(item);
    }
  },
  actions: {
    getBanner(context) {
      getHome().then(res => {
        // console.log(res.data[1]);
        context.commit('getBanner', res.data[1])
      })

    }
  }

}

export default Banner