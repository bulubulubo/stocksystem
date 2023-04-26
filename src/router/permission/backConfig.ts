/*
 * @Date: 2023-03-10 19:34:30
 * @Description: 
 */
import { createNameComponent } from '../createNode';

/** 首页系列 */
const dashboard = {
  /** 首页 */
  dashboard: createNameComponent(() => import('@/views/main/dashboard/index.vue')),
}

const stock = {
  stock: createNameComponent(() => import('@/views/main/dashboard/components/card/stock.vue')),
}

/** 页面 */
const pages = {
  /** 业务表格 */
  crudTable: createNameComponent(() => import('@/views/main/pages/crudTable/index.vue')),
  // /** 分类表格 */
  // categoryTable: createNameComponent(() => import('@/views/main/pages/categoryTable/index.vue')),
  // /** 树形表格 */
  // treeTable: createNameComponent(() => import('@/views/main/pages/treeTable/index.vue')),
  /** 卡片 */
  card: createNameComponent(() => import('@/views/main/pages/card/index.vue')),
  // /** 工作台 */
  // work: createNameComponent(() => import('@/views/main/pages/work/index.vue')),
  // /** 百度 */
  // baidu: createNameComponent(() => import('@/views/main/pages/baidu/index.vue')),
}

/** tab事件公用 */
const tab = {
  /** tab事件公用 */
  tab: createNameComponent(() => import('@/views/main/tab/index.vue')),
}

/** 导出所有路由，供后端配置使用 */
const allRoutes = {
  dashboard,
  pages,
  tab,
  stock,
}

export default allRoutes