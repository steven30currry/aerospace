<template>
  <div class="firstview">
    <nav-bar2></nav-bar2>
    <div class="content">
      <brief></brief>
      <describ-card class="desc"></describ-card>
    </div>
    <!-- <div class="firstview-right">
        <news class="news"></news>
        <baike class="baike"></baike>
    </div> -->
  </div>
</template>

<script>
import NavBar from 'components/navBar/NavBar'
import NavBar2 from 'components/navBar/NavBar2'
import Brief from './firstchild/brief'
import DescribCard from './firstchild/DescribCard'
import News from './firstchild/news'
import Baike from './firstchild/baike'
export default {
  name:'FirstView',
  components:{
    Brief,
    NavBar2,
    DescribCard,
    News,
    Baike,
    NavBar
  }
}
</script>

<style>
 .firstview{
   display: flex;
 }
 .firstview .content{
   width: 990px;
   margin: 20px;
   margin-top: 50px;
 }
 .firstview .news{
 }
 .firstview .baike{
 }
 .firstview-right{
 }
</style>