import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import home from '@/components/home'
import content from '@/components/content'
import product from '@/components/product'
import chart1 from '@/components/chart1'
import chart2 from '@/components/chart2'
import kuozhan1 from '@/components/kuozhan1'
import kuozhan2 from '@/components/kuozhan2'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/home',
      name: 'home',
      component: home,
      //重定向 默认展示第一个子路由
      redirect: '/content',
      children: [
        {
          path: '/content',
          name:'contents',
          component: content
        },
        {
          path: '/product',
          name: 'product',
          component: product
        },
        {
          path: '/chart1',
          name: 'chart1',
          component: chart1
        },
        {
          path: '/chart2',
          name: 'chart2',
          component: chart2
        },
        {
          path: '/kuozhan1',
          name: 'kuozhan1',
          component: kuozhan1
        },
        {
          path: '/kuozhan2',
          name: 'kuozhan2',
          component: kuozhan2
        },]
    },
  ]
})
