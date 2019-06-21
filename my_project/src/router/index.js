import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Demo02 from '@/pages/demo02/index.vue'
import Demo03 from '@/pages/demo03/index.vue'
import Demo04 from '@/pages/demo04/index.vue'
import Demo05 from '@/pages/demo05/index.vue'
import Demo06 from '@/pages/demo06/index.vue'
import Demo07 from '@/pages/demo07/index.vue'
import Demo08 from '@/pages/demo08/index.vue'
import Demo09 from '@/pages/demo09/index.vue'
import Demo10 from '@/pages/demo10/index.vue'
import Demo11 from '@/pages/demo11/index.vue'
import Demo12 from '@/pages/demo12/index.vue'
import Demo13 from '@/pages/demo13/index.vue'
import Demo14 from '@/pages/demo14/index.vue'
import Demo15 from '@/pages/demo15/index.vue'
import Demo16 from '@/pages/demo16/index.vue'
import Demo17 from '@/pages/demo17/index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/demo02',
      name: 'demo02',
      component: Demo02
    },
    {
      path: '/demo03',
      name: 'demo03',
      component: Demo03
    },
    {
      path: '/demo04',
      name: 'demo04',
      component: Demo04
    },
    {
      path: '/demo05',
      name: 'demo05',
      component: Demo05
    },
    {
      path: '/demo06',
      name: 'demo06',
      component: Demo06
    },
    {
      path: '/demo07',
      name: 'demo07',
      component: Demo07
    },
    {
      path: '/demo08',
      name: 'demo08',
      component: Demo08
    },
    {
      path: '/demo09/:userId',
      name: 'demo09',
      component: Demo09
    },
    {
      path: '/demo10',
      name: 'demo10',
      component: Demo10
    },
    {
      path: '/demo11',
      name: 'demo11',
      component: Demo11
    },
    {
      path: '/demo12',
      name: 'demo12',
      component: Demo12
    },
    {
      path: '/demo13',
      name: 'demo13',
      component: Demo13
    },
    {
      path: '/demo14',
      name: 'demo14',
      component: Demo14
    },
    {
      path: '/demo15',
      name: 'demo15',
      component: Demo15
    },
    {
      path: '/demo16',
      name: 'demo16',
      component: Demo16
    },
    {
      path: '/demo17',
      name: 'demo17',
      component: Demo17
    }

  ]
})
