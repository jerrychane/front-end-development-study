<template>
  <div>
    <div>Vue-Resource 请求</div>
    <div> ----------------------------- </div>
       
  </div>
</template>
<script>
  export default {
    data(){
      return {
        
      }
    },
    methods:{
    
     
    },
    mounted(){
      this.$http.get('https://www.easy-mock.com/mock/5d05cb831950454aae03e278/example/mock').then(response =>{
        //get body data
        console.log(response.body);
      },response=>{
        //error callback
      });
      // get request with params
      this.$http.get('url',{params:{foo:'bar'},headers:{'x-Custom':'...'}}).then(response =>{
        //success callback
      },response=>{
        //error callback
      });
     // post request with params
     this.$http.post('https://www.easy-mock.com/mock/5d05cb831950454aae03e278/example/upload',{foo:'bar'}).then(response=>{
      console.log(response.body);
     },response=>{
      //error callback
     });
     }
    }
</script>
