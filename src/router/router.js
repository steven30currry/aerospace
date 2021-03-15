import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import home from '../views/home/Home'
import popularization from '../views/popularization/Popularization'
import FirstView from '../views/first/firstview'
import SecondView from '../views/first/secondview'
import ThirdView from '../views/first/thirdview'
import ForthView from '../views/first/forthview'
import Second from '../views/second/second'
import Third from '../views/third/third'
import Test from '../views/second/test.vue'
import Forth from '../views/forth/forth'
import Fifth from '../views/fifth/fifth'

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { 
      path:'/',
      redirect:'/home'
    },
    {
      path:'/home',
      component:home
    },
    {
      path:'/firstview',
      component:FirstView
    
    },
    {
      path:'/secondview',
      component:SecondView
    
    },
    {
      path:'/thirdview',
      component:ThirdView
    
    },
    {
      path:'/forthview',
      component:ForthView
    
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
    {
      path:'/forth',
      component:Forth
    },
    {
      path:'/fifth',
      component:Fifth
    }
  ]
})
