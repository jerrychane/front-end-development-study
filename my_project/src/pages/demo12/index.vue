<template>
  <div>
    <div>过渡效果</div>
    <div> ------------------------- </div>
    <div id="demo">
      <button @click="show = !show">
        Toggle
      </button>
      <transition name="fade">
        <p v-if="show"> hello </p>
      </transition>
    </div>
  </div>
</template>
<script>
  export default {
    data(){
      return {
          show:true
      }
    },
  
  methods:{
     
   }
  }
</script>
<style>
  .fade-enter-active,.fade-leave-active {
    transition:opacity .5s;
  }
  .fade-enter,fade-leave-to {
    opacity:0;
  }
  .fade-enter-to {
    opacity:1;
  }
</style>