<template>
  <div class="home-page">
    <div>
        <v-header></v-header>
        <ul class="nav">
          <li v-for="item in arrList"><img :src="item.imgUrl"><span>{{item.title}}</span></li>
        </ul>
        <v-footer></v-footer>
    </div>
  </div>
</template>
<script>
  import Header        from '@/components/header/'
  import Footer        from '@/components/footer/'

  import webImg        from '@/assets/web.png'
  import webserviceImg from '@/assets/webservice.png'
  import mobileImg     from '@/assets/mobile.png'
  import dataImg       from '@/assets/data.png'
  import bigdataImg    from '@/assets/bigdata.png'
  export default {
    data(){
      return {
        arrList:[]
      }
    },
    mounted(){
      this.arrList = [{
        imgUrl:webImg,
        title:"前端开发"
      },
      {
        imgUrl:webserviceImg,
        title:"后端开发"
      },
      {
        imgUrl:mobileImg,
        title:"移动端开发"
      },
      {
        imgUrl:dataImg,
        title:"数据库"
      },
      {
        imgUrl:bigdataImg,
        title:"云计算"
      }
      ]
    },
    components:{
      'v-header':Header,
      'v-footer':Footer
    }
  }
</script>
<style scoped>
.home-page .nav{
    height: 100px;
    padding-top: 44px;
    background: #F3F5F7;
    overflow-x: scroll;
    white-space: nowrap;
    font-size: 0;
  }
  .nav li{
    width: 88px;
    display: inline-block;
    text-align: center;
    font-size: 14px;
  }
  .nav li img{
    display: block;
    width: 32px;
    margin: 20px auto 12px;
  }
</style>