<template>
    <div class="all">
        <div class="item-all">
            <div class="item" v-for="(index) in 4" :key="index">
                <div class="item-tip">
                    <img src="../../../assets/img/icon_tip.png" alt="">
                    <span>月球样品</span>
                </div>
                <div class="item-body">
                    <img src="../../../assets/img/img1.jpg" alt="">
                    <div class="item-des">
                        <p class="title">
                            <a href="">摄影师冰岛拍摄震撼北极光 若UFO降临 </a>
                        </p>
                        <div class="des">摄影师冰岛拍摄震撼北极光 若UFO降临 </div>
                        <div class="time"></div>
                    </div>
                </div>

            </div>
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
/* @import '../../../assets/css/pagination.css'; */

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
    width: 480px;
    height: 180px;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    background: #FFFFFF;
    box-shadow: 0px 0px 10px 0px rgba(70, 140, 211, 0.2);
    margin-right: 28px;
    margin-bottom: 20px;
    position: relative;
}
.item:hover{
    transform: translate(0,-8px);
    border: 1px solid#0079FF;
    transition: 0.5s;
}
.item .item-tip{
    width: 58px;
    height: 20px;
    position: absolute;
    top: -1px;
    left: -5px;
}
.item .item-tip img{
    position: absolute;
    border: 0;
}
.item .item-tip span{
    position: relative;
    top: 2px;
    font-size: 14px;
    font-weight: bold;
    color: #FFFDFE;
    line-height: 20px;
    width: 58px;
    display: inline-block;
}
.item .item-body{
    margin: 0px;
    padding: 0px;
    font-family: '\5FAE\8F6F\96C5\9ED1';
    display: flex;
    align-items: center;
    justify-content: center;
}
.item .item-body img{
    width: 210px;
    height: 140px;
}
.item .item-des{
    display: flex;
    flex-direction: column;
    width: 220px;
    justify-content: space-between;
    /* border: 1px solid red; */
    margin-left: 15px;
    height: 126px;
}
.item .item-des .title{
    font-weight: bold;
    margin: 0;
    padding: 0;
    font-family: '\5FAE\8F6F\96C5\9ED1';
    font-size: 16px;
    color: #102435;
    padding-bottom: 10px;
    width: 220px;
}
.item .item-des .des{
    width: 220px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    line-height: 24px;
    font-size: 14px;
    text-align: left;
    margin: 0;
    padding: 0;
    font-family: '\5FAE\8F6F\96C5\9ED1';
}
</style>
