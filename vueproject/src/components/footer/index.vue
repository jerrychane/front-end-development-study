<template>
  <div class="c-footer">
    <ul class="footer-ul">
      <li v-for="item in arrList"><img :src="item.imgUrl"><span>{{item.title}}</span></li>
    </ul>
  </div>
</template>
<script>
  import homeImg from '@/assets/home.png' 
  import findImg from '@/assets/find.png' 
  import downImg from '@/assets/down.png' 
  import mineImg from '@/assets/mine.png' 
  
  export default {
    data(){
      return {
        arrList:[]
      }
    },
    mounted(){
      this.arrList = [{
           imgUrl:homeImg,
           title:'首页'
        },
        {
           imgUrl:findImg,
           title:'发现'
        },
        {
           imgUrl:downImg,
           title:'下载'
        },
        {
           imgUrl:mineImg,
           title:'我的'
        }
        ]
    }
  }
</script>
<style scoped>
    .c-footer{
      position: fixed;
      z-index: 3;
      width: 375px;
      background: #fff;
      border-top: 1px solid #F3F5F7;
      bottom: 0;
  }
  .footer-ul{
    display: flex;
  }
  .footer-ul li{
    display: flex;
    height: 50px;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 10px;
  }
  .footer-ul li img{
    width: 24px;
  }
</style>