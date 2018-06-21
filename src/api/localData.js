import request from '@/utils/localRequest'

export function getDataGrand() {
  return request({
    url: 'static/solution/datagrand.json',
    method: 'get'
  })
}
 export function getXiaoNiuData(){
  return request({
    url: 'static/solution/xiaoniu.json',
      method: 'get'
    })
 }