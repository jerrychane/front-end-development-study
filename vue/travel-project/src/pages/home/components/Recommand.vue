<template>
  <div>
    <div class="title">热门推荐</div>
    <ul>
      <li class="item" v-for="item of recommandList" :key="item.id">
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
  data () {
    return {
      recommandList: [{
        id: "0001",
        imgUrl: "//img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_140x140_73fda71d.jpg",
        title: "大连圣亚海洋世界",
        desc: "浪漫大连首站，浪漫的海洋主题乐园"
      }, {
        id: "0002",
        imgUrl: "//img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_140x140_73fda71d.jpg",
        title: "大连圣亚海洋世界",
        desc: "浪漫大连首站，浪漫的海洋主题乐园"
      }, {
        id: "0003",
        imgUrl: "//img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_140x140_73fda71d.jpg",
        title: "大连圣亚海洋世界",
        desc: "浪漫大连首站，浪漫的海洋主题乐园"
      }]
    }
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
