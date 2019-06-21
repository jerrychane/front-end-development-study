<template>
  <div>
    <div>事件处理器</div>
    <div> ------------------------- </div>
    <div id="example-1">
      <button @click='counter +=1'>增加1</button>
      <p> 介个按钮被点击了 {{counter}} 次</p>
    </div>
    <div> ------------------------- </div>
    <div id="example-2">
      <!-- `greet`是在下面定义的方法名 -->
      <button @click='greet'>增加1</button>
      <p> 介个按钮被点击了 {{counter}} 次</p>
    </div>
     <div> ------------------------- </div>
    <div id="example-3">
      <!-- `say`是在下面定义的方法名 -->
      <button @click="say('hi')">say</button>
    </div>

    <div> ------------------------- </div>
    <!-- `dothis2`是在下面定义的方法名 -->
     <div @click="dothis2">
      <!-- `dothis`是在下面定义的方法名 .stop阻止事件冒泡-->
      <button @click.stop="dothis">dothis</button>
    </div>

  </div>
</template>
<script>
  export default {
    data(){
      return {
        counter:0
      }
    },
    methods:{
      greet(){
        this.counter+=1;
      },
      say(h){
        alert(h);
      },
      dothis2(){
        alert('dothis2');
      },
      dothis(){
        alert('dothis');
      }
    },
    mounted(){
      //alert(this.$route.params.userId);
      alert(this.$route.query.plan);
    }
  }
</script>