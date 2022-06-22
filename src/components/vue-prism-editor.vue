<template>
  <prism-editor
    class="my-editor height-300"
    v-model="code"
    :highlight="highlighter"
    :line-numbers="lineNumbers"
    :readonly="readonly"
  ></prism-editor>
</template>

<script>
import { PrismEditor } from "vue-prism-editor";
import "vue-prism-editor/dist/prismeditor.min.css";
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism-tomorrow.css";

export default {
  props: {
    codes: {
      type: String,
      default: "",
    },
    isLine: {
      type: Boolean,
      default: true,
    },
  },
  components: {
    PrismEditor,
  },
  created() {
    console.log(this.codes, this.isLine);
  },
  data() {
    return {
      code: this.codes,
      readonly: this.isLine, // true为编辑模式， false只展示不可编辑
      lineNumbers: true,
    };
  },
  watch: {},
  methods: {
    highlighter(code) {
      return highlight(code, languages.js); //returns html
    },
  },
};
</script>

<style lang="scss">
/* required class */
.my-editor {
  background: #2d2d2d;
  color: #ccc;
  font-family: Fira code, Fira Mono, Consolas, Menlo, Courier, monospace;
  font-size: 14px;
  line-height: 1.5;
  padding: 5px;
}

/* optional */
.prism-editor__textarea:focus {
  outline: none;
}

/* not required: */
.height-300 {
  height: auto;
}
</style>
