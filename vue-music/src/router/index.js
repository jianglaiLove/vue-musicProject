import Vue from 'vue'
import Router from 'vue-router'
import Recommoned from '@/components/recommoned/recommoned'
import Singer from '@/components/singer/singer'
import SingerDetail from '@/components/singer-detail/singer-detail'
import Rank from '@/components/rank/rank'
import Search from '@/components/search/search'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/Recommoned'
    },
    {
      path: '/Recommoned',
      name: 'Recommoned',
      component: Recommoned
    },
    {
      path: '/singer',
      name: 'Singer',
      component: Singer,
      children:[
        {path:':id',name:SingerDetail,component:SingerDetail}
      ]
    },
    {
      path: '/rank',
      name: 'Rank',
      component: Rank
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    }
  ]
})
