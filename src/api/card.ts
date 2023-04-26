import request from '@/utils/system/request'

// 获取涨跌信息
export function getupdownData(data:object) {
  return request({
    url: 'http://127.0.0.1:5000/updown',
    method: 'get',
    baseURL: '/mock',
    params: data
  })
}

export function getupData(data:object) {
  return request({
    url: 'http://127.0.0.1:5000/up',
    method: 'get',
    baseURL: '/mock',
    params: data
  })
}

export function getdownData(data:object) {
  return request({
    url: 'http://127.0.0.1:5000/down',
    method: 'get',
    baseURL: '/mock',
    params: data
  })
}