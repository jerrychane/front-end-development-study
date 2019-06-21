<template>
  <div>
    <div>Vue 中 DOM 操作</div>
    <div> ------------------------- </div>
    <div ref="head"></div>
  </div>
</template>
<script>
  export default {
    data(){
     return {

      }
    },
    //在mounted中进行DOM操作
    mounted(){
      // DOM已经生成
      this.$refs.head.innerHTML = 'hello world';
      console.log(this.$refs);//Object,返回元素对象
    },
    methods:{
      
    }
  }
</script>