import api from './index'
// axios
import request from './request'

// 
export function getHome(data) {
  return request({
    url: api.getHome,
    method: 'get',
    data
  })
}

export function getGoods(params) {
  return request({
    url: api.getGoods,
    method: 'get',
    params
  })
}


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
