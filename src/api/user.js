import api from './index'
// axios
import request from './request'

// 添加登录、注册
export function AddLogin(params) {
  return request({
    url: api.AddLogin,
    method: 'post',
    params
  })
}

// 手机号是否可用
export function getUserPhone(params) {
  return request({
    url: api.UserPhone,
    method: 'get',
    params,
    hideloading: true
  })
}

export function getCode(params) {
  return request({
    url: api.getCode,
    method: 'get',
    params,
    hideloading: true
  })
}

// 检测用户名是否可用
export function getUserName(params) {
  return request({
    url: api.UserName,
    method: 'get',
    params,
    hideloading: true
  })
}