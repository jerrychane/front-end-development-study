<template>
  <div>
    <div>计算属性</div>
    <div>----------------------------------</div>
    <div> {{ reverseMsg }} </div>
  </div>
</template>
<script>
  export default  {
      data(){
        return {
          msg:'hello world'
        }
      },
      computed:{
        reverseMsg() {
          return this.msg.split('').reverse().join('');
        }
      }
  }
</script>