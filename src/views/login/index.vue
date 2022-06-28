<template>
  <div class="login_main">
    <h1>WeiOne后台管理系统</h1>
    <section>
      
      <!-- 背景颜色 -->
      <div class="color"></div>
      <div class="color"></div>
      <div class="color"></div>
      <div class="box">
        <!-- 背景圆 -->
        <div class="circle" style="--x: 0"></div>
        <div class="circle" style="--x: 1"></div>
        <div class="circle" style="--x: 2"></div>
        <div class="circle" style="--x: 3"></div>
        <div class="circle" style="--x: 4"></div>
        <!-- 登录框 -->
        <div class="container">
          <div class="form">
            
            <h2>登录</h2>
            <form>
              <div class="inputBox">
                <input
                  placeholder="账号"
                  v-model="dataForm.username"
                />
              </div>
              <div class="inputBox">
                <input
                  type="password"
                  v-model="dataForm.password"
                  placeholder="密码"
                />
              </div>
              <div class="inputBox">
                <button @click.enter="Logins">登录</button>
              </div>
            </form>
            <div class="">
              <p>账号:admin</p>
              <p>密码:123456</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="bottom_layer">
      <p><a href="https://github.com/wbyhnb/admin-demo" target="_blank">关于我们</a> </p>
      <p><a href="https://github.com/wbyhnb/admin-demo" target="_blank">帮助中心</a></p>
      <p><a href="https://github.com/wbyhnb/admin-demo" target="_blank">@2022&emsp;WeiOne</a></p>
    </div>
  </div>
</template>

<script>
import { loginUser, getMenu } from "@/api/logins";
import { setToken } from "@/utils/auth";
export default {
  data() {
    return {
      dataForm: {
        username: "admin",
        password: "123456"
      }
    };
  },
  created() {},
  methods: {
    Logins() {
      loginUser(this.dataForm).then(res => {
        if (res.data.code == 200) {
          setToken(res.data.data.token);
          this.$router.replace({ path: "/" });
        } else {
          this.$message.error(res.data.msg);
        }
      });
    }
  }
};
</script>
<style src="./index.css" scoped />
