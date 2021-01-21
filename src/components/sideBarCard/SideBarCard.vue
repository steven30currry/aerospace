<template>
   <div class="sidebar-all">
       <h2 class="title">{{title}}</h2>
       <ul>
           <li v-for="(item,index) in dataList" :key="index">
               <article>
                   <div class="media-text">
                       <h2>
                           <a :href="item.webHref">
                           {{item.des}}</a>
                       </h2>
                       <p>
                           <span class="tags" v-for="tag in item.tags">{{tag}}</span>
                           <time class="time">{{item.time}}</time>
                       </p>
                   </div>
                   <div class="media-icon">
                       <a :href="item.webHref">
                           <img :src="item.imgSrc" alt="">
                       </a>
                   </div>
                   
               </article>
           </li>
       </ul>
   </div>
</template>

<script>
export default {
  name:'',
  data(){
   return {

   }
  },
  props:{
      title:{
          type: String,
          default: "热闻推送"
      },
      dataList:{
          type: Array,
          default: [
              {"webHref": "https://www.sciencemag.org/news/2021/01/no-more-cuddly-selfies-our-ape-cousins-top-conservation-body-warns-scientists",
               "des": "No more cuddly selfies with our ape cousins, top conservation body warns scientists",
               "tags": ["航天","中国航天","卫星发射"],
               "time": "2020年10月21日",
               "imgSrc": "//www.sciencemag.org/sites/default/files/styles/grid_thumb_-_290x163__16_9_/public/chimps_1280p_0.jpg?itok=5V193VTf"}
          ]
      }
  }
}
</script>

<style scoped>
.sidebar-all{
    width: 100%;
    display: block;
    border: 1px solid black;
    width: 330px;
    padding: 15px;
    font-family: Roboto,Helvetica Neue,Helvetica,Arial,sans-serif;
    background: white;
}
.sidebar-all .title{
    margin-top: 0px;
    margin-bottom: 20px;
    line-height: 1;
    font-size: 1.5rem;
    color: #d40016;
    display: block;
    font-weight: bold;
    font-family: Roboto Condensed,Helvetica Neue,Helvetica,Arial,sans-serif;
    width: 100%;
    height: 24px;
}
.sidebar-all ul{
    width: 100%;
    margin: 0;
    padding: 0;
    list-style: none;
}
.sidebar-all ul>li:first-child{
    padding-top: 0px;
    border-top: 0px;
}
.sidebar-all li{
    padding: 15px 0;
    min-width: 0;
    text-align: -webkit-match-parent;
    border-top: 1px solid #e6e6e6;
}
.sidebar-all li article{
    display: flex;
    margin-top: 0;
    margin-bottom: 0;
    padding-top: 0;
    padding-bottom: 0;
    flex-flow: row nowrap;
}

.sidebar-all li article .media-icon{
    padding-right: 0;
    padding-left: 15px;
    margin-bottom: 0px;
    font-size: 1rem;
    flex: 0 0 105px;
    line-height: 0;
}
.media-icon a{
    color: #37588a;
    text-decoration: none;
    background-color: transparent;
}
.media-icon a img{
    max-width: 100%;
    height: auto;
    border: 0;
}

.media-text{
    flex: 1 1 auto;
}
.media-text>:first-child{
    margin-top: 0;
    padding-top: 0;
}
.media-text h2{
    font-size:  0.9rem;
    margin-bottom: 7.5px;
    line-height: 1.2;
    font-family: Roboto Condensed,Helvetica Neue,Helvetica,Arial,sans-serif;
}
.media-text h2 a{
    color: #37588a;
    background-color: transparent;
    cursor: pointer;
}
.media-text p{
    font-family: Roboto Condensed,Helvetica Neue,Helvetica,Arial,sans-serif;
    margin-bottom: 0;
    padding-bottom: 0;
    text-transform: uppercase;
    font-size: .75em;
    color: #666;
    margin: 0;
    width: 100%;
    line-height: 1.15;
    font-weight: 700;
}
.media-text p .tags{  
    margin-left: 4px;
}
.media-text p .tags:first-child{
    margin-left: 0;
}
.media-text p .time{
    margin-left: 7.5px;
    padding-left: 7.5px;
    border-left: 1px solid #666;
}
</style>
