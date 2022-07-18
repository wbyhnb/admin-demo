<template>
  <div class="">
    <!-- <message /> -->
    <button @click="add">message</button>
  </div>
</template>

<script>
import msg from "@/components/message.js";
export default {
  data() {
    return {};
  },
  components: {
    message: () => import("@/components/message.vue")
  },
  mounted() {
    // msg({
    //   text: "提示信息",
    //   type: "success",
    //   title: 2000
    // });
  },
  methods:{
    add(){
      msg({
        content: "提示信息",
        type: "success",
        // disappear: 2000
      })
    }
  }
};
</script>

<style></style>
