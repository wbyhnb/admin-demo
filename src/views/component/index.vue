<template>
  <div class="">
    <h1>input组件</h1>
    {{ value }}
    <oselect v-model="value" :option="options" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: [
        {
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶"
        },
        {
          value: "选项3",
          label: "蚵仔煎"
        },
        {
          value: "选项4",
          label: "龙须面"
        },
        {
          value: "选项5",
          label: "北京烤鸭"
        }
      ],
      value: []
    };
  },
  components: {
    oselect:()=>import("./select.vue")
  },
  mounted() {
    
  },
  methods: {

  },
};
</script>
<style lang="scss" scoped>

</style>
