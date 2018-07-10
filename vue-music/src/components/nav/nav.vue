<template>
    <nav class="tab">
        <router-link class="nav-item" tag="div" to="/recommoned">
          <span class="tab-link">推荐</span>
        </router-link>
        <router-link class="nav-item" tag="div" to="/singer">
         <span class="tab-link">歌手</span>
        </router-link>
        <router-link class="nav-item" tag="div" to="/rank">
         <span class="tab-link">排行</span>
        </router-link>
        <router-link class="nav-item" tag="div" to="/search">
         <span class="tab-link">搜索</span>
        </router-link>
    </nav>
</template>

<script>
export default {

}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import './../../assets/stylus/variable'
  .tab
    display:flex
    height:.66rem
    line-height:.66rem
    .nav-item
      flex:1
      text-align:center
      .tab-link
        font-size: .14rem
        color:$color-text-l
        padding-bottom:.05rem
        vertical-align:top
      &.router-link-active
        .tab-link
            color: $color-theme
            border-bottom: 2px solid $color-theme
</style>
