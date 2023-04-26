import type { Route } from '../index.type'
import Layout from '@/layout/index.vue'
import { createNameComponent } from '../createNode'
const route: Route[] = [
    {
        path: '/',
        component: Layout,
        redirect: '/stock',
        meta: { title: '个股信息'},
        alwayShow: true,
        children: [
            {
                path: 'stock',
                component: createNameComponent(() => import('@/views/main/dashboard/components/card/stock.vue')),
                meta: { title: '个股信息',cache: true, roles: ['admin', 'editor']}
            },{
                path: 'more',
                component: createNameComponent(() => import('@/views/main/dashboard/components/card/more.vue')),
                meta: { title: '个股详细信息', cache: true, roles: ['admin', 'editor']}
            }
        ]
    }
]

export default route