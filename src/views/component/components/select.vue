<template>
  <el-select
    ref="select"
    v-model="value"
    multiple
    style="width:300px"
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
</template>

<script>
export default {
  props: {
    values: {
      type: Array,
      default: () => []
    },
    option: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      options: this.option,
      value: this.values
    };
  },
  mounted() {
    this.$nextTick(() => {
      //初始化页面数据
      this.handleChange();
    });
  },
  methods: {
    handleChange(value) {
      this.$nextTick(() => {
        //获取选择框的span元素数量
        let n = this.$refs.select.$el.querySelector(".el-select__tags > span")
          .children.length;
        if (n > 2) {
          n - 1;
        }
        //循环隐藏多余的span元素
        for (let i = 0; i < n; i++) {
          let a = i + 1;
          if (a > 2) {
            this.$refs.select.$el.querySelector(
              `.el-select__tags > span >span:nth-child(${a})`
            ).style.display = "none";
          }
        }
        //添加多余元素的span （+1）
        let dom = document.createElement("span");
        dom.classList = ["count-node"];
        if (this.value.length > 2) {
          if (document.querySelector(".count-node")) {
            document.querySelector(".count-node").remove();
          }
          dom.style.display = "inline-block";
          dom.innerHTML = `+${this.value.length - 2}`;
          this.$refs.select.$el
            .querySelector(".el-select__tags > span")
            .append(dom);
        } else {
          if (document.querySelector(".count-node")) {
            document.querySelector(".count-node").remove();
          }
        }
        //默认让前两个元素显示
        if (this.value.length >= 2) {
          setTimeout(() => {
            this.$refs.select.$el.querySelector(
              `.el-select__tags > span >span:nth-child(1)`
            ).style.display = "inline-block";
            this.$refs.select.$el.querySelector(
              `.el-select__tags > span >span:nth-child(2)`
            ).style.display = "inline-block";
          }, 60); //延迟执行（否则获取不到dom）
        }
      });
    }
  },
  watch: {
    value(val) {
      this.$emit("input", val);
    },
    values(val) {
      this.value = val;
    },
    option(val) {
      this.options = val;
    }
  }
};
</script>
<style lang="scss" scoped>
>>> .count-node {
  display: inline-block;
  height: 24px;
  padding: 0 8px;
  line-height: 22px;
  margin-left: 6px;
  background-color: #f4f4f5;
  border: 1px solid #e9e9eb;
  border-radius: 4px;
  color: #909399;
  font-size: 12px;
  box-sizing: border-box;
}
</style>
