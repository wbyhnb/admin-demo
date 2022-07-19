<template>
  <div class="swiper_box" @mouseenter="swiperStop()" @mouseleave="swiper()">
    <div
      ref="swiperbox"
      class="swiper_box_bg"
      v-for="(item, index) in list"
      :key="index"
      :style="{ backgroundImage: 'url(' + item + ')' }"
    ></div>
    <div class="swiper_box_item">
      <div
        class="box_item"
        v-for="(item, index) in list"
        :key="index"
        v-show="boxindex != index"
      >
        <div
          class="item"
          :style="{ backgroundImage: 'url(' + item + ')' }"
          @click.stop="cardClick(index)"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "swiperbox",
  props: {
    //数据
    list: {
      type: Array,
      default: () => []
    },
    //自动播放
    bool: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      boxbackground: "",
      boxindex: 0,
      timer: null
    };
  },
  mounted() {
    this.swiper();
    this.$refs.swiperbox[this.boxindex].style.zIndex = 1;
  },
  methods: {
    //卡片点击事件
    cardClick(index) {
      this.boxindex = index;
      for (let i = 0; i < this.list.length; i++) {
        //选中index的zindex为1，其他的为0
        if (i == this.boxindex) {
          this.$refs.swiperbox[i].style.zIndex = 1;
          this.$refs.swiperbox[i].classList.add("is-active");
        } else {
          this.$refs.swiperbox[i].style.zIndex = 0;
          this.$refs.swiperbox[i].classList.remove("is-active");
        }
      }
    },
    //自动轮播
    swiper() {
      if (this.bool == true) {
        this.timer = setInterval(() => {
          this.boxindex++;
          if (this.boxindex > this.list.length - 1) {
            this.boxindex = 0;
          }
          this.cardClick(this.boxindex);
        }, 2000);
      }
    },
    //停止轮播
    swiperStop() {
      if (this.bool == true) {
        clearInterval(this.timer);
      }
    }
  },
  //去除轮播自动播放
  beforeDestroy() {
    this.swiperStop();
  }
};
</script>

<style lang="scss" scoped>
.is-active {
  animation: fade-in-bck 2s cubic-bezier(0.39, 0.575, 0.565, 1) both;
}
@keyframes fade-in-bck {
  0% {
    transform: translateZ(80px);
    opacity: 0;
  }
  100% {
    transform: translateZ(0);
    opacity: 1;
  }
}
.swiper_box {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  .swiper_box_bg {
    width: 100%;
    height: 100%;
    position: absolute;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
  // animation: fade-in-bck 0.6s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  .swiper_box_item {
    z-index: 999;
    position: absolute;
    display: flex;
    right: 15px;
    bottom: 15px;
    .box_item {
      width: 140px;
      height: 80px;
      cursor: pointer;
      border-radius: 10px;
      margin-left: 10px;
      overflow: hidden;
      .item {
        width: 100%;
        height: 100%;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        box-shadow: 4px 4px 4px 0px rgba(0, 0, 0, 0.3);
      }
      .item:hover {
        animation: center 0.6s both;
      }
      @keyframes center {
        0% {
          width: 100%;
          height: 100%;
        }
        100% {
          width: 120%;
          height: 120%;
        }
      }
    }
  }
}
</style>
