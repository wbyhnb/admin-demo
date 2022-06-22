<template>
  <div class="headers">
    <div
      class="icons search"
      :class="isSearch ? 'search_active' : 'search_actives'"
    >
      <el-input v-model="keyword" class="inp-active" />
      <div class="" @click="Search">
        <icon-svg icon-class="sousuo" class="svg1" />
      </div>
    </div>
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
      isSearch: false,
      keyword: "",
      
    };
  },
  mounted() {
    window.onresize = () => {
      this.isFullscreen = screenfull.isFullscreen;
    };
  },
  computed: {
    userInfo() {
      return this.$store.state.user.userInfo;
    },
  },
  methods: {
    Search() {
      this.isSearch = !this.isSearch;
    },
    // 切换全屏方法
    toggleFullscreen() {
      if (!screenfull.isEnabled) {
        //判断一下浏览器是否支持全屏显示
        this.$message({
          message: "浏览器不能全屏",
          type: "warning",
        });
        return false;
      }
      screenfull.toggle();
    },
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
  .search {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    box-sizing: border-box;
    animation: all 0.6s ease;
    height: 30px;
    >>> .el-input__inner {
      background: transparent;
      border: none;
      padding: 0;
      height: 100%;
      color: #ffffff;
    }
    .inp-active {
      display: none;
      padding: 0 0 0 10px;
    }
  }
  .search_active {
    animation: border-color 0.6s, zan 0.6s ease;
    animation-direction: alternate;
    border-bottom: 1px solid #ffffff;
    .inp-active {
      display: block;
    }
  }
  .search_actives {
    animation: border-color 0.6s, ze 0.6s ease;
    animation-direction: alternate;

    .inp-active {
      display: none;
    }
  }
  @keyframes zan {
    0% {
      width: 25px;
    }
    100% {
      width: 190px;
    }
  }
  @keyframes ze {
    0% {
      width: 190px;border-bottom: 1px solid #ffffff;
    }
    100% {
      width: 25px;border-bottom: 0px solid #ffffff;
    }
  }
  >>> .el-drawer {
    padding: 20px;
    border-radius: 4px 0 0 4px !important;
  }
}
</style>