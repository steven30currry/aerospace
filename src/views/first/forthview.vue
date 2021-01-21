<template>
  <div class="firstview">
    <h1>4</h1>
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

</style>