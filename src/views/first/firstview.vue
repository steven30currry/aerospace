<template>
  <div class="firstview">
    <div class="navigator-btn">
          <nav-bar2></nav-bar2>
    </div>
    <div class="first-container">
        <div class="primary">
          <brief class="des-top"></brief>
          <describ-card></describ-card>
          <!--分页-->
          <ul class="pagination">
              <li><a href="#"><</a></li>
              <li><a href="#" class="active">1</a></li>
              <li><a href="#">2</a></li>
              <li><a href="#">3</a></li>
              <li><a href="#">4</a></li>
              <li><a href="#">5</a></li>
              <li><a href="#">6</a></li>
              <li><a href="#">7</a></li>
              <li><a href="#">8</a></li>
              <li><a href="#">></a></li>
          </ul>
        </div>
        <div class="secondary">
          <news class="sec-news"></news>
          <carousel></carousel>
        </div>
    </div>
  </div>
</template>

<script>
import NavBar from 'components/navBar/NavBar'
import NavBar2 from 'components/navBar/NavBar2'
import Brief from './firstchild/brief'
import SideBarCard from '../../components/sideBarCard/SideBarCard.vue'
import DescribCard from './firstchild/DescribCard.vue'
import news from './firstchild/news'
import Carousel from 'components/carousel/Carousel'

export default {
  name:'FirstView',
  components:{
    Brief,
    NavBar2,
    SideBarCard,
    DescribCard,
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
  }
}
</script>
<style>
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
.navigator-btn{
  position: absolute;
  top: 5px;
  left: 5px;
  width: 45px;
  height: 40px;
  /* border: 1px solid black; */
}
.first-container{
  padding: 30px 15px;
  display: flex;
  flex-flow: row wrap;
  align-items: flex-start;
  margin-top: 20px;
  margin-left: 35px;
  /* background: #ebebeb; */
}
.first-container .primary{
  width: 1010px;
  display: flex;
  flex-direction: column;
  padding-right: 20px;
  margin-right: 20px;
  border-right: 1px solid #ebebeb;
}
.primary .des-top{
  border-bottom: 1px solid #ebebeb;
  padding-bottom: 14px;
}
.first-container .pagination{
  display: flex;
  margin: 0 auto;
  padding: 0;
  list-style: none;
}
.first-container .pagination li a{
  text-decoration: none;
  position: relative;
  display: block;
  width: 50px;
  height: 50px;
  font-size: 22px;
  text-align: center;
  line-height: 50px;
  background: #353535;
  color: #565656;
  margin: 5px;
  border-radius: 4px;
  box-shadow: inset 0 5px 10px rgba(0, 0, 0, .1), 0 2px 5px rgba(0, 0, 0, .5);
  transition: all 300ms;
}
.first-container .pagination li a.active ,.first-container .pagination li a:hover{
    color: #fff;
    text-shadow: 0 0 20px rgb(255, 224, 27), 0 0 20px
     rgb(255, 224, 27), 0 0 20px rgb(255, 224, 27), 0 0 20px
     rgb(255, 224, 27), 0 0 20px rgb(255, 224, 27), 0 0 20px
     rgb(255, 224, 27), 0 0 20px rgb(255, 224, 27), 0 0 20px
     rgb(255, 224, 27);
}
.sec-news{
   border-bottom: 1px solid #ebebeb;
   padding-bottom: 14px;

}
</style>