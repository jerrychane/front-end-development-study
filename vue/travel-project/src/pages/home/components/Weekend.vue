<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
      <li class="item" v-for="item of recommandList" :key="item.id">
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
  data () {
    return {
      recommandList: [{
        id: "0001",
        imgUrl: "//img1.qunarzz.com/sight/source/1505/9f/f585152825459.jpg_r_640x214_5d46e4cc.jpg",
        title: "大连圣亚海洋世界",
        desc: "浪漫大连首站，浪漫的海洋主题乐园"
      }, {
        id: "0002",
        imgUrl: "//img1.qunarzz.com/sight/source/1505/9f/f585152825459.jpg_r_640x214_5d46e4cc.jpg",
        title: "大连圣亚海洋世界",
        desc: "浪漫大连首站，浪漫的海洋主题乐园"
      }, {
        id: "0003",
        imgUrl: "//img1.qunarzz.com/sight/source/1505/9f/f585152825459.jpg_r_640x214_5d46e4cc.jpg",
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
.item-img-wrapper
  overflow hidden
  height 0
  padding-bottom 33.9%
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
