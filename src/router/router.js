import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import home from '../views/home/Home'
import popularization from '../views/popularization/Popularization'
import First from '../views/first/first'
import Second from '../views/second/second'
import Third from '../views/third/third'
import Test from '../views/second/test.vue'

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path:'/',
      redirect:'/first'
    },
    {
      path:'/home',
      component:home
    },
    {
      path:'/first',
      component:First
    
    },
    {
      path:'/second',
      component:Second
    },
    {
      path:'/test',
      component:Test
    },
    {
      path:'/third',
      component:Third
    },
    {
      path:'/popularization',
      component:popularization
    },
  ]
})
