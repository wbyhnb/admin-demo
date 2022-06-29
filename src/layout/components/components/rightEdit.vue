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
      <el-color-picker v-model="theme" :predefine="predefineColors" >
      </el-color-picker>
    </el-drawer>
  </div>
</template>
<script>
import {updateThemeColor}from'@/plugins/themeColor.js'
export default {
  name: "themePicker",
  data() {
    return {
      chalk: "", // content of theme-chalk css
      predefineColors: [
          '#ff4500',
          '#ff8c00',
          '#ffd700',
          '#90ee90',
          '#00ced1',
          '#1e90ff',
          '#c71585',
        ],
      theme: "", // theme color
      drawerEdit: false,
      direction: "rtl"
    };
  },
  created() {
    this.theme = this.$store.state.theme.theme;
  },
  mounted() {
    
    
  },
  watch: {
    theme(val) {
      // console.log(val);
      this.$store.dispatch("setTheme", val); 
      document.getElementsByTagName('body')[0].style.setProperty('--left', val);
      updateThemeColor(val);
    }
  },
};
</script>
<style>
.theme-picker .el-color-picker__trigger {
  vertical-align: middle;
}

.theme-picker-dropdown .el-color-dropdown__link-btn {
  display: none;
}
</style>
