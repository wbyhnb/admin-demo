<template>
  <div class="headers">
    <div class="icons" v-if="!isFullscreen" @click="toggleFullscreen()">
      <icon-svg icon-class="quanpingmu" class="svg1" />
    </div>
    <div class="icons" v-else @click="toggleFullscreen()">
      <icon-svg icon-class="tuichuquanping" class="svg1" />
    </div>
    <div class="icons" @click="drawerEdit = true">
      <icon-svg icon-class="31shezhi" class="svg" />
    </div>
    <but-col style="width: 40px; height: 40px">
      <el-avatar
        class="sub-title"
        shape="square"
        :size="40"
        :src="userInfo.avatar"
      ></el-avatar>
    </but-col>
    <el-drawer
      class="edit-drawer"
      :size="'25%'"
      :visible.sync="drawerEdit"
      :close-on-press-escape="true"
      :direction="direction"
      :withHeader="false"
      :modal="false"
    >
      <h1><icon-svg icon-class="31shezhi" /> 系统设置</h1>
    </el-drawer>
  </div>
</template>

<script>
import screenfull from "screenfull";
export default {
  data() {
    return {
      drawerEdit: false,
      direction: "rtl",
      isFullscreen: false,
    };
  },
  mounted() {
   window.onresize = () => {
      this.isFullscreen = screenfull.isFullscreen
    }
  },
  computed: {
    userInfo() {
      return this.$store.state.user.userInfo;
    },
  },
  methods: {
    // 切换全屏方法
    toggleFullscreen () {
      if(!screenfull.isEnabled){     //判断一下浏览器是否支持全屏显示
        this.$message({
          message:'浏览器不能全屏',
          type:'warning'
        })
        return false
      }
      screenfull.toggle()
    }

  },
};
</script>

<style lang="scss" scoped>
.headers {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 100%;
  background-image: linear-gradient(
    225deg,
    #5271c4 0%,
    #b19fff 48%,
    #eca1fe 100%
  );
  padding: 0 20px;
  box-sizing: border-box;
  .icons {
    cursor: pointer;
    margin-right: 15px;
    .svg1 {
      font-size: 25px;
      color: #ffffff;
    }
    .svg {
      font-size: 30px;
      color: #ffffff;
    }
  }
  >>> .el-drawer {
    padding: 20px;
    border-radius: 4px 0 0 4px !important;
  }
}
</style>