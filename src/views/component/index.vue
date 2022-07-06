<template>
  <div class="">
    <h1>input组件</h1>
    {{ value2 }}
    <el-select
      ref="select"
      v-model="value2"
      multiple
      style="margin-left: 20px;"
      placeholder="请选择"
      @change="handleChange"
    >
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      >
      </el-option>
    </el-select>
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
      value1: [],
      value2: []
    };
  },
  mounted() {
    this.value2 = ["选项1", "选项2"];
    this.$nextTick(() => {
      console.log(this.$refs.select);
       console.log(
          this.$refs.select.$el.querySelector(".el-select__tags > span").children.length
        );
    });
  },
  methods: {
    handleChange(value) {
      console.log(value);
      this.$nextTick(() => {
        console.log(
          this.$refs.select.$el.querySelector(".el-select__tags > span").children
            .length
        );
      });
    }
  }
};
</script>

<style></style>
