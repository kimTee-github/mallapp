import { getArea, cretaeOrder, payOrder, updateArea } from '../../api/home'

const Order = {
    state: {
        address: [],  //地址列表
        defaultAddress: [], //默认地址
        orderlist: [],
        orderNumber: ''
    },
    mutations: {
        // 地址
        getArea(state, item) {
            // console.log(item);
            state.address = [...item]
            if (state.address.length < 2) {
                state.defaultAddress = state.address[0]
            } else {
                state.address.forEach(ele => {
                    if (ele.isDefault == true) {
                        state.defaultAddress = ele  //默认地址
                    }
                })
            }
        },
        // 更换地址
        ChangeAddress(state, item) {
            console.log(item);
            state.defaultAddress = []
            state.defaultAddress = item
        },
        // 
        updateArea(state, item) {
            console.log(item);
        },
        // 创建订单
        getCreateOrder(state, item) {
            // console.log(item);
            state.orderlist = [...item][0]

            // state.orderlist.forEach(ele => {
            //     if (state.orderlist.length < 2) {
            //         state.orderlist = ele
            //     }
            // })
            console.log(state.orderNumber);
            state.orderNumber = state.orderlist.orderNumber
        },
        // 支付
        getPayOrder(state, item) { },
        // verifyPaypwd(state,item){

        // }
    },
    actions: {
        // 地址
        getArea(context) {
            getArea({ page: 1, pageSize: 10 }).then(res => {
                // console.log(res.data);
                context.commit('getArea', res.data)
            })
        },
        // 更换地址
        ChangeAddress(context, item) {
            context.commit('ChangeAddress', item)
        },
        updateArea(context, item) {
            // console.log(item);
            updateArea({
                CustomerAddrId: item.CustomerAddrId,
                CustomerId: item.CustomerId,
                Name: item.Name,
                Phone: item.Phone,
                Province: item.Province,
                City: item.City,
                District: item.District,
                Address: item.Address,
                IsDefault: item.IsDefault,
                IdDel: item.IdDel
            }).then(res => {
                console.log(res);
                context.commit('updateArea', item)
            })
        },
        // 创建订单
        getCreateOrder(context, item) {
            cretaeOrder({
                price: item.totalprice,
                goodsId: item.id,
                isFcart: item.isFcart,
                consignee_addr: item.defaultAddress
            }).then(res => {
                console.log(res.data);
                context.commit('getCreateOrder', res.data)
            })
        },
        // 支付订单
        getPayOrder(context, orderNumber) {
            payOrder({
                orderNum: orderNumber
            }).then(res => {
                console.log(res);
                context.commit('getPayOrder')
            })
        },
        // 支付密码
        // verifyPaypwd(context){
        //     verifyPaypwd().then(res=>{
        //         console.log(res);
        //         context.commit('verifyPaypwd')
        //     })
        // }

    }
}

export default Order

