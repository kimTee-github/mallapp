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
    params
  })
}
