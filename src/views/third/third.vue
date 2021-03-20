<template>
  <div class="third">
    <div class="chat">
      <div class="chat-title">
        <h1>知识科普机器人</h1>
        <!-- <h2></h2> -->
        <figure class="avatar">
          <img src="../../assets/img/chat/robot.png" alt="">
        </figure>
      </div>
      <div class="messages">
        <div class="messages-content"></div>
      </div>
      <div class="message-box">
        <textarea type="text" class="message-input" placeholder="请输入信息..."></textarea>
        <button  type="submit" class="message-submit">发送</button>
      </div>

    </div>
    <!-- <div class="bg"></div> -->
  </div>
</template>

<script>
import chat from 'assets/js/chat.js'
export default {
    name:'Third',
    data(){
      return {
        aaaaa:'dfsf'
      }
    },
    mounted(){
      chat()
    }
}
</script>

<style lang="scss" >
/*--------------------
Mixins
--------------------*/
.third{
    background-image: linear-gradient(
        115deg,
        rgba(58, 58, 158, 0.8),
        rgba(136, 136, 206, 0.7)
      );

}
@mixin center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

@mixin ball {
  @include center;
  content: '';
  display: block;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: rgba(255, 255, 255, .5);
  z-index: 2;
  margin-top: 4px;
  animation: ball .45s cubic-bezier(0, 0, 0.15, 1) alternate infinite;
}


/*--------------------
Body
--------------------*/
*,
*::before,
*::after {
  box-sizing: border-box;
}

html,
body {
  height: 100%;
  width:100%;
}


// body {
//   background: linear-gradient(135deg, #044f48, #2a7561);
//   background-size: cover;
//   font-family: 'Open Sans', sans-serif;
//   font-size: 12px;
//   line-height: 1.3;
//   overflow: hidden;
// }
.third{
  width: 100%;
  height: 100%;
}
.bg {
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 1;
  background-image: linear-gradient(
        115deg,
        rgba(58, 58, 158, 0.8),
        rgba(136, 136, 206, 0.7)
      );
  // background: url('https://images.unsplash.com/photo-1451186859696-371d9477be93?crop=entropy&fit=crop&fm=jpg&h=975&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=1925') no-repeat 0 0;
  filter: blur(80px);
  transform: scale(1.2);
}


/*--------------------
Chat
--------------------*/
.chat {
  @include center;
  width: 700px;
  height: 80vh;
  max-height: 700px;
  z-index: 2;
  overflow: hidden;
  box-shadow: 0 5px 30px rgba(0, 0, 0, .2);
  background: rgba(0, 0, 0, .5);
  border-radius: 20px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}


/*--------------------
Chat Title
--------------------*/
.chat-title {
  flex: 0 1 45px;
  position: relative;
  z-index: 2;
  background: rgba(0, 0, 0, 0.2);
  color: #fff;
  text-transform: uppercase;
  text-align: left;
  padding: 10px 10px 10px 50px;
 
  h1, h2 {
    font-weight: normal;
    font-size: 14px;
    margin-bottom: 2px;
    padding: 0;
  }
  
  h2 {
    color: rgba(255, 255, 255, .5);
    font-size: 8px;
    letter-spacing: 1px;
  }
  
  .avatar {
    position: absolute;
    z-index: 1;
    top: 8px;
    left: 9px;
    border-radius: 50%;
    width: 35px;
    height: 35px;
    overflow: hidden;
    margin: 0;
    padding: 0;
    border: 2px solid rgba(255, 255, 255, 0.24);
    
    img {
      width: 100%;
      height: auto;
    }
  }
}


/*--------------------
Messages
--------------------*/
.messages {
  flex: 1 1 auto;
  color: rgba(255, 255, 255, .5);
  overflow: hidden;
  position: relative;
  width: 100%;
  
  & .messages-content {
    position: absolute;
    top: 0;
    left: 0;
    height: 101%;
    width: 100%;
  }

  
  .message {
    clear: both;
    float: left;
    padding: 6px 10px 7px;
    border-radius: 10px 10px 10px 0;
    background: rgba(0, 0, 0, .3);
    margin: 8px 0;
    font-size: 13px;
    line-height: 1.4;
    margin-left: 35px;
    position: relative;
    text-shadow: 0 1px 1px rgba(0, 0, 0, .2);
    
    .timestamp {
      position: absolute;
      bottom: -15px;
      font-size: 9px;
      color: rgba(255, 255, 255, .3);
    }
    
    &::before {
      content: '';
      position: absolute;
      bottom: -6px;
      border-top: 6px solid rgba(0, 0, 0, .3);
      left: 0;
      border-right: 7px solid transparent;
    }
    
    .left-head{
      left:-37px;
    }
    .right-head{
      right: -72px;
    }
    .avatar {
      position: absolute;
      z-index: 1;
      bottom: -15px;
      // left: -35px;
      border-radius: 30px;
      width: 33px;
      height: 33px;
      overflow: hidden;
      margin: 0;
      padding: 0;
      border: 2px solid rgba(255, 255, 255, 0.24);
      margin-right: 35px;
    
      img {
        width: 100%;
        height: auto;
      }
    }
    
    &.message-personal {
      margin-right: 35px;
      display: flex;
      flex-direction: row-reverse;
      float: right;
      color: #fff;
      text-align: left;
      background: linear-gradient(120deg, #248A52, #257287);
      border-radius: 10px 10px 0 10px;
      &.right-msg{

      }
      
      &::before {
        left: auto;
        right: 0;
        border-right: none;
        border-left: 5px solid transparent;
        border-top: 4px solid #257287;
        bottom: -4px;
      }
    }
    
    &:last-child {
      margin-bottom: 30px;
    }
    
    &.new {
      flex-direction: row-reverse;
      transform: scale(0);
      transform-origin: 0 0;
      animation: bounce 500ms linear both;
    }
    
    &.loading {

      &::before {
        @include ball;
        border: none;
        animation-delay: .15s;
      }

      & span {
        display: block;
        font-size: 0;
        width: 20px;
        height: 10px;
        position: relative;

        &::before {
          @include ball;
          margin-left: -7px;
        }

        &::after {
          @include ball;
          margin-left: 7px;
          animation-delay: .3s;
        }
      }
    }
    
  }
}


/*--------------------
Message Box
--------------------*/
.message-box {
  flex: 0 1 40px;
  width: 100%;
  background: rgba(0, 0, 0, 0.3);
  padding: 10px;
  position: relative;
  
  & .message-input {
    overflow: hidden;
    background: none;
    border: none;
    outline: none!important;
    resize: none;
    color: rgba(255, 255, 255, .7);
    font-size: 13px;
    height: 30px;
    margin: 0;
    padding-right: 20px;
    width: 600px;
  }
  
  textarea:focus:-webkit-placeholder{
      color: transparent;
  }
  
  & .message-submit {
    position: absolute;
    z-index: 1;
    top: 15px;
    right: 10px;
    color: #fff;
    border: none;
    background: #248A52;
    font-size: 13px;
    text-transform: uppercase;
    line-height: 1;
    padding: 6px 10px; 
    border-radius: 10px;
    outline: none!important;
    transition: background .2 s ease;
    
    &:hover {
      background: #1D7745;
    }
  }
}


/*--------------------
Custom Srollbar
--------------------*/
.mCSB_scrollTools {
  margin: 1px -3px 1px 0;
  opacity: 0;
}

.mCSB_inside > .mCSB_container {
  margin-right: 0px;
  padding: 0 10px;
  padding-bottom: 20px;
}

.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar {
  background-color: rgba(0, 0, 0, 0.5)!important;
}


/*--------------------
Bounce
--------------------*/
@keyframes bounce { 
  0% { transform: matrix3d(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  4.7% { transform: matrix3d(0.45, 0, 0, 0, 0, 0.45, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  9.41% { transform: matrix3d(0.883, 0, 0, 0, 0, 0.883, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  14.11% { transform: matrix3d(1.141, 0, 0, 0, 0, 1.141, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  18.72% { transform: matrix3d(1.212, 0, 0, 0, 0, 1.212, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  24.32% { transform: matrix3d(1.151, 0, 0, 0, 0, 1.151, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  29.93% { transform: matrix3d(1.048, 0, 0, 0, 0, 1.048, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  35.54% { transform: matrix3d(0.979, 0, 0, 0, 0, 0.979, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  41.04% { transform: matrix3d(0.961, 0, 0, 0, 0, 0.961, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  52.15% { transform: matrix3d(0.991, 0, 0, 0, 0, 0.991, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  63.26% { transform: matrix3d(1.007, 0, 0, 0, 0, 1.007, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  85.49% { transform: matrix3d(0.999, 0, 0, 0, 0, 0.999, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  100% { transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); } 
}


@keyframes ball { 
  from {
    transform: translateY(0) scaleY(.8);
  }
  to {
    transform: translateY(-10px);
  }
}

</style>