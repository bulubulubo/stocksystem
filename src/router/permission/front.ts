/**
 * 前端路由管理
 **/

/** 路由类型 */
import type { Route } from '../index.type'

/** 引入需要权限的Modules */
import Dashboard from '../modules/dashboard'
import Pages from '../modules/pages'
import Tab from '../modules/tab'
import Stock from '../modules/stock'

/** 登录后需要动态加入的本地路由 */
const FrontRoutes: Route[] = [
  ...Dashboard,
  ...Pages,
  ...Tab,
]

const Dash: Route[] = [
  ...Stock
]
export  {FrontRoutes,Dash}