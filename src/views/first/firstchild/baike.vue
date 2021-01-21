<template>
  <div class="baike">
       <div class="baike-title2">
          <h4 class="baike-title_one">太空百科</h4>
       </div>
       <div class="baike-list">
            <div v-for="(item,index) in messageList" :key="index" class="baike-listitem">
              <h3><a :href="item.url">{{item.title}}</a></h3>
              <div class="baike-box">
                  <a :href="item.url" class="baike-img">
                      <img :src="item.imgUrl" alt="">
                  </a>
                  <p>
                      {{item.desc}}
                      <a :href="item.url">更多</a>
                  </p>
              </div>
          </div>
       </div>
  </div>
</template>

<script>
export default {
    name:'BaiKe',
    data(){
        return{
            messageList:[
                {
                    title:"我们为什么要发射自己的碳卫星",
                    imgUrl:"http://img1.gtimg.com/tech/pics/hv1/157/129/2168/141007252.jpg",
                    desc:"不久，继美、日之后，地球上空的碳卫星“家族”又会添加新成员...",
                    url:"https://space.qq.com/a/20161216/005151.htm"
                },
                {
                    title:"为什么有的卫星只有一个太阳翼",
                    imgUrl:"http://img1.gtimg.com/tech/pics/hv1/186/129/2168/141007281.jpg",
                    desc:"最近，中国最先进的静止轨道气象卫星“风云四号”升空，但这颗重约...",
                    url:"https://space.qq.com/a/20161216/004790.htm"
                },
                {
                    title:"“风云四号”的“小伙伴们”",
                    imgUrl:"http://img1.gtimg.com/tech/pics/hv1/120/2/2168/140974830.jpg",
                    desc:"12月11日，我国新一代地球静止轨道气象卫星“风云四号”01星成功发射...",
                    url:"https://space.qq.com/a/20161215/012951.htm"
                },
                {
                    title:"太空垃圾究竟能否被清除",
                    imgUrl:"http://img1.gtimg.com/tech/pics/hv1/112/169/2103/136790782.jpg",
                    desc:"国际空间站经常改变轨道高度来躲避太空垃圾，目前地球轨道上的...",
                    url:"https://space.qq.com/a/20160725/021930.htm"
                }

            ]
        }
    }
}
</script>

<style>
    .baike{
        background: #fff;
        height:490px;
        width: 400px;
        margin: 20px 0 20px 0;
    }
    .baike-title2{
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
        line-height: 22px;
        padding-left: 10px;
    }
    .baike-title_one{
        float: left;
        display: inline;
    }
    .baike-list{
        background: white;
        height: 300px;
        margin-top: 10px;
        padding: 0 20px 0 15px;
    }
    .baike-listitem{
        padding-top: 7px;
    }
    .baike-listitem h3{
        font-size: 16px;
        line-height: 30px;
        font-weight: normal;
    }
    .baike-box{
        height:75px;
    }
    .baike-img{
        float: left;
        margin: 5px 10px 0 0;
        width: 90px;
    }
    .baike-box p{
        color: #8c8c8c;
        line-height: 22px;   
    }
</style>