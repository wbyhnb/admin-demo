<template>
  <div class="table-container">
    <h1>动态合并表格</h1>
    <h3>1.合并多级表头</h3>
    <el-table
      :data="tableDatas"
      :header-cell-style="{ 'text-align': 'center' }"
      size="mini"
      style="width: 100%"
    >
      <el-table-column prop="date" label="日期" width="150"> </el-table-column>
      <el-table-column label="配送信息">
        <el-table-column prop="name" label="姓名"> </el-table-column>
        <el-table-column label="地址">
          <el-table-column prop="province" label="省份"> </el-table-column>
          <el-table-column prop="city" label="市区"> </el-table-column>
          <el-table-column prop="address" label="地址"> </el-table-column>
          <el-table-column prop="zip" label="邮编"> </el-table-column>
        </el-table-column>
      </el-table-column>
    </el-table>
    <h3>2.动态合并多级表格</h3>
    <el-table
      border
      height="100%"
      size="mini"
      ref="tableData"
      :span-method="objectSpanMethod"
      :header-cell-style="{ 'text-align': 'center' }"
      :data="tableData"
    >
      <el-table-column
        align="center"
        type="index"
        label="序号"
        width="50"
        fixed
      >
      </el-table-column>
      <el-table-column
        prop="actProductName"
        label="名称"
        min-width="300"
        align="left"
        show-overflow-tooltip
      >
      </el-table-column>
      <el-table-column
        prop="stockTypeName"
        label="类别"
        align="center"
        min-width="130"
        show-overflow-tooltip
      />
      <el-table-column
        prop="marketName"
        label="市场"
        align="center"
        show-overflow-tooltip
      />
      <el-table-column
        prop="stockCode"
        label="代码"
        align="center"
        min-width="100"
        show-overflow-tooltip
      />
      <el-table-column
        prop="stockName"
        label="货币名称"
        align="left"
        min-width="220"
        show-overflow-tooltip
      >
      </el-table-column>
      <el-table-column
        prop="balance"
        label="余额"
        align="center"
        min-width="120"
        show-overflow-tooltip
      >
      </el-table-column>
      <el-table-column
        prop="holdPrice"
        label="均价"
        align="center"
        min-width="120"
        show-overflow-tooltip
      >
      </el-table-column>
    </el-table>
    <h3>3.表尾合计</h3>
    <el-table
    :data="table"
    border
    size="mini"
    :summary-method="getSummaries"
    show-summary
    style="width: 100%;">
    <el-table-column
      prop="id"
      label="ID"
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名">
    </el-table-column>
    <el-table-column
      prop="amount1"
      label="数值 1（元）">
    </el-table-column>
    <el-table-column
      prop="amount2"
      label="数值 2（元）">
    </el-table-column>
    <el-table-column
      prop="amount3"
      label="数值 3（元）">
    </el-table-column>
  </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableDatas: [
        {
          date: "2016-05-03",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-08",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-06",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-07",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        }
      ],
      table: [{
          id: '12987122',
          name: '王小虎',
          amount1: '234',
          amount2: '3.2',
          amount3: 10
        }, {
          id: '12987123',
          name: '王小虎',
          amount1: '165',
          amount2: '4.43',
          amount3: 12
        }, {
          id: '12987124',
          name: '王小虎',
          amount1: '324',
          amount2: '1.9',
          amount3: 9
        }, {
          id: '12987125',
          name: '王小虎',
          amount1: '621',
          amount2: '2.2',
          amount3: 17
        }, {
          id: '12987126',
          name: '王小虎',
          amount1: '539',
          amount2: '4.1',
          amount3: 15
        }],
      tableData: [
        {
          actProductUuid: "eabd09eab3f437b4aa9f81caa9e84644",
          actProductName: "测试数据",
          list: [
            {
              tradeNo: "00303420211223001",
              actProductUuid: "eabd09eab3f437b4aa9f81caa9e84644",
              actProductName: "测试数据",
              stockType: "6027003",
              stockTypeName: "基金",
              marketId: "6006009",
              marketName: "场外",
              stockCode: "003034",
              stockName: "平安交易型货币A",
              balance: "57757.55",
              holdPrice: "1.00"
            },
            {
              tradeNo: null,
              actProductUuid: "eabd09eab3f437b4aa9f81caa9e84644",
              actProductName: "测试数据",
              stockType: "6027003",
              stockTypeName: "基金",
              marketId: null,
              marketName: "小计",
              stockCode: null,
              stockName: null,
              balance: "57757.55",
              holdPrice: "0.00",
              holdMoney: "57757.55"
            },
            {
              tradeNo: "20006120211228001",
              actProductUuid: "eabd09eab3f437b4aa9f81caa9e84644",
              actProductName: "测试数据",
              stockType: "6027004",
              stockTypeName: "资产管理产品",
              marketId: "6006009",
              marketName: "场外",
              stockCode: "200061",
              stockName: "001号",
              balance: "2000000.00",
              holdPrice: "1.00"
            },
            {
              tradeNo: "211880120211117001",
              actProductUuid: "eabd09eab3f437b4aa9f81caa9e84644",
              actProductName: "测试数据",
              stockType: "6027004",
              stockTypeName: "资产管理产品",
              marketId: "6006009",
              marketName: "场外",
              stockCode: "2118801",
              stockName: "002",
              balance: "0.00",
              holdPrice: "0.00"
            },
            {
              tradeNo: null,
              actProductUuid: "eabd09eab3f437b4aa9f81caa9e84644",
              actProductName: "测试数据",
              stockType: "6027004",
              stockTypeName: "资产管理产品",
              marketId: null,
              marketName: "小计",
              stockCode: null,
              stockName: null,
              balance: "2000000.00",
              holdPrice: "0.00",
              holdMoney: "2000000.00"
            },
            {
              tradeNo: null,
              actProductUuid: "eabd09eab3f437b4aa9f81caa9e84644",
              actProductName: "测试数据",
              stockType: null,
              stockTypeName: "合计",
              marketId: null,
              marketName: null,
              stockCode: null,
              stockName: null,
              balance: "2057757.55",
              holdPrice: "0.00",
              holdMoney: "2057757.55"
            }
          ]
        }
      ],
      typeNameArr: [], // 第一列进行合并操作时存放的数组变量
      typeNamePos: 0, // 上面的数组的下标值
      storeArr: [], // 第二列进行合并操作时存放的数组变量
      storePos: 0, // 上面的数组的下标值
      feeArr: [], // 第三列进行合并操作时存放的数组变量
      feePos: 0 // 上面的数组的下标值
    };
  },
  created() {
    this.getList();
  },
  methods: {
    getList() {
      const data = [];
      this.tableData.forEach(item => {
        data.push(...item.list);
      });
      this.tableData = data;
      this.merage();
    },
    merageInit() {
      // 在下文的时候会用到，对数据进行初始化是很有必要的
      this.typeNameArr = [];
      this.typeNamePos = 0;
      this.storeArr = [];
      this.storePos = 0;
      this.feeArr = [];
      this.feePos = 0;
    },
    merage() {
      this.merageInit();
      for (let i = 0; i < this.tableData.length; i++) {
        if (i === 0) {
          // 第一行必须存在
          this.typeNameArr.push(1);
          this.typeNamePos = 0;
          this.storeArr.push(1);
          this.storePos = 0;
          this.feeArr.push(1);
          this.feePos = 0;
        } else {
          // 判断当前元素与上一个元素是否相同,eg：this.typeNamePos 是 this.typeNameArr序号
          // 第一列
          // eslint-disable-next-line no-lonely-if
          if (
            this.tableData[i].actProductName ===
            this.tableData[i - 1].actProductName
          ) {
            this.typeNameArr[this.typeNamePos] += 1;
            this.typeNameArr.push(0);
          } else {
            this.typeNameArr.push(1);
            this.typeNamePos = i;
          }

          // 第二列
          if (
            this.tableData[i].stockTypeName ===
              this.tableData[i - 1].stockTypeName &&
            this.tableData[i].actProductName ===
              this.tableData[i - 1].actProductName
          ) {
            this.storeArr[this.storePos] += 1;
            this.storeArr.push(0);
          } else {
            this.storeArr.push(1);
            this.storePos = i;
          }
          // 第三列
          if (
            this.tableData[i].marketName === this.tableData[i - 1].marketName &&
            this.tableData[i].stockTypeName ===
              this.tableData[i - 1].stockTypeName &&
            this.tableData[i].actProductName ===
              this.tableData[i - 1].actProductName
          ) {
            this.feeArr[this.feePos] += 1;
            this.feeArr.push(0);
          } else {
            this.feeArr.push(1);
            this.feePos = i;
          }
        }
      }
    },
    objectSpanMethod({ row, column, rowIndex, columnIndex }) {
      if (columnIndex === 1) {
        // 第一列的合并方法
        const row1 = this.typeNameArr[rowIndex];
        const col1 = row1 > 0 ? 1 : 0; // 如果被合并了row = 0; 则他这个列需要取消
        return {
          rowspan: row1,
          colspan: col1
        };
      } else if (columnIndex === 2) {
        if (row.stockTypeName === "合计") {
          return {
            rowspan: 1,
            colspan: 4
          };
        }

        // 第二列的合并方法
        const row2 = this.storeArr[rowIndex];
        const col2 = row2 > 0 ? 1 : 0; // 如果被合并了row = 0; 则他这个列需要取消
        return {
          rowspan: row2,
          colspan: col2
        };
      } else if (columnIndex === 3) {
        if (row.marketName == "小计") {
          return {
            rowspan: 1,
            colspan: 3
          };
        }
        if (row.marketName == null) {
          return {
            rowspan: 0,
            colspan: 0
          };
        }
        // 第三列的合并方法
        const row3 = this.feeArr[rowIndex];
        const col3 = row3 > 0 ? 1 : 0; // 如果被合并了row = 0; 则他这个列需要取消
        return {
          rowspan: row3,
          colspan: col3
        };
      } else if (columnIndex === 4) {
        if (row.stockCode == null) {
          return {
            rowspan: 0,
            colspan: 0
          };
        }
      } else if (columnIndex === 5) {
        if (row.stockName == null) {
          return {
            rowspan: 0,
            colspan: 0
          };
        }
      } else {
        // return {
        //   rowspan: 1,
        //   colspan: 1,
        // };
      }
    },
    getSummaries(param) {
        const { columns, data } = param;
        const sums = [];
        columns.forEach((column, index) => {
          if (index === 0) {
            sums[index] = '总价';
            return;
          }
          const values = data.map(item => Number(item[column.property]));
          if (!values.every(value => isNaN(value))) {
            sums[index] = values.reduce((prev, curr) => {
              const value = Number(curr);
              if (!isNaN(value)) {
                return prev + curr;
              } else {
                return prev;
              }
            }, 0);
            sums[index] += ' 元';
          } else {
            sums[index] = 'N/A';
          }
        });

        return sums;
      }
  }
};
</script>

<style scoped>
h3{
  margin: 15px 0 ;
}
</style>
