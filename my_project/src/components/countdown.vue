<template>
  <div>
    <div>倒计时组件</div>
    <div> ------------------------- </div>
     <p :style="{color:col}">{{ time }}</p>

  </div>
</template>
<script>
  export default {
    data(){
      return {
        time:10
      }
    },
    mounted(){
      var vm = this;
      var t = setInterval(function(){
        vm.time--;
        if(vm.time===0){
          clearInterval(t);
          vm.$emit('end');
        }
      },1000)
    },
    props:{
      col:{
        type:String,
        default:"#000"
      }
    }
  }
</script>