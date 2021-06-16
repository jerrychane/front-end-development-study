// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue"
import App from "./App"
import VueAwesomeSwiper from "vue-awesome-swiper"
import router from "./router"
import fastClick from "fastclick"
import store from "./store"
import "styles/reset.css"
// 解决移动端1px问题
import "styles/border.css"
import "styles/iconfont.css"
import "swiper/dist/css/swiper.css"

Vue.use(VueAwesomeSwiper)

Vue.config.productionTip = false
fastClick.attach(document.body)
/* eslint-disable no-new */
// old
// new Vue({
//   el: "#app",
//   router,
//   store,
//   components: { App },
//   template: "<App/>"
// })

// new
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app")
