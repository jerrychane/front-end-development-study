<template>
  <div>
    <div>自定义组件</div>
    <div> ------------------------- </div>
     <count-down col="blue" @end="ending" ></count-down>

  </div>
</template>
<script>
  import countdown from '@/components/countdown.vue'

  export default {
    data(){
      return {

      }
    },
  // 通过components注册组件
  components:{
    'count-down': countdown
  },
  methods:{
     ending(){
       alert("已经结束了！")
     }
  }
  }
</script>