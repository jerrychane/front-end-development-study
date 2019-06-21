<template>
  <div>
    <div>状态管理Vuex</div>
    <div> ----------------------------- </div>
     <div> {{ msg }}</div>
     <button @click="change"> 修改数据 </button>
  </div>
</template>
<script>
  export default {
    data(){
      return {
        msg:'123',   
      }
    },
    methods:{
      change(){
      // vuex 取数据
      // this.msg = this.$store.state.count;
      // vuex 修改公共数据
      this.$store.dispatch('inc',10000);
      this.msg = this.$store.state.num;
    }
    }
    
  }
</script>
