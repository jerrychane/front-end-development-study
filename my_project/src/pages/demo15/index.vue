<template>
  <div>
    <div>Slot插槽</div>
    <div> ----------------------------- </div>
      <slots>
        <div> 123 </div>
        <div> 234 </div>
        <p>6666</p>
        <p slot="bottom">88888</p>
      </slots>
  </div>
</template>
<script>
import slots from '@/components/slot.vue';
  export default {
    data(){
      return {
        msg:'123',   
      }
    },
    methods:{
    
     
    },
    components:{
      slots
    }
     
  }
</script>
