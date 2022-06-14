<template>
  <div class="nav-menu">
    <!-- 菜单组件 -->
    <el-menu
      :default-active="$route.path"
      class="el-menu-vertical-demo"
      text-color="#ffffff"
      router
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
export default {
  name: "navMenu",
  data() {
    return {};
  },
  created() {
    console.log(this.routes);
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
  overflow-x: hidden;
  height: 100%;
  background-image: linear-gradient(
    -225deg,
    #5271c4 0%,
    #b19fff 48%,
    #eca1fe 100%
  );
}
.nav-menu::-webkit-scrollbar {
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
>>> .el-submenu__title {
  height: 48px;
  line-height: 48px;
  i {
    color: #ffffff;
  }
}
.el-menu-item:hover {
  background-color: #ffffff !important;
  color: #5271c4 !important;
  font-weight: 700;
  border-radius: 4px;
  animation: border-color .3s,background-color .3s,color .3s ease-in-out;
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
</style>
