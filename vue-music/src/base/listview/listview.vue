<template>
  <scroll-view
    class="listview"
    :data="data"
  >
    <ul>
      <li v-for="singer in data" class="list-group">
        <h2 class="list-group-title">{{singer.title}}</h2>
        <ul>
          <li v-for="item in singer.items" class="list-group-item">
            <img v-lazy="item.avatar" class="avatar" />
            <span class="name">{{item.name}}</span>
          </li>
        </ul>
      </li>
    </ul>
    <ul>

    </ul>
  </scroll-view>
</template>

<script>
import scrollView from '@/base/scroll/scroll'
export default{
    props:{
      data:{
        type:Array,
        default:[]
      }
    },
    components:{
      scrollView
    }
}
</script>

<style lang="stylus" scoped>
@import '../../assets/stylus/variable.styl'
.listview
  overflow:hidden
  position:fixed
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
</style>
