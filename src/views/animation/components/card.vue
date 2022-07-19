<template>
  <div
    class="card_box"
    ref="cardbox"
    @mouseenter="swiperStop()"
    @mouseleave="swiper()"
  >
    <div
      class="card_item"
      :class="index == boxindex ? 'card_active' : 'card_actives'"
      v-for="(item, index) in list"
      :key="index"
      :style="{ backgroundImage: 'url(' + item + ')' }"
      @click="cardClick(index)"
    >
      <div>{{ index + 1 }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "cardbox",
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
      boxindex: 0,
      timer: null
    };
  },
  mounted() {
    this.swiper();
    this.$refs.cardbox.style.width = 300 + (this.list.length - 1) * 105 + "px";
  },
  methods: {
    //卡片点击事件
    cardClick(index) {
      this.boxindex = index;
      //   console.log(this.$refs.cardbox);
      //   for (let i = 0; i < this.list.length; i++) {
      //     //选中index的zindex为1，其他的为0
      //     if (i == this.boxindex) {
      //     //   this.$refs.swiperbox[i].style.zIndex = 1;
      //       this.$refs.cardbox.children[i].classList.add("card_active");
      //       this.$refs.cardbox.children[i].classList.remove("card_actives");
      //     } else {
      //     //   this.$refs.swiperbox[i].style.zIndex = 0;
      //       this.$refs.cardbox.children[i].classList.remove("card_active");
      //       this.$refs.cardbox.children[i].classList.add("card_actives");
      //     }
      //   }
    },
    //自动轮播
    swiper() {
      if (this.bool == true) {
        this.timer = setInterval(() => {
          this.boxindex++;
          if (this.boxindex > this.list.length - 1) {
            this.boxindex = 0;
          }
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
.card_box {
  display: flex;
  align-items: center;
  //   overflow: hidden;
  .card_item {
    // width: 90px;
    height: 300px;
    margin-right: 15px;
    border-radius: 10px;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.3);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    cursor: pointer;
    color: #fff;
    font-weight: 700;
    position: relative;
    div {
      position: absolute;
      bottom: 10px;
      width: 100%;
      text-align: center;
    }
  }
  .card_active {
    animation: card 0.5s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  }
  @keyframes card {
    0% {
      width: 90px;
    }
    100% {
      width: 300px;
      border-radius: 15px;
    }
  }
  .card_actives {
    animation: cards 0.5s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  }
  @keyframes cards {
    0% {
      width: 300px;
    }
    100% {
      width: 90px;
      border-radius: 10px;
    }
  }
}
</style>
