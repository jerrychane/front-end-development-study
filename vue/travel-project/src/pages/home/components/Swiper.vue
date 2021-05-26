<template>
<div class="wrapper">
  <swiper :options="swiperOptions">
    <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" :alt="item.name" />
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
      swiperOptions: {
        pagination: '.swiper-pagination',
        loop: true
      },
      swiperList: [{
        id: '0001',
        name: '八达岭',
        imgUrl: '//img1.qunarzz.com/sight/p0/2005/39/3979f1867defec4ea3.water.jpg_600x330_2106404f.jpg'
      }, {
        id: '0002',
        name: '颐和园',
        imgUrl: '//img1.qunarzz.com/sight/p0/2005/30/307fa37039eab5cba3.water.jpg_600x330_8db87481.jpg'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
.wrapper >>> .swiper-pagination-bullet-active
    background: #fff
.wrapper
    width 100%
    overflow hidden
    height 0
    padding-bottom 55%
    bacground #eee
    .swiper-img
        width 100%
</style>
