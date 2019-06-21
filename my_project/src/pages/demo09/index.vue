<template>
  <div>
    <div>表单控件绑定 即双向绑定</div>
    <div> ------------------------- </div>
    <input v-model="message" >
    <p>Message is :{{ message }}</p>
    <br>

    <div> ----------多个勾选框--------------- </div>
    <input type="checkbox" value="Jack" v-model="checkedNames" >
    <input type="checkbox" value="Boy" v-model="checkedNames" >
    <input type="checkbox" value="Lucy" v-model="checkedNames" >
    <label for="jack"> Jack </label>
    <br>
    <span>Check Names :  {{checkedNames}}</span>
    <br>

    <div> ----------选择列表--------------- </div>
    <div>
      <select v-model="selected">
        <option disabled value="">请选择</option>
        <option>A</option>
        <option>B</option>
        <option>C</option>
        <option>D</option>
      </select>
      <span>Selected:{{ selected }}</span>
    </div>
  </div>
</template>
<script>
  export default {
    data(){
      return {
         message:'hello world',
         checkedNames:[],
         selected:''
      }
    },
    mounted(){
      alert(this.$route.params.userId);
      // alert(this.$route.query.plan);
    }
  }
</script>