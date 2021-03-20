<template>
  <div class="firstview">
   
    <div class="first-container">
        <div class="primary">
          <news style="width:600px" class="sec-news"></news>
        </div> 

        <div class="secondary">
          <carousel class="lunbo" style="width:400px"></carousel>
          <div class="ciyun">
            <div class="baike-title2">
                <h4 class="baike-title_one">热门词条</h4>
            </div>
            <div class="ciyun1" id="ciyun1"></div>
          </div> 
        </div>
    </div>

   
  </div>
</template>

<script>

import news from './firstchild/news'
import Carousel from 'components/carousel/Carousel'

export default {
  name:'FirstView',
  components:{
    news,
    Carousel
  },
  data(){
    return{
      dataList:[
          {
            "webHref": "https://www.sciencemag.org/news/2021/01/no-more-cuddly-selfies-our-ape-cousins-top-conservation-body-warns-scientists",
            "des": "No more cuddly selfies with our ape cousins, top conservation body warns scientists",
            "tags": ["航天","中国航天","卫星发射"],
            "time": "2020年10月21日",
            "imgSrc": "//www.sciencemag.org/sites/default/files/styles/grid_thumb_-_290x163__16_9_/public/chimps_1280p_0.jpg?itok=5V193VTf"
          },
          {
            "webHref": "https://www.sciencemag.org/news/2021/01/no-more-cuddly-selfies-our-ape-cousins-top-conservation-body-warns-scientists",
            "des": "No more cuddly selfies with our ape cousins, top conservation body warns scientists",
            "tags": ["航天","中国航天","卫星发射"],
            "time": "2020年10月21日",
            "imgSrc": "//www.sciencemag.org/sites/default/files/styles/grid_thumb_-_290x163__16_9_/public/chimps_1280p_0.jpg?itok=5V193VTf"
          },
          {
            "webHref": "https://www.sciencemag.org/news/2021/01/no-more-cuddly-selfies-our-ape-cousins-top-conservation-body-warns-scientists",
            "des": "No more cuddly selfies with our ape cousins, top conservation body warns scientists",
            "tags": ["航天","中国航天","卫星发射"],
            "time": "2020年10月21日",
            "imgSrc": "//www.sciencemag.org/sites/default/files/styles/grid_thumb_-_290x163__16_9_/public/chimps_1280p_0.jpg?itok=5V193VTf"
          },
          {
            "webHref": "https://www.sciencemag.org/news/2021/01/no-more-cuddly-selfies-our-ape-cousins-top-conservation-body-warns-scientists",
            "des": "No more cuddly selfies with our ape cousins, top conservation body warns scientists",
            "tags": ["航天","中国航天","卫星发射"],
            "time": "2020年10月21日",
            "imgSrc": "//www.sciencemag.org/sites/default/files/styles/grid_thumb_-_290x163__16_9_/public/chimps_1280p_0.jpg?itok=5V193VTf"
          },
          {
            "webHref": "https://www.sciencemag.org/news/2021/01/no-more-cuddly-selfies-our-ape-cousins-top-conservation-body-warns-scientists",
            "des": "No more cuddly selfies with our ape cousins, top conservation body warns scientists",
            "tags": ["航天","中国航天","卫星发射"],
            "time": "2020年10月21日",
            "imgSrc": "//www.sciencemag.org/sites/default/files/styles/grid_thumb_-_290x163__16_9_/public/chimps_1280p_0.jpg?itok=5V193VTf"
          },
                    {
            "webHref": "https://www.sciencemag.org/news/2021/01/no-more-cuddly-selfies-our-ape-cousins-top-conservation-body-warns-scientists",
            "des": "No more cuddly selfies with our ape cousins, top conservation body warns scientists",
            "tags": ["航天","中国航天","卫星发射"],
            "time": "2020年10月21日",
            "imgSrc": "//www.sciencemag.org/sites/default/files/styles/grid_thumb_-_290x163__16_9_/public/chimps_1280p_0.jpg?itok=5V193VTf"
          }
      ],
        msg: 'Welcome to Your Vue.js App',
          worddata: [
            {
              name: "十九大精神",
              value: 15000
            },
            {
              name: "两学一做",
              value: 10081
            },{
              name: "中华民族",
              value: 9386
            },
            {
              name: "马克思主义",
              value: 7500
            },
            {
              name: "民族复兴",
              value: 7500
            },
            {
              name: "社会主义制度",
              value: 6500
            },
            {
              name: "国防白皮书",
              value: 6500
            },
            {
              name: "创新",
              value: 6000
            },
            {
              name: "民主革命",
              value: 4500
            },
            {
              name: "文化强国",
              value: 3800
            },
            {
              name: "国家主权",
              value: 3000
            },
            {
              name: "伟大复兴",
              value: 2500
            },
            {
              name: "领土完整",
              value: 2300
            },
            {
              name: "安全",
              value: 2000
            },
            {
              name: "从严治党",
              value: 1900
            },
            {
              name: "现代化经济体系",
              value: 1800
            },
            {
              name: "国防动员",
              value: 1700
            },
            {
              name: "信息化战争",
              value: 1600
            },
            {
              name: "局部战争",
              value: 1500
            },
            {
              name: "教育",
              value: 1200
            },
            {
              name: "中国梦",
              value: 1100
            },
            {
              name: "孙子兵法",
              value: 900
            },
            {
              name: "一国两制",
              value: 800
            },
            {
              name: "特色社会主义思想",
              value: 700
            },
          ]

    }
  },
  mounted(){
    // this.ciyun()
  },
  methods:{
 


    
  }
}
</script>
<style scoped>
.firstview{
  /* margin: 0;
  background-position: top left;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  /* background-image: url('../../assets/img/background.jpg'); */
  /* background-color: #464646;
  display: block;
  height: 100%; */ 
}

.first-container{
  /* background: red; */
  padding: 30px 15px;
  display: flex;
  width: 100%;
  height: 100%;
  /* flex-flow: row wrap;
  align-items: flex-start;
  margin-top: 50px;
  margin-left: 35px; */
  /* background: #ebebeb; */
}
.first-container .primary{
  margin-top: 50px;
  margin-left: 150px;
  width: 670px;
  /* height: 800px; */
  /* background: yellow; */
  display: flex;
  flex-direction: column;
  padding-right: 20px;
  margin-right: 20px;
  border-right: 1px solid #ebebeb;
}

.secondary{
  margin-left: 45px;
  margin-top: 30px;
  width: 400px;
  height: 500px;
}

.lunbo{
  padding-bottom: 40px;
    border-bottom: 1px solid #ebebeb;

}
.ciyun{
    margin-top: 45px;
    width: 400px;
    height: 400px;
}
.ciyun1{
  height: 100%;
  background: pink;
}

</style>