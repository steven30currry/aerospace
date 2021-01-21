<template>
  <div>
      <h1>first</h1>
      <!-- <describe-card></describe-card> -->
      <button @click="show=!show">show</button>
      <transition name="fade">
      <p v-show="show">hello1</p>
      </transition>
      <transition name="fade">
      <p v-show="show">hello2</p>
      </transition>
      <transition name="fade">
      <p v-show="show">hello3</p>
      </transition>
      <transition name="fade">
      <p v-show="show">hello4</p>
      </transition>
      <img src="https://bkimg.cdn.bcebos.com/pic/d01373f082025aafce1dcec3faedab64034f1a8e?x-bce-process=image/resize,m_lfit,w_220,limit_1" alt="">
  </div>

</template>

<script>
import DescribeCard from '@/components/describeCard/DescribCard.vue'

export default {
    name:'First',
    components:{
      DescribeCard
    },
    data(){
      return{
        show:false
      }
    }
}
</script>

<style>
.fade-enter-active, .fade-leave-active{
  transition: all 0.5s ease
}
.fade-enter, .fade-leave-active{
  opacity: 0
}
</style>