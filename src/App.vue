<template>
  <div id="app">
    <router-view ></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {
    
  }
}
</script>

<style>
@import "./assets/css/normalize.css";
@import "./assets/css/fontclass.css";
*{
  box-sizing: border-box;
}
#app{
  width:100%;
  height: 100%;
}
body{
  /* background: #EAF3FD; */
  
}
</style>
