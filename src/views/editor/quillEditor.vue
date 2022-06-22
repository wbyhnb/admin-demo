<template>
  <div class="">
    <h1>Quill富文本</h1>
    <div class="" v-html="content"></div>
    <Quill v-model="content" />
  </div>
</template>

<script>
export default {
    name: 'QuillEditor',
    data() {
        return {
        content: "欢迎使用Quill富文本",
        };
    },
    components: {
        Quill: () => import("@/components/quillEditor.vue"),
    },
    };
</script>

<style>

</style>