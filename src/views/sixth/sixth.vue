<template>
  <div class="sixth">
      <header>
      <h1>航天数据可视化</h1>
      
    </header>
    <section class="mainbox">
      <div class="column">
        <div style="height:4rem" class="panel chart1">
          <h2>
            各发射场发射次数（至今） 
            <!-- <a href="javascript:;">2019</a>
            <a href="javacript:;"> 2020</a> -->
          </h2>
          <div style="height:3.3rem" class="chart" ref="chart1"></div>
          <div class="panel-footer"></div>
        </div>
        <div style="height:3.7rem" class="panel chart2">
          <h2>中国发射的成功/失败</h2>
          <div style="width:5.5rem" class="chart"></div>
          <div class="panel-footer"></div>
        </div>
        <div  style="height:9rem" class="panel chart3">
          <h2>绕行轨道统计</h2>
          <div style="height:8rem" class="chart"></div>
          <div class="panel-footer"></div>
        </div>
      </div>
      <div class="column">
        <!-- <div class="panel " style="height:1.8rem">
          <h1>航天数据可视化</h1>
          <div class="panel-footer"></div>
        </div> -->
          <!-- <div class="no">
          <div class="no-hd">
            <ul>
              <li>9</li>
              <li>528</li>
            </ul>
          </div>
          <div class="no-bd">
            <ul>
              <li>能够发射的火箭的国家</li>
              <li>进入太空的宇航员</li>
            </ul>
          </div>
        </div>   -->
        <div style="height:5rem" class="panel chart5" >
          <h2>2021中国运载火箭</h2>
          <div style="height:5rem" class="chart" ></div>
          <div class="panel-footer"></div>
        </div>
        <div class="panel " style="height:10rem">
          <h2>饼形图-地区分布</h2>
          <div class="chart" ref="bigchart" style="height:9rem"></div>
          <div class="panel-footer"></div>
        </div>
        <!-- <div class="map">
          
          
          <div class="chart" ref="bigchart"></div>
     
        </div> -->
      </div>
      <div class="column">
        
        <!-- <div class="panel line1">
          <h2>折线图-播放量</h2>
          <div class="chart"></div>
          <div class="panel-footer"></div>
        </div> -->
        <div class="panel chart6" style="height:7.9375rem">
          <h2>各国预算排行</h2>
          <div class="chart" style="height:7rem"></div>
          <div class="panel-footer"></div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import flexible from 'assets/js/flexible.js'
import {getSixResponse1, getSixResponse4} from "../../network/sixth";
import {getSixResponse2} from "../../network/sixth";
import {getSixResponse3} from "../../network/sixth";
import {getSixResponse5} from "../../network/sixth";
import {getSixResponse6} from "../../network/sixth";


export default {
    name:'Sixth' ,
    data(){
        return{
            chart1:[
                 {
                  'value':3,
                  'name':'太原'
                },
                 {
                  'value':3,
                  'name':'文昌'
                },
                 {
                  'value':3,
                  'name':'酒泉'
                },
                 {
                  'value':3,
                  'name':'西昌'
                },
                 {
                  'value':3,
                  'name':'黄海'
                },
            ],
            
            chart2:{
                "date":[2016,2017,2018,2019],
                'other':[1,3,4,1],
                'success':[3,1,5,1],
                'failure':[4,0,1,3]
            },
            chart3:{
                "name":['太原','文昌','酒泉','西昌','黄海','太原','文昌','酒泉','西昌','黄海'],
                "value":[85,8,128,148,1,85,8,128,148,1]
            },
            chart4:{},
            chart5:{
              data1:[{
                'value':1,
                'name':'One'
              },{
                'value':2,
                'name':'Two'
              },{
                'value':3,
                'name':'Three'
              },{
                'value':1,
                'name':'One'
              },{
                'value':2,
                'name':'Two'
              },{
                'value':3,
                'name':'Three'
              },{
                'value':1,
                'name':'One'
              },{
                'value':2,
                'name':'Two'
              },{
                'value':3,
                'name':'Three'
              },{
                'value':1,
                'name':'One'
              },{
                'value':2,
                'name':'Two'
              },{
                'value':3,
                'name':'Three'
              },
              ],
              data2:['One','Two','Three']
            },
            chart6:{
              'A':[17.3,17.79,18.71,18.41,17.73,16.91,17.67,28.09,19.31,19.57,20.78],
                 'B':[3,3.91,4.16,4.72,4.74,4.76,7.6,5.24,5.87,6.39,6.24,6.37],
                    'C':[2.85,2.43,2.13,3.85,4.68,5.54,4.34,3.26,3.21,3.7,4.17,4.17],
                       'D':[1.71,1.75,2.45,2.34,2.18,2.02,1.79,2.43,2.95,2.76,3.06,3.06],
                          'E':[1.3,1.36,2.25,4.73,5.93,2.69,3.34,,4.94,5.39,6.11,11],
            }
        }
    },
    mounted(){
      flexible()
      this.network1()
      // this.network2()
      // this.network3()//有问题
      // this.network4()
      this.network5()
      // this.netwrok6()
    },
    methods:{
      network1(){
        getSixResponse1().then(res => {
             var arr=res.data.data
            console.log(arr)
          // this.chart1chart3=arr
          for(var i=0;i<arr.length;i++){
            // this.chart1[i].name=arr[i].locationName
            this.chart1[i].value=arr[i].shotCount
          }
          console.log(this.chart1)
          this.getEchart1()
        })
      },
      
      network2(){
        getSixResponse2().then(res =>{
          var arr=res.data.data
          arr.sort(function(a,b){return a.year-b.year})
          console.log(arr)
          if(arr.length==15){
            for(var i=0;i<arr.length;i++){
            this.chart2.date[i]=arr[i].year
            this.chart2.success[i]=arr[i].success
            this.chart2.failure[i]=arr[i].failure
            this.chart2.other[i]=arr[i].other
          }
          this.getEchart2()
          }
        })
      },
      network3(){
        getSixResponse3().then(res => {
       

      
        
          this.getEchart3()
        })
      },
      network4(){
        getSixResponse4().then(res =>{
          var arr=res.data.data
          console.log(arr)
          this.getEchart4()
        })
      },
      network5(){
        getSixResponse5().then(res => {
          var arr=res.data.data
          for(var i=0;i<arr.length;i++){
            this.chart5.data1[i].value=arr[i].allCount
            this.chart5.data1[i].name=arr[i].rocketName
            this.chart5.data2[i]=arr[i].rocketName
          }
          this.getEchart5()
        })
      },
      netwrok6(){
        getSixResponse6().then(res =>{
          var arr=res.data.data
          console.log(arr)
          // this.chart6.A=parseInt(arr[0].gpa)
          // this.chart6.B=parseInt(arr[1].gpa)
          // this.chart6.C=parseInt(arr[2].gpa)
          // this.chart6.D=parseInt(arr[3].gpa)
          // this.chart6.E=parseInt(arr[4].gpa)
          console.log(this.chart6)
          this.getEchart6()
        })
      },
      getEchart1(){

        var chart1 =this.$refs.chart1
        var myChart=this.$echarts.init(chart1)
// 绘制图表
        var data = [];
  

  var res=this.chart1
    var option = {
    legend: {
      top: "90%",
      itemWidth: 10,
      itemHeight: 10,
      textStyle: {
        color: "rgba(255,255,255,.5)",
        fontSize: "12"
      }
    },
    tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    // 注意颜色写的位置
    color: [
      // "#006cff",
      // "#60cda0",
      "#ed8884",
      "yellow",
      "#0096ff",
      "#9fe6b8",
      "#32c5e9",
      "#1d9dff"
    ],
    series: [
      {
        name: "点位统计",
        type: "pie",
        // 如果radius是百分比则必须加引号
        radius: ["10%", "70%"],
        center: ["50%", "42%"],
        roseType: "radius",
        data: res
        ,
        // 修饰饼形图文字相关的样式 label对象
        label: {
          fontSize: 10
        },
        // 修饰引导线样式
        labelLine: {
          // 连接到图形的线长度
          length: 10,
          // 连接到文字的线长度
          length2: 10
        }
      }
    ]
  };

  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
  window.addEventListener("resize", function() {
    myChart.resize();
  });
    
        
      },
     
      getEchart2(){
         var echarts=this.$echarts
        var myChart = echarts.init(document.querySelector(".chart2  .chart"));
    
    var res=this.chart2
    
    var  option = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        lineStyle: {
          color: "#dddc6b"
        }
      }
    },
    legend: {
      top: "0%",
      textStyle: {
        color: "rgba(255,255,255,.5)",
        fontSize: "12"
      }
    },
    grid: {
      left: "20",
      top: "30",
      right: "10",
      bottom: "10",
      containLabel: true
    },

    xAxis: [
      {
        type: "category",
        boundaryGap: false,
        axisLabel: {
          showMaxLabel:false,
          textStyle: {
            color: "rgba(255,255,255,.6)",
            fontSize: 12
          }
        },
        axisLine: {
          lineStyle: {
            color: "rgba(255,255,255,.2)"
          }
        },

        data: res.date
         
      },
      {
        axisPointer: { show: false },
        axisLine: { show: false },
        position: "bottom",
        offset: 20
      }
    ],

    yAxis: [
      {
        type: "value",
        axisTick: { show: false },
        axisLine: {
          lineStyle: {
            color: "rgba(255,255,255,.1)"
          }
        },
        axisLabel: {
          textStyle: {
            color: "rgba(255,255,255,.6)",
            fontSize: 12
          }
        },

        splitLine: {
          lineStyle: {
            color: "rgba(255,255,255,.1)"
          }
        }
      }
    ],
    series: [
      {
        name: '其他',
        type: "line",
        smooth: true,
        symbol: "circle",
        symbolSize: 5,
        showSymbol: false,
        lineStyle: {
          normal: {
            color: "#0184d5",
            width: 2
          }
        },
        areaStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(
              0,
              0,
              0,
              1,
              [
                {
                  offset: 0,
                  color: "rgba(1, 132, 213, 0.4)"
                },
                {
                  offset: 0.8,
                  color: "rgba(1, 132, 213, 0.1)"
                }
              ],
              false
            ),
            shadowColor: "rgba(0, 0, 0, 0.1)"
          }
        },
        itemStyle: {
          normal: {
            color: "#0184d5",
            borderColor: "rgba(221, 220, 107, .1)",
            borderWidth: 12
          }
        },
        data: res.other
      },
      {
        name: "成功",
        type: "line",
        smooth: true,
        symbol: "circle",
        symbolSize: 5,
        showSymbol: false,
        lineStyle: {
          normal: {
            color: "#00d887",
            width: 2
          }
        },
        areaStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(
              0,
              0,
              0,
              1,
              [
                {
                  offset: 0,
                  color: "rgba(0, 216, 135, 0.4)"
                },
                {
                  offset: 0.8,
                  color: "rgba(0, 216, 135, 0.1)"
                }
              ],
              false
            ),
            shadowColor: "rgba(0, 0, 0, 0.1)"
          }
        },
        itemStyle: {
          normal: {
            color: "#00d887",
            borderColor: "rgba(221, 220, 107, .1)",
            borderWidth: 12
          }
        },
        data: res.success
      },
      {
        name: "失败",
        type: "line",
        smooth: true,
        symbol: "circle",
        symbolSize: 5,
        showSymbol: false,
        lineStyle: {
          normal: {
            color: "#ff7500",
            width: 2
          }
        },
        areaStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(
              0,
              0,
              0,
              1,
              [
                {
                  offset: 0,
                  color: " rgba(219, 139, 11, 0.404)"
                },
                {
                  offset: 0.8,
                  color: " rgba(219, 139, 11, 0.1)"
                }
              ],
              false
            ),
            shadowColor: "rgba(0, 0, 0, 0.1)"
          }
        },
        itemStyle: {
          normal: {
            color: "#ff7500",
            borderColor: "rgba(221, 220, 107, .1)",
            borderWidth: 12
          }
        },
        data: res.failure
      }
    ]
  };

  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
  window.addEventListener("resize", function() {
    myChart.resize();
  });
      //结束
      },
      getEchart3(){
        var echarts=this.$echarts
        var myChart = echarts.init(document.querySelector(".chart3 .chart"));
  
    
  
  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
  window.addEventListener("resize", function() {
    myChart.resize();
  });
      },
      getEchart4(){
        var echarts=this.$echarts
        // // var myChart = echarts.init(document.querySelector(".chart4  .chart"));
        // var myChart

        var bigchart=this.$refs.bigchart
        if(bigchart){
          console.log(bigchart)
          var myChart=echarts.init(bigchart)
    
var countries = ['中国','欧洲','以色列','日本','俄罗斯','美国','印度',];

var years = ['2012', '2016', '2020'];

var data = [
    [
        [57,2,1],
        [10,0,1],
        [1,0,1],
        [25,2,1],
        [10,0,1],
        [25,2,1],
        [12,1,1],
        [8,2,1],


    ],
    [
        [69,3,1],
        [40,1,1],
        [2,0,1],
        [15,0,1],
        [103,7,1],
        [81,3,1],
        [20,0,1],
  
    ],
    [
       [104,8,1],
        [31,2,1],
        [1,0,1],
        [17,1,1],
        [65,2,1],
        [97,1,1],
        [17,1,1],
    
   
    ],
 
];

var coords = [
   
    [104.195397, 35.86166, 0, '中国'],
    [10.451526, 51.165691, 0, '欧洲'],
    [34.851612, 31.046051, 0, '以色列'],
    [138.252924, 36.204824, 0, '日本'],
    [105.318756, 61.52401, 0, '俄罗斯'],
    [-95.712891, 37.09024, 0, '美国'],
    [77.243322, 23.963745, 0, '印度'],

];
// 如果看不懂这段代码，那么就不用这段代码，
// 自己估计一个最大值也可以。
function getMax(dim) {
    var max = 0;
    data.forEach(function (dataByYear) {
        dataByYear.forEach(function (item) {
            if (item[dim] > max) {
                max = item[dim];
            }
        });
    });
    var exp = Math.round(Math.log(max) / Math.log(10));
    var exp10 = Math.pow(10, exp);
    max = Math.ceil(max / exp10 * 10) / 10 * exp10;

    return max;
}


var itemStyle = {
    normal: {
        opacity: 0.8,
        shadowBlur: 10,
        shadowOffsetX: 0,
        shadowOffsetY: 0,
        shadowColor: 'rgba(0, 0, 0, 0.5)'
    }
};

// Schema:
var schema = [{
    name: 'Income',
    index: 0,
    text: '人均收入',
    unit: '美元'
}, {
    name: 'LifeExpectancy',
    index: 1,
    text: '人均寿命',
    unit: '%'
}, {
    name: 'Population',
    index: 2,
    text: '总人口',
    unit: ''
}, {
    name: 'Country',
    index: 3,
    text: '国家',
    unit: ''
}];

var option = {
    baseOption: {
        timeline: {
            axisType: 'category',
            orient: 'vertical',
            autoPlay: true,
            inverse: true,
            playInterval: 3000,
            left: null,
            right: 10,
            top: 20,
            bottom: 20,
            width: 55,
            height: null,
            label: {
                normal: {
                    textStyle: {
                        color: '#ddd'
                    }
                },
                emphasis: {
                    textStyle: {
                        color: '#fff'
                    }
                }
            },
            symbol: 'none',
            lineStyle: {
                color: '#555'
            },
            checkpointStyle: {
                color: '#bbb',
                borderColor: '#777',
                borderWidth: 2
            },
            controlStyle: {
                showNextBtn: false,
                showPrevBtn: false,
                normal: {
                    color: '#666',
                    borderColor: '#666'
                },
                emphasis: {
                    color: '#aaa',
                    borderColor: '#aaa'
                }
            },
            data: years
        },
        // backgroundColor: '#333',
        title: {
            text: '',
            textAlign: 'center',
            right: 30,
            bottom: 60,
            textStyle: {
                fontSize: 30,
                color: 'rgba(255, 255, 255, 0.9)'
            }
        },
        tooltip: {
            padding: 5,
            backgroundColor: '#222',
            borderColor: '#777',
            borderWidth: 1
        },
        xAxis: {
            // type: 'log',
            type: 'value',
            name: '成功次数',
            nameGap: 25,
            min: 0,
            max: getMax(0),
            nameLocation: 'middle',
            nameTextStyle: {
                fontSize: 14
            },
            splitLine: {
                show: false
            },
            axisTick: {
                lineStyle: {
                    color: '#ddd'
                }
            },
            axisLine: {
                lineStyle: {
                    color: '#ddd'
                }
            },
            axisLabel: {
                textStyle: {
                    color: '#ddd'
                }
            }
        },
        yAxis: {
            type: 'value',
            name: '失败次数',
            nameGap: 25,
            min: 0,
            max: getMax(1),
            nameTextStyle: {
                color: '#ccc',
                fontSize: 14
            },
            axisLine: {
                lineStyle: {
                    color: '#ddd'
                }
            },
            axisTick: {
                lineStyle: {
                    color: '#ddd'
                }
            },
            splitLine: {
                show: false
            },
            axisLabel: {
                formatter: '{value} %',
                textStyle: {
                    color: '#ddd'
                }
            }
        },
        grid: {
            top: '40%',
            left: 40,
            right: 130
        },
        geo: {
            top: 20,
            left: 170,
            right: 120,
            height: '38%',
            name: 'World Population (2010)',
            type: 'map',
            map: 'world',
            roam: false,
            label: {
                emphasis: {
                    show: false
                }
            },
            itemStyle: {
                normal: {
                    borderColor: 'rgba(43, 196, 243, 1)',
                    areaColor: 'rgba(43, 196, 243, 0.42)'
                },
                emphasis: {
                    areaColor: '#2B91B7'
                }
            }
        },
        toolbox: {
            top: -50,
            left: 10,
            itemSize: 15,
            iconStyle: {
                normal: {
                    borderColor: 'B'
                },
                emphasis: {
                    borderColor: '#fffb60'
                }
            }
        },
        brush: {
            toolbox: ['polygon', 'keep', 'clear'],
            brushLink: 'all',
            outOfBrush: {
                opacity: .1,
                color: '#aaa'
            }
        },
        visualMap: [{
            type: 'piecewise',
            dimension: 3,
            categories: countries,
            left: 10,
            top: 30,
            calculable: true,
            precision: 0.1,
            textGap: 10,
            itemGap: 3,
          	itemHeight: 10,
            textStyle: {
                color: '#ccc'
            },
            inRange: {
                color: ['#bcd3bb', '#e88f70', '#9dc5c8', '#e1e8c8', '#7b7c68', '#e5b5b5', '#f0b489', '#928ea8', '#bda29a', '#376956', '#c3bed4', '#495a80', '#9966cc', '#bdb76a', '#eee8ab', '#a35015', '#04dd98', '#d9b3e6', '#b6c3fc','#315dbc','#c5c975','#476a54','#66e638','#a59619','#822ee2','#49450d','#eeebd4','#2b98dc','#b95c25', '#8f1ec2', '#d50390', '#36a15d', '#edc1a5']
            },
            outOfRange: {
                color: '#555'
            }
        }, {
            show: false,
            type: 'continuous',
            dimension: 2,
            min: 0,
            max: 5,
            inRange: {
                symbolSize: [10, 50]
            }
        }],
        series: [{
            type: 'scatter',
            id: 'gridScatter',
            itemStyle: itemStyle,
            data: [],
            tooltip: {
                formatter: function(obj) {
                    var value = obj.value;
                    return '<div style="border-bottom: 1px solid #555;padding-bottom: 5px; margin-bottom: 5px;">' + value[3] + '</div>'
                        + '成功次数' + value[0] + '<br>'
                        + '失败次数' + value[1] + '<br>'
                       ;
                }
            }
        }, {
            type: 'scatter',
            id: 'geoScatter',
            coordinateSystem: 'geo',
            itemStyle: {
                normal: {
                    opacity: 1,
                    shadowBlur: 5,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                },
            },
            data: coords,
            symbolSize: 15,
            tooltip: {
                formatter: function(obj) {
                    var value = obj.value;
                    return schema[3].text + '：' + value[3];
                }
            }
        }],
        animationDurationUpdate: 1000,
        animationEasingUpdate: 'quinticInOut'
    },
    options: []
};

for (var n = 0; n < years.length; n++) {
    option.options.push({
        title: {
            text: years[n]
        },
        series: {
            id: 'gridScatter',
            type: 'scatter',
            itemStyle: itemStyle,
            data: data[n].map(function (item, index) {
                return item.concat([countries[index]]);
            }),
            symbolSize: 10
        }
    });
}



//以上
            myChart.setOption(option);
            // 4. 当我们浏览器缩放的时候，图表也等比例缩放
            window.addEventListener("resize", function() {
                // 让我们的图表调用 resize这个方法
                myChart.resize();


  });




        }

  

        //end
      },  
      getEchart5(){
           var echarts=this.$echarts
        var myChart = echarts.init(document.querySelector(".chart5  .chart"));
      var res= this.chart5.data1

var colorList = ['#73DDFF', '#73ACFF', '#FDD56A', '#FDB36A', '#FD866A', '#9E87FF', '#58D5FF', '#58D5FF'
, '#58D5FF', '#58D5FF']
var arr=[
                {value: 123, name: '丙烯腈'},
                {value: 102, name: '环氧乙烷'},
                {value: 122, name: '非甲烷总烃'},
                {value: 137, name: '氯乙烯'},
                {value: 109, name: '氯乙烷'},
                {value: 111, name: '甲苯'}

                ]

var option = {
    color:colorList,
    title: {
        // text: 'PM2.5含量',
        // subtext:'50%',
        x: 'center',
        y: 'center',
        textStyle: {
            color:"#fff",
            fontSize: 15
        },
    },
    tooltip: {
        trigger: 'item'
    },
    series: [{
        type: 'pie',
        center: ['50%', '50%'],
        radius: ['30%', '40%'],
        clockwise: true,
        avoidLabelOverlap: true,
        hoverOffset: 15,
        itemStyle: {
            normal: {
                color: function(params) {
                    return colorList[params.dataIndex]
                }
            }
        },
        label: {
            show: true,
            position: 'outside',
            formatter: '{a|{b}：{d}%}\n{hr|}',
            rich: {
                hr: {
                    backgroundColor: 't',
                    borderRadius: 3,
                    width: 3,
                    height: 3,
                    padding: [3, 3, 0, -12]
                },
                a: {
                    padding: [-30, 15, -20, 15]
                }
            }
        },
        labelLine: {
            normal: {
                length: 20,
                length2: 30,
                lineStyle: {
                    width: 1
                }
            }
        },
        data: res,
    }]
};
myChart.setOption(option);
  // 4. 当我们浏览器缩放的时候，图表也等比例缩放
  window.addEventListener("resize", function() {
    // 让我们的图表调用 resize这个方法
    myChart.resize();
  }); 


      },
      getEchart6(){
        var echarts=this.$echarts
        var myChart = echarts.init(document.querySelector(".chart6  .chart"));
  // 2. 指定配置项和数据
    var res=this.chart6;

 var option = {
    //  backgroundColor: '#323a5e',
     tooltip: {
         trigger: 'axis',
         axisPointer: { // 坐标轴指示器，坐标轴触发有效
             type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
         }
     },
     grid: {
         left: '2%',
         right: '4%',
         bottom: '14%',
         top: '16%',
         containLabel: true
     },
     legend: {
         data: ['美国', '欧洲', '俄罗斯','日本','中国'],
         right: 10,
         top: 12,
         textStyle: {
             color: "#fff"
         },
         itemWidth: 12,
         itemHeight: 10,
         // itemGap: 35
     },
     xAxis: {
         type: 'category',
         data: ['2008','2009','2010','2011','2012','2013','2014','2015', '2016', '2017', '2018', '2019'],
         axisLine: {
             lineStyle: {
                 color: 'white'

             }
         },
         axisLabel: {
             // interval: 0,
             // rotate: 40,
             textStyle: {
                 fontFamily: 'Microsoft YaHei'
             }
         },
     },

     yAxis: {
         type: 'value',
         max: '30',
         axisLine: {
             show: false,
             lineStyle: {
                 color: 'white'
             }
         },
         splitLine: {
             show: true,
             lineStyle: {
                 color: 'rgba(255,255,255,0.3)'
             }
         },
         axisLabel: {}
     },
     "dataZoom": [{
         "show": true,
         "height": 12,
         "xAxisIndex": [
             0
         ],
         bottom: '8%',
         "start": 10,
         "end": 90,
         handleIcon: 'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',
         handleSize: '110%',
         handleStyle: {
             color: "#d3dee5",

         },
         textStyle: {
             color: "#fff"
         },
         borderColor: "#90979c"
     }, {
         "type": "inside",
         "show": true,
         "height": 15,
         "start": 1,
         "end": 35
     }],
     series: [{
             name: '美国',
             type: 'bar',
             barWidth: '15%',
             itemStyle: {
                 normal: {
                     color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                         offset: 0,
                         color: '#fccb05'
                     }, {
                         offset: 1,
                         color: '#f5804d'
                     }]),
                     barBorderRadius: 12,
                 },
             },
             data: res.A
         },
         {
             name: '欧洲',
             type: 'bar',
             barWidth: '15%',
             itemStyle: {
                 normal: {
                     color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                         offset: 0,
                         color: '#8bd46e'
                     }, {
                         offset: 1,
                         color: '#09bcb7'
                     }]),
                     barBorderRadius: 11,
                 }

             },
             data: res.B
         },
         {
             name: '俄罗斯',
             type: 'bar',
             barWidth: '15%',
             itemStyle: {
                 normal: {
                     color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                         offset: 0,
                         color: '#248ff7'
                     }, {
                         offset: 1,
                         color: '#6851f1'
                     }]),
                     barBorderRadius: 11,
                 }
             },
             data: res.C
         },
         {
             name: '日本',
             type: 'bar',
             barWidth: '15%',
             itemStyle: {
                 normal: {
                     color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                         offset: 0,
                         color: '#f01bc2'
                     }, {
                         offset: 1,
                         color: '#f563d5'
                     }]),
                     barBorderRadius: 12,
                 },
             },
             data: res.D
         },{
             name: '中国',
             type: 'bar',
             barWidth: '15%',
             itemStyle: {
                 normal: {
                     color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                         offset: 0,
                         color: '#f56363'
                     }, {
                         offset: 1,
                         color: ' #ff0000'
                     }]),
                     barBorderRadius: 12,
                 },
             },
             data: res.E
         },
     ]
 };
 var app = {
     currentIndex: -1,
 };
 setInterval(function() {
     var dataLen = option.series[0].data.length;

     // 取消之前高亮的图形
     myChart.dispatchAction({
         type: 'downplay',
         seriesIndex: 0,
         dataIndex: app.currentIndex
     });
     app.currentIndex = (app.currentIndex + 1) % dataLen;
     //console.log(app.currentIndex);
     // 高亮当前图形
     myChart.dispatchAction({
         type: 'highlight',
         seriesIndex: 0,
         dataIndex: app.currentIndex,
     });
     // 显示 tooltip
     myChart.dispatchAction({
         type: 'showTip',
         seriesIndex: 0,
         dataIndex: app.currentIndex
     });


 }, 1000);

  // 3. 配置项和数据给我们的实例化对象
  myChart.setOption(option);
  // 4. 当我们浏览器缩放的时候，图表也等比例缩放
  window.addEventListener("resize", function() {
    // 让我们的图表调用 resize这个方法
    myChart.resize();
  });
        //结束
      },
     

    }
}
</script>

<style>
@import "../../assets/css/sixth.css";

</style>