<template>
<div class="wrapper">
  <swiper :options="swiperOptions">
    <swiper-slide>
        <img class="swiper-img" src="//img1.qunarzz.com/sight/p0/2005/39/3979f1867defec4ea3.water.jpg_600x330_2106404f.jpg" alt="八达岭" />
    </swiper-slide>
    <swiper-slide>
        <img class="swiper-img" src="//img1.qunarzz.com/sight/p0/2005/30/307fa37039eab5cba3.water.jpg_600x330_8db87481.jpg" alt="颐和园" />
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOptions: {}
    }
  }
}
</script>

<style lang="stylus" scoped>
.wrapper
    width 100%
    overflow hidden
    height 0
    padding-bottom 55%
    bacground #eee
    .swiper-img
        width 100%
</style>
