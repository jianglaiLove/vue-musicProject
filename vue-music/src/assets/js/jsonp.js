import originJSONP from 'jsonp'
export function jsonp (url,data,option){
  url += (url.indexOf("?")< 0 ? "?" : "&") + param(data)
  return new Promise((resolve,reject) => {
    originJSONP(url,option,(err,data) => {
        if(!err){
          resolve(data)
        }else{
          reject(err)
        }
    })
  })
}

function param(data){
  let url = '';
  for(var k in data){
    let val = data[k] ? data[k] : ''
    url += `&${k}=${encodeURIComponent(val)}`
  }
  return url ? url.substring(1) : ''
}
