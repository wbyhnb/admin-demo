<template>
  <div class="menu">
    <div class="menu_left" v-if="isScroll" @click="scrollLeft">
      <icon-svg icon-class="Chevron-Left" class="menu_svg" />
    </div>
    <div class="menu_scroll" @scroll="getScrollLeft($event)" ref="scrollDiv">
      <el-menu
        id="menu"
        ref="menu"
        mode="horizontal"
        :default-active="$route.path"
        :collapse-transition="false"
        @scroll="getScrollLeft($event)"
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
    </div>
    <div class="menu_right" v-if="isScroll" @click="scrollRight">
      <icon-svg icon-class="Chevron-Right" class="menu_svg" />
    </div>
  </div>
</template>

<script>
let interval; // 定义全局定时器，用于清除定时器
export default {
  name: "headerMenu",
  data() {
    return {
      scrollTop: 0,
      // scrollWitch: 0,
      scrollY: 0,
      isScroll: false
    };
  },

  created() {},
  mounted() {
    this.$nextTick(() => {
      //动态获取元素的宽度
      interval = setInterval(() => {
        if (
          this.$refs.menu.$el.offsetWidth > this.$refs.scrollDiv.offsetWidth
        ) {
          this.isScroll = true;
        } else {
          this.isScroll = false;
        }
      }, 500);
    }, 100);
  },
  computed: {
    routes() {
      return this.$router.options.routes;
    }
  },
  methods: {
    getScrollLeft(event) {
      // console.log(event);
      // console.log(this.$refs.scrollDiv.scrollLeft);
      // console.log(document.getElementById("menu").scrollLeft);
    },
    //滚动右边
    scrollRight() {
      const times = setInterval(() => {
        this.$refs.scrollDiv.scrollLeft += 100;
        if (
          this.$refs.scrollDiv.scrollLeft >=
          this.$refs.menu.$el.offsetWidth - this.$refs.scrollDiv.offsetWidth
        ) {
          clearInterval(times);
        }
      }, 80);
      // this.$refs.scrollDiv.scrollLeft = 1000;
    },
    //滚动到左边
    scrollLeft() {
      const times = setInterval(() => {
        this.$refs.scrollDiv.scrollLeft -= 100;
        if (this.$refs.scrollDiv.scrollLeft <= 1) {
          clearInterval(times);
        }
      }, 80);
    }
  },
  beforeDestroy() {
    //清除定时器
    clearInterval(interval);
  }
};
</script>

<style lang="scss" scoped>
@import "@/style/dynamic.scss";

.menu {
  display: flex;
  padding: 0 0 2px;
  height: 50px;
  align-items: center;
  user-select: none;
  cursor: pointer;
  transform: all 0.3s ease-in-out;
  .menu_left {
    height: 100%;
    width: 40px;
    padding-left: 5px;
    cursor: pointer;
    box-sizing: border-box;
    // border-right: 2px solid #fff;
   background: linear-gradient(to left, rgb(255 255 255 / 40%) 0%, transparent);
    animation: fade-in-left 1.5s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  }
  @keyframes fade-in-left {
    0% {
      -webkit-transform: translateX(-50px);
      transform: translateX(-50px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateX(0);
      transform: translateX(0);
      opacity: 1;
    }
  }

  .menu_right {
    box-sizing: border-box;
    height: 100%;
    cursor: pointer;
    // border-left: 2px solid #fff;
        background: linear-gradient(to right, rgb(255 255 255 / 40%) 0%, transparent);
    animation: fade-in-right 1.5s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  }
  @keyframes fade-in-right {
    0% {
      -webkit-transform: translateX(50px);
      transform: translateX(50px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateX(0);
      transform: translateX(0);
      opacity: 1;
    }
  }

  .menu_svg {
    color: #fff;
    font-size: 30px;
    padding: 10px 0 0 0;
    line-height: 50px;
  }

  .menu_svg:hover {
    font-size: 36px;
    padding-top: 8px;
  }
}
.menu:hover {
  .menu_scroll::-webkit-scrollbar-thumb {
    display: block;
  }
}

.svg {
  font-size: 20px;
  line-height: 48px;
}

.menu_scroll {
  height: 100%;
  display: flex;
  overflow: hidden;
  height: 50px;
  width: calc(100vw - 660px);
  overflow-x: scroll;
  animation: all 0.3s ease;
}

.menu_scroll::-webkit-scrollbar {
  height: 5px;
  width: 13px;
  cursor: pointer;
}

//滚动条样式
.menu_scroll::-webkit-scrollbar-thumb {
  display: none;
  background: #fff;
  border-radius: 5px;
  cursor: pointer;
  height: 10px;
}

.icon_span {
  margin-left: 10px;
}

.el-menu.el-menu--horizontal {
  border: none;
  display: flex;
  // height: 100%;
  // height: 50px;
  // width: calc(100vw - 500px);
  // width: 2000px;
  overflow: initial;
}

// 滚动条
// .el-menu.el-menu--horizontal::-webkit-scrollbar {
//   display: none;
// }

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
