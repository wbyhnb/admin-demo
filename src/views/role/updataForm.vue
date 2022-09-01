<template>
  <el-form
    :model="menuForm"
    :rules="rules"
    ref="menuForm"
    :status-icon="true"
    label-width="100px"
    size="mini"
  >
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
    <el-form-item>
      <span slot="label">
        <el-tooltip
          content="选择是外链则路由地址需要以`http(s)://`开头"
          placement="top"
        >
          <i class="el-icon-question"></i>
        </el-tooltip>
        是否外链
      </span>
      <el-radio-group v-model="menuForm.isFrame">
        <el-radio label="0">是</el-radio>
        <el-radio label="1">否</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="菜单图标" prop="icon">
      <el-radio-group v-model="menuForm.icon">
        <el-radio label="1">男</el-radio>
        <el-radio label="2">女</el-radio>
        <el-radio label="3">未知</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item>
      <span slot="label">
        <el-tooltip
          content="选择隐藏则路由将不会出现在侧边栏，但仍然可以访问"
          placement="top"
        >
          <i class="el-icon-question"></i>
        </el-tooltip>
        显示状态
      </span>
      <el-radio-group v-model="menuForm.visible">
        <el-radio label="0">是</el-radio>
        <el-radio label="1">否</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item>
      <span slot="label">
        <el-tooltip
          content="选择停用则路由将不会出现在侧边栏，也不能被访问"
          placement="top"
        >
          <i class="el-icon-question"></i>
        </el-tooltip>
        菜单状态
      </span>
      <el-radio-group v-model="menuForm.status">
        <el-radio label="0">是</el-radio>
        <el-radio label="1">否</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="备注" prop="remark">
      <el-input type="textarea" v-model="menuForm.remark"></el-input>
    </el-form-item>
  </el-form>
</template>

<script>
import { getRoleDetail, updataRole } from "@/api/role.js";
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
      getRoleDetail(data.roleId).then(res => {
        this.menuForm = res.data.data;
      });
    },
    submitForm() {
      this.$refs["menuForm"].validate(valid => {
        if (valid) {
          updataRole(this.menuForm).then(res => {
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
