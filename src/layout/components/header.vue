<template>
  <div class="headers">
    <div class="headers_menu" >
      <Menu v-if="!leftMenu"/>
    </div>
    <div class="headers_button">
      <div
        class="icons search"
        :class="isSearch ? 'search_active' : 'search_actives'"
      >
        <el-autocomplete
          v-model="keyword"
          class="inp-active"
          :fetch-suggestions="querySearchAsync"
          @select="handleSelect"
        />
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
      <div class="icons" @click="drawerEdit">
        <icon-svg icon-class="31shezhi" class="svg" />
      </div>
      <el-dropdown trigger="click" :hide-on-click="false">
        <span class="el-dropdown-link">
          <but-col style="width: 40px; height: 40px">
            <el-avatar
              class="sub-title"
              shape="square"
              :size="40"
              :src="userInfo.avatar"
            ></el-avatar>
          </but-col>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item
            ><span @click="logout">退出登录</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <RightEdit ref="leftEdits" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { removeToken } from "@/utils/auth";
import screenfull from "screenfull";
export default {
  name: "headers",
  data() {
    return {
      // drawerEdit: false,
      // direction: "rtl",
      isFullscreen: false,
      isSearch: false,
      keyword: "",
      restaurants: [],
      state: "",
      timeout: null
    };
  },
  components: {
    RightEdit: () => import("./components/rightEdit"),
    Menu: () => import("./components/menu")
  },
  created() {},
  mounted() {
    window.onresize = () => {
      this.isFullscreen = screenfull.isFullscreen;
    };
    this.restaurants = this.loadAll();
  },
  computed: {
    ...mapGetters(["themeColor", "leftMenu", "tagView"]),
    userInfo() {
      return this.$store.state.user.userInfo;
    },
    routes() {
      return this.$router.options.routes;
    }
  },
  methods: {
    drawerEdit() {
      this.$refs.leftEdits.drawerEdit = true;
    },
    // 搜索数据
    loadAll() {
      const routers = this.$router.options.routes;
      const dataList = [];
      routers.map(item => {
        if (item.children && !item.hidden) {
          dataList.push(...item.children);
        }
      });
      dataList.map(item => {
        item.value = item.meta.title;
      });
      return dataList;
    },
    //搜索动画
    Search() {
      this.isSearch = !this.isSearch;
    },
    //点击切换路由
    handleSelect(item) {
      this.$router.push({ path: item.path });
    },
    querySearchAsync(queryString, cb) {
      var restaurants = this.restaurants;
      var results = queryString
        ? restaurants.filter(this.createStateFilter(queryString))
        : restaurants;

      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        cb(results);
      }, 100 * Math.random());
    },
    createStateFilter(queryString) {
      return state => {
        return (
          state.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0
        );
      };
    },
    logout() {
      this.$confirm("确定退出登录?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(() => {
        removeToken();
        this.$router.replace("/login");
        // location.reload();//刷新页面方法
      });
    },
    // 切换全屏方法
    toggleFullscreen() {
      if (!screenfull.isEnabled) {
        //判断一下浏览器是否支持全屏显示
        this.$message({
          message: "浏览器不能全屏",
          type: "warning"
        });
        return false;
      }
      screenfull.toggle();
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/style/dynamic.scss";
.headers {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  background-image: linear-gradient(
    225deg,
    $leftColor 0%,
    #b19fff 48%,
    #eca1fe 100%
  );
  padding: 0 20px;
  box-sizing: border-box;
  .headers_menu{
    height: 100%;
  }
  .headers_button {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
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
      width: 190px;
      border-bottom: 1px solid #ffffff;
    }
    100% {
      width: 25px;
      border-bottom: 0px solid #ffffff;
    }
  }
  >>> .el-drawer {
    padding: 20px;
    border-radius: 4px 0 0 4px !important;
  }
}
</style>
