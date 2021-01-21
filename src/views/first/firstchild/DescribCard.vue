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
        <div class="pagination">
            <a href="#" class="prev"><i class="fas fa-angle-left"></i></a>
            <a href="#" class="num active">1</a>
            <a href="#" class="num">2</a>
            <a href="#" class="num">3</a>
            <a href="#" class="num">4</a>
            <a href="#" class="num">5</a>
            <a href="#" class="next"><i class="fas fa-angle-right"></i></a>
        </div>
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
    width: 320px;
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

/* .item .left-top{
    position: absolute;
    left: 0px;
    top: 0px;
    border-style: solid;
    border-color: #0079FF;
    border-width: 2px 0 0 2px;
    padding: 9px;
} */
/* .item .right-bottom{
    position: absolute;
    right: 0;
    bottom: 0;
    padding: 9px;
    border-style: solid;
    border-color: #0079FF;
    border-width: 0 2px 2px 0;
} */
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
.pagination{
    margin: 0px;
    padding: 0px;
    text-decoration: none;
    box-sizing: border-box;
    font-family: "Open Sans",sans-serif;
    text-align: center;
    /* transform: translateY(-50%); */
}
.pagination a{
  margin: 6px 1px;
  display: inline-block;
  width: 60px;
  background: #2c3e50;
  height: 60px;
  line-height: 60px;
  color: #fff;
  font-weight: 600;
  transition: 0.3s;
  position: relative;
  padding-right: 26px;
}
.prev,.next{
  padding-right: 12px !important;
  font-size: 20px;
}
.pagination a:hover{
  color: #e74c3c;
}
.active{
  color: #e74c3c !important;
}
.prev{
  border-radius: 30px 0 0 30px;
}
.next{
  border-radius: 0 30px 30px 0;
}
.pagination a::before,.pagination a:after{
  content: "";
  position: absolute;
  border-top: 30px solid transparent;
  border-bottom: 30px solid transparent;
}
.num::before,.next::before{
  border-right: 20px solid #2c3e50;
  right: 100%;
}
.num:after,.prev:after{
  border-right: 20px solid #f1f1f1;
  right: 0;
}
</style>
