import '../../api/index'
import { getDetails, getAdd, getCart } from '../../api/home'

// 宫格导航
const Goods = {
  state: {
    data: [],
    goods: [],
    services: [],
    comments: [],
    comm: [],
    shopInfo: [],
    cart: [],
    cartlist: [],
    num: 1
  },
  mutations: {
    getDetails(state, item) {
      state.data = [...item]
      state.goods = [...item][0]
      state.services = [...item][2]
      state.comments = []
      state.comm = [...item][3]
      state.shopInfo = [...item][1]
      state.comm.forEach(ele => {
        if (ele != null) {
          state.comments.push(ele)
        }
      })
      console.log(item);
    },
    getAdd(state, item) {
      state.cart.forEach(ele => {
        if (ele.product_id == item.id) {
          item.num++
        }
      })
    },
    getCart(state, item) {
      state.cartlist = item
      state.cart = []
      state.cartlist.forEach(ele => {
        if (ele == null) {
          state.cartlist.pop(ele)
          state.cart = state.cartlist
        }
      })
    }
  },
  actions: {
    getDetails(context, id) {
      getDetails({ goodsId: id }).then(res => {
        context.commit('getDetails', res.data)
      })
    },
    getAdd(context, item) {
      getAdd({ product_id: item.id, product_amount: item.num }).then(res => {
        console.log(res);
        context.commit('getAdd', item)
      }).catch(error=>{
        console.log(error);
      })
    },
    getCart(context) {
      getCart({ page: 1, pageSize: 20 }).then(res => {
        // console.log(res.data);
        context.commit('getCart', res.data)
      }).catch(error=>{
        console.log(error);
      })
    }
  }

}

export default Goods