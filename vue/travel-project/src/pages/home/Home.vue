<template>
  <div>
     <home-header></home-header>
     <home-swiper></home-swiper>
     <home-icons></home-icons>
     <home-recommand></home-recommand>
     <home-weekend></home-weekend>
  </div>
</template>

<script>
import HomeHeader from "./components/Header"
import HomeSwiper from "./components/Swiper"
import HomeIcons from "./components/Icons"
import HomeRecommand from "./components/Recommand"
import HomeWeekend from "./components/Weekend"
import axios from "axios"

export default {
  name: "Home",
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommand,
    HomeWeekend
  },
  mounted () {
    this.getHomeInfo()
  },
  methods: {
    getHomeInfo () {
      axios.get("/api/index.json")
        .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
      console.log(res)
    }
  }
}
</script>

<style lang="css" scoped>
.home {
  font-size: 50px;
}
</style>
