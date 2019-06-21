<template>
  <div>
    <div>Vue Router</div>
    <div> -----------路由跳转，路由传参-------------- </div>
    <router-link to="/demo09">demo09</router-link>
    <router-link :to="{name:'demo09',params:{userId:123}}">demo09 params传递参数</router-link>
    <router-link :to="{name:'demo09',params:{userId:123},query:{plan:'private'}}">demo09 query 传递参数</router-link>
    <br>
    <br>
    <br>
    <div> -----------js函数跳转传参-------------- </div>
    <button @click="jump"> 跳转页面 </button>
  </div>
</template>
<script>
  export default {
    data(){
      return {
           
      }
    },
  
  methods:{
     jump(){
        // this.$router.push({path:'/demo08'});
        // this.$router.push({name:'demo08',params:{userId:456}});// 写name的时候前面不用写"/"
        this.$router.push({name:'demo08',params:{userId:456},query:{plan:'private'}});
     }
   }
  }
</script>
