<template>
  <div class="">
    <Otable
      :data="tableData"
      @select="selectChange"
      :selectable="selectable"
    >
      <template #header>
        <el-form
          :inline="true"
          size="mini"
          :model="queryForm"
          class="demo-form-inline"
        >
          <el-form-item label="用户ID">
            <el-input
              v-model="queryForm.userId"
              placeholder="用户ID"
              clearable
            ></el-input>
          </el-form-item>
          <el-form-item label="用户名称">
            <el-input
              v-model="queryForm.userName"
              placeholder="用户名称"
              clearable
            ></el-input>
          </el-form-item>
          <el-form-item label="用户状态">
            <el-select
              v-model="queryForm.status"
              placeholder="用户状态"
              clearable
            >
              <el-option label="激活" value="1"></el-option>
              <el-option label="停用" value="0"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="getList">查询</el-button>
          </el-form-item>
        </el-form>
      </template>
      <template #button>
        <el-button type="primary" size="mini" @click="open('save', '')"
          >新增</el-button
        >
        <el-button
          type="primary"
          size="mini"
          :disabled="selectList.length > 0 ? false : true"
          @click="deletes"
          >删除</el-button
        >
      </template>
    </Otable>
    <o-drawer :title="title" :visible="drawer" :handleClose="handleClose">
      <updataForm ref="updataForm"></updataForm>
      <template #footer>
        <el-button type="primary" size="small" @click="updata('save', '')"
          >保存</el-button
        >
        <el-button @click="handleClose" size="small">取消</el-button>
      </template>
    </o-drawer>
  </div>
</template>

<script>
import * as api from "@/api/user";
export default {
  name: "users",
  data() {
    return {
      tableData: {
        setList: {
          loading: false, //是否加载中
          border: true, //是否显示表格边框
          stripe: false, //是否显示表格条纹
          borderType: "line", //表格边框类型
          emptyText: "暂无数据", //空数据提示文本
          height: "calc(100vh - 300px )", //表格高度
          // maxHeight: "100%", //表格最小宽度
          rowKey: "userId", //表格数据key
          showPagination: true //是否显示分页
        },
        list: [],

        columns: [
          {
            type: "selection",
            fixed: "left"
          },
          {
            prop: "userId",
            label: "ID",
            width: "50"
          },
          {
            prop: "userName",
            label: "名称",
            minWidth: "180"
          },
          {
            prop: "email",
            label: "邮箱",
            minWidth: "180"
          },
          {
            prop: "status",
            label: "帐号状态",
            minWidth: "180"
          },
          {
            prop: "remark",
            label: "备注",
            minWidth: "180"
          },

          {
            prop: "roleName",
            label: "角色",
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
                        type: "text",
                        size: "mini",
                        icon: "el-icon-edit",
                        disabled: params.row.userId === 1
                      },
                      style: {
                        display:
                          params.row.userId === 1 ? "none" : "inline-block"
                      },
                      on: {
                        click: () => {
                          this.open("updata", params.row);
                        }
                      }
                    },
                    "编辑"
                  ),
                  h(
                    "el-button",
                    {
                      props: {
                        type: "text",
                        size: "mini",
                        icon: "el-icon-delete"
                      },
                      style: {
                        display:
                          params.row.userId === 1 ? "none" : "inline-block"
                      },
                      on: {
                        click: () => {
                          this.delete(params.row.userId);
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
          total: 0, //总条数
          current: 1, //当前页
          pageSize: 10, //每页条数
          sizeChange: page => {
            this.tableData.pagination.pageSize = page;
            this.getList();
          },
          currentChange: pageSize => {
            this.tableData.pagination.current = pageSize;
            this.getList();
          }
        }
      },
      queryForm: {},
      drawer: false,
      title: "",
      selectList: []
    };
  },
  components: {
    updataForm: () => import("./updataForm.vue")
  },
  created() {
    this.getList();
  },
  methods: {
    //获取列表
    getList() {
      this.tableData.setList.loading = true;
      let params = {
        pageNum: this.tableData.pagination.current,
        pageSize: this.tableData.pagination.pageSize,
        ...this.queryForm
      };
      api.getUserList(params).then(res => {
        this.tableData.setList.loading = false;
        this.tableData.list = res.data.data;
        this.tableData.pagination.total = res.data.total;
      });
    },
    //选择框禁用
    selectable(row) {
      if (row.userId == 1) return false;
      else return true;
    },
    //单选/全选
    selectChange(val) {
      this.selectList = []
      val.row.map((a)=>{
        this.selectList.push(a.userId);
      })
    },
    //打开抽屉
    open(type, data) {
      this.drawer = true;

      if (type === "save") {
        this.title = "新增用户信息";
      } else if (type === "updata") {
        this.title = "编辑用户信息";
        this.$nextTick().then(() => {
          this.$refs.updataForm.init(data);
        });
      }
    },
    //批量删除
    deletes() {
      this.$confirm("确定删除吗?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          api.deleteUser(this.selectList).then(res => {
            this.$message.success("删除成功");
            this.getList();
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    //删除
    delete(id) {
      this.$confirm("确定删除吗?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          let params = [id];
          api.deleteUser(params).then(res => {
            this.$message({
              message: "删除成功",
              type: "success"
            });
            this.getList();
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    //更新信息
    updata() {
      this.$refs.updataForm.submitForm();
      this.$nextTick();
      this.handleClose();
      this.getList();
    },
    //关闭抽屉
    handleClose() {
      this.drawer = false;
      this.$refs.updataForm.resetForm();
    }
  }
};
</script>

<style></style>
