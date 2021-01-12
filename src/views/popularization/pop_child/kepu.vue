<template>
  <div class="kepu">
      <div class="title2">
        <h4 class="title_one">中国航天</h4>
      </div>
       <div class="big_wrapper">
            <div class="small_wrapper">
                <a class="a_wrapper " href="#">
                    <div class="div_visible vis1">
                        <span style="    display: block;    padding: 12px 0 0 12px;">发射器</span>
                    </div>
                    <div class="div_hidden hid1">发射器</div>
                </a>
            </div>
        </div>
  </div>
</template>

<script>
export default {
    name:'kepu'
}
</script>

<style>
    .kepu{
        background: pink;
        height: 800px;
        width: 900px;
    }
    .big_wrapper{
        position: relative;
        width: 100%;
        height: 100%;
    }
    .small_wrapper{
        width: 284px;
        height: 204px;
        left: 0px;
        top: 0px;
        display: block;
        position: absolute;
        overflow: hidden;    
    }
    .a_wrapper{
        width: 281px;
        height: 205px;
        display:block;
        overflow:visible;
        position:absolute;
        top:0;
        left:0;
        transition:top .4s 0s ease-out
    }
    .a_wrapper:hover{
        top: -204px;
    }
 
  
    .div_visible{
        width: 284px;
        height: 204px;
        top: 0px;  
        position: absolute;
        left: 0;
        top: 0;
        z-index: 1;
        color: #fff;
        font: bold 16px "Microsoft YaHei",微软雅黑;
    }
    .div_hidden{
        width: 284px;
        height: 204px;
        top: 204px;
        position: absolute;
        left: 0;
        z-index: 2;
        color: #fff;
        background: #fff;
        font: bold 16px "Microsoft YaHei",微软雅黑;
    }
    .vis1{
        background: #9cc400;
    }
    .hid1{
        color:#9cc400;
        border:1px solid #9cc400;
    }
</style>