<template>
  <div class="">文档
    <el-row>
  <el-button>默认按钮</el-button>
  <el-button type="primary">主要按钮</el-button>
  <el-button type="success">成功按钮</el-button>
  <el-button type="info">信息按钮</el-button>
  <el-button type="warning">警告按钮</el-button>
  <el-button type="danger">危险按钮</el-button>
</el-row>
<el-input v-model="input" placeholder="请输入内容"></el-input>
{{times}}
</div>
</template>

<script>

export default {
data() {
  return {
    input: '',
    times:10
  }
},
created() {
  console.log('created');
},
mounted() {
  console.log('mounted');
  //60秒倒计时打印内容
  this.timeLost()
var a =10;
   
setTimeout(() => {
  a--
  console.log(a);
}, 1000);

},
methods: {
  timeLost() {
   let timer = setInterval(() => {
    this.times--;
    if (this.times <= 0) {
      clearInterval(timer);
      // console.log('倒计时结束');
      // this.times = 10;
      // this.timeLost();
    } else {
      // console.log(this.times);
    }
  }, 1000);
  }
},

}
</script>

<style>

</style>