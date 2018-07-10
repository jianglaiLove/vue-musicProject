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
    },
    refresh(){
      console.log(12)
      this.scroll && this.scroll.refresh()
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
