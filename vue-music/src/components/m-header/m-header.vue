<template>
    <header>
        <div class="icon"></div>
        <div class="text">Chicken Music</div>
    </header>
</template>

<script>
export default {

}
</script>

<style scoped lang="stylus" rel="stylesgeet/stylus">
  @import './../../assets/stylus/variable';
  @import './../../assets/stylus/mixin';

  header
    position:relative
    width:100%
    height:.75rem
    text-align:center
    color:$color-theme
    .icon
      display:inline-block
      width:.51rem
      height:.54rem
      margin-top:.07rem
      vertical-align: top
      bg-image('./../../assets/img/logo')
      background-size: 100%
    .text
      display:inline-block
      font-size:$font-size-large
      line-height:.75rem
      vertical-align: top


</style>
