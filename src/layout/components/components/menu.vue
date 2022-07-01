<template>
  <el-menu
    mode="horizontal"
    :default-active="$route.path"
    :collapse-transition="false"
    class="el-menu-vertical-demo"
    text-color="#ffffff"
    router
    background-color="transparent"
    active-text-color="#fff"
  >
    <template v-for="item in routes">
      <template v-if="item.children && item.children.length > 1">
        <el-submenu :index="item.path" :key="item.path">
          <template slot="title">
            <icon-svg
              v-if="item.meta.icon"
              :icon-class="item.meta.icon"
              class="svg"
            />
            <i class="el-icon-menu" v-else></i>
            <span class="icon_span">{{ item.meta.title }}</span>
          </template>
          <template v-for="second in item.children">
            <template v-if="second.children">
              <el-submenu
                v-for="child in second.children"
                :key="child.path"
                :index="child.path"
              >
                <icon-svg
                  v-if="child.meta.icon"
                  :icon-class="child.meta.icon"
                  class="svg"
                />
                <i class="el-icon-menu" v-else></i>
                <el-menu-item :index="child.path">
                  <span class="icon_span">{{ second.meta.title }}</span>
                </el-menu-item>
              </el-submenu>
            </template>
            <template v-else>
              <el-menu-item :index="second.path" :key="second.path">
                <icon-svg
                  v-if="second.meta.icon"
                  :icon-class="second.meta.icon"
                  class="svg"
                />
                <i class="el-icon-menu" v-else></i>
                <span class="icon_span"> {{ second.meta.title }}</span>
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
        <icon-svg
          v-if="item.meta.icon"
          :icon-class="item.meta.icon"
          class="svg"
        />
        <i class="el-icon-menu" v-else></i>
        <span class="icon_span" slot="title">{{ item.meta.title }}</span>
      </el-menu-item>
    </template>
  </el-menu>
</template>

<script>
export default {
  name: "menu",
  data() {
    return {
      isCollapse: this.isCollapses
    };
  },
  props: ["mode", "isCollapses"],
  computed: {
    routes() {
      return this.$router.options.routes;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/style/dynamic.scss";
.svg {
  font-size: 20px;
  line-height: 48px;
}
.icon_span {
  margin-left: 10px;
}
.el-menu.el-menu--horizontal {
  border: none;
}
.el-menu-vertical-demo {
  overflow: hidden;
  padding-right: 2px;
}

.el-menu--horizontal > .el-menu-item {
  margin: 4px;
  height: 40px;
  line-height: 40px;
  display: flex;
  align-items: center;

  i {
    color: #ffffff;
  }
}
.el-menu-item {
  margin: 4px;
  height: 40px;
  line-height: 40px;
  display: flex;
  align-items: center;

  i {
    color: #ffffff;
  }
}


>>> .el-submenu__title {
  height: 40px !important;
  line-height: 40px !important;
  margin: 4px;

  i {
    color: #ffffff;
  }
}

.el-menu-item:hover {
  background-color: transparent !important;
  color: #fff !important;
  font-weight: 700;
  animation: background-color 0.3s, color 0.3s ease-in-out;
  border-bottom: 2px solid #fff !important;
  i {
    color: #fff !important;
  }
}

>>> .el-submenu__title:hover {
  background-color: transparent !important;
  color: #fff !important;
  font-weight: 600;
  border-bottom: 2px solid #fff !important;
  i {
    color: #fff !important;
  }
}

.el-menu-item.is-active {
  background-color: transparent !important;
  color: #fff !important;
  font-weight: 700;
  border-bottom: 2px solid #fff !important;
  i {
    color: #fff !important;
  }
}

>>> .el-menu--horizontal > .el-submenu .is-active .el-submenu__title {
  background-color: transparent !important;
  color: #fff !important;
  font-weight: 700;

  i {
    color: #fff !important;
  }
}
.el-menu--horizontal > .el-menu-item.is-active {
  background-color: transparent !important;
  color: #fff !important;
  font-weight: 700;
  border-bottom: 2px solid #fff !important;
  i {
    color: #fff !important;
  }
}
</style>
<style lang="scss">
@import "@/style/dynamic.scss";
.el-menu--popup {
  min-width: 130px !important;
  padding: 5px !important;
  background-image: linear-gradient(
    -225deg,
    $leftColor 0%,
    #b19fff 48%,
    #eca1fe 100%
  );
}
</style>
