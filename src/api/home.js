import api from './index'
// axios
import request from './request'

// 首页数据
export function getHome(data) {
  return request({
    url: api.getHome,
    method: 'get',
    data
  })
}
// 商品数据
export function getGoods(params) {
  return request({
    url: api.getGoods,
    method: 'get',
    params
  })
}
// 搜索
export function getSearch(params) {
  return request({
    url: api.getSearch,
    method: 'get',
    params
  })
}
// 搜索热词
export function getSearchHot(data) {
  return request({
    url: api.getSearchHot,
    method: 'get',
    data
  })
}
// 商品详情
export function getDetails(params) {
  return request({
    url: api.getDetails,
    method: 'get',
    params,
    hideloading: true
  })
}
// 添加购物车
export function getAdd(params) {
  return request({
    url: api.getAdd,
    method: 'post',
    params,
    hideloading: true
  })
}
// 购物车信息
export function getCart(params) {
  return request({
    url: api.getCart,
    method: 'get',
    params,
    hideloading: true
  })
}
// 获取地址信息
export function getArea(params) {
  return request({
    url: api.getArea,
    method: 'get',
    params,
    hideloading: true
  })
}
// 更改地址
export function updateArea(params) {
  return request({
    url: api.updateArea,
    method: 'patch',
    params,
    hideloading: true
  })
}
// 创建订单
export function cretaeOrder(params) {
  return request({
    url: api.cretaeOrder,
    method: 'post',
    params,
    hideloading: true
  })
}
// 支付订单
export function payOrder(params) {
  return request({
    url: api.payOrder,
    method: 'post',
    params,
    hideloading: true
  })
}
//支付密码验证
export function verifyPaypwd(data) {
  return request({
    url: api.verifyPaypwd,
    method: 'post',
    data,
    hideloading: true
  })
}