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
  {    //搜索
    path: '/search',
    name: 'Search',
    component: () => import('@/views/Search/Search')
  },
  {    //商品详情页
    path: '/mydetail',
    name: 'Details',
    component: () => import('@/views/home/Details')
  },
  {   //用户详情页
    path: '/detailPage',
    name: 'detailPage',
    component: () => import('@/views/user/detailPage')
  },
  {  //登录主页
    path: '/Login',
    name: 'Login',
    component: () => import('@/views/Login/Login')
  },
  {  //订单页
    path: '/order',
    name: 'Order',
    component: () => import('@/views/Order/Order')
  },
  {  //地址页
    path: '/address',
    name: 'Address',
    component: () => import('@/views/Order/Address'),
  },
  {  //地址添加页
    path: '/area',
    name: 'Area',
    component: () => import('@/views/Order/Area')
  },
  {  //支付页
    path: '/pay',
    name: 'Pay',
    component: () => import('@/views/Order/Pay')
  }
]

const router = new VueRouter({
  mode: 'hash',
  routes
})

export default router
