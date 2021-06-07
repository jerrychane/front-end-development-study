<template name="common-galler">
    <div class="container">
        <div class="wrapper">
            <swiper :options="swiperOptions">
                <swiper-slide
                  v-for="(item, index) in imgs"
                  :key="index"
                >
                    <img class="gallery-img"  :src="item"/>
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
        </div>
    </div>
</template>
<script>
export default {
  name: "CommonGallery",
  props: {
    imgs: {
      type: Array,
      default () {
        return [
          "//img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_800x800_70debc93.jpg",
          "//img1.qunarzz.com/sight/p0/1709/76/7691528bc7d7ad3ca3.img.png_800x800_9ef05ee7.jpg"
        ]
      }
    }
  },
  data () {
    return {
      swiperOptions: {
        pagination: ".swiper-pagination",
        paginationType: "fraction"
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
  .container >>> .swiper-container
    overflow inherit
  .container
    display flex
    flex-direction column
    justify-content center
    z-index 99
    position fixed
    left 0
    top 0
    right 0
    bottom 0
    background #000
    .wrapper
      width 100%
      height 0
      padding-bottom 100%
      .gallery-img
        width 100%
      .swiper-pagination
        color #fff
        bottom -1rem
</style>
