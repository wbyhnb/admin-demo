<template>
  <el-form
    :model="menuForm"
    :rules="rules"
    ref="menuForm"
    :status-icon="true"
    label-width="100px"
    size="mini"
  >
    <el-form-item label="菜单标题" prop="title">
      <el-input v-model="menuForm.title"></el-input>
    </el-form-item>
    <el-form-item label="菜单名称" prop="menuName">
      <el-input v-model="menuForm.menuName"></el-input>
    </el-form-item>
    <el-form-item label="显示顺序" prop="orderNum">
      <el-input v-model="menuForm.orderNum"></el-input>
    </el-form-item>
    <el-form-item prop="path">
      <span slot="label">
        <el-tooltip
          content="访问的组件路径，如：`/users/index`，默认在`views`目录下"
          placement="top"
        >
          <i class="el-icon-question"></i>
        </el-tooltip>
        组件路径
      </span>
      <el-input v-model="menuForm.path"></el-input>
    </el-form-item>
    <el-form-item label="菜单图标" prop="icon">
      <el-radio-group v-model="menuForm.icon">
        <el-radio label="1">男</el-radio>
        <el-radio label="2">女</el-radio>
        <el-radio label="3">未知</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="菜单状态" prop="status">
      <el-radio-group v-model="menuForm.status">
        <el-radio label="0">正常</el-radio>
        <el-radio label="1">停用</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="备注" prop="remark">
      <el-input type="textarea" v-model="menuForm.remark"></el-input>
    </el-form-item>
  </el-form>
</template>

<script>
import { getMenuDetail, updataMenu } from "@/api/menu.js";
export default {
  data() {
    return {
      menuForm: {
        status: "0"
      },
      rules: {
        title: [
          {
            required: true,
            message: "请输入菜单标题",
            trigger: "blur"
          }
        ],
        menuName: [
          {
            required: true,
            message: "请输入菜单名称",
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    init(data) {
      getMenuDetail(data.menuId).then(res => {
        this.menuForm = res.data.data;
      });
    },
    submitForm() {
      this.$refs["menuForm"].validate(valid => {
        if (valid) {
          updataMenu(this.menuForm).then(res => {
            this.$message({
              message: res.data.msg,
              type: "success"
            });
            this.handleClose();
          });
        } else {
          return false;
        }
      });
    },
    resetForm() {
      this.$refs["menuForm"].resetFields();
    }
  }
};
</script>
<style lang="scss"></style>
