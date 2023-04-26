<template>
  <el-row>
    <el-col :lg="12" :md="24" style="max-height: 300px">
      <div style="font-weight: bold;padding-top: 5px;margin-bottom:-10px ">行业板块</div>
      <div class="layout-container" >
        <div class="layout-container-table">
          <Table
              v-loading="loading"
              highlight-current-row
              :showIndex="true"
              :data="hangye"
              :cell-style="cellStyle"
              :showPage="false"
              @getTableData="getTableData"
              @current-change="chosehangye"
          >
            <el-table-column prop="板块代码" label="板块代码" align="center"/>
            <el-table-column prop="板块名称" label="板块名称" align="center"/>
            <el-table-column prop="涨跌幅" label="涨跌幅" align="center"/>
            <el-table-column prop="最新价" label="最新价" align="center"/>
            <el-table-column prop="涨跌额" label="涨跌额" align="center"/>
            <el-table-column prop="上涨家数" label="上涨家数" align="center"/>
            <el-table-column prop="下跌家数" label="下跌家数" align="center"/>
            <el-table-column prop="换手率" label="换手率" align="center"/>
            <el-table-column prop="领涨股票" label="领涨股票" align="center"/>
          </Table>
        </div>
      </div>
    </el-col>
    <el-col :lg="12" :md="24" style="max-height: 300px">
      <div style="font-weight: bold;padding-top: 5px;margin-bottom:-10px ">概念板块</div>
      <div class="layout-container" >
        <div class="layout-container-table">
          <Table
              v-loading="loading"
              highlight-current-row
              :showIndex="true"
              :data="gainian"
              :cell-style="cellStyle"
              :showPage="false"
              @getTableData="getTableData"
              @current-change="chosegainian"
          >
            <el-table-column prop="板块代码" label="板块代码" align="center"/>
            <el-table-column prop="板块名称" label="板块名称" align="center"/>
            <el-table-column prop="涨跌幅" label="涨跌幅" align="center"/>
            <el-table-column prop="最新价" label="最新价" align="center"/>
            <el-table-column prop="涨跌额" label="涨跌额" align="center"/>
            <el-table-column prop="上涨家数" label="上涨家数" align="center"/>
            <el-table-column prop="下跌家数" label="下跌家数" align="center"/>
            <el-table-column prop="换手率" label="换手率" align="center"/>
            <el-table-column prop="领涨股票" label="领涨股票" align="center"/>
          </Table>
        </div>
      </div>
    </el-col>
  </el-row>
  <div class="layout-container" style="max-height: 50%">
    <div class="layout-container-table">
      <Table
          v-loading="loading"
          highlight-current-row
          :showIndex="true"
          :data="tableData"
          :show-page="false"
          :cell-style="cellStyle"
          @getTableData="getTableData"
          @current-change="chosestock"
      >
        <el-table-column prop="代码" label="	代码" align="center"/>
        <el-table-column prop="名称" label="名称" align="center"/>
        <el-table-column prop="涨跌幅" label="涨跌幅" align="center"/>
        <el-table-column prop="最新价" label="最新价" align="center"/>
        <el-table-column prop="涨跌额" label="涨跌额" align="center"/>
        <el-table-column prop="振幅" label="振幅" align="center"/>
        <el-table-column prop="最高" label="最高" align="center"/>
        <el-table-column prop="最低" label="最低" align="center"/>
        <el-table-column prop="市盈率-动态" label="市盈率-动态" align="center"/>
      </Table>
    </div>
  </div>
</template>

<script lang="ts">
import {reactive, ref} from "vue";
import {Page} from "../../../../components/table/type";
import {getcateData, searchstock} from "../../../../api/table";
import {useStore} from "vuex";
import {useRouter} from "vue-router";
import {Delete, Plus, Search} from "@element-plus/icons";
import Table from "@/components/table/index.vue";
import { getgainianData, gethangyeData, gethangyestocks } from "@/api/plate";

export default {
  name: "index",
  components: {
    Table
  },
  setup() {
    // 存储搜索用的数据
    const query = reactive({
      input: ''
    })
    // 分页参数, 供table使用
    const loading = ref(true)
    const tableData = ref([])
    const gainian = ref([])
    const hangye = ref([])
    let params = {name: '游戏',type:'行业'}
    let value1 = ref(1)
    // 获取表格数据
    const getTableData = (init: boolean) => {
      loading.value = true
      gethangyestocks(params)
          .then(res => {
            tableData.value = res.data
          })
          .catch(error => {
            tableData.value = []
          })
          .finally(() => {
            loading.value = false
          })
    }
    getTableData(true)
    const getgainian = (init: boolean) => {
      loading.value = true
      let params = {
      }
      getgainianData(params)
          .then(res => {
            gainian.value = res.data
            console.log(gainian)
          })
          .catch(error => {
            gainian.value = []
          })
          .finally(() => {
            loading.value = false
          })
    }
    getgainian(true)
    const gethangye = (init: boolean) => {
      loading.value = true
      let params = {
      }
      gethangyeData(params)
          .then(res => {
            hangye.value = res.data
          })
          .catch(error => {
            hangye.value = []
          })
          .finally(() => {
            loading.value = false
          })
    }
    gethangye(true)
    const chosehangye = (row:any) =>{
      params.name = row['板块名称']
      params.type = '行业'
      console.log(params)
      gethangyestocks(params)
          .then(res => {
            tableData.value = res.data
          })
          .catch(error => {
            tableData.value = []
          })
          .finally(() => {
            loading.value = false
          })
    }
    const chosegainian = (row:any) =>{
      params.name = row['板块名称']
      params.type = '概念'
      console.log(params)
      gethangyestocks(params)
          .then(res => {
            tableData.value = res.data
          })
          .catch(error => {
            tableData.value = []
          })
          .finally(() => {
            loading.value = false
          })
    }
    const cellStyle = (row: any) => {
      const style = {
        color: 'black'
      };
      if (2 < row.columnIndex && row.columnIndex < 6 && row.row['涨跌额'] > 0) {
        style.color = '#ec0000'
        return style; // 绿色,最大值
      } else if (2 < row.columnIndex && row.columnIndex < 6) {
        style.color = '#00da3c'
        return style;
      } else
        return style
    }
    const store = useStore()
    const router = useRouter()
    //通过定义一个方法，使用router进行跳转，这里后面的123是路由传参，不传可以不加
    const chosestock = (row: any) => {
      params.name = row['代码']
      router.push({
        path: '/stock',
        query: params
      })
      store.commit('stock/stateChange', row['代码'])
    }
    return {
      Plus,
      Search,
      Delete,
      gainian,
      hangye,
      query,
      tableData,
      loading,
      value1,
      chosehangye,
      chosegainian,
      chosestock,
      cellStyle,
      getTableData
    }
  }
}
</script>

<style lang="scss" scoped>

</style>