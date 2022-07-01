<template>
  <div class="">
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
      <h3>系统主题</h3>
      <h3>主题颜色</h3>
      <div class="theme_color">
        <el-color-picker v-model="theme" :predefine="predefineColors" />
        <div
          class="item_color"
          v-for="item in predefineColors"
          :key="item"
          :style="{ background: item, border: `1px solid ${item}` }"
          :class="{ item_color_active: theme === item }"
          @click="theme = item"
        ></div>
      </div>
      <el-divider></el-divider>
      <h3>导航模式</h3>
      <div class="theme_nav">
        <div
          class="item item_nav1"
          @click="isLeft(true)"
          :class="leftMenu ? 'item_nav' : ''"
        >
          <span>✔</span>
        </div>
        <div
          class="item item_nav2"
          @click="isLeft(false)"
          :class="leftMenu ? '' : 'item_nav'"
        >
          <span>✔</span>
        </div>
      </div>
      <el-divider></el-divider>
      <h3>内容设置</h3>
      <div class="theme_content">
        <div class="item">
          <div class="item_title">字体大小</div>
          <div class="item_content">
            <el-slider
              :format-tooltip="formatTooltip"
              :min="12"
              :max="22"
              v-model="fontSize"
            ></el-slider>
          </div>
        </div>
        <div class="item">
          <div class="item_title">LOGO</div>
          <div class="item_content">
            <el-switch v-model="isLogo"> </el-switch>
          </div>
        </div>
        <div class="item">
          <div class="item_title">标签栏</div>
          <div class="item_content">
            <el-switch v-model="isTagView" @change="isTag"> </el-switch>
          </div>
        </div>
      </div>
    </el-drawer>
  </div>
</template>
<script>
import { updateThemeColor } from "@/plugins/themeColor.js";
import { mapGetters } from "vuex";
export default {
  name: "themePicker",
  data() {
    return {
      chalk: "", // 颜色
      predefineColors: [
        "#ff4500",
        "#ff8c00",
        "#ffd700",
        "#F56C6C",
        "#E6A23C",
        "#90ee90",
        "#00ced1",
        "#c71585",
        "#409EFF"
      ],
      theme: "", // 主题颜色
      drawerEdit: false,
      direction: "rtl",
      fontSize: 12,
      isLogo: false,
      isTagView: false,
      isLeftMenu: true
    };
  },
  created() {
    this.theme =  this.themeColor;
    this.isLeftMenu = this.leftMenu;
    this.isTagView = this.tagView;
  },
  mounted() {},
  methods: {
    formatTooltip() {
      return `${this.fontSize}px`;
    },
    isLeft(isLeft) {
      this.$store.dispatch("setLeftMenu", isLeft);
    },
    isTag(isTag) {
      this.$store.dispatch("setTagView", isTag);
    },
  },
  computed: {
    ...mapGetters(["themeColor", "leftMenu", "tagView"])
  },
  watch: {
    theme(val) {
      this.$store.dispatch("setTheme", val);
      document.getElementsByTagName("body")[0].style.setProperty("--left", val);
      updateThemeColor(val);
    }
  }
};
</script>
<style lang="scss" scoped>
@import "@/style/dynamic.scss";
.theme-picker .el-color-picker__trigger {
  vertical-align: middle;
}
>>> .el-drawer__body::-webkit-scrollbar {
  width: 8px;
}
>>> .el-drawer__body::-webkit-scrollbar-thumb {
  background: $leftColor;
  border-radius: 5px;
}
.theme-picker-dropdown .el-color-dropdown__link-btn {
  display: none;
}
h3 {
  margin: 10px 0;
}
>>> .el-icon-arrow-down:before {
  content: "";
}
h3::before {
  content: "";
  display: inline-block;
  width: 3px;
  height: 14px;
  background: $leftColor;
  margin-right: 5px;
}
.theme_color {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-top: 10px;
  .item_color {
    width: 28px;
    height: 28px;
    border-radius: 3px;
    margin: 5px;

    cursor: pointer;
    position: relative;
  }
  .item_color_active::after {
    content: "";
    display: block;
    width: 12px;
    height: 12px;
    border-radius: 6px 0 0 0;
    background: #fff;
    position: absolute;
    bottom: 0;
    right: 0;
  }
}
.theme_nav {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  .item {
    span {
      display: none;
    }

    position: relative;
    width: 44px;
    height: 36px;
    margin-right: 16px;
    overflow: hidden;
    background-color: #f0f2f5;
    border-radius: 4px;
    box-shadow: 0 1px 2.5px 0 rgb(0 0 0 / 18%);
    cursor: pointer;
  }
  .item_nav1::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 10px;
    background: $leftColor;
    height: 100%;
    z-index: 2;
  }
  .item_nav1::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    background: #bf9ffe;
    height: 8px;
  }
  .item_nav2::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    background: $leftColor;
    height: 8px;
  }
  .item_nav {
    span {
      display: block;
      position: absolute;
      width: 18px;
      height: 18px;
      right: 0;
      bottom: 0;
      color: #000;
    }
  }
}
.theme_content {
  .item {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    .item_title {
      width: 100px;
      font-size: 14px;
      font-weight: 700;
    }
    .item_content {
      width: 300px;
    }
  }
}
</style>
