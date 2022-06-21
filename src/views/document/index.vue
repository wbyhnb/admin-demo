<template>
  <div class="">文档
  <MarkdownItVue class="md-body" :content="content" /></div>
</template>

<script>
import MarkdownItVue from 'markdown-it-vue'
import readme from "./../../.././README.md";
import 'markdown-it-vue/dist/markdown-it-vue.css'
export default {
components:{MarkdownItVue},
data() {
    return {
      content:readme,
    }
  },
}
</script>

<style>

</style>