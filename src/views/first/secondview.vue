<template>
  <div class="firstview">
    <h1>2</h1>
    <nav-bar></nav-bar>
    <div class="content">
      <brief></brief>
      <describ-card class="desc"></describ-card>
    </div>
    <news class="news"></news>
  </div>
</template>

<script>
import NavBar from 'components/navBar/NavBar'
import Brief from './firstchild/brief'
import DescribCard from './firstchild/DescribCard'
import News from './firstchild/news'
export default {
  name:'FirstView',
  components:{
    Brief,
    NavBar,
    DescribCard,
    News
  }
}
</script>

<style>
  .firstview{
    display: flex;
  }
  .firstview .content{
    margin:30px auto;
    margin-left: 20px ;
  }
  .firstview .desc{
    z-index: -5;
  }
  .firstview .news{
    margin-top: 80px;
    margin-right: 20px;
  }
</style>