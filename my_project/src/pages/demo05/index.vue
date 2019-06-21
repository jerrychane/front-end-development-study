<template>
  <div>
    <div>Class与Style绑定</div>
    <div> ------------------------------------- </div>
    <!-- 第一种绑定方式 直接绑定-->
    <div class="static" v-bind:class="{'active':isActive,'text-danger':hasError}"> class1 </div>

    <!-- 第二种绑定方式 对象形式-->
    <div :class='classObject'> class2 </div>

    <!-- 第三种绑定方式 数组形式-->
    <div v-bind:class="[activeClass,errorClass]"> class3 </div>

    <div> ------------------------------------- </div>
    <div v-bind:style="{'color':activeColor,'fontSize':fontSize + 'px'}"> style1 </div>
    <div v-bind:style="styleObject"> style2 </div>
    <div v-bind:style="[baseStyles,overridingStyles]"> style3 </div>

  </div>
</template>

<script>
  export default {
    data(){
      return {
          isActive:true,
          hasError:true,
          classObject:{
            'active':true,
            'text-danger':false
          },
          activeClass:'active',
          errorClass:'text-danger',

          activeColor:'blue',
          fontSize:30,
          styleObject:{
            'color':'red',
            'fontSize':'43px'
          },
          baseStyles:{'color':'green'},
          overridingStyles:{'fontSize':'50px'},
      }
    },

    methods:{

    }
  }
</script>