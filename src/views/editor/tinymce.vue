<template>
  <div class="">
    <h1>Tinymce富文本</h1>
    <div class="" v-html="content"></div>
    <Tinymce v-model="content" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      content: "欢迎使用Tinymce富文本",
    };
  },
  components: {
    Tinymce: () => import("@/components/editor/tinymce.vue"),
  },
};
</script>

<style>
</style>