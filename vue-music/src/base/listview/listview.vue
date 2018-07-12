<template>
  <scroll-view
    class="listview"
    :data="data"
    ref="listview"
    :probeType="probeType"
    :listen-scroll="listtenScroll"
    @scroll="scroll"
  >
    <ul>
      <li v-for="singer in data" class="list-group" ref="group">
        <h2 class="list-group-title">{{singer.title}}</h2>
        <ul>
          <li v-for="item in singer.items" class="list-group-item" @click="selectItem(item)">
            <img v-lazy="item.avatar" class="avatar" />
            <span class="name">{{item.name}}</span>
          </li>
        </ul>
      </li>
    </ul>
    <div class="list-shortcut" @touchstart.stop.prevent="shoutcutTouchstart"
      @touchmove.stop.prevent="shoutcutTouchMove">
        <ul>
          <li v-for="(item,index) in shoutcutList" class="item" :data-index="index" :class="{'current':currentIndex===index}">
            {{item}}
          </li>
        </ul>
    </div>
    <div class="list-fixed" v-show="fixedTitle" ref="fixed">
      <h1 class="fixed-title">{{fixedTitle}}</h1>
    </div>
    <div class="loading-container" v-if="!data.length">
      <Loading-view></Loading-view>
    </div>
  </scroll-view>
</template>

<script>
import scrollView from '@/base/scroll/scroll';
import { getData } from '@/assets/js/dom';
import LoadingView from '@/base/loading/loading';

const ANCHOR_HEIGHT = 36
const FIXED_HEIGHT = 30

export default{
    props:{
      data:{
        type:Array,
        default:[]
      }
    },
    data(){
      return {
        scrollY:-1,
        currentIndex:0,
        diff:-1,
        listHeight:[]
      }
    },
    created(){
      this.touch = {}
      this.probeType = 3
      this.listtenScroll = true;
    },
    computed:{
      shoutcutList(){
        return this.data.map(item => {
          return item.title.substring(0,1)
        })
      },
      fixedTitle(){
        return this.data[this.currentIndex] ? this.data[this.currentIndex].title:''
      }
    },
    methods:{
      shoutcutTouchstart(e){
        let index = getData(e.target,'index')
        this.touch.index = index
        let firstTouch = e.touches[0]
        this.touch.Y1 = firstTouch.pageY
        console.log(firstTouch)
        this._scrollTo(index)
      },
      shoutcutTouchMove(e){
        let firstTouch  = e.touches[0]
        this.touch.Y2 = firstTouch.pageY
        let delta = Math.floor((this.touch.Y2 - this.touch.Y1) / ANCHOR_HEIGHT)
        let anchorIndex = parseInt(this.touch.index) + delta
        this._scrollTo(anchorIndex)
      },
      selectItem(item){
        this.$emit('select',item)
      },
      _scrollTo(index){
        if(!index && index!==0){
          return
        }

        if(index<0){
          index = 0
        }else if(index>this.listHeight.length-2){
          index = this.listHeight.length-2
        }
        this.scrollY = -this.listHeight[index]
        this.$refs.listview.scrollToElement(this.$refs.group[index],400)
      },
      scroll(pos){//获取滚动时的坐标，只有probeType=3的时候才会实时监听
        this.scrollY = pos.y
      },
      _calculateHeight(){//计算每个li（ref=group）的高度
        this.listHeight = [];
        const list = this.$refs.group;
        let height = 0;
        this.listHeight.push(height)
        for(var i=0;i<list.length;i++){
          let item = list[i]
          height += item.clientHeight
          this.listHeight.push(height)
        }

      }
    },
    watch:{
      data(){
        this.$nextTick( _ => {
          this._calculateHeight()
        })
      },
      scrollY(newY){
        const listHeight = this.listHeight;
        //上边
        if(newY > 0){
          this.currentIndex = 0;
          return
        }
        //中间
        for(var i=0;i<listHeight.length-1;i++){
          let height1 = listHeight[i]
          let height2 = listHeight[i+1]
          if(-newY >= height1 && -newY < height2){
            this.currentIndex = i
            this.diff = height2 + newY
            return
          }
          //最后
          this.currentIndex = listHeight.length-2
        }
      },
      diff(newVal){
        let fixedTop = (newVal > 0 && newVal<FIXED_HEIGHT) ? newVal-FIXED_HEIGHT : 0
        if(this.fixedTop == fixedTop){
          return
        }
        this.fixedTop = fixedTop
        this.$refs.fixed.style.transform = `translate3d(0,${fixedTop}px,0)`
      }
    },
    components:{
      scrollView,
      LoadingView
    }
}
</script>

<style lang="stylus" scoped>
@import '../../assets/stylus/variable.styl'
.listview
  overflow:hidden
  position:relative
  width:100%
  height:100%
  background: $color-background
  .list-group
    .list-group-title
      width:100%
      height:.6rem
      line-height:.6rem
      color:$color-text-l
      font-size:$font-size-small
      padding-left:.4rem
      background:$color-highlight-background
    .list-group-item
      display:flex
      align-items:center
      padding: .4rem 0 0 .6rem
      .avatar
        width:1rem
        height:1rem
        border-radius:50%
      .name
        margin-left: .4rem
        color: $color-text-l
        font-size: $font-size-medium

  .list-shortcut
    position:absolute
    z-index:99
    top:50%
    transform:translateY(-50%)
    right:0
    width:.4rem
    padding:.4rem 0
    text-align:center
    background:$color-background-d
    .item
      padding:0.06rem
      line-height:1
      color: $color-text-l
      font-size: .12rem
      &.current
        color: $color-theme

  .list-fixed
    position:absolute
    left:0
    top:0
    width:100%
    heigth:.6rem
    line-height:.6rem
    .fixed-title
      padding-left:.4rem
      font-size: .12rem
      color: $color-text-l
      background: $color-highlight-background

  .loading-container
      width:100%;
      position:absolute
      top:50%

</style>
