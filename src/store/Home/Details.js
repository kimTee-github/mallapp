import '../../api/index'
import { getDetails } from '../../api/home'

// 宫格导航
const Goods = {
  state:{

  },
  mutations: {
    getDetails(state,id){

    }
  },
  actions: {
    getDetails(context,id){
        getDetails({goodsId:id}).then(res=>{
            console.log(id);
            console.log(res);
            context.commit('getDetails')
        })
    }
  }

}

export default Goods