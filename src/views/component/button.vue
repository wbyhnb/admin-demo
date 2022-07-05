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
    <h3>倒计时按钮</h3>
    setTimeout方法:
    <el-button @click="getCode" :disabled="disadle">{{ massage }}</el-button>
    setInterval方法:
    <el-button @click="getCodes" :disabled="disadles">{{ msgText }}</el-button>
  </div>
</template>

<script>
import Prism from "@/components/vue-prism-editor.vue";
export default {
  name: "button-copmponent",
  components: {
    Prism
  },
  data() {
    return {
      code: `//使用方法\n<button class="custom-btn btn-1">按钮1</button>\n//btn-1: 按钮1 (代表按钮序号)`,
      massage: "获取验证码",
      count: 60,
      disadle: false,
      disadles: false,
      msgText: "获取验证码"
    };
  },
  created() {
    // this.getCode();
  },
  methods: {
    getCode() {
      this.massage = "重新获取(" + this.count + ")";
      this.count--;
      if (this.count <= 0) {
        this.count = 60;
        this.massage = "获取验证码";
        this.disadle = false;
      } else {
        this.disadle = true;
        setTimeout(() => {
          this.getCode();
        }, 1000);
      }
    },
    getCodes() {
      let times = 60;
      let setInter = setInterval(() => {
        times--;
        
        if (times <= 0) {
          this.msgText = "获取验证码";
          this.disadles = false;
          clearInterval(setInter);
        } else {
          this.msgText = "重新获取(" + times + ")";
          this.disadles = true;
        }
      }, 1000);
    }
  }
};
</script>

<style></style>
