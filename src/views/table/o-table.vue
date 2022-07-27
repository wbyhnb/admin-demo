<template>
  <div class="o_table">
    <Otable :data="tableData" @select="select">
      <template #header>
        <el-form
          :inline="true"
          size="mini"
          :model="queryForm"
          class="demo-form-inline"
        >
          <el-form-item label="序号">
            <el-input
              v-model="queryForm.user"
              placeholder="审批人"
              clearable
            ></el-input>
          </el-form-item>
          <el-form-item label="活动区域">
            <el-select
              v-model="queryForm.region"
              placeholder="活动区域"
              clearable
            >
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">查询</el-button>
          </el-form-item>
        </el-form>
      </template>
      <template #button>
        <el-button type="primary" size="mini">新增</el-button>
      </template>
    </Otable>
  </div>
</template>

<script>
export default {
  components: {
    Otable: () => import("@/components/o-table.vue")
  },
  data() {
    return {
      tableData: {
        setList: {
          loading: false, //是否加载中
          border: true, //是否显示表格边框
          stripe: false, //是否显示表格条纹
          borderType: "line", //表格边框类型
          emptyText: "暂无数据", //空数据提示文本
          height: "100%", //表格高度
          rowKey: "id", //表格数据key
          showPagination: true //是否显示分页
        },
        list: [
          {
            date: "2016-05-02",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1518 弄"
          },
          {
            date: "2016-05-02",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1518 弄"
          },
          {
            date: "2016-05-02",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1518 弄"
          },
          {
            date: "2016-05-02",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1518 弄"
          },
          {
            date: "2016-05-02",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1518 弄"
          },
          {
            date: "2016-05-02",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1518 弄"
          },
          {
            date: "2016-05-02",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1518 弄"
          },
          {
            date: "2016-05-02",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1518 弄"
          },
          {
            date: "2016-05-02",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1518 弄"
          },
          {
            date: "2016-05-02",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1518 弄"
          },
          {
            date: "2016-05-02",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1518 弄"
          },
          {
            date: "2016-05-02",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1518 弄"
          },
          {
            date: "2016-05-02",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1518 弄"
          },
          {
            date: "2016-05-02",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1518 弄"
          },
          {
            date: "2016-05-02",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1518 弄"
          },
          {
            date: "2016-05-02",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1518 弄"
          },
          {
            date: "2016-05-02",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1518 弄"
          },
          {
            date: "2016-05-02",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1518 弄"
          },
          {
            date: "2016-05-02",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1518 弄"
          },
          {
            date: "2016-05-02",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1518 弄"
          },
          {
            date: "2016-05-02",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1518 弄"
          },
          {
            date: "2016-05-02",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1518 弄"
          },
          {
            date: "2016-05-02",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1518 弄"
          },
          {
            date: "2016-05-02",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1518 弄"
          },
          {
            date: "2016-05-04",
            name: "李小虎",
            address: "上海市普陀区金沙江路 1517 弄"
          },
          {
            date: "2016-05-01",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1519 弄"
          },
          {
            date: "2016-05-03",
            name: "陈小虎",
            address: "上海市普陀区金沙江路 1516 弄"
          },
          {
            date: "2016-05-05",
            name: "陈小虎",
            address: "哈哈哈哈哈哈哈"
          }
        ],
        columns: [
          {
            type: "selection",
            fixed: "left"
          },
          {
            type: "index",
            fixed: "left"
          },
          {
            prop: "date",
            label: "日期",
            minWidth: "180",
            sortable: true,
            align: "right",
            headerAlign: "left"
          },
          {
            prop: "name",
            label: "姓名",
            minWidth: "180",
            filters: [
              {
                text: "王小虎",
                value: "王小虎"
              },
              {
                text: "陈小虎",
                value: "陈小虎"
              },
              {
                text: "李小虎",
                value: "李小虎"
              }
            ]
          },
          {
            prop: "address",
            label: "地址",
            minWidth: "200"
          },
          {
            label: "操作",
            minWidth: "180",
            align: "center",
            fixed: "right",
            render: (h, params) =>
              h(
                "div",
                [
                  h(
                    "el-button",
                    {
                      props: {
                        type: "primary",
                        size: "mini",
                        icon: "el-icon-edit",
                        disabled: params.row.name === "王小虎"
                      },
                      style: {
                        display: params.row.name === '李小虎'  ? 'none' : 'inline-block',
                      },
                      on: {
                        click: () => {
                          this.$message({
                            message: "编辑"
                          });
                        }
                      }
                    },
                    "编辑"
                  ),
                  h(
                    "el-button",
                    {
                      props: {
                        type: "danger",
                        size: "mini",
                        icon: "el-icon-delete",
                      },
                      on: {
                        click: () => {
                          this.$message({
                            message: "删除"
                          });
                        }
                      }
                    },
                    "删除"
                  )
                ],
                {
                  style: {
                    display: "inline-block",
                    marginLeft: "10px"
                  }
                }
              )
          }
        ],
        pagination: {
          total: 200, //总条数
          current: 1, //当前页
          pageSize: 10, //每页条数
          sizeChange: page => {
            console.log(page);
          },
          currentChange: pageSize => {
            console.log(pageSize);
          }
        }
      },
      queryForm: {}
    };
  },
  methods: {
    onSubmit() {
      this.tableData.setList.loading = !this.tableData.setList.loading;
    },
    onReset() {},
    select({ row }) {
      console.log(row);
    }
  }
};
</script>

<style></style>
