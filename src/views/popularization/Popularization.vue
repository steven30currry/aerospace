<template>
  <div class="containner">
      <div class="top">
        <!-- 轮播图   -->
        <swiper></swiper>
        <!-- 历史上的今天 -->
        <history></history>
      </div>
      <div class="mid">
        <kepu></kepu>
      </div>

  </div>
</template>

<script>
import Swiper from './pop_child/swiper'
import History from './pop_child/history'
import Kepu from './pop_child/kepu'

export default {
    name:'popularization',
    components:{
        Swiper,
        History,
        Kepu,
        
    }
}
</script>

<style>
    .top{
        display: flex;

    }
    .mid{
      height: 1000px;
      display: flex;
      width: 100%;
      background: rgba(18,18,18,0);;
      justify-content: space-around;
      align-items: center;
    }
   
</style>