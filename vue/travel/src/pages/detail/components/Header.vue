<template>
    <div>
      <router-link tag="div" to="/" class="header-abs" v-show="showAbas">
       <div class="iconfont header-abs-back">&#xe624;</div>
      </router-link>
      <div class="header-fixed" v-show="!showAbas" :style="opacityStyle">
         <router-link to="/">
        <div class="iconfont header-fixed-back">&#xe624;</div>
        </router-link>
        景点详情
      </div>
    </div>
</template>
<script>
export default {
  name: "DetailHeader",
  data () {
    return {
      showAbas: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  mouted () {
    window.addEventListener("scroll", this.handleScroll)
  },
  destroyed () {
    window.removeEventListener("scroll", this.handleScroll)
  },
  methods: {
    handleScroll () {
      const top = document.documentElement.scrollTop || document.body.scrollTop || window.pageXOffset
      if (top > 60) {
        let opacity = top / 140
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = { opacity }
        this.showAbas = false
      } else {
        this.showAbas = true
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
@import "~styles/variables.styl"
.header-abs
  position absolute
  left .2rem
  top .2rem
  width .8rem
  height .8rem
  line-height .8rem
  text-align center
  border-radius .4rem
  background rgba(0, 0, 0, .8)
  .header-abs-back
    color #fff
    font-size .4rem
.header-fixed
  z-index 2
  position fixed
  top 0
  right 0
  left 0
  height $headerHeight
  line-height $headerHeight
  text-align center
  color $whiteColor
  background $bgColor
  font-size .32rem
 .header-fixed-back
   position absolute
   top 0
   left 0
   width .64rem
   text-align center
   font-size .4rem
   color $whiteColor
</style>
