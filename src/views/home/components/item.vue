<template>
  <div class="" id="mainitem" :style="{ width: '100%', height: '400px' }"></div>
</template>

<script>
import * as echarts from "echarts";
export default {
  data() {
    return {
      option: {
         title: {
          text: "用户来源",
        },
        tooltip: {
          trigger: "item",
        },
        legend: {
          top: "5%",
          left: "center",
        },
        series: [
          {
            name: "用户数量",
            type: "pie",
            radius: ["40%", "70%"],
            avoidLabelOverlap: false,
            itemStyle: {
              borderRadius: 10,
              borderColor: "#fff",
              borderWidth: 2,
            },
            label: {
              show: false,
              position: "center",
            },
            emphasis: {
              label: {
                show: true,
                fontSize: "30",
                fontWeight: "bold",
              },
            },
            labelLine: {
              show: false,
            },
            data: [
              { value: 1048, name: "谷歌 Google" },
              { value: 735, name: "微软 Edge" },
              { value: 580, name: "火狐 Firefox" },
              { value: 484, name: "手机浏览器" },
              { value: 300, name: "其他" },
            ],
          },
        ],
      },
    };
  },
  mounted() {
    this.initChart();
  },
  methods: {
    initChart() {
      const chart = echarts.init(document.getElementById("mainitem"));
      chart.setOption(this.option);
    },
  },
};
</script>

<style>
</style>