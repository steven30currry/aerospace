<template>
  <div class="navbar">
    <input type="checkbox" id="active">
    <label for="active" class="menu-btn">
        <i class="iconfont icon-menu "></i>
    </label>
    <div class="wrapper">
        <ul class="menu">
        <li><a @click="first" href="#">天文天象</a></li>
        <li><a @click="second" href="#">天体物理</a></li>
        <li><a @click="third" href="#">近地轨道</a></li>
        <li><a @click="forth" href="#">深空探测</a></li>
        <li><a @click="back" href="#">返回</a></li>
    </ul>
    </div>
  </div>
</template>

<script>
export default {
    name:"NavBar",
    date(){
        return{

        }
    },
    methods:{
        first(){
            this.$router.push('/firstview')
        },
        second(){
            this.$router.push('/secondview')
        },
        third(){
            this.$router.push('/thirdview')
        },
        forth(){
            this.$router.push('/fouthview')
        },
        back(){
            this.$router.push('/home')
        }
    }
}

</script>
    
<style>
 .navbar{
     margin: 0;
     padding: 0;
     box-sizing: border-box;
     font-family: 'Poppins',sans-serif;
 }
 .wrapper{
     position: fixed;
     top: 0;
     left: 0;
     height: 100%;
     width: 100%;
     background: linear-gradient(-135deg,#c850c0,#4158d8);
     clip-path: circle(25px at calc(100% - 45px) 45px);
     transition: all 0.3s ease-in-out;      
     z-index: 19   

 }
 #active:checked ~ .wrapper{
     clip-path: circle(75%);
 }
 .menu-btn{
     position: fixed;
     right: 20px;
     top: 20px;
     height: 50px;
     width: 50px; 
     text-align: center;
     line-height: 50px;
     background: linear-gradient(-135deg,#c850c0,#4158d8);
     color: #fff;
     cursor: pointer;
     z-index: 20;
     border-radius: 50%;
     transition: all 0.3s ease;
 }
 #active:checked ~ .menu-btn{
     background: #fff;
     color: #4158d8;
 }
 #active:checked ~.menu-btn i:before{
     content: "\e668";
 }
 .wrapper ul{
     position: absolute;
     top: 50%;
     left: 50%;
     transform: translate(-50%,-50%);
     list-style: none;
     text-align: center;
 }
 .wrapper ul li{
     margin: 15px 0;
 }
 .wrapper ul li a{
     color: #fff;
     text-decoration: none;
     font-size: 30px;
     font-weight: 500;
     padding: 5px 50px;
     position: relative;
     line-height: 50px;
     transition:all 0.3s ease;

 }
 .wrapper ul li a:after{
     content: "";
     position: absolute;
     width: 100%;
     height: 50px;
     background: #fff;
     left: 0;
     border-radius: 50px;
     transform: scaleY(0);   
     transition:transform 0.3s ease;
     z-index: -1 ;
 }
 .wrapper ul li a:hover:after{
     transform: scaleY(1);
 }
 .wrapper ul li a:hover{
     color: #4158d8;
 }
 input{
     display: none;
 }
</style>