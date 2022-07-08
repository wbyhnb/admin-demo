<template>
  <div class="code" ref="code" >
    <div class="code_left" ref="left"></div>
    <div
      class="code_but"
      ref="but"
      @mousemove="mouse($event)"
      @mousedown="domDown($event)"
      @mouseup="domUp($event)"
      @mouseout="domOut"
    >
      |||
    </div>
    <div class="code_text" ref="text">拖动滑块验证</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isDown: false,
      downX: 0,
      distance: 0,
      offsetX: 0,
      success: false
    };
  },
  components: {},
  computed: {},
  mounted() {},
  created() {},
  methods: {
    mouse(e) {
      if (this.isDown == true) {
        let moveX = e.clientX;
        this.offsetX = moveX - this.downX;
        let el = this.$refs.but;
        let text = this.$refs.text;
        let left = this.$refs.left;
        this.distance =
          this.$refs.code.offsetWidth - this.$refs.but.offsetWidth;
        if (this.offsetX > this.distance) {
          this.offsetX = this.distance; //如果滑过了终点，就将它停留在终点位置
        } else if (this.offsetX < 0) {
          this.offsetX = 0; //如果滑到了起点的左侧，就将它重置为起点位置
        }
        el.style.marginLeft = this.offsetX + "px";
        left.style.width = this.offsetX + "px";
        // console.log(this.offsetX, this.distance);
        if (this.offsetX > 0) {
          text.style.display = "none";
        }
        if (this.offsetX == this.distance) {
          text.style.display = "block";
          text.style.color = "#fff";
          text.innerHTML = "验证通过";
          this.success = true;
        }else{
            this.success = false;
        }
        if (this.offsetX == 0) {
          text.style.display = "block";
          text.style.color = "#000";
          text.innerHTML = "拖动滑块验证";
        }
      }
    },
    domDown(e) {
      this.isDown = true;
      this.downX = e.clientX;
      this.$refs.but.style.transition = "";
      this.$refs.left.style.transition = "";
    },
    domUp(e) {
      this.isDown = false;
      if (this.success == false) {
        this.offsetX = 0;
        this.$refs.but.style.marginLeft = this.offsetX + "px";
        this.$refs.left.style.width = this.offsetX + "px";
        this.$refs.but.style.transition = "all 1s";
        this.$refs.left.style.transition = "all 1s";
      }
    },
    domOut(){
        this.isDown = false;
        if (this.success == false) {
        this.offsetX = 0;
        this.$refs.but.style.marginLeft = this.offsetX + "px";
        this.$refs.left.style.width = this.offsetX + "px";
        this.$refs.but.style.transition = "all 1s";
        this.$refs.left.style.transition = "all 1s";
        let text = this.$refs.text;
        setTimeout(() => {
          text.style.display = "block";
          text.style.color = "#000";
          text.innerHTML = "拖动滑块验证";
        }, 800);
      }
    }
  },
  watch: {}
};
</script>

<style lang="scss" scoped>
.code {
  width: 260px;
  height: 30px;
  background: #ccc;
  border: 1px solid #ccc;
  border-radius: 3px;
  //禁止选中文字
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  position: relative;

  .code_left {
    float: left;
    height: 30px;
    left: 0;
    top: 0;
    position: absolute;
    box-sizing: border-box;
    background: rgb(95, 191, 40);
  }
  .code_but {
    width: 30px;
    height: 100%;
    float: left;
    background: rgb(243, 20, 20);
    text-align: center;
    line-height: 28px;
    color: rgb(255, 255, 255);
    box-sizing: border-box;
    border-radius: 0 3px;
    cursor: pointer;
  }
  .code_text {
    position: absolute;
    left: 40%;
    top: 8px;
  }
}
</style>
