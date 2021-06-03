<template>
  <div>
     <home-header></home-header>
     <home-swiper :list="swiperList"></home-swiper>
     <home-icons :list="iconList"></home-icons>
     <home-recommand :list="recommendList"></home-recommand>
     <home-weekend :list="weekendList"></home-weekend>
  </div>
</template>

<script>
import HomeHeader from "./components/Header"
import HomeSwiper from "./components/Swiper"
import HomeIcons from "./components/Icons"
import HomeRecommand from "./components/Recommand"
import HomeWeekend from "./components/Weekend"
import axios from "axios"
import {mapState} from "vuex"

export default {
  name: "Home",
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommand,
    HomeWeekend
  },
  computed: {
    ...mapState(["city"])
  },
  data () {
    return {
      lastCity: "",
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: []
    }
  },
  mounted () {
    console.log("mounted")
    this.lastCity = this.city
    this.getHomeInfo()
  },
  activated () {
    console.log("activated")
    if (this.lastCity !== this.city) {
      this.lastCity = this.city
      this.getHomeInfo()
    }
  },
  methods: {
    getHomeInfo () {
      axios.get("/api/index.json?city=" + this.city)
        .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        console.log("data", data)
        this.swiperList = data.swiperList
        this.iconList = data.iconList
        this.recommendList = data.recommendList
        this.weekendList = data.weekendList
      }
    }
  }
}
</script>

<style lang="css" scoped>
.home {
  font-size: 50px;
}
</style>
