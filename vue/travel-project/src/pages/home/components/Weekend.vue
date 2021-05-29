<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
      <li class="item" v-for="item of list" :key="item.id">
        <div class="item-img-wrapper">
          <img :src="item.imgUrl" :alt="item.title" class="item-img" />
        </div>
        <div class="item-info border-bottom">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "Weekend",
  props: {
    list: Array
  }
}
</script>
<style lang="stylus" scoped>
@import "~styles/mixin.styl"

.title
  line-height 0.8rem
  background #eee
  text-indent 0.2rem
.item-img-wrapper
  overflow hidden
  height 0
  padding-bottom 37.09%
  .item-img
    width 100%
.item-info
  padding .1rem
  .item-title
      line-height .8rem
      font-size .30rem
      margin-top -.2rem
      ellipsis()
  .item-title
      line-height .8rem
      color #ccc
      ellipsis()
</style>
