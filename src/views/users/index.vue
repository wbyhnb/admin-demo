<template>
<div class="">
   <el-table :data="tableData" height="250" :span-method="objectSpanMethod" border style="width: 100%">
    <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
    <el-table-column prop="date" label="日期" width="180"> </el-table-column>
    <el-table-column prop="address" label="地址"> </el-table-column>
  </el-table>
  <div class="aaaa" ></div>
  <p>1123123</p>
</div>
 
</template>
 
<script>
export default {
  data() {
    return {
      tableData: []
    }
  },
  computed: {
    //用于查找相同数据的数量
    tableDataColumn() {
      let dataObject = {}
      this.tableData.forEach((item, index) => {
        if (dataObject[item.name]) {
          dataObject[item.name].push(item)
        } else {
          dataObject[item.name] = [item]
        }
      })
      return dataObject
    }
  },
  created() {
    let tableData = [
      {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      },
      {
        date: '2016-05-10',
        name: '王力',
        address: '上海市普陀区金沙江路 1518 弄'
      },
      {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      },
      {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      },
      {
        date: '2016-05-01',
        name: '王力',
        address: '上海市普陀区金沙江路 1518 弄'
      },
      {
        date: '2016-05-08',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      },
      {
        date: '2016-05-06',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      },
      {
        date: '2016-05-07',
        name: '王丹',
        address: '上海市普陀区金沙江路 1518 弄'
      }
    ]
    //模拟接口返回速度
    setTimeout(() => {
      this.tableData = this.selectionSort(tableData)
    }, 500)
  },
  methods: {
    //将名称相同的数据进行结合-重新排序-辅助表格合并
    selectionSort(arr) {
      //考虑到后台数据返回一般在created执行，computed优先级高于created，
      // tableDataColumn执行时this.tableData无法及时获取值-重新筛选一次
      const arrList = new Map()
      arr.forEach((item, index) => {
        if (arrList.has(item.name)) {
          let value = arrList.get(item.name)
          value.push(item)
          arrList.set(item.name, value)
        } else {
          arrList.set(item.name, [item])
        }
      })
      let newList = []
      for (let item of [...arrList]) {
        newList = newList.concat(item[1])
      }
      return newList
    },
    objectSpanMethod({ row, column, rowIndex, columnIndex }) {
      if (columnIndex === 0) {
        if (rowIndex > 0 && row.name === this.tableData[rowIndex - 1].name) {
          return {
            rowspan: 0,
            colspan: 0
          }
        } else {
          const name = row.name
          //此处采用computed计算属性-存在缓存
          const rows = this.tableDataColumn[name]
          return {
            rowspan: rows.length,
            colspan: 1
          }
        }
      }else if (columnIndex === 1) {
        if (rowIndex > 0 && row.date === this.tableData[rowIndex - 1].date) {
          return {
            rowspan: 0,
            colspan: 0
          }
        } else {
          const date = row.date
          //此处采用computed计算属性-存在缓存
          const rows = this.tableData.filter(item => item.date === date)
          return {
            rowspan: rows.length,
            colspan: 1
          }
        }
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.aaaa{
  width: 100%;
  height: 1000px;
}
</style>