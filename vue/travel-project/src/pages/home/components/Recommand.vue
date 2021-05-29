<template>
  <div>
    <div class="title">热门推荐</div>
    <ul>
      <li class="item" v-for="item of list" :key="item.id">
          <img :src="item.imgUrl" :alt="item.title" class="item-img" />
        <div class="item-info border-bottom">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "Recommand",
  props: {
    list: Array
  }
}
</script>
<style lang="stylus" scoped>
@import "~styles/mixin.styl"

.title
  margin-top 0.2rem
  line-height 0.8rem
  background #eee
  text-indent 0.2rem
.item
  display flex
  height 1.9rem
  .item-img
    width 1.7rem
    height 1.7rem
    padding .1rem
  .item-info
    flex 1
    padding .1rem
    min-width 0
    .item-title
        line-height .8rem
        font-size .30rem
        margin-top -.2rem
        ellipsis()
    .item-title
        line-height .8rem
        color #ccc
        ellipsis()
    .item-button
        line-height .44rem
        background #ff9300
        margin-top .35rem
        padding 0 .2rem
        border-radius .06rem
        color #fff
</style>
