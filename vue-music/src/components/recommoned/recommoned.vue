<template>
  <div class="recommoned">
    <scroll-view :data="recommonedList" class="recommoned-content">
      <div>
        <div class="slider-swiper">
          <slider-view>
            <swiper-slide v-for="(slide,index) in slideList" :key="index">
                <a :href="slide.linkUrl">
                  <img  class="needsclick " :src="slide.picUrl" />
                </a>
            </swiper-slide>
          </slider-view>
        </div>
        <div class="recommoned-list">
            <h1 class="recommoned-title">热门歌单推荐</h1>
            <ul>
              <li v-for="song in recommonedList" :key="song.id" class="item">
                  <div class="icon">
                    <img v-lazy="song.imgurl" />
                  </div>
                  <div class="text">
                    <h2 v-html="song.creator.name"></h2>
                    <p v-html="song.dissname"></p>
                  </div>
              </li>
            </ul>
        </div>
      </div>
      <div class="loading-container" v-if="!slideList.length">
        <loading-view></loading-view>
    </div>
    </scroll-view>
  </div>
</template>

<script>
import { getRecommoned,getDiscList } from '@/api/recommoned';
import { ERR_OK } from '@/api/config'
import sliderView from '@/base/slider/slider'
import scrollView from '@/base/scroll/scroll'
import LoadingView from '@/base/loading/loading'
export default {
  data(){
    return {
      slideList:[],
      recommonedList:[]
    }
  },
  created(){
    this._getRecommoned()
    this._getDiscList()
  },
  components:{
    sliderView,
    scrollView,
    LoadingView
  },
  methods:{
    _getRecommoned(){
      getRecommoned().then(res => {
        console.log(res)
        if(res.code ==ERR_OK){
          this.slideList = res.data.slider
          console.log(res.data.slider)
        }
      })
    },

    _getDiscList(){
      getDiscList().then( res=> {
        console.log(res)
        if(res.code == ERR_OK){
          this.recommonedList = res.data.list
        }

      })
    }
  }
}
</script>

<style lang="stylus" scoped ref="stylesgeet/stylus">
@import './../../assets/stylus/variable.styl'
.recommoned
  position:fixed
  width: 100%
  top:1.41rem
  bottom:0
  .recommoned-content
    overflow:hidden
    height:100%
    img
      overflow:hidden
      width:100%
      height:0
      padding-bottom:39.6%
      .swiper-img
        width:100%
    .recommoned-list
      .recommoned-title
        height:.65rem
        line-height .65rem
        color: $color-theme
        font-size: $font-size-medium
        text-align:center
      .item
        display:flex
        align-items: center
        box-sizing: border-box
        padding: 0 20px 20px 20px
        .icon
          flex:0 0 1rem
          width:1rem
          margin-right:.3rem
          img
            width:100%
            height:100%
        .text
          display: flex
          flex:1
          justify-content: center
          flex-direction :column
          line-height:20px
          h2
            font-size:$font-size-medium
          p
            font-size:$font-size-medium
            color:$color-text-d

    .loading-container
      width:100%;
      position:absolute
      top:50%
</style>
