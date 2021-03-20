<template>
  <div class="news">
      <div class="title2">
        <h4 class="title_one">要闻推送</h4>
        <div @click="huan" class="iconfont icon-huanyihuan title_two" href="">
            换一批
        </div>
      </div>
      <div class="list">
          <div  class="listItem" v-for="(item,index) in messageList" :key="index">
            <div v-if="index==0" style="color:#FE2D46" class="itemIndex">{{index+1}}</div>
            <div v-else-if="index==1" style="color:#F60" class="itemIndex">{{index+1}}</div>
            <div v-else-if="index==2" style="color:#ff8607" class="itemIndex">{{index+1}}</div>
            <div v-else class="itemIndex">{{index+1}}</div>
            <div class="itemContent">
                <a :href="item.url">
                    <h4 class="listTitle">{{item.title}}</h4>
                </a>
                <p class="excerpt">{{item.describe}}</p>
                <div class="iconfont icon-biaoqian itemTag">
                    标签：
                    <el-tag type="info" size="mini" effect="plain" style="margin-right:10px" v-for="(item1,index) in item.tags.slice(0,2)" :key="index">
                        {{item1 }}
                    </el-tag>
                </div>
            </div>
            <!-- <a class="itemImg" :href="item.url">
                <img :src="item.imgsrc" alt="">
            </a> -->

          </div>
      </div>
  </div>
</template>

<script>                     
import {getHuanResponse} from 'network/huan.js'
export default {         
    name:'News',
    data(){
        return {
            messageList:[
                 {
                "describe": "试车现场 继续阅读先进液体、固体大推力发动机新进展！将支撑长五B、重型等火箭，试车现场 继续阅读先进液体、固体大推力发动机新进展！将支撑长五B、重型等火箭 →",
                "tags": [
                    "中国空间站",
                    "中国航天",
                    "航天科技"
                ],
                "title": "先进液体、固体大推力发动机新进展！将支撑长五B、重型等火箭",
                "url": "http://www.spaceflightfans.cn/85677.html"
            },
            {
                "date": "2021年1月11日",
                "describe": "劳德贝克称，通过建造新系统和训练操作人员来掌握“威胁表征”能力是天军面临的一大挑战。她说：“我们需要某种在轨持续性和传感器，从而让我们能更快地做出更有把握的决定”。劳德贝克提到了配备机械臂的卫星，称这是中国具备的令美国天军担忧的几项能力之一。她说，“担忧在于这项机械臂技术可作为抓取臂使用”；“从情报角度来说其属性很难去界定”。 继续阅读美国太空军需有能区分武器和普通物体的手段 →",
                "imgsrc": "http://www.spaceflightfans.cn/wp-content/uploads/2021/01/10-1610327790.png",
                "tags": [
                    "USSF（美国太空军）",
                    "美国航天",
                    "航天科技"
                ],
                "title": "美国太空军需有能区分武器和普通物体的手段",
                "url": "http://www.spaceflightfans.cn/85671.html"
            },
            {
                "date": "2021年1月10日",
                "describe": "继续阅读星舰进度追踪第二季：SN9试飞时间推迟到当地时间12日，SN15和SN11新照片 →Artemis Program、SpaceX、Starlink Program、StarShip、原创文章、美国航天、运载火箭、重大计划",
                "imgsrc": "http://www.spaceflightfans.cn/wp-content/uploads/2021/01/SN11151-scaled.jpg",
                "tags": [
                    "Artemis Program",
                    "SpaceX",
                    "Starlink Program",
                    "StarShip",
                    "原创文章",
                    "美国航天",
                    "运载火箭",
                    "重大计划"
                ],
                "title": "星舰进度追踪第二季：SN9试飞时间推迟到当地时间12日，SN15和SN11新照片",
                "url": "http://www.spaceflightfans.cn/84207.html"
            },
            {
                "date": "2021年1月10日",
                "describe": "莫门图斯总裁肯尼迪在1月5日以访谈形式报送给美国证交会的一份文件中称，审核工作推迟并非是因为什么具体问题。他说，FAA并未表示其自己存有什么具体担忧，只是说莫门图斯有效载荷的跨部门审核工作需要花更多时间来完成。他还说，公司已通过了所需其它许可证的跨部门审核，比如国家海洋与大气管理局（NOAA）的一项审核。作为商业遥感监管工作的一部分，NOAA要为“活力骑乘”飞行器上的一台相机办理许可。NOAA网站已把莫门图斯列入拿到商业遥感许可证的公司。 继续阅读监管拖后腿，莫门图斯太空拖船首飞推迟 →",
                "imgsrc": "http://www.spaceflightfans.cn/wp-content/uploads/2021/01/0-1610258744.png",
                "tags": [
                    "SpaceX",
                    "美国航天",
                    "航天科技"
                ],
                "title": "监管拖后腿，莫门图斯太空拖船首飞推迟",
                "url": "http://www.spaceflightfans.cn/85664.html"
            },
              {
                "date": "2021年1月10日",
                "describe": "莫门图斯总裁肯尼迪在1月5日以访谈形式报送给美国证交会的一份文件中称，审核工作推迟并非是因为什么具体问题。他说，FAA并未表示其自己存有什么具体担忧，只是说莫门图斯有效载荷的跨部门审核工作需要花更多时间来完成。他还说，公司已通过了所需其它许可证的跨部门审核，比如国家海洋与大气管理局（NOAA）的一项审核。作为商业遥感监管工作的一部分，NOAA要为“活力骑乘”飞行器上的一台相机办理许可。NOAA网站已把莫门图斯列入拿到商业遥感许可证的公司。 继续阅读监管拖后腿，莫门图斯太空拖船首飞推迟 →",
                "imgsrc": "http://www.spaceflightfans.cn/wp-content/uploads/2021/01/0-1610258744.png",
                "tags": [
                    "SpaceX",
                    "美国航天",
                    "航天科技"
                ],
                "title": "监管拖后腿，莫门图斯太空拖船首飞推迟",
                "url": "http://www.spaceflightfans.cn/85664.html"
            },
    
          
                
            ],
            page:1
        }
    },
    methods:{
        huan(){
            this.page++;
            console.log(this.messageList[0])
            getHuanResponse(this.page).then(res =>{
                var arr=res.data.data
                console.log(arr)
                for(var i=0;i<5;i++){
                    this.messageList[i].describe=arr[i].describe
                    this.messageList[i].tags=arr[i].tags
                    this.messageList[i].title=arr[i].title
                    this.messageList[i].url=arr[i].url
                }

            })
        
        }
    }
}
</script>

<style>
    h1,h2,h3,h4{
        margin: 0;
    }
    .news{
        width: 555px;
    }
    .title2{
        line-height: 23px;
        border-bottom: 1px solid #eee;
        overflow: hidden;
        height: 35px;
        width: 100%;
        background: #EAF3FD;
    }
    .title_one{
        float: left;
        display: inline;
    }
    .title_two{
        padding-left: 20px;
        margin-top: 3px;
        background-position: -406px -821px;
        color: #9195AC;
        float: right;
        display: inline;
        padding-right: 10px;
    }
    .title_two:hover{
        color: rgb(49,94,251)
    }
    .title2 h4 {
        margin: 0px;
        font-size: 22px;
        color: #000;
        font-weight: 400;
        border-left: 5px solid #408ed6;
        line-height: 22px;
        padding-left: 10px;
    }
    .list{
        width: 100%;
    }
    .listItem{
        display: flex;
        padding: 16px 20px 16px 0;
        position: relative;
        background: #fff;
        width: 100%;
        height: 155px;
        border: solid #ebebeb;
        border-width: .5px 0 0;
    }
    .itemIndex{
        text-align: center;
        width: 57px;
        color: #999999;
        line-height: 1.6;
        font-size: 18px;
        font-weight: 600;
    }
    .itemContent{
        flex: 1 1;
        overflow: hidden;
    }
    .listTitle{
        font-size: 17px;
        line-height: 28px;
        max-height: 56px;
        display: -webkit-box;
        text-overflow: ellipsis;
        overflow: hidden;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        font-weight: 600;
        color: #121212;

    }
    .excerpt{
        max-height: 50px;
        white-space: normal;
        display: -webkit-box;
        text-overflow: ellipsis;
        overflow: hidden;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        line-height: 25px;
        margin-top: 2px;
        min-height: 25px;
        padding-right: 15px;
    }
    .itemTag{
        bottom: 16px;
        position: absolute;
        font-size: 14px;
        height: 16px;
        color: #8590a6;
    }
    .itemImg{
        display: block;
        height: 105px;
        margin-left: 16px;
        position: relative;
    }
    .itemLabel{
        size: mini;
    }
</style>