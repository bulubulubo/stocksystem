import request from '@/utils/system/request'

// 获取数据api
export function getData(data:object) {
    return request({
        url: 'http://127.0.0.1:5000/news',
        method: 'get',
        baseURL: '/mock',
        params: data
    })
}

// 获取上证指数数据api
export function getszindexData(data:object) {
    return request({
        url: 'http://127.0.0.1:5000/szindex',
        method: 'get',
        baseURL: '/mock',
        params: data
    })
}

export function getallindexData(data:object) {
    return request({
        url: 'http://127.0.0.1:5000/allindex',
        method: 'get',
        baseURL: '/mock',
        params: data
    })
}

