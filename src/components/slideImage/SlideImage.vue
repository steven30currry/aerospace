<template>
  <div class="slide-all">
     <div class="slide-body">
        <ul>
            <li>
                <table> 
                   <tbody>
                       <tr class="li-image">
                           <td>
                               <img src="https://phototheque.cnes.fr/cnes/JPGPreview/thnews8.jpg?previewRefNum=54221&sizeMax=192" alt="">
                           </td>
                       </tr>
                       <tr class="li-des">
                           <td>
                               <span>新型冠状病毒肺炎（COVID-19）：新冠状病毒肺炎（COVID-19）：COVID-19</span>
                           </td>
                       </tr>
                   </tbody>
                </table>
            </li>
            <li>
                <table> 
                   <tbody>
                       <tr class="li-image">
                           <td>
                               <img src="https://phototheque.cnes.fr/cnes/JPGPreview/thnews8.jpg?previewRefNum=54221&sizeMax=192" alt="">
                           </td>
                       </tr>
                       <tr class="li-des">
                           <td>
                               <span>新型冠状病毒肺炎（COVID-19）：新冠状病毒肺炎（COVID-19）：COVID-19</span>
                           </td>
                       </tr>
                   </tbody>
                </table>
            </li>
                        <li>
                <table> 
                   <tbody>
                       <tr class="li-image">
                           <td>
                               <img src="https://phototheque.cnes.fr/cnes/JPGPreview/thnews8.jpg?previewRefNum=54221&sizeMax=192" alt="">
                           </td>
                       </tr>
                       <tr class="li-des">
                           <td>
                               <span>新型冠状病毒肺炎（COVID-19）：新冠状病毒肺炎（COVID-19）：COVID-19</span>
                           </td>
                       </tr>
                   </tbody>
                </table>
            </li>
        </ul>
     </div>
     <div class="slide-prev">

     </div>
     <div class="slide-next">

     </div>
  </div>
</template>

<script>
export default {
  name:'',
  data(){
   return {

   }
  }
}
</script>

<style scoped>
.slide-all{
    position: relative;
    display: block;
    padding: 0px 60px;
    width: 990px;
    height: 200px;
    text-align: center;
    color: #FFFFFF;
    font-family: 'Exo', Verdana, "Arial Unicode MS",  sans-serif;
    border: 1px solid red;
}
.slide-prev{
    display: block;
    top: 80px;
    position: absolute;
    left: 20px;
    width: 25px;
    height: 50px;
    cursor: pointer;
    background: transparent url('../../assets/img/left-chevron.png') no-repeat 0 0;
}
.slide-next{
    display: block;
    top: 80px;
    position: absolute;
    right: 20px;
    width: 25px;
    height: 50px;
    cursor: pointer;
    background: transparent url('../../assets/img/right-chevron.png') no-repeat 0 0;
}
.slide-body{
    position: relative;
    width: 280px;
    height: 200px;
    overflow: hidden;
    display: block;
}
.slide-body ul{
    overflow: hidden;
    position: relative;
    top: 0px;
    margin: 0px;
    padding: 0px;
    left: -220px;
    width: 1860px;
    display: block;
    list-style-type: disc;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
}
.slide-body ul li{
    float: left;
    list-style: none;
    margin-left: 0;
    margin-right: 10px;
    width: 210px;
    height: 250px;
    display: list-item;
    text-align: -webkit-match-parent;
}
.slide-body ul li table{
    width: 180px;
    border-top-width: 0px;
    border-right-width: 0px;
    border-bottom-width: 0px;
    border-left-width: 0px;
    -webkit-border-horizontal-spacing: 0px;
    -webkit-border-vertical-spacing: 0px;
    display: table;
    border-collapse: separate;
    box-sizing: border-box;
    text-indent: initial;
    border-color: grey
}
.slide-body ul li table tbody{
    display: table-row-group;
    vertical-align: middle;
    border-color: inherit;
}
.slide-body ul li .li-image{
    font-size: 12px;
    display: table-row;
    vertical-align: inherit;
    border-color: inherit;
}
.slide-body .li-image td{
    width: 180px;
    height: 135px;
    vertical-align: bottom;
    text-align: -webkit-center;
    display: table-cell;
}
.slide-body ul li .li-des{
    font-size: 12px;
    display: table-row;
    vertical-align: inherit;
    border-color: inherit;
}
.slide-body .li-des td{
    width: 180px;
    height: 60px;
    vertical-align: top;
    display: table-cell;
}

</style>
