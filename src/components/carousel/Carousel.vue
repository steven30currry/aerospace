<template>
  <div class="carousel">
    <div class="baike-title2">
        <h4 class="baike-title_one">太空百科</h4>
    </div>   
    <el-carousel indicator-position="outside" trigger="click" height="220px">
      <el-carousel-item v-for="(item,index) in messageList" :key="index">
        <div class="carou-content">
            <h4>
                <a :href="item.url">{{item.title}}</a>
            </h4>
        </div>
        <img style="width:400px;height:230px" :src="item.imgUrl" alt="">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
    name:'Carousel',
        data(){
        return{
            messageList:[
                {
                    title:"我们为什么要发射自己的碳卫星？",
                    imgUrl:require('assets/img/carousel/c1.jpg'),
                    desc:"不久，继美、日之后，地球上空的碳卫星“家族”又会添加新成员...",
                    url:"https://baike.baidu.com/tashuo/browse/content?id=9448281b163faae676b9d258"
                },
                {
                    title:"为什么有的卫星只有一个太阳翼？",
                    imgUrl:require('assets/img/carousel/c2.png'),
                    desc:"最近，中国最先进的静止轨道气象卫星“风云四号”升空，但这颗重约...",
                    url:"https://baike.baidu.com/tashuo/browse/content?id=9448281b163faae676b9d258"
                },
                {
                    title:"GW190521引力波，是证明中等质量黑洞存在的证据吗？",
                    imgUrl:require('assets/img/carousel/c3.jpg'),
                    desc:"12月11日，我国新一代地球静止轨道气象卫星“风云四号”01星成功发射...",
                    url:"https://space.qq.com/a/20161215/012951.htm"
                },
                {
                    title:"太空垃圾究竟能否被清除",
                    imgUrl:require('assets/img/carousel/c4.jpg'),
                    desc:"国际空间站经常改变轨道高度来躲避太空垃圾，目前地球轨道上的...",
                    url:"https://space.qq.com/a/20160725/021930.htm"
                }

            ]
        }
    }
}
</script>

<style>
    .carousel{
        position: relative;
    }
    .baike-title2{
        margin-top: 20px;
        line-height: 23px;
        border-bottom: 1px solid #eee;
        overflow: hidden;
        height: 35px;
        width: 100%;
        background: #EAF3FD;
    }
    .baike-title2 h4{
        margin: 0px;
        font-size: 22px;
        color: #000;
        font-weight: 400;
        border-left: 5px solid #408ed6;
        line-height: 20px;
        padding-left: 10px;
    }
    .carousel .carou-content{
        padding: 12.5px 15px;
        position: absolute;
        bottom: 0;
        background: rgba(0,0,0,.6);
        width: 100%;
    }
    .carousel .carou-content a{
        color: white;
        background-color: transparent;
    }
  
</style>