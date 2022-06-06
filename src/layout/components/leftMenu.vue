<template>
  <div class="nav-menu">
    <!-- 菜单组件 -->
    <el-menu
      :default-active="$route.path"
      class="el-menu-vertical-demo"
      text-color="#000"
      router
      active-text-color="#ffd04b"
    >
      <template v-for="item in routes">
        <template v-if="item.children && !item.hidden">
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
              <el-menu-item-group v-else :key="second.path">
                <el-menu-item :index="second.path">
                  {{ second.meta.title }}
                </el-menu-item>
              </el-menu-item-group>
            </template>
          </el-submenu>
        </template>
        <router-link v-if="!item.children && !item.hidden" :key="item.path" :to="item.path">
            <el-menu-item :index="item.path">
              <i class="el-icon-menu"></i>
              <span slot="title">{{ item.meta.title }}</span>
            </el-menu-item>
        </router-link>
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
  created() {},
  computed: {
    routes() {
      return this.$router.options.routes;
    }
  }
};
</script>

<style lang="scss" scoped>
.nav-menu{
  height: 100%;
 background-image: linear-gradient( -225deg, #5271c4 0%, #b19fff 48%, #eca1fe 100% )
}
.el-menu-vertical-demo{
  overflow: hidden;
     
}
</style>
