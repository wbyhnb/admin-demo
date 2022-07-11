<template>
  <div :class="!plain ? 'box' : 'box_plain'">
    <div
      class="box_item"
      v-for="(item, index) in options"
      :key="index"
      @click="boxClick(item)"
      :class="
        valueKey
          ? boxValue.indexOf(item[valueKey]) === -1
            ? ''
            : 'is-active'
          : boxValue.indexOf(item) === -1
          ? ''
          : 'is-active'
      "
    >
      {{ item[labelKey] }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    //多选数据
    options: {
      type: Array,
      default: () => []
    },
    // 是否是边框模式
    plain: {
      type: Boolean,
      default: false
    },
    // label绑定的值，默认为label，可以自定义
    labelKey: {
      type: String,
      default: "label"
    },
    // 值绑定的值，默认为""，可以自定义
    valueKey: {
      type: String,
      default: ""
    },
    // 选中的值，默认为[]，可以自定义
    value: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      boxValue: this.value
    };
  },
  created() {},
  computed: {},
  methods: {
    // 多选点击事件
    boxClick(item) {
      if (!this.valueKey) {
        if (this.boxValue.indexOf(item) === -1) {
          this.boxValue.push(item);
        } else {
          this.boxValue.splice(this.boxValue.indexOf(item), 1);
        }
      } else {
        if (this.boxValue.indexOf(item[this.valueKey]) === -1) {
          this.boxValue.push(item[this.valueKey]);
        } else {
          this.boxValue.splice(this.boxValue.indexOf(item[this.valueKey]), 1);
        }
      }
    }
  },
  watch: {
    //原生v-model绑定的值
    boxValue(val) {
      this.$emit("input", val);
    },
    //原生v-model绑定的值
    value(val) {
      this.boxValue = val;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/style/dynamic.scss";
.box {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  .box_item {
    cursor: pointer;
    box-sizing: border-box;
    width: 100px;
    height: 40px;
    background: $leftColor;
    margin: 2px 10px 2px 0;
    color: #fff;
    border-radius: 5px;
    text-align: center;
    line-height: 40px;
    // box-shadow: 5px 5px 15px $leftColor;
    overflow: hidden;
  }
  .box_item:hover {
    opacity: 0.8;
  }
  .is-active {
    position: relative;
    border: 1px solid $leftColor;
  }
  .is-active::after {
    content: "\2714";
    color: $leftColor;
    line-height: 20px;
    padding: 3px 0 0 5px;
    box-sizing: border-box;
    position: absolute;
    overflow: hidden;
    bottom: 0;
    right: 0;
    width: 20px;
    height: 20px;
    background: linear-gradient(
      -45deg,
      #fff,
      #fff 50%,
      transparent 50%,
      transparent 100%
    );
  }
}
.box_plain {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  .box_item {
    cursor: pointer;
    box-sizing: border-box;
    width: 100px;
    height: 40px;
    border: 1px solid $leftColor;
    margin: 2px 10px 2px 0;
    font-weight: 700;
    color: $leftColor;
    border-radius: 5px;
    text-align: center;
    line-height: 40px;
    // box-shadow: 5px 5px 15px $leftColor;
    overflow: hidden;
  }
  .box_item:hover {
    opacity: 0.8;
  }
  .is-active {
    position: relative;
  }
  .is-active::after {
    content: "\2714";
    color: #fff;
    font-weight: normal;
    line-height: 20px;
    padding: 3px 0 0 5px;
    box-sizing: border-box;
    position: absolute;
    overflow: hidden;
    bottom: 0;
    right: 0;
    width: 20px;
    height: 20px;
    background: linear-gradient(
      -45deg,
      $leftColor,
      $leftColor 50%,
      transparent 50%,
      transparent 100%
    );
  }
}
</style>
