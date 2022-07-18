<template>
  <div class="">
    <!-- 封装轮播图插件 -->
    <div class="swiper">
      <div class="swiper-box">
        <div class="swiper-img" v-for="(item, index) in list" :key="index">
          <img :src="item" alt="" v-show="index == imgindex" />
        </div>
      </div>
      <div class="swiper-left" @click="swiperLeft">
        <icon-svg icon-class="zuojiantou" class="svg"></icon-svg>
      </div>
      <div class="swiper-right" @click="swiperRight">
        <icon-svg icon-class="youjiantou" class="svg"></icon-svg>
      </div>
      <div class="swiper-but">
        <span
          v-for="(item, index) in list"
          :key="index"
          :class="imgindex == index ? 'is-span' : ''"
          @click="swiperBut(index)"
        ></span>
      </div>
    </div>
  </div>
</template>

<script>
let timer;
export default {
    props: {
        list: {
            type: Array,
            default: () => []
        }
    },
  data() {
    return {
      imgindex: 0
    };
  },
  methods: {
    swiperLeft() {
      //轮播图左移
      this.imgindex--;
      if (this.imgindex < 0) {
        this.imgindex = this.list.length - 1;
      }
    },
    swiperRight() {
      //轮播图右移
      this.imgindex++;
      if (this.imgindex > this.list.length - 1) {
        this.imgindex = 0;
      }
    },
    swiperBut(index) {
      //轮播图按钮
      this.imgindex = index;
    },
    swiper() {
      //轮播图自动播放
      timer = setInterval(() => {
        this.swiperRight();
      }, 2000);
    },
    swiperStop() {
      //轮播图停止播放
      clearInterval(timer);
    }
  },
  //去除轮播图自动播放
  beforeDestroy() {
    this.swiperStop();
  }
};
</script>

<style lang="scss" scoped>
.swiper {
  width: 500px;
  height: 300px;
  position: relative;
  user-select: none;
  .svg {
    font-size: 30px;
    color: #fff;
  }
  .swiper-box {
    width: 500px;
    height: 100%;
    position: relative;
    .swiper-img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
    .img-active {
      animation: tran 2s ease-out both;
      // transform: translateX(-200px) scale(1);
    }
    @keyframes tran {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
    img {
      width: 100%;
      height: 100%;
    }
  }
  .swiper-left {
    cursor: pointer;
    position: absolute;
    left: 10px;
    top: 45%;
  }
  .swiper-left:hover {
    background-color: #fff;
    border-radius: 50%;
    .svg {
      color: #000;
    }
  }
  .swiper-right {
    cursor: pointer;
    position: absolute;
    right: 10px;
    top: 45%;
  }
  .swiper-right:hover {
    background-color: #fff;
    border-radius: 50%;
    .svg {
      color: #000;
    }
  }
  .swiper-but {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    cursor: pointer;
    span {
      width: 10px;
      height: 10px;
      background-color: #fff;
      border-radius: 50%;
      margin: 0 5px;
      display: inline-block;
    }
    .is-span {
      background-color: rgb(119, 82, 221) !important;
    }
  }
}
</style>
