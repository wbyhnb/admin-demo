<template>
  <div class="">
      role
      {{newTime}}
  </div>
</template>

<script>
const days = ['天', '一', '二', '三', '四', '五', '六']; // 星期数组
let icnow = new Date();      // 初始化时间
let interval;                // 定义全局定时器，用于清除定时器
export default {
  name: 'app',
  data() {
    return {
      year: icnow.getFullYear(),
      month: icnow.getMonth() + 1,
      date: icnow.getDate(),
      day: days[icnow.getDay() - 1],
      time: icnow.toTimeString().substring(0, 8)
    }
  },
  created () {
    
  },
  computed: {
            // 当前时间
	 newTime: function () {
              return this.year + '年' + this.month + '月' + this.date + '日 星期' + this.day + ' ' + this.time;
      }
  },
  beforeDestroy () {
    clearInterval(interval);
  }
}
</script>

<style>

</style>