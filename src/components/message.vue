<template>
  <div
    class="message_box"
    v-show="visible"
 
    role="alert"
  >
    {{ content }}
    <span @click.stop="close">X</span>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {
      visible: false,
      timer: null,
      closed: false,
      content: "",
      onClose: null
    };
  },
  mounted() {
    // if (this.disappear > 0) {
    // this.startTimer()
    // }else{
    this.visible = true;
    // }
  },
  computed: {
    verticalProperty() {
      return "top" 
    }
  },
  watch: {
    closed(newVal) {
      if (newVal) {
        this.visible = false;
        this.$el.addEventListener("transitionend", this.destroyElement);
      }
    }
  },
  methods: {
    destroyElement() {
      this.$el.removeEventListener("transitionend", this.destroyElement);
      this.$destroy(true);
      this.$el.parentNode.removeChild(this.$el);
    },
    startTimer() {
      this.visible = true;
      this.timer = setTimeout(() => {
        // if (!this.closed) {
        this.close();
        // }
      }, this.disappear);
    },
    clearTimer() {
      clearTimeout(this.timer);
    },
    close() {
      console.log("close");
      this.closed = true;
      if (typeof this.onClose === "function") {
        this.onClose();
      }
      //组件隐藏方法
      // this.visible = false;
      // this.remove(); //移除dom元素
    }
  }
};
</script>

<style lang="scss" scoped>
.message_box {
  top: 50px;
  right: 15px;
  z-index: 2022;
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 15px;
  background: #fff;
  width: 300px;
  border-radius: 5px;
  box-shadow: 0 2px 12px 0 rgb(100 100 100 / 30%);
}
</style>
