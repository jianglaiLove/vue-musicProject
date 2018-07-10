import { jsonp } from 'assets/js/jsonp';
import { commonPrams,options } from './config'
import axios from 'axios'
import json from 'mock/data.json'

export function getRecommoned() {
  let url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg';
  const data = Object.assign({},commonPrams,{
    platform:'h5',
    needNewCode:1,
    uin: 0,
  })

  return jsonp(url,data,options)

}

export function getDiscList() {
  const url = ''

  return axios.get(url).then((res) => {
    return Promise.resolve(json)
  })
}

// export function getSongList(){
//   let url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg';
//   const data = Object.assign({},commonPrams,{
//     platform:'h5',
//     needNewCode:1,
//     uin: 0,
//   })

//   return jsonp(url,data,options)
// }
