<template>
  <transition
    enter-active-class="fadeInRight"
    leave-active-class="fadeOutRight"
  >
    <div class="singer animated">{{$router.query}}</div>
  </transition>
</template>

<script>
import { mapGetters } from 'vuex'
  export default{
    mounted(){
      console.log(this.singer)
    },
    computed:{
      ...mapGetters(['singer'])
    }
  }
</script>

<style scoped lang="stylus">
@import '../../assets/stylus/variable.styl'
.singer
  position:fixed
  top:0
  let:0
  width:100%
  height:100%
  z-index:100
  background:$color-background
</style>
