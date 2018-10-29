import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/views/Layout'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import('@/views/Login')
    },
    {
      path: '/layout',
      component: Layout,
      redirect: '/layout/home',
      children: [
        {
          path:'home',
          name:'home',
          meta:{
            title:'首页'
          },
          component: () => import('@/views/Home')
        },
        {
          path:'adminUser',
          name:'adminUser',
          meta:{
            title:'管理员列表'
          },
          component: () => import('@/views/admin')
        }
      ]
    },
    
  ]
})
