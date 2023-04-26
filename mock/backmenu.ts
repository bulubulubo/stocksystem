/*
 * @Date: 2023-03-10 19:57:44
 * @Description: 
 */
import { MockMethod } from 'vite-plugin-mock'

export default [
  {
    url: `/mock/menu/list`,
    method: 'post',
    response: () => {
      return {
        code: 200,
        data: {
          list: [
            {
              "path": "/",
              "redirect": "/dashboard",
              "meta": {
                "title": "dashboard",
                "icon": "sfont system-home"
              },
              "children": [
                {
                  "path": "dashboard",
                  "meta": {
                    "title": "首页",
                    "icon": "sfont system-home",
                    "hideClose": true
                  },
                  "component": "dashboard_dashboard"
                }
              ]
            },


            {
              "path": "/pages",
              "redirect": "/pages/crudTable",
              "meta": {
                "title": "基本数据",
                "icon": "sfont system-page"
              },
              "alwayShow": true,
              "children": [
                {
                  "path": "crudTable",
                  "meta": {
                    "title": "证券列表",
                    "cache": false
                  },
                  "component": "pages_crudTable"
                }
              ]
            },

            {
              "path": "/tab",
              "redirect": "/tab/index",
              "meta": {
                "title": "打印功能",
                "icon": "sfont system-24gl-printer"
              },
              "children": [
                {
                  "path": "index",
                  "meta": {
                    "title": "tab事件公用",
                    "icon": "sfont system-24gl-printer"
                  },
                  "component": "tab_index"
                }
              ]
            }
          ]
        },
        msg: ''
      };
    }
  },
]