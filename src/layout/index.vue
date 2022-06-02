<template>
  <div id="layout">
    <div class="nav-aside"><NavMenu /></div>
    <div class="main">
      <div class="main-header">
        <!-- 推出登录 -->
        <el-button type="primary" @click="logout">退出登录</el-button>
      </div>
      <div class="main-content">
        <Main> </Main>
        
      </div>
    </div>
  </div>
</template>

<script>
import { removeToken } from "@/utils/auth";
export default {
  name: "layout",
  components: { 
    NavMenu: ()=> import("./components/navMenu.vue"),
    Main:()=>import('./components/Main.vue')
    },
  data() {
    return {};
  },
  methods: {
    logout() {
      this.$confirm("确定退出登录?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      }).then(() => {
        removeToken();
        this.$router.replace("/login");
        location.reload()
      });
    },
  },
  computed: {},
  created() {},
};
</script>

<style lang="scss" scoped>
#layout {
  display: flex;
  height: 100vh;
  width: 100%;
  .nav-aside {
    width: 200px;
    height: 100%;
    background-color: rgb(18, 238, 183);
  }
  .main {
    flex: 1;
    display: flex;
    flex-direction: column;
    .main-header {
      height: 50px;
      background-color: #eee;
    }
    .main-content {
      flex: 1;
      background-color: #fff;
    }
  }
}
</style>
