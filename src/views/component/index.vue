<template>
  <div class="">
    <h1>input组件</h1>
    二次封装element-ui的Select选择器：<oselect
      v-model="value"
      :option="options"
    />{{ value }}<br />
    <hr />
    自定义指令v-num：
    <el-input v-model="value2" v-num style="width:300px"></el-input>{{ value2
    }}<br />
    <hr />
    box多选组件：<br />
    <prism :codes="code" :isLine="true" style="width:60%" />
    填充模式：
    <boxselect v-model="value3" :value-key="'value'" :label-key="'label'" :options="options" />
    {{ value3 }}<br />
    边框模式： <boxselect v-model="value4" :options="options" plain />{{
      value4
    }}
    <br />
  </div>
</template>

<script>
export default {
  data() {
    return {
      code:`//设置：value-key、label-key可指定显示内容，和绑定数据；plain属性为边框模式\n//填充模式：\n <boxselect v-model="value3" :value-key="'value'" :label-key="'label'" :options="options" />\n//边框模式：\n <boxselect v-model="value4" :options="options" plain />`,
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
      value: [],
      value2: "",
      value3: [],
      value4: []
    };
  },
  components: {
    oselect: () => import("./components/select.vue"),
    boxselect: () => import("./components/boxselect.vue")
  },
  mounted() {},
  methods: {}
};
</script>
<style lang="scss" scoped>

</style>
