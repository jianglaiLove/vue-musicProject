<template>
  <div ref="wrapper">
      <slot></slot>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  props:{
    probeType:{
      type:Number,
      default:1
    },
    click:{
      type:Boolean,
      default:true
    },
    data:{
      type:Array,
      default:null
    },
    listenScroll:{
      type:Boolean,
      dafault:false
    }
  },
  mounted(){
    this.$nextTick(_ => {
      this._initScroll()
    })
  },
  methods:{
    _initScroll(){
      if(this.$refs.wrapper){
        this.scroll = new BScroll(this.$refs.wrapper,{
          probeType:this.probeType,
          click:this.click
        })
      }
      if(this.listenScroll){
        let _this = this
        console.log(_this)
        this.scroll.on('scroll',(pos) => {
          _this.$emit('scroll',pos)
        })
      }
    },
    refresh(){
      this.scroll && this.scroll.refresh()
    },
    scrollTo(){
      this.scroll && this.scroll.scrollTo.apply(this.scroll,arguments)
    },
    scrollToElement(){
      this.scroll && this.scroll.scrollToElement.apply(this.scroll, arguments)
    }

  },
  watch:{
    data(){
      this.$nextTick(_ => {
        this.refresh()
      })
    }
  }

}
</script>

<style scoped lang="stylus">

</style>
