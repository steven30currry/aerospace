import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)



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
      component:resolve => require(['views/home/Home'],resolve)
    },
    {
      path:'/firstview',
      component:resolve => require(['views/first/firstview'],resolve)    
    },
   
    {
      path:'/second',
      component:resolve => require(['views/second/second'],resolve)    
    },
  
    {
      path:'/third',
      component:resolve => require(['views/third/third'],resolve)
    },
    
    {
      path:'/forth',
      component:resolve => require(['views/forth/forth'],resolve)
    },
    {
      path:'/fifth',
      component:resolve => require(['views/fifth/fifth'],resolve)
    },
    {
      path:'/sixth',
      component:resolve => require(['views/sixth/sixth'],resolve)
    },
   
  ]
})
