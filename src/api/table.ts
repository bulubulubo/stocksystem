import request from '@/utils/system/request'

// 获取数据api
export function getcateData(data:object) {
  return request({
    url: 'http://127.0.0.1:5000/category',
    method: 'get',
    baseURL: '/mock',
    params: data
  })
}

export function searchstock(data:object) {
  return request({
    url: 'http://127.0.0.1:5000/searchstock',
    method: 'get',
    baseURL: '/mock',
    params: data
  })
}


