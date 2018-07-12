export function getData(el,name,val){
  let perfix = 'data-'
  name = perfix + name;
  if(val){
    return el.setAttribute(name,val)
  }else{
    return el.getAttribute(name)
  }
}
