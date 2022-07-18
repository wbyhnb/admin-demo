<template>
  <div class="card_box">
    <div
      class="card_item"
      :class="boxindex == index ? 'card_active' : ''"
      v-for="(item, index) in list"
      :key="index"
      :style="{ backgroundImage: 'url(' + item + ')' }"
      @click="cardClick(index)"
    >
    <div>{{index+1}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      boxindex: 0
    };
  },
  methods: {
    cardClick(index) {
      this.boxindex = index;
    }
  }
};
</script>

<style lang="scss" scoped>
.card_box {
  display: flex;
  align-items: center;
  .card_item {
    width: 90px;
    height: 300px;
    margin-right: 15px;
    border-radius: 10px;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.3);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    cursor: pointer;
    animation: cards 0.5s cubic-bezier(0.39, 0.575, 0.565, 1) both;
    color: #fff;
    font-weight: 700;
    position: relative;
    div{
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
