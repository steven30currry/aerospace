<template>
   <div class="history">
        <div class="title1">历史上的今天</div>
        <div class="date">
            <div class="month">Jan</div>
            <div class="day">10</div>
        </div>
        <div class="event">
            <div class="text">
                1969年1月10日苏联成功发射金星6号探测器
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'History'
}
</script>

<style>
 .history{
        width: 250px;
        height: 350px;
        background: red;
        margin-top: 20px;
        margin-left: 100px;
    }
 .title1{
     background: #0098db;
     height: 45px;
     line-height: 45px;
     color: white;
     text-align: center;
 }
 .date{
     background: #4e98e1;
     height: 130px;
     color: white;
     text-align: center;
     display: flex;
     flex-direction: column;
     align-content: space-between;
 }
 .month{
    height: 40px;
    line-height: 40px;
    font-size: 16px;
 }
 .day{
    height: 40px;
    font-size: 48px;
 }
 .event{
     background:#f2f6fa
 }
 .text{
    padding: 10px 15px;
    overflow: hidden;
    max-height: 48px;
    line-height: 1.5;
    font-size: 16px;
    font-weight: 700;
 }
</style>