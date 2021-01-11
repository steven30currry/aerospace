import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import home from '../views/home/Home'
import popularization from '../views/popularization/Popularization'

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path:'/home',
      component:home
    },
    {
      path:'/',
      component:popularization
    },
  ]
})
