import Vue from 'vue'
import Router from 'vue-router'
// import Layout from '@/views/index'
import _import from './import'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: _import('index'),
      children: [
        {
          path: '',
          redirect: '/home'
        },
        {
          path: '/home',
          component: _import('home')
        },
        {
          path: '/shop',
          component: _import('shop')
        },
        {
          path: '/cart',
          component: _import('cart')
        },
        {
          path: '/user',
          component: _import('user')
        }
      ]
    }
  ]
})
