<template>
  <swiper :options="swiperOption" ref="mySwiper">
      <slot></slot>

  <!-- 如果需要分页器 -->
  <div class="swiper-pagination" slot="pagination"></div>
</swiper>
</template>

<script>
export default {
  data() {
    return {
      swiperOption: {
        autoplay: 1000,
        direction : 'horizontal',
        pagination:".swiper-pagination",
        // bulletClass: "swiper-pagination-customs",
        // bulletActiveClass: "active",
        loop:true
      }
    };
  },
  updated() {

  },
  methods: {}
};
</script>

<style lang="stylus" scoped>
.swiper-pagination-customs
  display: inline-block
  width: .15rem
  height:.15rem
  border-radius: 50%
  background: rgba(255, 255, 255, 0.4)
  margin-right: 0.15rem
.active
  width: 0.33rem
  height: 0.15rem
  background: rgba(255, 255, 255, 0.6)

</style>
