<template>
    <div class="swiper">
        <el-carousel :interval="4000" type="card" height="350px" >
            <el-carousel-item v-for="(item,index) in imgList" :key="index">
              <img :src="imgList[index].link" alt="">
            <h3 class="medium">{{ item }}</h3>
            </el-carousel-item>
        </el-carousel>
    </div>
</template>

<script>
export default {
    name:'Swiper',
    data(){
      return {
        imgList:[
          {link:require('../../../assets/img/img1.jpg'),des:""},
          {link:require('../../../assets/img/img2.jpg'),des:""},
          {link:require('../../../assets/img/img3.jpg'),des:""},
          {link:require('../../../assets/img/img4.jpg'),des:""},
          {link:require('../../../assets/img/img5.jpg'),des:""},
          {link:require('../../../assets/img/img6.jpg'),des:""}
        ]
      }
    }
}
</script>

<style>
 .swiper{
        margin-top: 10px;
        margin-left:30px;
        width: 1000px;
      
    }
    .el-carousel__item h3 {
        color: #475669;
        font-size: 14px;
        opacity: 0.75;
        line-height: 200px;
        margin: 0;
    }
    
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>