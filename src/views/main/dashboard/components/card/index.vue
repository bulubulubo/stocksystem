<template>
  <div class="box">
    <el-row>
      <el-col :lg="4" :md="24">
        <div class="card-list">
          <Row v-for="row in up" :key="row.id" :row="row"/>
        </div>
      </el-col>
      <el-col :lg="8" :md="24">
        <el-card class="box-card">
          <div slot="header" class="clearfix" style="padding-bottom:5%">
            <span style="font-weight: bold;font-size:18px;color:#ec0000">涨停池</span>
          </div>
          <div style="background:#990000;height:1px;width: 100%;margin-bottom: 8px"></div>
          <el-table
              :data="updata" style="width: 100%;height: 100%;max-height: 150px;
      overflow: auto;"
              highlight-current-
              @current-change="chosestock"
          >
            <el-table-column
                prop="代码"
                label="代码"
            >
            </el-table-column>
            <el-table-column
                prop="名称"
                label="名称"
            >
            </el-table-column>
            <el-table-column
                prop="涨跌幅"
                label="涨跌幅(%)" :formatter="rounding">
            </el-table-column>
            <el-table-column
                prop="最新价"
                label="最新价">
            </el-table-column>
            <el-table-column
                prop="成交额"
                label="成交额（亿）" :formatter="running">
            </el-table-column>
            <el-table-column
                prop="流通市值"
                label="流通市值（亿）" :formatter="running">
            </el-table-column>
            <el-table-column
                prop="总市值"
                label="总市值（亿）" :formatter="running">
            </el-table-column>
            <el-table-column
                prop="换手率"
                label="换手率" :formatter="rounding">
            </el-table-column>
            <el-table-column
                prop="封板资金"
                label="封板资金">
            </el-table-column>
            <el-table-column
                prop="首次封板时间"
                label="首次封板时间" :formatter="time">
            </el-table-column>
            <el-table-column
                prop="最后封板时间"
                label="最后封板时间" :formatter="time">
            </el-table-column>
            <el-table-column
                prop="炸板次数"
                label="炸板次数">
            </el-table-column>
            <el-table-column
                prop="涨停统计"
                label="涨停统计">
            </el-table-column>
            <el-table-column
                prop="连板数"
                label="连板数">
            </el-table-column>
            <el-table-column
                prop="所属行业"
                label="所属行业">
            </el-table-column>
          </el-table>
        </el-card>
      </el-col>
      <el-col :lg="4" :md="24">
        <div class="card-list">
          <Row v-for="row in down" :key="row.id" :row="row"/>
        </div>
      </el-col>
      <el-col :lg="8" :md="24">
        <el-card class="box-card">
          <div slot="header" class="clearfix" style="padding-bottom:5%">
            <span style="font-weight: bold;font-size:18px;color: #00da3c">跌停池</span>
          </div>
          <div style="background: #01a252;height:1px;width: 100%;margin-bottom: 8px"></div>
          <el-table
              :data="downdata" style="width: 100%;height: 100%;max-height: 150px;
      overflow: auto;"
              highlight-current-row
              @current-change="chosestock"
          >
            <el-table-column
                prop="代码"
                label="代码"
            >
            </el-table-column>
            <el-table-column
                prop="名称"
                label="名称"
            >
            </el-table-column>
            <el-table-column
                prop="涨跌幅"
                label="涨跌幅(%)" :formatter="rounding">
            </el-table-column>
            <el-table-column
                prop="最新价"
                label="最新价">
            </el-table-column>
            <el-table-column
                prop="成交额"
                label="成交额（亿）" :formatter="running">
            </el-table-column>
            <el-table-column
                prop="流通市值"
                label="流通市值（亿）" :formatter="running">
            </el-table-column>
            <el-table-column
                prop="总市值"
                label="总市值（亿）" :formatter="running">
            </el-table-column>
            <el-table-column
                prop="换手率"
                label="换手率" :formatter="rounding">
            </el-table-column>
            <el-table-column
                prop="封单资金"
                label="封单资金">
            </el-table-column>
            <el-table-column
                prop="最后封板时间"
                label="最后封板时间" :formatter="time">
            </el-table-column>
            <el-table-column
                prop="连续跌停"
                label="连续跌停">
            </el-table-column>
            <el-table-column
                prop="所属行业"
                label="所属行业">
            </el-table-column>
          </el-table>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import {defineComponent, reactive, ref} from 'vue'
import Row from './row.vue'
import {getdownData, getupData, getupdownData} from "@/api/card";
import { useRouter, useRoute } from 'vue-router'
import { useStore } from 'vuex'
import {ElMessage} from "element-plus";

export default defineComponent({
  components: {
    Row
  },
  setup() {
    const up = reactive([
      {id: 1, name: '上涨', data: 3477, color: '#ec0000'},
      {id: 2, name: '涨停', data: 49, color: '#ec0000'},
    ])
    const down = reactive([
      {id: 1, name: '下跌', data: 3477, color: '#00da3c'},
      {id: 2, name: '跌停', data: 49, color: '#00da3c'},
    ])
    const updown = ref([])
    const getupdown = () => {
      let params = {}
      getupdownData(params)
          .then(res => {
            updown.value = res.data
            up[0].data=res.data[0].value
            up[1].data=res.data[1].value
            down[0].data=res.data[4].value
            down[1].data=res.data[5].value
          })
          .catch(err => {
            updown.value = []
          })
    }
    getupdown()
    //指数类型选择
    const updata = ref([])
    const getupdata = () => {
      let params = {}
      getupData(params)
          .then(res => {
            updata.value = res.data
          })
          .catch(err => {
            updata.value = []
          })
    }
    getupdata()
    //指数类型选择
    const downdata = ref([])
    const getdowndata = () => {
      let params = {}
      getdownData(params)
          .then(res => {
            downdata.value = res.data
          })
          .catch(err => {
            downdata.value = []
          })
    }
    getdowndata()
    const rounding=(row: any,column:any)=> {
      return parseFloat(row[column.property]).toFixed(2)
    }
    const running=(row: any,column:any)=> {
      let a=parseFloat(row[column.property])/100000000
      return a.toFixed(2)
    }
    const time=(row: any,column:any)=> {
      return row[column.property].slice(0, 2) + ":" + row[column.property].slice(2, 4) + ":" + row[column.property].slice(4, 6)
    }
    /** 点击具体股票并跳转页面 */
    let params = {code:'000001'}
    const store = useStore()
    const router = useRouter()
    //通过定义一个方法，使用router进行跳转，这里后面的123是路由传参，不传可以不加
    const chosestock = (row:any)=>{
      params.code=row['代码']
      router.push({
        path:'/stock',
        query:params
      })
      store.commit('stock/stateChange', row['代码'])
    }
    return {
      updown,
      up,
      updata,
      downdata,
      down,
      store,
      chosestock,
      rounding,
      running,
      time,
    }
  }
})
</script>

<style lang="scss" scoped>
.card-list {
  width: calc(100% + 20px);
  margin-left: 8px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}

.box {
  margin: 10px auto 0;
  width: calc(100% - 40px);
  height: 100%;
  background: var(--system-page-background);
  padding: 20px;
  overflow: hidden;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both
}

.box-card {
  width: 96%;
  height: 96%;
}
</style>