<template>
  <div>
    <div> 选项数据 </div>
    <div> ---------------------------- </div>
    <div> {{ msg }} </div>
    <div> ---------------------------- </div>
    <div> computed : {{ aDouble }} </div>
    <div> ---------------------------- </div>
    <div @click = 'say("hi")'> 点击我 </div>
     <div> ---------------------------- </div>
    <div v-html = 'poetry'> </div>
  </div>
</template>

<script>
  export default {
    // data 是个函数，定义全局变量，定义的变量可以渲染到模板上即数据绑定
    data() {
      return { 
         msg :'hello world !', 
         num : 3 ,
         poetry: '<h1>《诗经国风 .周南》</h1><p>关关雎鸠，在河之洲。</p> <p> 窈窕淑女，君子好逑。</p>',
       };
     },
   // computed是一个对象，不是函数，里面包裹的是函数
    computed:{
      aDouble() {
        return this.num * 5;
      }
    },
    // methods是个对象，不是函数， 定义各种事件函数
    methods:{
        say(a){
          alert(a);
        }
    }
  }
</script>

<style>
  
</style>