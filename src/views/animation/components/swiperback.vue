<template>
  <div class="swiper">
    <div
      class="swiper_box"
      @click="animation"
      :class="'is-active' + boxindex"
    ></div>
  </div>
</template>

<script>
export default {
  name: "swiperback",

  data() {
    return {
      boxindex: 1
    };
  },
  methods: {
    animation() {
      this.boxindex++;
      if (this.boxindex > 5) {
        this.boxindex = 1;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.swiper {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  .swiper_box {
    border: 1px solid #000;
    width: 200px;
    height: 200px;
    box-sizing: border-box;
  }
  .is-active1 {
    animation: rotate-diagonal-1 0.4s linear both;
  }
  @keyframes rotate-diagonal-1 {
    0% {
      transform: rotate3d(1, 1, 0, 0deg);
    }
    50% {
      transform: rotate3d(1, 1, 0, -180deg);
    }
    100% {
      transform: rotate3d(1, 1, 0, -360deg);
    }
  }
  .is-active2 {
    animation: flip-scale-down-ver 0.5s linear both;
  }
  @keyframes flip-scale-down-ver {
    0% {
      transform: scale(1) rotateY(0);
    }
    50% {
      transform: scale(0.4) rotateY(-90deg);
    }
    100% {
      transform: scale(1) rotateY(-180deg);
    }
  }
  .is-active3 {
    animation: swirl-in-fwd 0.6s ease-out both;
  }
  @keyframes swirl-in-fwd {
    0% {
      transform: rotate(-540deg) scale(0);
      opacity: 0;
    }
    100% {
      transform: rotate(0) scale(1);
      opacity: 1;
    }
  }
  .is-active4 {
    animation: slit-in-vertical 0.45s ease-out both;
  }
  @keyframes slit-in-vertical {
    0% {
      -webkit-transform: translateZ(-800px) rotateY(90deg);
      transform: translateZ(-800px) rotateY(90deg);
      opacity: 0;
    }
    54% {
      -webkit-transform: translateZ(-160px) rotateY(87deg);
      transform: translateZ(-160px) rotateY(87deg);
      opacity: 1;
    }
    100% {
      -webkit-transform: translateZ(0) rotateY(0);
      transform: translateZ(0) rotateY(0);
    }
  }
  .is-active5 {
    animation: color-change-5x 8s linear infinite alternate both;
  }
  @keyframes color-change-5x {
    0% {
      background: #19dcea;
    }
    25% {
      background: #b22cff;
    }
    50% {
      background: #ea2222;
    }
    75% {
      background: #f5be10;
    }
    100% {
      background: #3bd80d;
    }
  }
}
</style>
