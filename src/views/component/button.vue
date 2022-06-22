<template>
  <div class="">
    <h1>button组件</h1>
    <h3>炫彩按钮</h3>
    <Prism :codes="code" :isLine="true" />
    <div class="frame">
      <button class="custom-btn btn-1">按钮1</button>
      <button class="custom-btn btn-2">按钮</button>
      <button class="custom-btn btn-3"><span>按钮</span></button>
      <button class="custom-btn btn-4"><span>按钮</span></button>
      <button class="custom-btn btn-5"><span>按钮</span></button>
      <button class="custom-btn btn-6"><span>按钮</span></button>
      <button class="custom-btn btn-7"><span>按钮</span></button>
      <button class="custom-btn btn-8"><span>按钮</span></button>
      <button class="custom-btn btn-9">按钮</button>
      <button class="custom-btn btn-10">按钮</button>
      <button class="custom-btn btn-11">
        按钮
        <div class="dot"></div>
      </button>
      <button class="custom-btn btn-12">
        <span>点击!</span><span>按钮</span>
      </button>
      <button class="custom-btn btn-13">按钮</button>
      <button class="custom-btn btn-14">按钮</button>
      <button class="custom-btn btn-15">按钮</button>
      <button class="custom-btn btn-16">按钮</button>
    </div>
  </div>
</template>

<script>
import Prism from "@/components/vue-prism-editor.vue";
export default {
  name: "button-copmponent",
  components: {
    Prism,
  },
  data() {
    return {
      code: `//使用方法\n<button class="custom-btn btn-1">按钮1</button>\n//btn-1: 按钮1 (代表按钮序号)`,
    };
  },
};
</script>

<style>
</style>