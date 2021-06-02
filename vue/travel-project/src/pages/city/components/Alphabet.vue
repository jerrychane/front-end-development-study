<template>
    <ul class="list" >
        <li
        class="item"
        v-for="(item,key) of cities"
        :key="key"
        @click="handleLetterClick"
        @touchstart="handleTouchStart"
        @touchmove="handleTouchMove"
        @touchend="handleTouchEnd"
        >
        {{key}}
        </li>
    </ul>
</template>
<script>
export default {
  name: "CityAlphabet",
  props: {
    cities: Object
  },
  data () {
    return {
      touchStatus: false
    }
  },
  methods: {
    handleLetterClick (e) {
      this.$emit("change", e.target.innerText)
    },
    handleTouchStart () {
      this.touchStatus = true
    },
    handleTouchMove () {
      console.log(this.touchStatus)
    },
    handleTouchEnd () {
      this.touchStatus = false
    }
  }
}
</script>
<style lang="stylus" scoped>
@import "~styles/variables.styl"
.list
  display flex
  flex-direction column
  justify-content center
  position absolute
  top 1.58rem
  right 0
  bottom 0
  width .4rem
  .item
    text-align center
    line-height .4rem
    color $bgColor
</style>
