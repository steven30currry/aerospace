<template>
    <div class="brief">
        <div class="brief-location">
            <h2>天文天象</h2>
        </div>
        <h4>唯一进入天空</h4>
        <div class="brief-text">
            <div class="brief-img">
                <img src="../../../assets/img/img2.jpg" alt="">
            </div>
            <p>由多用途卫星（Arirang）和天桥卫星捕获的卫星图像被用于土地管理，灾害监测，海洋水资源管理，农业林业应用，环境天气观察和国家安全等各个领域。它正在作为重要的大数据而出现，在汽车工业革命时代创造了高附加值。为此，韩国还利用卫星图像信息制定了一项新的国家战略。</p>
            <p>韩国已通过低轨道Arirang卫星和对地静止轨道Cheonrian卫星获得了各种卫星图像资产，例如亚米级（70厘米，55厘米级）高分辨率卫星图像以及雷达和红外图像。从2011年到2019年，我们每年通过卫星信息利用委员会以及私营部门向政府各部委和附属机构提供33,250张标准多用途卫星图像和50,126张经过额外处理的图像，每年获取大约100,000张卫星图像。</p>
            <p>韩国航空航天研究所通过运行世界一流的高科技高分辨率卫星和微卫星集群，近乎实时地记录卫星图像，从而实现了国家安全和危机管理服务，为干旱，地面沉降和洪水等各种灾害做准备。我要出去了。此外，它还计划提供与人们生活密切相关的环境预测和预警服务，例如准确的气象观测以及使用诸如Cheonlian卫星2A和2B等高性能对地静止卫星图像对进入朝鲜半岛的空气污染物进行早期检测。</p>
        </div>
    </div>
</template>

<script>
export default {
    name:'Brief'
}
</script>

<style scoped>
    .brief{
        width:990px;
        margin-bottom: 20px;
    }
    .brief-location{
        width: 100%;
        height: 100px;
        text-align: center;
        background: #fff;
        line-height: 100px;
        font-size: 27px;
    }
    .brief h4{
        background: #2d55a6;
        color: white;
        padding: 20px 30px;
        font-size: 20px;
    }
    .brief-text{
        border: 1px solid #e5e5e5;
        border-top: 0;
        background: #fff;
        padding: 40px 30px 30px 30px;
        overflow: hidden;
    }
    .brief-img{
        width: 550px;
        float: right;
        background: #e5e5e5;
        margin: 0 0 10px 30px;
        overflow: hidden;
        height: auto;
        text-align: center;
    }
    .brief-img img{
        width: 500px;
    }
    .brief p{
        margin-bottom: 15px;
        font: "Nanum Gothic";
        line-height: 1.6;
        font-size:0.938em;
        /* word-break: keep-all;  后面看 */
    }

</style>