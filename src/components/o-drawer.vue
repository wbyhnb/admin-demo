<template>
  <el-drawer
    class="o_drawer"
    :append-to-body="appendToBody"
    :title="titles"
    :visible.sync="visibles"
    :before-close="handleClose"
    :modal="modal"
    :size="size"
    :with-header="withHeader"
    :show-close="showClose"
    :wrapperClosable="wrapperClosable"
  >
    <div class="drawer_header" v-if="title != '' && withHeader == false">
      <div class="header_title">
        <icon-svg icon-class="31shezhi" /> <span>{{ title }}</span>
      </div>
      <div class="header_close" @click="handleClose">
        <icon-svg icon-class="CloseDefault" />
      </div>
    </div>
    <slot></slot>
    <div class="drawer_footer"><slot name="footer"></slot></div>
  </el-drawer>
</template>

<script>
import IconSvg from "./Icon-svg.vue";
export default {
  components: { IconSvg },
  name: "o-drawer",
  props: {
    //标题
    title: {
      type: String,
      default: ""
    },
    //显示/隐藏
    visible: {
      type: Boolean,
      default: false
    },
    //关闭方法
    handleClose: {
      type: Function,
      default: () => {}
    },
    //遮罩层是否插入至 body 元素上
    appendToBody: {
      type: Boolean,
      default: false
    },
    //是否遮罩
    modal: {
      type: Boolean,
      default: true
    },
    //大小
    size: {
      type: String,
      default: "30%"
    },
    //是否显示关闭按钮
    showClose: {
      type: Boolean,
      default: true
    },
    //是否显示头部
    withHeader: {
      type: Boolean,
      default: false
    },
    //点击遮罩层是否可以关闭 Drawer
    wrapperClosable: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {};
  },
  computed: {
    visibles() {
      return this.visible;
    },
    titles() {
      return this.title;
    }
  },
  methods: {}
};
</script>

<style scoped lang="scss">
@import "@/style/dynamic.scss";
.o_drawer {
  z-index: 9999;
  box-sizing: border-box;
  .drawer_header {
    display: flex;
    justify-content: space-between;
    height: 50px;
    font-size: 18px;
    font-weight: 700;
    color: $leftColor;
    .header_close {
      cursor: pointer;
    }
  }
    .drawer_footer{
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding: 10px 15px 15px 0;
    background: #FFF;
  }
 
}

>>> .el-drawer__body::-webkit-scrollbar {
  width: 8px;
  height: 8px;
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
>>> .el-drawer__open .el-drawer.rtl {
  padding: 20px 10px 0px 20px;
}
>>> .el-drawer__body {
  position: relative;
  padding: 0 10px 0 0;
   
}

</style>

