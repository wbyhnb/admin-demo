<template>
  <div class="filter">
    <el-row>
      <el-col :span="24"
        >金额千分位过滤：{{ money }}=> {{ money | moneyFilter }}</el-col
      >
      <el-col :span="24"
        >数字金额转大写：{{ money }}=>{{ money | moneyUpper }}</el-col
      >
      <el-col :span="24"
        >数字金额转大写：{{ moneys }}=>{{ moneys | moneyUpper }}</el-col
      >
      <el-col :span="24"
        >日期过滤器:{{ date }}=>
        {{ date | dateFilter("YYYY年 MMMM Do ,h:mm:ss a") }}</el-col
      >
      <el-col :span="24"
        >百分比过滤器: {{ percent }}=>{{ percent | percentFilter }}</el-col
      >
      <el-col :span="24"
        >隐藏手机号或者身份证号:{{ replace }}=>
        {{ replace | replaceFilter }}</el-col
      >
      <el-col :span="24"
        >字母大小写切换:{{ cases }}=> 全小写：{{
          cases | caseFilter("A")
        }}；全大写： {{ cases | caseFilter }}</el-col
      >
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      money: "11112345689",
      moneys: "-11112345689",
      date: "2019-01-01",
      percent: "0.11",
      replace: "15678945612",
      cases: "SksdfjkldsS"
    };
  }
};
</script>

<style lang="scss" scoped>
.filter {
  font-size: 20px;
}
</style>
