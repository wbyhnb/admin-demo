<template>
  <div id="">
    首页
    <div class="border back" :style="`background:${color}`" @click="getRandomColor"></div>
   <div class=""></div> <div class="border" :style="`color:${color}`">123456</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      color:''
    };
  },
  mounted() {},
  methods: {
    getRandomColor() {
      var str = "#";
      var arr = [
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "a",
        "b",
        "c",
        "d",
        "e",
        "f"
      ];
      for (var i = 0; i < 6; i++) {
        var num = parseInt(Math.random() * 16);
        str += arr[num];
      }
      this.color = str;
      console.log(str);
    }
  }
};
</script>

<style scoped >
.back {
  width: 50px;
  height: 50px;
}
.border{
  position: relative;
}
.back{
  overflow: hidden;
}
.back:before,
.back::after{
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  background: rgb(232, 5, 5);
  transition: all 0.3s ease;
  animation: bdtop 4s linear infinite;
}
@-webkit-keyframes bdtop {
  0% {
    height: 10px;
    width: 0;
  }
  100% {
    height: 10px;
    width: 100%;
  }
}
.back:hover{
  transition: all 0.3s ease;
  animation: bdlast 1s linear infinite;
  /* border: 1px solid #000; */
}
@-webkit-keyframes bdlast {
  0% {
    transform: rotate(0deg);
    
  }
  40% {
    /* border-left: 1px solid #000; */
  }
  100% {
    transform: rotate(360deg);
    
  }
}
</style>
