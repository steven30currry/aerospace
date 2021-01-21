<template>
  <div class="container">
  
      <div class="timeline">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <!--除未来外-->
            <div class="swiper-slide"  v-for="(item,index) in cardDetailInform" :key="index" :style="{backgroundImage:'url('+item.backImg+')'}" :data-year="item.dataYear">
              <transition name="fade">
                  <img-show-card v-show="showImgCard" :historyItem="ImgCardDataList[index]" style="margin-left:90px"></img-show-card>
              </transition>
              <div class="swiper-slide-content"><span class="timeline-year">{{item.timelineYear}}</span>
                <h3 class="timeline-title">{{item.timelineTitle}}</h3>
                <p class="timeline-text">{{item.timelineText}}</p>
              </div>
            </div>

            <!--未来-->
            <div class="swiper-slide" :style="{backgroundImage:'url('+futureDetailInform.backImg+')'}" data-year="未来">
              <transition name="fade">
                  <img-show-card v-show="showImgCard" :historyItem="futureImgCard" style="margin-left:90px" :width="'650px'" :height="'620px'" :imgWidth="'421px'" :imgHeight="'600px'" :isContentShow="false"></img-show-card>
              </transition>
              <div class="swiper-slide-content"><span class="timeline-year">{{futureDetailInform.timelineYear}}</span>
                <h3 class="timeline-title">{{futureDetailInform.timelineTitle}}</h3>
                <p class="timeline-text">{{futureDetailInform.timelineText}}</p>
              </div>
            </div>
          </div>
          <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div>
          <div class="swiper-pagination"></div>
        </div>
      </div>
  </div>
</template>

<script>
import Swiper from 'swiper'
import ImgShowCard from '../../components/imgShowCard/ImgShowCard.vue'

export default {
  components: { ImgShowCard },
    name:'Second',
    data(){
      return{
          imgList:[
            require('../../assets/img/chinaHistory/太空1.jpg'),
            require('../../assets/img/chinaHistory/太空2.jpg'),
            require('../../assets/img/chinaHistory/太空3.jpg'),
            require('../../assets/img/chinaHistory/太空4.jpg'),
            require('../../assets/img/chinaHistory/太空5.jpg'),
            require('../../assets/img/chinaHistory/太空6.jpg'),
            require('../../assets/img/chinaHistory/太空7.jpg'),
            require('../../assets/img/chinaHistory/太空8.jpg'),
            require('../../assets/img/chinaHistory/太空9.jpg')
          ],
          showImgCard:false,
          ImgCardDataList:[          //组件待接收数据
            [
              {"pic": require('../../assets/img/chinaHistory/万户飞天/图片1.jpg'),"des":"万户飞天概述图"},
              {"pic": require('../../assets/img/chinaHistory/万户飞天/图片2.jpg'),"des":"纪念万户的月球万户山"},
              {"pic": require('../../assets/img/chinaHistory/万户飞天/图片3.jpg'),"des":"万户飞天概述图"},
              {"pic": require('../../assets/img/chinaHistory/万户飞天/图片4.jpg'),"des":"万户飞天概述图"}
            ],
            [
              {"pic": require('../../assets/img/chinaHistory/东方红一号/图片1.jpg'),"des":"太空中的东方红一号"},
              {"pic": require('../../assets/img/chinaHistory/东方红一号/图片2.jpg'),"des":"东方红一号的研发"},
              {"pic": require('../../assets/img/chinaHistory/东方红一号/图片3.jpg'),"des":"厂房内测试东方红一号卫星"},
              {"pic": require('../../assets/img/chinaHistory/东方红一号/图片4.jpg'),"des":"人们争相眺望“东方红一号”通过北京上空"}
            ],
            [
              {"pic": require('../../assets/img/chinaHistory/神舟五号/图片1.jpg'),"des":"神舟五号发射现场"},
              {"pic": require('../../assets/img/chinaHistory/神舟五号/图片2.jpg'),"des":"神舟五号发射时望向天空的人们"},
              {"pic": require('../../assets/img/chinaHistory/神舟五号/图片3.jpg'),"des":"杨利伟在返回舱"},
              {"pic": require('../../assets/img/chinaHistory/神舟五号/图片4.jpg'),"des":"杨利伟摄影作品《从神舟五号上看地球》"},
            ],
            [
              {"pic": require('../../assets/img/chinaHistory/神舟七号/图片1.jpg'),"des":"神州七号整装待发"},
              {"pic": require('../../assets/img/chinaHistory/神舟七号/图片2.jpg'),"des":"神舟七号在酒泉卫星发射中心升空"},
              {"pic": require('../../assets/img/chinaHistory/神舟七号/图片3.gif'),"des":"神舟七号出舱行走"},
              {"pic": require('../../assets/img/chinaHistory/神舟七号/图片4.gif'),"des":"中国人的第一次太空出舱活动正式达成"}
            ],
            [
              {"pic": require('../../assets/img/chinaHistory/天宫一号/图片1.jpg'),"des":"天宫一号船箭组合体对接"},
              {"pic": require('../../assets/img/chinaHistory/天宫一号/图片2.jpg'),"des":"天宫一号点火发射"},
              {"pic": require('../../assets/img/chinaHistory/天宫一号/图片3.jpg'),"des":"人们关注着天宫一号的发射"},
              {"pic": require('../../assets/img/chinaHistory/天宫一号/图片4.jpg'),"des":"天宫一号图解示意"}
            ],
            [
              {"pic": require('../../assets/img/chinaHistory/神舟九号/图片1.jpg'),"des":"神舟九号正在准备发射"},
              {"pic": require('../../assets/img/chinaHistory/神舟九号/图片2.jpg'),"des":"神舟九号发射升空"},
              {"pic": require('../../assets/img/chinaHistory/神舟九号/图片3.gif'),"des":"神舟九号与天宫一号对接"},
              {"pic": require('../../assets/img/chinaHistory/神舟九号/图片4.jpg'),"des":"神舟九号航天员刘洋，为中国载人航天首次搭载女航天员"}
            ],
            [
              {"pic": require('../../assets/img/chinaHistory/神舟十号/图片1.jpg'),"des":"神舟十号升空"},
              {"pic": require('../../assets/img/chinaHistory/神舟十号/图片2.jpg'),"des":"学生正在观看“神舟十号”太空授课"},
              {"pic": require('../../assets/img/chinaHistory/神舟十号/图片3.jpg'),"des":"宇航员王亚平正在进行太空授课"},
              {"pic": require('../../assets/img/chinaHistory/神舟十号/图片4.jpg'),"des":"神舟十号成功着陆"}
            ],
            [
              {"pic": require('../../assets/img/chinaHistory/天舟一号/图片1.jpg'),"des":"天舟一号只运货不载人的太空货车"},
              {"pic": require('../../assets/img/chinaHistory/天舟一号/图片2.jpg'),"des":"海南文昌航天发射场，天舟一号与长征七号在做发射前的准备"},
              {"pic": require('../../assets/img/chinaHistory/天舟一号/图片3.jpg'),"des":"天舟一号发射现场，与海岸同框"},
              {"pic": require('../../assets/img/chinaHistory/天舟一号/图片4.jpg'),"des":"天舟一号和天宫二号成功对接"}
            ],
            [
              {"pic":"http://www.dsj365.cn/dsj/mtg/image_article_zl/20201124/img_302.jpg","des":"嫦娥五号发射成功"},
              {"pic":"http://www.dsj365.cn/dsj/mtg/image_article_zl/20201213/20201213_133926_167436.jpg","des":"嫦娥五号轨进入月地转移轨道"},
              {"pic":"http://www.dsj365.cn/dsj/mtg/image_article_zl/20201204/img_830.jpg","des":"我国首次在月球独立展示国旗"},
              {"pic":"http://www.dsj365.cn/dsj/mtg/image_article_zl/20201217/20201217_083936_143406.jpg","des":"嫦娥五号返回地球"}
            ],
            [
              {"pic": require('../../assets/img/chinaHistory/面孔/图片1.jpg'),"des":"20年间，杨利伟从台前转到幕后，岁月爬上了他的脸庞。图为2003年的杨利伟"},
              {"pic": require('../../assets/img/chinaHistory/面孔/图片2.jpg'),"des":"2018年参加政协会议的杨利伟"},
              {"pic": "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3383460527,2859643457&fm=26&gp=0.jpg","des":"20年间，神舟飞船首任总设计师戚发轫，如今已经是86岁高龄。图为2006年的戚发轫"},
              {"pic": "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=262306821,4179848160&fm=26&gp=0.jpg","des":"2018年的戚发轫"}
            ]
          ],
          futureImgCard:[            //组件待接收未来数据
             {"pic": require('../../assets/img/chinaHistory/面孔/图片5.jpg'),"des":"正是一代代人的努力与老去,一代代人的成长与接力,成就了今天的中国,也成就了一个国家的回忆"}
          ],
          futureDetailInform:{       //本页未来具体数据
             "backImg":require('../../assets/img/chinaHistory/太空9.jpg'),
             "dataYear":"未来",
             "timelineYear":"中国载人航天",
             "timelineTitle":"未来可期  ",
             "timelineText":"从神舟一号到神舟十一号，从天宫一号到天宫二号，再到天舟一号的登场，中国的载人航天家族逐渐壮大。正是因为一代代人的努力与付出，中国航天能够一直前进繁荣。"},
          cardDetailInform:[                      //具体事迹内容
            {
             "backImg":require('../../assets/img/chinaHistory/太空1.jpg'),
             "dataYear":"梦开始的地方",
             "timelineYear":"最古老的航天家",
             "timelineTitle":"万户飞天  ",
             "timelineText":"万户飞天，航天事业的开拓者。明朝的一名科学家万户一直想利用火箭将人送上天空，一睹天幕以上的世界。某一天，万户在做了精心准备以后，坐在捆绑着火箭的飞车上，手持两个大风筝，让仆人点火。最终万户在火箭的推动力下升上天空，但由于第二排火箭自行点燃，引起爆炸，万户葬身在火海当中。如今看来，万户的行为似乎是荒谬且愚蠢的，但正是因为有这样一位位“愚蠢”的科学家、探险者，人类才能不断开拓进取，人类社会才会不断进步。"},
             {
             "backImg":require('../../assets/img/chinaHistory/太空2.jpg'),
             "dataYear":"1970",
             "timelineYear":"发射,第一颗",
             "timelineTitle":"东方红一号 ",
             "timelineText":"中国第一颗人造地球卫星“东方红一号”于酒泉卫星发射场成功发射，整个太空回响着《东方红》的旋律，这开启了中国人探索宇宙奥秘、和平利用太空的序幕。时至今日，东方红一号仍然在太空履行着它神圣的使命，50年过去了，这颗中国制造的卫星仍然还在空间轨道上运行着。当年开发出这颗卫星的前辈们大多已经不在了，但这颗东方红却承载着他们的精神，一直在浩瀚宇宙里注视着中国航天之路的发展。"},
             {
             "backImg":require('../../assets/img/chinaHistory/太空3.jpg'),
             "dataYear":"2003",
             "timelineYear":"载人航天",
             "timelineTitle":"神州五号  ",
             "timelineText":"1992年1月，中国政府批准载人航天工程正式上马，并命名为“921工程”。在这期间，中国经历了南斯拉夫大使馆被美国轰炸，中国恢复了香港和澳门的主权等大事。在这种荣辱交错的历史环境下，中国坚持朝着载人航天努力着。在经过四次的无人试验飞船之后，激动的时刻来了。2003年10月15日9时，长征二号F火箭再次点火，载着神舟五号与杨利伟，向太空进发。这一刻，全国人民望向天空，杨利伟则从太空望向地球，中国进入太空第一人的桂冠，实至名归。"},
             {
             "backImg":require('../../assets/img/chinaHistory/太空4.jpg'),
             "dataYear":"2008",
             "timelineYear":"太空行走",
             "timelineTitle":"神州七号  ",
             "timelineText":"2008年9月25日，我国第三艘载人飞船神舟七号成功发射。在这次载人航天的行动中，中国的航天员翟志刚、刘伯明、景海鹏迈出了我们在太空行走的第一步。"},
             {
             "backImg":require('../../assets/img/chinaHistory/太空5.jpg'),
             "dataYear":"2011",
             "timelineYear":"'驻扎'在太空",
             "timelineTitle":"天宫一号  ",
             "timelineText":"2011年9月29日，天宫一号从酒泉卫星发射中心。天宫一号，它长10.4米、最大直径3.35米，内部有效使用空间约15立方米，可满足3名航天员在舱内生活，设计在轨寿命两年，是中国第一个空间试验平台，将由运载能力更强大的长征二号F改进型火箭负责将它送上太空。"},
             {
             "backImg":require('../../assets/img/chinaHistory/太空6.jpg'),
             "dataYear":"2012",
             "timelineYear":"太空对接",
             "timelineTitle":"神舟九号 ",
             "timelineText":"2012年6月16日，神舟九号搭载着三名航天员成功升空。在载人状态下，先是6月18日与天宫一号实现自动交会对接，之后又与天宫一号分离。6月24日，航天员刘旺操控飞船实现与天宫一号首次手控交会对接。无人状态下的自动交会对接、载人状态下的自动交会对接、以及载人状态下的手控交会对接，这三次”花式对接法“意味着中国完整掌握了太空交会对接技术。"},
             {
             "backImg":require('../../assets/img/chinaHistory/太空7.jpg'),
             "dataYear":"2013",
             "timelineYear":"太空授课",
             "timelineTitle":"神州十号  ",
             "timelineText":"2013年6月11日，神舟十号升空再次与天宫一号对接，成熟的技术让中国航天人更加自信，他们利用发达的天地通信网络开展了首次实时“太空授课”。"},
             {
             "backImg":require('../../assets/img/chinaHistory/太空8.jpg'),
             "dataYear":"2017",
             "timelineYear":"太空货车",
             "timelineTitle":"天舟一号  ",
             "timelineText":"2017年4月20日，天舟一号在新建成的海南文昌航天发射场成功发射。低纬度的海南文昌, 更利于借助地球自转提升运载效率。"},
             {
             "backImg":require('../../assets/img/chinaHistory/太空9.jpg'),
             "dataYear":"2020",
             "timelineYear":"太空挖土！",
             "timelineTitle":"嫦娥五号  ",
             "timelineText":"11月24日，长征五号遥五运载火箭成功将嫦娥五号探测器送入地月转移轨道，探月工程第三步正式拉开序幕。这次“嫦娥”可不止是去往月球绕一圈，探探路拍些照片回来，这次她要做的是到月球上“挖土”，并将月球上的土壤和岩石带回国，可以称得上是无人版的“阿波罗登月”。从1976年8月18日苏联的“月球24号”探测器最后一次采集月球样本至今，人类已经有44年没有再更新月壤样本，而今天中国终于也要采集月壤了！"},
             {
             "backImg":require('../../assets/img/chinaHistory/太空9.jpg'),
             "dataYear":"面孔",
             "timelineYear":"值得被铭记的先驱",
             "timelineTitle":"天舟一号  ",
             "timelineText":"2017年4月20日，天舟一号在新建成的海南文昌航天发射场成功发射。低纬度的海南文昌, 更利于借助地球自转提升运载效率。"}
          ]
      }
    },
    mounted(){
      this.showImgCard=true
      var _this=this
      var timelineSwiper = new Swiper ('.timeline .swiper-container', {
          direction: 'vertical',
          loop: false,
          speed: 1000,
          pagination: '.swiper-pagination',
          paginationBulletRender: function (swiper, index, className) {        //点击分页切换
            var year = document.querySelectorAll('.swiper-slide')[index].getAttribute('data-year');
            return '<span class="' + className + '">' + year + '</span>';
          },
          paginationClickable: true,
          nextButton: '.swiper-button-next',
          prevButton: '.swiper-button-prev',
          breakpoints: {
            768: {
              direction: 'horizontal',
            }
          },
          onSlideChangeStart: function(swiper){
            // alert(swiper.activeIndex) //切换结束时，告诉我现在是第几个slide
            // console.log(_this.showImgCard)
            // _this.showImgCard=false;
            // console.log(_this.showImgCard)
            // alert("开始切换")
            _this.showImgCard=false
          },
          onSlideChangeEnd: function(swiper){
            // alert(swiper.activeIndex) //切换结束时，告诉我现在是第几个slide
            // _this.showImgCard=true;
            // console.log(_this.showImgCard)
            _this.showImgCard=true
          }
      }); 
    }
}
</script>

<style>
@import "../../assets/css/swiper-fonts.css";
@import "../../assets/css/swiper.min.css";


.fade-enter{
  transform: translate3d(0,-50px,0);
  opacity: 0;
}
.fade-enter-active{
  transition: 1s;
  transition-delay: 0.9s;
}
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  flex-direction: column;
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 14px;
}
.timeline {
  width: 100%;
  background-color: #fff;
  box-shadow: 0 5px 25px 5px rgba(0, 0, 0, .2);
}
.timeline .swiper-container {
  height: 100vh;
  width: 100%;
  position: relative;
}
.timeline .swiper-wrapper {
  transition: 2s cubic-bezier(0.68, -0.4, 0.27, 1.34) 0.2s;
}
.timeline .swiper-slide {
  position: relative;
  color: #fff;
  overflow: hidden;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  display: flex;
  align-items: center;
}

.timeline .swiper-slide::after {
  content: "";
  position: absolute;
  z-index: 1;
  right: -115%;
  bottom: -10%;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .7);
  box-shadow: -230px 0 150px 60vw rgba(0, 0, 0, .7);
  border-radius: 100%;
}
.timeline .swiper-slide-content {
  position: absolute;
  text-align: center;
  width: 80%;
  max-width: 310px;
  right: 50%;
  top: 13%;
  transform: translate(50%, 0);
  font-size: 12px;
  z-index: 2;
  margin-right: 40px;
}
.timeline .swiper-slide .timeline-year {
  display: block;  
  font-size: 22px !important;
  margin-bottom: 50px;
  transform: translate3d(20px, 0, 0);
  color: orange;
  font-style: italic;
  font-weight: 300;
  opacity: 0;
  transition: 0.2s ease 0.4s;
}
.timeline .swiper-slide .timeline-title {
  font-weight: 800;
  font-size: 54px !important;
  margin: 0 0 30px;
  opacity: 0;
  transform: translate3d(20px, 0, 0);
  transition: 0.2s ease 0.5s;
}
.timeline .swiper-slide .timeline-text {
  line-height: 1.8;
  opacity: 0;
  transform: translate3d(20px, 0, 0);
  transition: 0.2s ease 0.6s;
  font-size: 14px;
  text-align: left;
}
.timeline .swiper-slide-active .timeline-year {
  opacity: 1;
  transform: translate3d(0, 0, 0);
  transition: 0.4s ease 1.6s;
}
.timeline .swiper-slide-active .timeline-title {
  opacity: 1;
  transform: translate3d(0, 0, 0);
  transition: 0.4s ease 1.7s;
}
.timeline .swiper-slide-active .timeline-text {
  opacity: 1;
  transform: translate3d(0, 0, 0);
  transition: 0.4s ease 1.8s;
}
.timeline .swiper-pagination {
  right: 13% !important;
  height: 100%;
  display: none;
  flex-direction: column;
  justify-content: center;
  font-style: italic;
  font-weight: 300;
  font-size: 18px;
  z-index: 1;
}
.timeline .swiper-pagination::before {
  content: "";
  position: absolute;
  left: -30px;
  top: 0;
  height: 100%;
  width: 1px;
  background-color: rgba(255, 255, 255, .2);
}
.timeline .swiper-pagination-bullet {
  width: auto;
  height: auto;
  text-align: center;
  opacity: 1;
  background: transparent;
  color: #d4a024;
  margin: 15px 0 !important;
  position: relative;
}
.timeline .swiper-pagination-bullet::before {
  content: "";
  position: absolute;
  top: 8px;
  left: -32.5px;
  width: 6px;
  height: 6px;
  border-radius: 100%;
  background-color: #d4a024;
  transform: scale(0);
  transition: 0.2s;
}
.timeline .swiper-pagination-bullet-active {
  color: #d4a024;
}
.timeline .swiper-pagination-bullet-active::before {
  transform: scale(1);
}
.timeline .swiper-button-next, .timeline .swiper-button-prev {
  background-size: 20px 20px;
  top: 9%;
  width: 20px;
  height: 20px;
  margin-top: 0;
  z-index: 2;
  transition: 0.2s;
}
.timeline .swiper-button-prev {
  left: 8%;
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%23d4a024'%2F%3E%3C%2Fsvg%3E");
}
.timeline .swiper-button-prev:hover {
  transform: translateX(-3px);
}
.timeline .swiper-button-next {
  right: 8%;
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%23d4a024'%2F%3E%3C%2Fsvg%3E");
}
.timeline .swiper-button-next:hover {
  transform: translateX(3px);
}
@media screen and (min-width: 768px) {
  .timeline .swiper-slide::after {
    right: -30%;
    bottom: -8%;
    width: 240px;
    height: 50%;
    box-shadow: -230px 0 150px 50vw rgba(0, 0, 0, .7);
  }
  .timeline .swiper-slide-content {
    right: 30%;
    top: 50%;
    transform: translateY(-50%);
    width: 310px;
    font-size: 11px;
    text-align: right;
  }
  .timeline .swiper-slide .timeline-year {
    margin-bottom: 0;
    font-size: 32px;
  }
  .timeline .swiper-slide .timeline-title {
    font-size: 46px;
    margin: 0;
  }
  .timeline .swiper-pagination {
    display: flex;
    left: auto;
  }
  .timeline .swiper-button-prev {
    top: 9%;
    left: auto;
    right: 15%;
    transform: rotate(90deg) translate(0, 10px);
  }
  .timeline .swiper-button-prev:hover {
    transform: rotate(90deg) translate(-3px, 10px);
  }
  .timeline .swiper-button-next {
    top: auto;
    bottom: 9%;
    right: 15%;
    transform: rotate(90deg) translate(0, 10px);
  }
  .timeline .swiper-button-next:hover {
    transform: rotate(90deg) translate(3px, 10px);
  }
}
@media screen and (min-width: 1024px) {
  .timeline .swiper-slide::after {
    right: -20%;
    bottom: -12%;
    width: 240px;
    height: 50%;
    box-shadow: -230px 0 150px 39vw rgba(0, 0, 0, .7);
  }
  .timeline .swiper-slide-content {
    right: 25%;
  }
}
</style>