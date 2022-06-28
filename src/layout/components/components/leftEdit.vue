<template>
  <div class="">
    <h1><icon-svg icon-class="31shezhi" /> 系统设置</h1>
    <h3>系统主题</h3>
    <el-form ref="elForm">
      <el-form-item label="可选主题" label-width="140px">
        <div class="color-box">
          <div
            v-for="(item, i) in themeArr"
            :key="i"
            :class="['color-item', theme === item ? 'active' : '']"
            :style="{ backgroundColor: item }"
            @click="changeTheme(item)"
          >
            <span v-if="theme === item" class="iconfont icon-f-right"></span>
          </div>
        </div>
      </el-form-item>
      <el-form-item label="自定义主题" label-width="140px">
        <el-color-picker
          v-model="theme"
          :predefine="[
            '#409EFF',
            '#1890ff',
            '#304156',
            '#212121',
            '#11a983',
            '#13c2c2',
            '#6959CD',
            '#f5222d'
          ]"
          class="theme-picker"
          popper-class="theme-picker-dropdown"
        />
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
const version = require("element-ui/package.json").version; // element-ui version from node_modules
const ORIGINAL_THEME = "#409EFF"; // default color

export default {
  data() {
    return {
      themeArr: [
        "#409EFF",
        "#202225",
        "#F56C6C",
        "#FFAB42",
        "#17a969",
        "#888C8F"
      ],
      chalk: "",
      theme: ORIGINAL_THEME
    };
  },
  watch: {
    //异步监听theme的变化
    async theme(val, oldVal) {
      if (typeof val !== "string") return;
      const themeCluster = this.getThemeCluster(val.replace("#", ""));
      const originalCluster = this.getThemeCluster(oldVal.replace("#", ""));
      // console.log(themeCluster, originalCluster)

      const $message = this.$message({
        message: "  Compiling the theme",
        customClass: "theme-message",
        type: "success",
        duration: 0,
        iconClass: "el-icon-loading"
      });

      const getHandler = (variable, id) => {
        return () => {
          const originalCluster = this.getThemeCluster(
            ORIGINAL_THEME.replace("#", "")
          );
          const newStyle = this.updateStyle(
            this[variable],
            originalCluster,
            themeCluster
          );

          let styleTag = document.getElementById(id);
          if (!styleTag) {
            styleTag = document.createElement("style");
            styleTag.setAttribute("id", id);
            document.head.appendChild(styleTag);
          }
          styleTag.innerText = newStyle;
        };
      };

      //  初次进入或刷新时动态加载CSS文件
      if (!this.chalk) {
        const url = `https://unpkg.com/element-ui@${version}/lib/theme-chalk/index.css`;
        await this.getCSSString(url, "chalk");
      }

      const chalkHandler = getHandler("chalk", "chalk-style");

      chalkHandler();

      const styles = [].slice
        .call(document.querySelectorAll("style"))
        .filter(style => {
          const text = style.innerText;
          return (
            new RegExp(oldVal, "i").test(text) && !/Chalk Variables/.test(text)
          );
        });
      styles.forEach(style => {
        const { innerText } = style;
        if (typeof innerText !== "string") return;
        style.innerText = this.updateStyle(
          innerText,
          originalCluster,
          themeCluster
        );
      });

      // 将修改的主题保存到本地，下次打开页面是保存的主题色
      localStorage.setItem("theme", val);
      //调用vuex中改变主题色方法
      this.$store.dispatch("theme/changeSetting", {
        key: "theme",
        value: val
      });

      $message.close();
    }
  },
  methods: {
    updateStyle(style, oldCluster, newCluster) {
      let newStyle = style;
      oldCluster.forEach((color, index) => {
        newStyle = newStyle.replace(new RegExp(color, "ig"), newCluster[index]);
      });
      return newStyle;
    },
    getCSSString(url, variable) {
      return new Promise(resolve => {
        const xhr = new XMLHttpRequest();
        xhr.onreadystatechange = () => {
          if (xhr.readyState === 4 && xhr.status === 200) {
            this[variable] = xhr.responseText.replace(/@font-face{[^}]+}/, "");
            resolve();
          }
        };
        xhr.open("GET", url);
        xhr.send();
      });
    },
    getThemeCluster(theme) {
      const tintColor = (color, tint) => {
        let red = parseInt(color.slice(0, 2), 16);
        let green = parseInt(color.slice(2, 4), 16);
        let blue = parseInt(color.slice(4, 6), 16);

        if (tint === 0) {
          // when primary color is in its rgb space
          return [red, green, blue].join(",");
        } else {
          red += Math.round(tint * (255 - red));
          green += Math.round(tint * (255 - green));
          blue += Math.round(tint * (255 - blue));

          red = red.toString(16);
          green = green.toString(16);
          blue = blue.toString(16);

          return `#${red}${green}${blue}`;
        }
      };

      const shadeColor = (color, shade) => {
        let red = parseInt(color.slice(0, 2), 16);
        let green = parseInt(color.slice(2, 4), 16);
        let blue = parseInt(color.slice(4, 6), 16);

        red = Math.round((1 - shade) * red);
        green = Math.round((1 - shade) * green);
        blue = Math.round((1 - shade) * blue);

        red = red.toString(16);
        green = green.toString(16);
        blue = blue.toString(16);

        return `#${red}${green}${blue}`;
      };

      const clusters = [theme];
      for (let i = 0; i <= 9; i++) {
        clusters.push(tintColor(theme, Number((i / 10).toFixed(2))));
      }
      clusters.push(shadeColor(theme, 0.1));
      return clusters;
    },
    // 颜色块点击切换主题事件
    changeTheme(item) {
      this.theme = item;
      this.$store.dispatch("theme/changeSetting", {
        key: "theme",
        value: item
      });
    }
  },
  mounted() {
    //从本地存储获取保存的主题
    if (localStorage.getItem("theme")) {
      this.theme = localStorage.getItem("theme");
      this.$store.dispatch("theme/changeSetting", {
        key: "theme",
        value: this.theme
      });
    }
  }
};
</script>

<style scoped lang="scss">
.color-box {
	display: flex;
	flex-wrap: wrap;
	.color-item {
		position: relative;
		margin: 2px;
		width: 34px;
		height: 34px;
		border-radius: 3px;
		border: 2px solid transparent;
		cursor: pointer;
		span {
			position: absolute;
			right: 0;
			top: 0;
			width: 15px;
			height: 15px;
			background-color: #000;
			color: #fff;
			font-size: 10px;
    	text-align: center;
		}
		&.active {
			border-color: #000;
		}
	}
}
</style>
