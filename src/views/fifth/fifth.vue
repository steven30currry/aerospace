<template>
  <div class="fifth">
     <top-bar></top-bar>
     <div class="container5">
  <header class="header">
    <!-- <h1 id="title" class="text-center">航天器知识图谱</h1> -->
    <!-- <p id="description" class="description text-center">
      该知识图谱是以航天器为根节点进行构建的
    </p> -->
  </header>
  <form id="survey-form">
    <div class="form-group">
      <label id="name-label" for="name">请选择航天器类别</label>
      
       <div class="product-labels">

                  <div style="padding-left:10px" class="product-labels__group">
                    <label v-for="(item,i) in names"  class="product-labels__item">
                      <input v-model="cur_name" :value="item" type="radio" class="product-labels__checkbox" name="type5" >
                      <span class="product-labels__txt">{{names[i]}}</span>
                    </label>

                  </div>

                </div>
    </div>
     <div class="form-group">
      <p>选择节点深度</p>
      <select v-model="depth" id="dropdown" name="role" class="form-control" required>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
    </div>
     <div class="form-group">
      <label id="email-label" for="div3">输入显示的节点个数(预估)</label>
      <input  
        v-model="nums"
        type="number"
        min="0"
        name="div3"
        id="div3"
        class="form-control"
        placeholder="输入显示的节点个数"
        required
      />
    </div>
   




    
    <div class="form-group">
      <!-- <button @click="jump(cur_name,depth,nums)"  class="submit-button">
          查询
      </button> -->
       <el-button
       class="submit-button"
        type="primary"
        @click="jump(cur_name,depth,nums)"
        v-loading.fullscreen.lock="fullscreenLoading">
        查询
      </el-button>
    </div>
  </form>
</div>

  </div>
 
  
</template>

<script>
import TopBar from 'components/topBar/Topbar'
import {getGraphResponse} from "network/graphrequest.js";
import Forth from '../forth/forth'


export default {
    name:"Fifth",
    data(){
      return {
        fullscreenLoading: false,
        names:["科学探测与技术试验卫星","返回式卫星","通信广播卫星",
        "气象卫星","中继卫星","导航定位卫星","月球探测器","火星探测器",
        "深空探测器","载人飞船","货运飞船","风月飞船","航天飞机","空间站"],
        cur_name:"",
        depth:"",
        nums:"",
        nodes:[],
        links:[]
      }
    },
    components:{
      TopBar,
      Forth
    },
    methods:{
      
       jump(cur_name,depth,nums){
        this.fullscreenLoading=true;
        getGraphResponse(cur_name,depth,nums).then(
          res => {
            var newres=res.data.data
            console.log(newres)
            this.links=newres.links
            this.nodes=newres.nodes
            this.$router.push({path:'/forth',query:{
              links:newres.links,
              nodes:newres.nodes
            }})
            this.fullscreenLoading=false
          },
          err => alert('网络错误')
        )
      },
    }
}
</script>

<style  lang="scss" scoped>
  @import url('https://fonts.googleapis.com/css?family=Poppins:200i,400&display=swap');
  :root {
    --color-white: #f3f3f3;
    --color-darkblue: #1b1b32;
    --color-darkblue-alpha: rgba(27, 27, 50, 0.8);
    --color-green: #37af65;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  //把body改成fifth就好了
  .fifth {
    font-family: 'Poppins', sans-serif;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.4;
    color:  #f3f3f3;
    margin: 0;
  }

  /* mobile friendly alternative to using background-attachment: fixed */
  .fifth::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: -1;
    background: #1b1b32;
    background-image: linear-gradient(
        115deg,
        rgba(58, 58, 158, 0.8),
        rgba(136, 136, 206, 0.7)
      );
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }
  .container5 form{
    padding: 2.5rem 2.5rem 1rem 2.5rem;
  }
  h1 {
    font-weight: 400;
    line-height: 1.2;
  }

  p {
    font-size: 1.125rem;
  }

  h1,
  p {
    margin-top: 0;
    margin-bottom: 0.5rem;
  }

  label {
    display: flex;
    align-items: center;
    font-size: 1.125rem;
    margin-bottom: 0.5rem;
  }

  input,
  button,
  select,
  textarea {
    margin: 0;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
  }

  button {
    border: none;
  }

  .container5 {
    width: 100%;
    margin: 3.125rem auto 0 auto;
  }

  @media (min-width: 576px) {
    .container5 {
      max-width: 540px;
    }
  }

  @media (min-width: 768px) {
    .container5 {
      max-width: 720px;
    }
  }

  .header {
    padding: 0 0.625rem;
    margin-bottom: 1.875rem;
  }

  .description {
    font-style: italic;
    font-weight: 200;
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.4);
  }

  .clue {
    margin-left: 0.25rem;
    font-size: 0.9rem;
    color: #e4e4e4;
  }

  .text-center {
    text-align: center;
  }

  /* form */

  form {
    background: rgba(27, 27, 50, 0.8);
    padding: 2.5rem 0.625rem;
    border-radius: 0.25rem;
  }

  @media (min-width: 480px) {
    form {
      padding: 2.5rem;
    }
  }

  .form-group {
    margin: 0 auto 1.25rem auto;
    padding: 0.25rem;
  }

  .form-control {
    display: block;
    width: 100%;
    height: 2.375rem;
    padding: 0.375rem 0.75rem;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  }

  .form-control:focus {
    border-color: #80bdff;
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
  }

  .input-radio,
  .input-checkbox {
    display: inline-block;
    margin-right: 0.625rem;
    min-height: 1.25rem;
    min-width: 1.25rem;
  }

  .input-textarea {
    min-height: 120px;
    width: 100%;
    padding: 0.625rem;
    resize: vertical;
  }

  .submit-button {
    margin-top: 30px;
    display: block;
    width: 100%;
    padding: 0.75rem;
    background: #37af65;
    color: inherit;
    border-radius: 2px;
    cursor: pointer;
  }

/* 以下是选择器css */
.product-labels__item:hover{
  color: gold;
}
.product {

  &-labels {

    &__checkbox {
      display: none;

      .product-labels__txt:hover{
        background: gold;
      }
      &:checked + .product-labels__txt {
        border-color: #15c3da;
        padding: 10px 13px;
      }

    }

  

    &__group {
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
      margin-bottom: 15px;

      @media screen and (max-width: 992px) {
        justify-content: center;
      }


      &:last-child {
        margin-bottom: 0;
      }

    }
    //间距
    &__item {
      margin: 3px;
      cursor: pointer;

      &:first-child {
        margin-left: 0;
      }

    }

    &__txt {
      display: block;
      border: 2px solid transparent;
      font-size: 14px;
      padding: 10px 20px;
      padding-left: 0;
      border-radius: 50px;
      transition: all .3s;
      letter-spacing: 2px;
    }

  }



}

</style>