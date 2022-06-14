<template>
  <div :class="!isCollapse ? 'nav-menu' : 'menu-active'">
    <div class="zhankai">
      <span class="titles" v-show="!isCollapse">WeiOne后台管理系统</span>
      <span :class="!isCollapse ? 'svgs' : 'svgs svg-active'" @click="isShow"
        ><icon-svg icon-class="zhankai"></icon-svg
      ></span>
    </div>
    <!-- 菜单组件 -->
    <el-menu
      :default-active="$route.path"
      :collapse-transition="false"
      class="el-menu-vertical-demo"
      text-color="#ffffff"
      router
      :collapse="isCollapse"
      background-color="transparent"
      active-text-color="#ffd04b"
    >
      <template v-for="item in routes">
        <template v-if="item.children && item.children.length > 1">
          <el-submenu :index="item.path" :key="item.path">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>{{ item.meta.title }}</span>
            </template>
            <template v-for="second in item.children">
              <template v-if="second.children">
                <el-submenu
                  v-for="child in second.children"
                  :key="child.path"
                  :index="child.path"
                >
                  <el-menu-item :index="child.path">
                    {{ second.meta.title }}</el-menu-item
                  >
                </el-submenu>
              </template>
              <template v-else>
                <el-menu-item :index="second.path" :key="second.path">
                  {{ second.meta.title }}
                </el-menu-item>
              </template>
            </template>
          </el-submenu>
        </template>

        <el-menu-item
          v-else-if="!item.hidden"
          :index="item.children[0].path"
          :key="item.children[0].path"
        >
          <i class="el-icon-menu"></i>
          <span slot="title">{{ item.meta.title }}</span>
        </el-menu-item>
      </template>
    </el-menu>
  </div>
</template>

<script>
import IconSvg from "../../components/Icon-svg.vue";
export default {
  components: { IconSvg },
  name: "navMenu",
  data() {
    return {
      isCollapse: false,
    };
  },
  created() {
    console.log(this.routes);
  },
  methods: {
    isShow() {
      this.isCollapse = !this.isCollapse;
      console.log(this.isCollapse);
    },
  },
  computed: {
    routes() {
      return this.$router.options.routes;
    },
  },
};
</script>

<style lang="scss" scoped>
.nav-menu {
  width: 200px;
  position: relative;
  overflow-x: hidden;
  height: 100%;
  background-image: linear-gradient(
    -225deg,
    #5271c4 0%,
    #b19fff 48%,
    #eca1fe 100%
  );
  transition: width 0.28s;
  -webkit-transition: width 0.15s;
  -moz-transition: width 0.15s;
  -webkit-transition: width 0.15s;
  -o-transition: width 0.15s;
}
.menu-active {
  width: 64px;
  position: relative;
  overflow-x: hidden;
  height: 100%;
  background-image: linear-gradient(
    -225deg,
    #5271c4 0%,
    #b19fff 48%,
    #eca1fe 100%
  );
  transition: width 0.28s;
  -webkit-transition: width 0.15s;
  -moz-transition: width 0.15s;
  -webkit-transition: width 0.15s;
  -o-transition: width 0.15s;
}
.nav-menu::-webkit-scrollbar {
  width: 0px;
}
.menu-active::-webkit-scrollbar {
  width: 0px;
}
.el-menu-vertical-demo {
  overflow: hidden;
  padding-right: 2px;
}
.el-menu-item {
  margin: 4px;
  height: 48px;
  line-height: 48px;
  i {
    color: #ffffff;
  }
}
.el-menu {
  border: none;
}

>>> .el-submenu__title {
  height: 48px;
  line-height: 48px;
  margin: 4px;
  padding-left: 16px !important;
  i {
    color: #ffffff;
  }
}
.el-menu-item:hover {
  background-color: #ffffff !important;
  color: #5271c4 !important;
  font-weight: 700;
  border-radius: 4px;
  animation: border-color 0.3s, background-color 0.3s, color 0.3s ease-in-out;
  i {
    color: #5271c4 !important;
  }
}
>>> .el-submenu__title:hover {
  background-color: #ffffff !important;
  color: #5271c4 !important;
  font-weight: 600;
  border-radius: 4px;
  i {
    color: #5271c4 !important;
  }
}
.el-menu-item.is-active {
  background-color: #ffffff !important;
  color: #5271c4 !important;
  font-weight: 700;
  border-radius: 4px;
  i {
    color: #5271c4 !important;
  }
}
.zhankai {
  .titles {
    font-size: 14px;
    font-family: KaiTi;
    margin-right: 15px;
  }
  .svgs {
    font-size: 20px;
    line-height: 50px;
    display: inline-block;
    animation: rotate-901-cw 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  }
  @keyframes rotate-901-cw {
    0% {
      -webkit-transform: rotate(0);
      transform: rotate(0);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  .svg-active {
    animation: rotate-90-cw 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  }
  @keyframes rotate-90-cw {
    0% {
      -webkit-transform: rotate(0);
      transform: rotate(0);
    }
    100% {
      -webkit-transform: rotate(180deg);
      transform: rotate(180deg);
    }
  }
  position: sticky;
  width: 100%;
  right: 0;
  top: 0;
  height: 50px;
  text-align: center;
  line-height: 50px;
  cursor: pointer;
  color: #fff;

  font-weight: 700;
}
</style>
<style lang="scss">
.el-menu--popup {
  background-image: linear-gradient(
    -225deg,
    #5271c4 0%,
    #b19fff 48%,
    #eca1fe 100%
  );
  border-radius: 5px;
}
.el-tooltip{
  padding: 0 16px !important;
}
</style>