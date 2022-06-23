<template>
  <div class="">
    <h1>Ueditor富文本</h1>
    <div class="" v-html="content"></div>
    <Editor v-model="content" />
  </div>
</template>
<script>
import Editor from "@/components/ueditor";
export default {
  components: { Editor },
  data() {
    return {
      content: "欢迎使用Ueditor富文本编辑器",
    };
  },
};
</script>
