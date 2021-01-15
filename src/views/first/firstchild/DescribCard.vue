<template>
    <div class="all">
        <div class="item-all">
            <div class="item" v-for="(index) in 6" :key="index">
                <span class="left-top"></span>
                <img src="../../../assets/img/img1.jpg" alt="">
                <div class="item-des">
                    <h5>无人驾驶飞机</h5>
                    <a href="">查看更多</a>
                </div>
                <span class="right-bottom"></span>
            </div>
        </div>
        <!--分页-->
        <ul> 
            <li><a href="#"></a></li>
            <li><a href="#" class="active">1</a></li> 
            <li><a href="#">2</a></li> 
            <li><a href="#">3</a></li> 
            <li><a href="#">4</a></li> 
            <li><a href="#">5</a></li> 
            <li><a href="#">></a></li> 
        </ul>
    </div>
</template>

<script>
export default {
  name:'DescribCard',
  data(){
   return {
   }
  },
  props:{
      dataList:{           //返回当页的数据
          type: Array,
          default(){
              return []
          }
      },
      totalCount:0,        //总的记录数
      pageCount: 0,        //总的页数
  }
}
</script>

<style scoped>
.all{
    display: flex;
    flex-direction: column;
    width: 1100px;
}
.item-all{
    width: 1100px;
    display: flex;
    flex-wrap: wrap;
}
.item{
    width: 342px;
    height: 169px;
    padding: 30px 15px;
    display: flex;
    justify-content: space-between;
    background: #fff;
    margin-right: 15px;
    margin-bottom: 15px;
    position: relative;
}
.item:hover{
    transform: translate(0,-8px);
    border: 1px solid#0079FF;
    transition: 0.5s;
}

.item .left-top{
    position: absolute;
    left: 0px;
    top: 0px;
    border-style: solid;
    border-color: #0079FF;
    border-width: 2px 0 0 2px;
    padding: 9px;
}
.item .right-bottom{
    position: absolute;
    right: 0;
    bottom: 0;
    padding: 9px;
    border-style: solid;
    border-color: #0079FF;
    border-width: 0 2px 2px 0;
}
.item img{
    width: 143px;
    height: 107px;
}
.item .item-des{
    display: flex;
    flex-direction: column;
    width: 135px;
    justify-content: space-between;
}
.item .item-des h5{
    color: #444;
    font-weight: 600;
    font-size: 16px;
}
.item .item-des a{
    width: 90px;
    height: 34px;
    background: #ed1651;
    color: #fff;
    text-align: center;
    line-height: 34px;
}
ul{
    display: flex; margin: 0 auto; 
    padding: 0; 
    list-style: none;
}
ul li a{
    text-decoration: none; 
    position: relative; 
    display: block; 
    width: 40px; 
    height: 40px; 
    font-size: 20px; 
    text-align: center; 
    line-height: 40px; 
    background: #353535; 
    color: #565656; 
    margin: 5px; 
    border-radius: 4px; 
    box-shadow: inset 0 5px 10px rgba(0, 0, 0, .1), 0 2px 5px rgba(0, 0, 0, .5); 
    transition: all 300ms;
}
ul li a.active , ul li a:hover{
    color: #fff; 
    text-shadow: 0 0 20px rgb(255, 224, 27), 0 0 20px rgb(255, 224, 27), 0 0 20px rgb(255, 224, 27), 0 0 20px rgb(255, 224, 27), 0 0 20px rgb(255, 224, 27), 0 0 20px rgb(255, 224, 27), 0 0 20px rgb(255, 224, 27), 0 0 20px rgb(255, 224, 27);
}
</style>
