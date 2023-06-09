import type { Route } from '../index.type'
import Layout from '@/layout/index.vue'
import { createNameComponent } from '../createNode'
const route: Route[] = [
  {
    path: '/pages',
    component: Layout,
    redirect: '/pages/crudTable',
    meta: { title: 'message.menu.page.name'},
    alwayShow: true,
    children: [
      {
        path: 'crudTable',
        component: createNameComponent(() => import('@/views/main/pages/crudTable/index.vue')),
        meta: { title: 'message.menu.page.crudTable', cache: false, roles: ['admin', 'editor'] }
      },
      {
        path: 'plate',
        component: createNameComponent(() => import('@/views/main/pages/plate/index.vue')),
        meta: { title: 'message.menu.page.plate', cache: false, roles: ['admin', 'editor'] }
      }
    ]
  }
]

export default route