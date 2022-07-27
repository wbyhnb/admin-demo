<template>
  <div class="box">
    <!-- 封装轮播图插件 -->
    <!-- <button @click="swiper">自动轮播</button> -->
    <!-- <button @click="swiperStop">手动轮播</button> -->
    <!-- <swiper ref="swiper" :list="list" /> -->
    <card :list="listimg" ></card>
    <!-- <swiperbox :list="list"   /> -->
    <!-- <swiperback :list="list" /> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        "https://s3.bmp.ovh/imgs/2022/07/06/5fd403a5515153b8.png",
        "https://s3.bmp.ovh/imgs/2022/07/06/1cb6a18f05c58e5c.png",
        "https://s3.bmp.ovh/imgs/2022/07/06/6599df6ac5535c8b.png",
        "https://s3.bmp.ovh/imgs/2022/07/06/f8435f86f1ed2081.jpg",
        "https://s3.bmp.ovh/imgs/2022/07/06/85a73598b873b349.jpg"
      ],
      listimg: [
        "https://s3.bmp.ovh/imgs/2022/07/25/3825abda2959a12c.jpg",
        "https://s3.bmp.ovh/imgs/2022/07/25/84dfb8476150d96f.jpg",
        "https://s3.bmp.ovh/imgs/2022/07/25/00c16a1b9f2dd206.jpg",
        "https://s3.bmp.ovh/imgs/2022/07/25/19c0f6bcff1017fc.jpg",
        "https://s3.bmp.ovh/imgs/2022/07/25/004af39d0666d17b.jpg"
      ]
    };
  },
  components: {
    swiper: () => import("./components/swiper.vue"),
    card: () => import("./components/card.vue"),
    swiperbox: () => import("./components/swiperbox.vue"),
    swiperback: () => import("./components/swiperback.vue")
  },
  created() {
    // const files = require.context("@/views", true, /\.vue$/);
    // files.keys().forEach(key => {
    //   console.log(key);
    // });
    // console.log(files);
  },
  methods: {
    swiper() {
      //轮播图自动播放
      this.$refs.swiper.swiper();
    },
    swiperStop() {
      //轮播图停止播放
      this.$refs.swiper.swiperStop();
    }
  }
};
</script>

<style lang="scss" scoped>
.box {
  width: 100%;
  height: 100%;
}
</style>
