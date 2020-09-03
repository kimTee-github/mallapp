import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('@/views/layouts/index'),
    redirect: '/home',
    meta: {
      title: '首页',
      keepAlive: false
    },
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import('@/views/home/Home'),
        meta: { title: '首页', keepAlive: false }
      },
      {
        path: '/category',
        name: 'Category',
        component: () => import('@/views/category/Category'),
        meta: { title: '分类', keepAlive: false }
      },
      {
        path: '/cart',
        name: 'Cart',
        component: () => import('@/views/cart/Cart'),
        meta: { title: '购物车', keepAlive: false }
      },
      {
        path: '/user',
        name: 'User',
        component: () => import('@/views/user/User'),
        meta: { title: '我的', keepAlive: false }
      },

    ]
  },
  {
    path: '/mydetail',
    name: 'Details',
    component: () => import('@/views/home/Details')
  },
  {
    path: '/detailPage',
    name: 'detailPage',
    component: () => import('@/views/user/detailPage')
  },
  {
    path: '/Login',
    name: 'Login',
    component: () => import('@/views/Login/Login')
  }
]

const router = new VueRouter({
  mode: 'hash',
  routes
})

export default router
