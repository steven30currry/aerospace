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
            <div class="ciyun1"></div>
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
      ]
    }
  },
  mounted(){
    this.ciyun()
  },
  methods:{
    ciyun(){
        console.log('yes')
        var echarts=this.$echarts
          var JosnList = [
            {name: "龙头镇", value: "111"},
            {name: "大埔镇", value: "222"},
            {name: "太平镇", value: "458"},
            {name: "沙埔镇", value: "445"},
            {name: "东泉镇", value: "456"},
            {name: "凤山镇", value: "647"},
            {name: "六塘镇", value: "189"},
            {name: "冲脉镇", value: "864"},
            {name: "寨隆镇", value: "652"},
        ];
        var optionFour = {
            tooltip: {
                show: true
            },
            series: [{
                name: '项目分析',
                type: 'wordCloud',
                sizeRange: [10, 50],//文字范围
                //文本旋转范围，文本将通过rotationStep45在[-90,90]范围内随机旋转
                rotationRange: [-45, 90],
                rotationStep: 45,
                textRotation: [0, 45, 90, -45],
                //形状
                shape: 'circle',
                textStyle: {
                    normal: {
                        color: function() {//文字颜色的随机色
                            return 'rgb(' + [
                                Math.round(Math.random() * 250),
                                Math.round(Math.random() * 250),
                                Math.round(Math.random() * 250)
                            ].join(',') + ')';
                        }
                    },
                    //悬停上去的字体的阴影设置
                    emphasis: {
                        shadowBlur: 10,
                        shadowColor: '#333'
                    }
                },
                data: JosnList
            }]
        };
        var myChartFour = echarts.init(document.querySelector('.ciyun1'));
        //使用制定的配置项和数据显示图表
        myChartFour.setOption(optionFour);
    }
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