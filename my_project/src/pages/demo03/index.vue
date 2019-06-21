<template>
  <div>
    <div> 模板语法 </div>
    <div> -------------------------- </div>
    <div> data : {{ msg }} </div>
    <div> -------------------------- </div>
    <div> {{ number + 1 }} </div>
    <div> -------------------------- </div>
    <div v-html='rawHtml'> </div>
    <div> -------------------------- </div>
    <div v-bind:class = 'red'> 222222  </div>
    <div v-on:click = 'say("hi")'> 点击我 </div>
    <!--事件绑定，v-on:可以简写为@-->
    <div @click = 'change()'> 修改颜色</div>
    <div> -------------------------- </div>
    <div> {{ message | capitalize }}</div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        msg:'helloworld!',
        number:1,
        rawHtml:'<span>3333333</span>',
        red:'red active',
        message:'message'
      }
    },

    methods:{
      change() {
        this.red = 'blue';
      },
      say(msg) {
        alert(msg);
      }
    },
    //过滤器
    filters:{
      capitalize() {
        return '123';
      }
    }
  }

</script>