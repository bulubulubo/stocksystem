<template>
  <div class="layout-container">
    <div class="layout-container-form flex space-between">
      <div class="layout-container-form-search">
        <el-input v-model="query.input" :placeholder="$t('message.common.searchTip')"></el-input>
        <el-button type="primary" :icon="Search" class="search-btn" @click="searchData()">{{
            $t('message.common.search')
          }}
        </el-button>
      </div>
      <el-switch
          :value="value1"
          @change="update"
          style="display: block"
          inactive-color="#13ce66"
          active-color="#ff4949"
          active-text="按涨排序"
          inactive-text="按跌排序"
          :active-value="1"
          :inactive-value="0"
      >
      </el-switch>
    </div>
    <div class="layout-container-table">
      <Table
          ref="table"
          highlight-current-row
          v-model:page="page"
          v-loading="loading"
          :showIndex="true"
          :data="tableData"
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
        <el-table-column prop="量比" label="量比" align="center"/>
        <el-table-column prop="市盈率-动态" label="市盈率-动态" align="center"/>
        <el-table-column prop="总市值" label="总市值" align="center"/>
      </Table>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, ref, reactive} from 'vue'
import Table from '@/components/table/index.vue'
import {Page} from '@/components/table/type'
import {getcateData, searchstock} from '@/api/table'
import {Plus, Search, Delete} from '@element-plus/icons'
import {useStore} from "vuex";
import {useRouter} from "vue-router";

export default defineComponent({
  name: 'crudTable',
  components: {
    Table
  },
  setup() {
    // 存储搜索用的数据
    const query = reactive({
      input: ''
    })
    // 分页参数, 供table使用
    const page: Page = reactive({
      index: 1,
      size: 30,
      total: 0
    })
    const loading = ref(true)
    const tableData = ref([])
    let params = {code: '000001'}
    let value1 = ref(1)
    // 获取表格数据
    // params <init> Boolean ，默认为false，用于判断是否需要初始化分页
    const searchData = () => {
      loading.value = true
      let params = {
        ...query
      }
      searchstock(params)
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
    const update = () => {
      if (value1.value == 1)
        value1.value = 0
      else
        value1.value = 1
      loading.value = true
      page.index = 1
      page.size = 20
      let params = {
        updown: value1.value,
        page: page.index,
        pageSize: page.size,
        ...query
      }
      getcateData(params)
          .then(res => {
            tableData.value = res.data[0]
            page.total = res.data[1]
          })
          .catch(error => {
            tableData.value = []
            page.index = 1
            page.total = 0
          })
          .finally(() => {
            loading.value = false
          })
    }
    const getTableData = (init: boolean) => {
      loading.value = true
      if (init) {
        page.index = 1
        page.size = 20
      }
      let params = {
        updown: value1.value,
        page: page.index,
        pageSize: page.size,
        ...query
      }
      getcateData(params)
          .then(res => {
            tableData.value = res.data[0]
            page.total = res.data[1]
          })
          .catch(error => {
            tableData.value = []
            page.index = 1
            page.total = 0
          })
          .finally(() => {
            loading.value = false
          })
    }
    getTableData(true)
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
      params.code = row['代码']
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
      query,
      tableData,
      loading,
      page,
      value1,
      update,
      chosestock,
      cellStyle,
      searchData,
      getTableData
    }
  }
})
</script>

<style lang="scss" scoped>

</style>