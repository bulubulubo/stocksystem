import request from '@/utils/system/request'

// 获取涨跌信息
export function getstockbaseData(data:object) {
    return request({
        url: 'http://127.0.0.1:5000/stockbase',
        method: 'get',
        baseURL: '/mock',
        params: data
    })
}

export function getkData(data:object) {
    return request({
        url: 'http://127.0.0.1:5000/stockk',
        method: 'get',
        baseURL: '/mock',
        params: data
    })
}

export function getinfoData(data:object) {
    return request({
        url: 'http://127.0.0.1:5000/stockinfo',
        method: 'get',
        baseURL: '/mock',
        params: data
    })
}

export function getdetailData(data:object) {
    return request({
        url: 'http://127.0.0.1:5000/stockdetail',
        method: 'get',
        baseURL: '/mock',
        params: data
    })
}

export function getdetail(data:object) {
    return request({
        url: 'http://127.0.0.1:5000/detail',
        method: 'get',
        baseURL: '/mock',
        params: data
    })
}

export function getwudangData(data:object) {
    return request({
        url: 'http://127.0.0.1:5000/wudang',
        method: 'get',
        baseURL: '/mock',
        params: data
    })
}