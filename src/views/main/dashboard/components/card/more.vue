<template>
  <div class="boxbig">
    <div class="box">
      <el-descriptions  title="基本资料" direction="vertical" column="4" border>
        <el-descriptions-item label="公司名称" >{{stockbase[0]['ORG_NAME']}}</el-descriptions-item>
        <el-descriptions-item label="英文名称" >{{stockbase[0]['ORG_NAME_EN']}}</el-descriptions-item>
        <el-descriptions-item label="会计师事务所" >{{stockbase[0]['ACCOUNTFIRM_NAME']}}</el-descriptions-item>
        <el-descriptions-item label="办公地址" >{{stockbase[0]['ADDRESS']}}</el-descriptions-item>
        <el-descriptions-item label="邮政编码" >{{stockbase[0]['ADDRESS_POSTCODE']}}</el-descriptions-item>
        <el-descriptions-item label="董事长" >{{stockbase[0]['CHAIRMAN']}}</el-descriptions-item>
        <el-descriptions-item label="所属东财行业" >{{stockbase[0]['EM2016']}}</el-descriptions-item>
        <el-descriptions-item label="雇员人数" >{{stockbase[0]['EMP_NUM']}}</el-descriptions-item>
        <el-descriptions-item label="曾用名" >{{stockbase[0]['FORMERNAME']}}</el-descriptions-item>
        <el-descriptions-item label="独立董事" >{{stockbase[0]['INDEDIRECTORS']}}</el-descriptions-item>
        <el-descriptions-item label="律师事务所" >{{stockbase[0]['LAW_FIRM']}}</el-descriptions-item>
        <el-descriptions-item label="法人代表" >{{stockbase[0]['LEGAL_PERSON']}}</el-descriptions-item>
        <el-descriptions-item label="联系编码" >{{stockbase[0]['"10194712"']}}</el-descriptions-item>
        <el-descriptions-item label="电子信箱" >{{stockbase[0]['ORG_EMAIL']}}</el-descriptions-item>
        <el-descriptions-item label="传真" >{{stockbase[0]['ORG_FAX']}}</el-descriptions-item>
        <el-descriptions-item label="联系电话" >{{stockbase[0]['ORG_TEL']}}</el-descriptions-item>
        <el-descriptions-item label="公司网址" >{{stockbase[0]['ORG_WEB']}}</el-descriptions-item>
        <el-descriptions-item label="总经理" >{{stockbase[0]['PRESIDENT']}}</el-descriptions-item>
        <el-descriptions-item label="区域" >{{stockbase[0]['PROVINCE']}}</el-descriptions-item>
        <el-descriptions-item label="注册地址" >{{stockbase[0]['REG_ADDRESS']}}</el-descriptions-item>
        <el-descriptions-item label="注册资本(万元)" >{{stockbase[0]['REG_CAPITAL']}}</el-descriptions-item>
        <el-descriptions-item label="工商登记" >{{stockbase[0]['REG_NUM']}}</el-descriptions-item>
        <el-descriptions-item label="证券事务代表" >{{stockbase[0]['SECPRESENT']}}</el-descriptions-item>
        <el-descriptions-item label="董秘" >{{stockbase[0]['SECRETARY']}}</el-descriptions-item>
        <el-descriptions-item label="代码" >{{stockbase[0]['SECUCODE']}}</el-descriptions-item>
        <el-descriptions-item label="通用代码" >{{stockbase[0]['SECURITY_CODE']}}</el-descriptions-item>
        <el-descriptions-item label="证券类别" >{{stockbase[0]['SECURITY_TYPE']}}</el-descriptions-item>
        <el-descriptions-item label="管理人员人数" >{{stockbase[0]['TATOLNUMBER']}}</el-descriptions-item>
        <el-descriptions-item label="上市交易所" >{{stockbase[0]['TRADE_MARKET']}}</el-descriptions-item>
        <el-descriptions-item label="经营范围" >{{stockbase[0]['BUSINESS_SCOPE']}}</el-descriptions-item>
        <el-descriptions-item label="公司简介" >{{stockbase[0]['ORG_PROFILE']}}</el-descriptions-item>
      </el-descriptions>
    </div>
  </div>
</template>

<script>
import {useStore} from "vuex";
import {ref} from "vue";
import {getdetailData} from "../../../../../api/stock";

export default {
  name: "more",
  setup(){
    const store = useStore()
    // 设置默认数据
    let params= {code:"000001"}
    const stockbase = ref([{}])
    params.code =store.state.stock.code
    const getstockdetaildata = () => {
      getdetailData(params)
          .then(res => {
            stockbase.value = res.data
          })
          .catch(err => {
            stockbase.value = []
          })
    }
    getstockdetaildata()
    return{
      store,
      stockbase,
    }
  }
}
</script>

<style scoped>
.boxbig {
  padding: 20px;
}
.box {
  margin: 10px auto 0;
  width: calc(100% - 40px);
  height:100%;
  background: var(--system-page-background);
  padding: 20px;
  overflow: hidden;
}
</style>