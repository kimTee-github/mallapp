const api = {
  AddLogin: '/LoginPage/AddLogin',
  UserPhone: '/Verify/GetPhone',
  UserName:'/Verify/LoginName',
  getCode: '/SMSCode/GetCode',
  getHome:'/Home/getHomeREC',
  getGoods:'/Home/getHomeShowGoods',
  getSearch:'/Goods/getGoods', //搜索
  getSearchHot:'/Goods/getSearchHot',
  getDetails:'/Goods/GetGoodsInfo',
  getAdd:'/Cart/addCart',
  getCart:'/Cart/getCart',
  getArea:'/UserInfo/getArea',
  cretaeOrder:'/Order/cretaeOrder',
  payOrder:'/Order/payOrder', //支付订单
  verifyPaypwd:'/Order/verifyPayPWD', //支付密码验证
  updateArea:'/UserInfo/patchArea', //更改地址
  // verifyPayPWD:'/Order/verifyPayPWD',   //余额支付
}

export default api
