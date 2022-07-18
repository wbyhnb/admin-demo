<template>
  <div>
    <h1>wangEditor 富文本编辑器</h1>
    <div class="" v-html="wangEditorDetail"></div>
    <wangEditor v-model="wangEditorDetail" :isClear="isClear" ></wangEditor>
  </div>
</template>
<script>
import wangEditor from "@/components/editor/wangEditor.vue";
export default {
  data() {
    return {
      isClear: false,//设置为true的时候，这个可以用this.wangEditorDetail=''来替代
      wangEditorDetail: ""
    };
  },
  mounted() {
    this.wangEditorDetail = "欢迎使用wangEditor"; //设置富文本框默认显示内容
  },
  components: { wangEditor },
  methods: {

  }
};
</script>