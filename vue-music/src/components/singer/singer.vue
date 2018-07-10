<template>
  <div class="singer">
    <list-view :data="singers"></list-view>
  </div>
</template>

<script>
import { getSingerList } from '@/api/singer';
import { ERR_OK } from '@/api/config';
import { Singer } from '@/assets/js/singer';
import ListView from '@/base/listview/listview'

const HOT_NAME = "热门";
const HOT_SINGER_LENGTH = 10;
export default {
  data(){
    return {
      singers:[]
    }
  },
  created(){
    this._getSingerList()
  },
  methods:{
    _getSingerList(){
      getSingerList().then( res=> {
        console.log(res)
        if(res.code===ERR_OK){
          this.singers = this._normaliszeSinger(res.data.list)
        }
      })
    },
    _normaliszeSinger(list){
      let map = {
        hot:{
          title:HOT_NAME,
          items:[]
        }
      }
      list.forEach((item,index) => {
        if(index<HOT_SINGER_LENGTH){
          map.hot.items.push(
            new Singer({
              id:item.Fsinger_mid,
              name:item.Fother_name,
            })
          )
        }
        const key = item.Findex
        if(!map[key]){
          map[key] = {
            title:key,
            items:[]
          }
        }
        map[key].items.push(
          new Singer({
            id:item.Fsinger_mid,
            name:item.Fother_name,
          })
        )
      })
      let hot = [];
      let ret = []
      //为了得到有序列表，我们需要处理map
      for(var key in map){
        const val = map[key]
        if(val.title.match(/^[a-zA-z]$/)){
          ret.push(val)
        }else if(val.title === HOT_NAME){
          hot.push(val)
        }
      }
      //sort排序
      ret.sort((a,b)=>{
        return a.title.charCodeAt(0)-b.title.charCodeAt(0)
      })
      return hot.concat(ret)
    }
  },
  components:{
    ListView
  }
}
</script>

<style lang="stylus" scoped>

</style>
