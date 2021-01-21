<template>
  <div class="firstview">
    <div class="navigator-btn">
          <nav-bar2></nav-bar2>
    </div>
    <div class="first-container">
        <div class="primary">
          <brief class="des-top"></brief>
          <describ-card></describ-card>
        </div>
        <div class="secondary">
            <side-bar-card :dataList="dataList"></side-bar-card>
        </div>
    </div>
  </div>
</template>

<script>
import NavBar from 'components/navBar/NavBar'
import NavBar2 from 'components/navBar/NavBar2'
import Brief from './firstchild/brief'
import DescribCard from './firstchild/DescribCard'
import SideBarCard from '../../components/sideBarCard/SideBarCard.vue'
export default {
  name:'FirstView',
  components:{
    Brief,
    NavBar2,
    DescribCard,
    SideBarCard
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
  margin: 0 auto;
  max-width: 1400px;
}
.first-container .primary{
  width: 1010px;
  display: flex;
  flex-direction: column;
  padding-right: 20px;
  margin-right: 20px;
  border-right: 1px solid #e6e6e6;
}
.primary .des-top{
  border-bottom: 1px solid #e6e6e6;
  padding-bottom: 14px;

}
</style>