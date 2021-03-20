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
            <div class="ciyun1" id="word_cloud_view_id"></div>
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
          ],
       word_cloud_view: null,
      word_cloud_options: {},
      word_list: [{"name": "需求", "value": 10927}, {"name": "修改", "value": 5902}]

      }
  },
  mounted(){
    this.ciyun()
  },
 
  methods: {
    ciyun(){

      var myChart=this.$echarts.init(document.querySelector('.ciyun1'))
var option = {
    title: {
        text: '热点分析',
        link: 'https://www.baidu.com/s?wd=' + encodeURIComponent('ECharts'),
        x: 'center',
        textStyle: {
            fontSize: 23
        }

    },
    backgroundColor: '#F7F7F7',
    tooltip: {
        show: true
    },
    toolbox: {
        feature: {
            saveAsImage: {
                iconStyle: {
                    normal: {
                        color: '#FFFFFF'
                    }
                }
            }
        }
    },
    series: [{
        name: '热点分析',
        type: 'wordCloud',
        //size: ['9%', '99%'],
        sizeRange: [6, 66],
        //textRotation: [0, 45, 90, -45],
        rotationRange: [-45, 90],
        //shape: 'circle',
        textPadding: 0,
        autoSize: {
            enable: true,
            minSize: 6
        },
        textStyle: {
            normal: {
                color: function() {
                    return 'rgb(' + [
                        Math.round(Math.random() * 160),
                        Math.round(Math.random() * 160),
                        Math.round(Math.random() * 160)
                    ].join(',') + ')';
                }
            },
            emphasis: {
                shadowBlur: 10,
                shadowColor: '#333'
            }
        },
        data: [{
            name: "Jayfee",
            value: 666
        }, {
            name: "Nancy",
            value: 520
        }]
    }]
};

var JosnList = [];

JosnList.push({
    name: "Jayfee",
    value: 666
}, {
    name: "Nancy",
    value: 520
}, {
    name: "生活资源",
    value: "999"
}, {
    name: "供热管理",
    value: "888"
}, {
    name: "供气质量",
    value: "777"
}, {
    name: "生活用水管理",
    value: "688"
}, {
    name: "一次供水问题",
    value: "588"
}, {
    name: "交通运输",
    value: "516"
}, {
    name: "城市交通",
    value: "515"
}, {
    name: "环境保护",
    value: "483"
}, {
    name: "房地产管理",
    value: "462"
}, {
    name: "城乡建设",
    value: "449"
}, {
    name: "社会保障与福利",
    value: "429"
}, {
    name: "社会保障",
    value: "407"
}, {
    name: "文体与教育管理",
    value: "406"
}, {
    name: "公共安全",
    value: "406"
}, {
    name: "公交运输管理",
    value: "386"
}, {
    name: "出租车运营管理",
    value: "385"
}, {
    name: "供热管理",
    value: "375"
}, {
    name: "市容环卫",
    value: "355"
}, {
    name: "自然资源管理",
    value: "355"
}, {
    name: "粉尘污染",
    value: "335"
}, {
    name: "噪声污染",
    value: "324"
}, {
    name: "土地资源管理",
    value: "304"
}, {
    name: "物业服务与管理",
    value: "304"
}, {
    name: "医疗卫生",
    value: "284"
}, {
    name: "粉煤灰污染",
    value: "284"
}, {
    name: "占道",
    value: "284"
}, {
    name: "供热发展",
    value: "254"
}, {
    name: "农村土地规划管理",
    value: "254"
}, {
    name: "生活噪音",
    value: "253"
}, {
    name: "供热单位影响",
    value: "253"
}, {
    name: "城市供电",
    value: "223"
}, {
    name: "房屋质量与安全",
    value: "223"
}, {
    name: "大气污染",
    value: "223"
}, {
    name: "房屋安全",
    value: "223"
}, {
    name: "文化活动",
    value: "223"
}, {
    name: "拆迁管理",
    value: "223"
}, {
    name: "公共设施",
    value: "223"
}, {
    name: "供气质量",
    value: "223"
}, {
    name: "供电管理",
    value: "223"
}, {
    name: "燃气管理",
    value: "152"
}, {
    name: "教育管理",
    value: "152"
}, {
    name: "医疗纠纷",
    value: "152"
}, {
    name: "执法监督",
    value: "152"
}, {
    name: "设备安全",
    value: "152"
}, {
    name: "政务建设",
    value: "152"
}, {
    name: "县区、开发区",
    value: "152"
}, {
    name: "宏观经济",
    value: "152"
}, {
    name: "教育管理",
    value: "112"
}, {
    name: "社会保障",
    value: "112"
}, {
    name: "生活用水管理",
    value: "112"
}, {
    name: "物业服务与管理",
    value: "112"
}, {
    name: "分类列表",
    value: "112"
}, {
    name: "农业生产",
    value: "112"
}, {
    name: "二次供水问题",
    value: "112"
}, {
    name: "城市公共设施",
    value: "92"
}, {
    name: "拆迁政策咨询",
    value: "92"
}, {
    name: "物业服务",
    value: "92"
}, {
    name: "物业管理",
    value: "92"
}, {
    name: "社会保障保险管理",
    value: "92"
}, {
    name: "低保管理",
    value: "92"
}, {
    name: "文娱市场管理",
    value: "72"
}, {
    name: "城市交通秩序管理",
    value: "72"
}, {
    name: "执法争议",
    value: "72"
}, {
    name: "商业烟尘污染",
    value: "72"
}, {
    name: "占道堆放",
    value: "71"
}, {
    name: "地上设施",
    value: "71"
}, {
    name: "水质",
    value: "71"
}, {
    name: "无水",
    value: "71"
}, {
    name: "供热单位影响",
    value: "71"
}, {
    name: "人行道管理",
    value: "71"
}, {
    name: "主网原因",
    value: "71"
}, {
    name: "集中供热",
    value: "71"
}, {
    name: "客运管理",
    value: "71"
}, {
    name: "国有公交（大巴）管理",
    value: "71"
}, {
    name: "工业粉尘污染",
    value: "71"
}, {
    name: "治安案件",
    value: "71"
}, {
    name: "压力容器安全",
    value: "71"
}, {
    name: "身份证管理",
    value: "71"
}, {
    name: "群众健身",
    value: "41"
}, {
    name: "工业排放污染",
    value: "41"
}, {
    name: "破坏森林资源",
    value: "41"
}, {
    name: "市场收费",
    value: "41"
}, {
    name: "生产资金",
    value: "41"
}, {
    name: "生产噪声",
    value: "41"
}, {
    name: "农村低保",
    value: "41"
}, {
    name: "劳动争议",
    value: "41"
}, {
    name: "劳动合同争议",
    value: "41"
}, {
    name: "劳动报酬与福利",
    value: "41"
}, {
    name: "医疗事故",
    value: "21"
}, {
    name: "停供",
    value: "21"
}, {
    name: "基础教育",
    value: "21"
}, {
    name: "职业教育",
    value: "21"
}, {
    name: "物业资质管理",
    value: "21"
}, {
    name: "拆迁补偿",
    value: "21"
}, {
    name: "设施维护",
    value: "21"
}, {
    name: "市场外溢",
    value: "11"
}, {
    name: "占道经营",
    value: "11"
}, {
    name: "树木管理",
    value: "11"
}, {
    name: "农村基础设施",
    value: "11"
}, {
    name: "无水",
    value: "11"
}, {
    name: "供气质量",
    value: "11"
}, {
    name: "停气",
    value: "11"
}, {
    name: "市政府工作部门（含部门管理机构、直属单位）",
    value: "11"
}, {
    name: "燃气管理",
    value: "11"
}, {
    name: "市容环卫",
    value: "11"
}, {
    name: "新闻传媒",
    value: "11"
}, {
    name: "人才招聘",
    value: "11"
}, {
    name: "市场环境",
    value: "11"
}, {
    name: "行政事业收费",
    value: "11"
}, {
    name: "食品安全与卫生",
    value: "11"
}, {
    name: "城市交通",
    value: "11"
}, {
    name: "房地产开发",
    value: "11"
}, {
    name: "房屋配套问题",
    value: "11"
}, {
    name: "物业服务",
    value: "11"
}, {
    name: "物业管理",
    value: "11"
}, {
    name: "占道",
    value: "11"
}, {
    name: "园林绿化",
    value: "11"
}, {
    name: "户籍管理及身份证",
    value: "11"
}, {
    name: "公交运输管理",
    value: "11"
}, {
    name: "公路（水路）交通",
    value: "11"
}, {
    name: "房屋与图纸不符",
    value: "11"
}, {
    name: "有线电视",
    value: "11"
}, {
    name: "社会治安",
    value: "11"
}, {
    name: "林业资源",
    value: "11"
}, {
    name: "其他行政事业收费",
    value: "11"
}, {
    name: "经营性收费",
    value: "11"
}, {
    name: "食品安全与卫生",
    value: "11"
}, {
    name: "体育活动",
    value: "11"
}, {
    name: "有线电视安装及调试维护",
    value: "11"
}, {
    name: "低保管理",
    value: "11"
}, {
    name: "劳动争议",
    value: "11"
}, {
    name: "社会福利及事务",
    value: "11"
}, {
    name: "一次供水问题",
    value: "11"
});

option.series[0].data = JosnList;


 myChart.on('click', function (params) {
                //alert((params.name));
                window.open('https://www.baidu.com/s?wd=' + encodeURIComponent(params.name));

            });

 myChart.setOption(option);




    }
 
  },
}
</script>
<style scoped>
.firstview{
  
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