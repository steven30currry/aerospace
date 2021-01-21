<template>
    <div class="blog-posts">
        <div class="post" :style="{'width':width,'height':height}" v-for="(item,index) in historyItem" :key="index">
            <img :src="item.pic" alt="" class="post-img" :style="{'width':imgWidth,'height':imgHeight}">
            <div class="post-content" v-if="isContentShow">
                <h3>{{item.des}}</h3>
            </div>
        </div>
    </div>
</template>

<script>

export default {
  name:'',
  data(){
   return {

   }
  },
  props:{
      historyItem:{
          type:Array,
          default(){
              return [
              {"pic":"https://bkimg.cdn.bcebos.com/pic/d01373f082025aafce1dcec3faedab64034f1a8e?x-bce-process=image/resize,m_lfit,w_220,limit_1","des":"万户飞天概述图"},
              {"pic":"https://bkimg.cdn.bcebos.com/pic/8718367adab44aedf4b9befbb31c8701a18bfb3e?x-bce-process=image/resize,m_lfit,w_220,limit_1","des":"纪念万户的月球万户山"},
              {"pic":"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fdingyue.nosdn.127.net%2FM1KHrOhz51qBmWVT9a3W6CrmOTF4Bj20XT68y5qTHOyD01534909425976compressflag.jpg&refer=http%3A%2F%2Fdingyue.nosdn.127.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1613290421&t=881e42e8197ea21948d07409b6b5e4ab","des":"万户飞天概述图"},
              {"pic":"https://gimg2.baidu.com/image_search/src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20180413%2Fc89121e08b024a2f992cc885e26a0604.jpeg&refer=http%3A%2F%2F5b0988e595225.cdn.sohucs.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1613290456&t=9660455b9a428385a0092c62df9811a0","des":"万户飞天概述图"}
            ]
          }
      },
      width:{
        type: String,
        default: '300px'
      },
      height:{
        type: String,
        default: '290px'
      },
      imgWidth:{
        type: String,
        default: '300px'
      },
      imgHeight:{
        type: String,
        default: '177px'
      },
      isContentShow:{
        type: Boolean,
        default: true
      }
  }
}
</script>

<style scoped>
.blog-posts{
    font-family: "Open Sans",sans-serif;
    background-color:#2b2a289c;
    width: min(650px, 100%);
    padding: 20px;
    padding-bottom: 0px;
    display: flex;
    justify-content: space-between;  
    align-items: center;
    flex-wrap: wrap;
    cursor: pointer;
}
.post{
  /* width: calc(33% - 10px); */
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.post-img{
  width: 300px;
  height: 177px;
  border-radius: 6px;
  transition: .3s linear;
}
.post-content{
  background-color: #ffffffdd;
  margin: 0 20px;
  padding: 30px;
  border-radius: 6px;
  transform: translateY(-25px);
  transition: .3s linear;
  opacity: 0.5;
  text-align: center;
  width: 260px;
  height: 106px;
}
.post-content h3{
  font-size: 16px;
  margin-bottom: 10px;
  color: #3d3c3c;
  padding: 20px 0;
}
.post:hover .post-img{
  transform: translateY(20px);
}
.post:hover .post-content{
  transform: translateY(-60px);
}
@media screen and (max-width: 1200px){
  .blog-posts{
    justify-content: center;
  }
  .post{
    width: min(600px, 100%);
  }
}
</style>
