<template>
  <el-form
    :model="userForm"
    :rules="rules"
    ref="userForm"
    label-width="80px"
    size="mini"
  >
    <el-form-item label="用户名称" prop="userName">
      <el-input v-model="userForm.userName"></el-input>
    </el-form-item>
    <el-form-item label="用户密码" prop="password">
      <el-input v-model="userForm.password" show-password></el-input>
    </el-form-item>
    <el-form-item label="邮箱" prop="email">
      <el-input v-model="userForm.email"></el-input>
    </el-form-item>
    <el-form-item label="手机号" prop="phonenumber">
      <el-input v-model="userForm.phonenumber"></el-input>
    </el-form-item>
    <el-form-item label="角色" prop="roleKey">
      <el-select
        @focus="roleList"
        v-model="userForm.roles"
        placeholder="请选择"
        @change="roleChange"
      >
        <el-option
          v-for="item in options"
          :key="item.rolrKey"
          :label="item.roleName"
          :value="item.roleKey"
        >
        </el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="性别" prop="sex">
      <el-radio-group v-model="userForm.sex">
        <el-radio label="1">男</el-radio>
        <el-radio label="2">女</el-radio>
        <el-radio label="3">未知</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="账号状态" prop="status">
      <el-radio-group v-model="userForm.status">
        <el-radio label="1">激活</el-radio>
        <el-radio label="2">停用</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="备注" prop="remark">
      <el-input type="textarea" v-model="userForm.remark"></el-input>
    </el-form-item>
  </el-form>
</template>

<script>
import { updateUserInfo, getUserById } from "@/api/user.js";
import { getRoleList } from "@/api/role.js";
export default {
  data() {
    return {
      userForm: {
        status: "1",
        roleName: ""
      },
      options: [],
      rules: {
        userName: [
          {
            required: true,
            message: "请输入用户名称",
            trigger: "blur"
          }
        ],
        password: [
          {
            required: true,
            message: "请输入用户密码",
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    init(data) {
      getUserById(data.userId).then(res => {
        this.userForm = res.data.data;
      });
    },
    submitForm() {
      this.$refs["userForm"].validate(valid => {
        if (valid) {
          updateUserInfo(this.userForm).then(res => {
            this.$message({
              message: res.data.msg,
              type: "success"
            });
          });
        } else {
          return false;
        }
      });
    },
    roleList() {
      getRoleList().then(res => {
        this.options = res.data.data;
      });
    },
    roleChange(val) {
      console.log(val);
      this.userForm.roleName = this.options.filter(item => {
        return item.roleKey == val;
      })[0].roleName;
      console.log(this.userForm.roleName);
    },
    resetForm() {
      this.$refs["userForm"].resetFields();
    }
  }
};
</script>
<style lang="scss"></style>
