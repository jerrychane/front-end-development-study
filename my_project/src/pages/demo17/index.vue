<template>
  <div>
    <div>移动组件库MintUI</div>
    <div> ----------------------------- </div>
      <mt-tabbar>
  <mt-tab-item id="tab1">
    <img slot="icon" src="../../assets/100x100.png">
    tab1
  </mt-tab-item>
  <mt-tab-item id="tab2">
    <img slot="icon" src="../../assets/100x100.png">
    tab2
  </mt-tab-item>
  <mt-tab-item id="tab3">
    <img slot="icon" src="../../assets/100x100.png">
    tab3
  </mt-tab-item>
  <mt-tab-item id="tab4">
    <img slot="icon" src="../../assets/100x100.png">
    tab4
  </mt-tab-item>
</mt-tabbar>

  </div>
</template>
<script>
import { Toast ,MessageBox,Tabbar, TabItem } from 'mint-ui';
import Vue from 'vue'

Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);
  export default {
    data(){
      return {
        
      }
    },
    methods:{
             },
    mounted(){
      // Toast('提示信息');
      // MessageBox('提示', '操作成功');
    }
    }
</script>
