<template>
  <el-card class="box-card">
    <template #header>
      <div class="card-header">
        <span >近日新闻信息</span>
      </div>
    </template>
      <div class="box">
        <li v-for="(value) in NewsData" class="news">
          {{value['内容'] }}
        </li>
      </div>
  </el-card>
</template>

<script lang="ts">
import {defineComponent, ref} from 'vue'
import {getData} from "@/api/dash";
export default defineComponent({
  setup() {
    const NewsData = ref([])
    const getNewsData = () => {
      let params = {}
      getData(params)
          .then(res => {
            NewsData.value = res.data
          })
          .catch(error => {
            console.log('error',error)
            NewsData.value = []
          })
    }
    getNewsData()
    return {
        NewsData,
        getNewsData
    }
  }
})
</script>

<style lang="scss" scoped>
  .box-card {

    .card-header{
      text-align: left;
      Font-weight:bold;
    }
    .box {
      .item {
        align-items: center;

        * {
          margin-right: 20px;
        }
      }
      max-height: 200px;
      overflow: auto;
    }
    .news{
      text-align: left;
      padding: 5px;

    }
  }
</style>