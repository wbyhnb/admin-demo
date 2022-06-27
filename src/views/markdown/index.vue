<template>
  <div style="height:100%">
    <h1>markdown编译器</h1>
    <mavon-editor
      v-model="context"
      :toolbars="toolbars"
      @change="change"
      style="height: 100%;z-index:9;"
    />
    <article class="markdown-body" v-html="contexts"></article>
  </div>
</template>

<script>
export default {
  name: "markdown",
  data() {
    return {
      formLayout: "horizontal",
      /*浏览器窗口大小*/
      clientWidth: "",
      number: 0,
      numberSum: 100,
      maxLength: 100,
      /*markdown*/
      inputValue: "",
      contexts: "",
      context: "", //输入的数据,
      toolbars: {
        bold: true, // 粗体
        italic: true, // 斜体
        header: true, // 标题
        underline: true, // 下划线
        strikethrough: true, // 中划线
        mark: true, // 标记
        superscript: true, // 上角标
        subscript: true, // 下角标
        quote: true, // 引用
        ol: true, // 有序列表
        ul: true, // 无序列表
        link: true, // 链接
        imagelink: true, // 图片链接
        code: true, // code
        table: true, // 表格
        fullscreen: true, // 全屏编辑
        readmodel: true, // 沉浸式阅读
        htmlcode: true, // 展示html源码
        help: true, // 帮助
        /* 1.3.5 */
        undo: true, // 上一步
        redo: true, // 下一步
        trash: true, // 清空
        save: true, // 保存（触发events中的save事件）
        /* 1.4.2 */
        navigation: true, // 导航目录
        /* 2.1.8 */
        alignleft: true, // 左对齐
        aligncenter: true, // 居中
        alignright: true, // 右对齐
        /* 2.2.1 */
        subfield: true, // 单双栏模式
        preview: true // 预览
      }
    };
  },
  methods: {
    change(val, render) {
      this.contexts = render;
    },

  },
  mounted() {
    this.clientWidth = document.body.clientWidth;
    window.onresize = () => {
      return (() => {
        this.clientWidth = document.body.clientWidth;
      })();
    };
  }
};
</script>

<style scoped lang="scss">
.markdown-body code {
  margin: 0;
  font-size: 100% !important;
  background-color: rgba(27, 31, 35, 0.05);
  border-radius: 3px;
}

</style>
