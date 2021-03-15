<template>
  <div class="home">
    <h2>home</h2>
    <div @click="first" class="home-div">航空科普</div>
    <div @click="second" class="home-div">中国发展历程</div>
    <div @click="third" class="home-div">机器人</div>
    <div @click="forth" class="home-div">知识图谱</div>
  </div>
</template>


<script>

export default {
    name:'home',
    components:{
      
    },
    data(){
      return{

      }
    },
    methods:{
      first(){
        console.log('11')
        this.$router.push('/firstview')
      },
      second(){
        this.$router.push('/second')
      },
      third(){
        this.$router.push('/third')
        window.location.reload();//否则点击路由不会刷新
      },
      forth(){
        this.$router.push('/fifth')
      },
    }
}
</script>

<style>
  .home{
    height: 500px;
    display: flex;
    margin: 0 auto;
  }
  .home-div{
    width: 200px;
    height: 200px;
    border-radius: 53px;
    background: linear-gradient(145deg, #f0f0f0, #cacaca);
    box-shadow:  8px 8px 16px #828282,
              -8px -8px 16px #ffffff;
    text-align: center;
    line-height: 200px;
    margin-right: 30px;
  }
  .home-first{

  }
  .hoem-second{

  }
  .home-third{

  }

</style>