import request from '@/utils/system/request'

// 获取概念板块信息
export function getgainianData(data:object) {
    return request({
        url: 'http://127.0.0.1:5000/gainian',
        method: 'get',
        baseURL: '/mock',
        params: data
    })
}

// 获取行业板块信息
export function gethangyeData(data:object) {
    return request({
        url: 'http://127.0.0.1:5000/hangye',
        method: 'get',
        baseURL: '/mock',
        params: data
    })
}

// 获取行业指定个股信息
export function gethangyestocks(data:object) {
    return request({
        url: 'http://127.0.0.1:5000/hangyestocks',
        method: 'get',
        baseURL: '/mock',
        params: data
    })
}