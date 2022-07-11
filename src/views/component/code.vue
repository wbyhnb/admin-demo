<template>
  <div class="drag">
    <!-- <div class="drag_box" ref="dragbox"></div>
    <button @click="ass">刷新</button>
    {{ oldText }}
    <div
      id="div1"
      @drop="drop($event)"
      @dragover="allowDrop($event)"
      @dragenter="dragenter($event)"
    ></div>
    <br />
    <span
      class="drag-box"
      v-for="(item, index) in newText"
      :key="index"
      :id="'drag' + index"
      draggable="true"
      @dragstart="drag($event)"
      >{{ item }}</span
    >

    <button @click="onClick">123</button>
    <button @click="onMeth">456</button> -->
    <codes></codes>
  </div>
</template>

<script>
export default {
  name: "logincodes",
  props: {},
  components: {
    codes: () => import("./components/code-item.vue")
  },
  data() {
    return {
      dataForm: [
        "月落乌啼",
        "明月何时",
        "乘风归去",
        "又送君千里",
        "江上入海",
        "大风起兮",
        "长江东逝水",
        "海上生明月",
        "东风无力",
        "更销不尽愁",
        "暮春不至",
        "江畔何处客",
        "青花依旧"
      ],
      oldText: "",
      newText: "",
      times: "",
      value: ""
    };
  },
  mounted() {
    this.$nextTick(() => {
    //   this.ass();
    });
  },
  methods: {
    ass() {
      if (this.oldText) {
        let el = this.$refs.dragbox;
        let childs = el.childNodes;
        for (let i = childs.length - 1; i >= 0; i--) {
          el.removeChild(childs[i]);
        }
      }
      let dragboxWidth = this.$refs.dragbox.offsetWidth;
      let dragboxHeight = this.$refs.dragbox.offsetHeight;
      let dom = this.$refs.dragbox;
      let _length = this.dataForm.length;
      let roundNum = Math.round(Math.random() * (_length - 1));
      this.oldText = this.dataForm[roundNum];
      this.newText = this.oldText;
      let arr = this.oldText.split("");
      let _width = [];
      let _height = [];
      for (let i = 0; i < arr.length; i++) {
        let spanWidth = Math.abs(Math.random() * (dragboxWidth - 25));
        let spanHeight = Math.abs(Math.random() * (dragboxHeight - 32));
        let span = document.createElement("span");
        span.innerHTML = arr[i];
        span.classList = ["span_text"];
        span.style.top = spanHeight + "px";
        span.style.left = spanWidth + "px";
        dom.appendChild(span);
      }
    },
    onMeth() {
      console.log(this.value);
      this.times = new Date().getTime();
      let _length = this.dataForm.length;
      let roundNum = Math.round(Math.random() * _length);
      this.oldText = this.dataForm[roundNum];
      this.newText = this.dataForm[roundNum];
      let arr = this.oldText.split("");
      var newStrAll = [];
      arr.forEach((item, index) => {
        let index2 = Math.floor(Math.random() * _length);
        newStrAll.splice(index2, 0, item);
      });
      this.newText = newStrAll.join("");

      var f = document.getElementById("div1");
      var childs = f.childNodes;
      for (var i = childs.length - 1; i >= 0; i--) {
        f.removeChild(childs[i]);
      }
    },
    drag(ev) {
      // console.log(ev);
      // console.log(ev.target.innerText);
      ev.dataTransfer.setData("Text", ev.target.id);
    },
    drop(ev) {
      // console.log(ev.target.innerText);
      ev.preventDefault();
      var data = ev.dataTransfer.getData("Text");
      ev.target.appendChild(document.getElementById(data));
    },
    allowDrop(ev) {
      // console.log(ev);
      console.log(ev.target.innerText);
      ev.preventDefault();
    },
    dragenter(ev) {
      // console.log(ev);
      // console.log(ev.target.innerText);
    },
    onClick() {
      let a = document.getElementById("div1").innerText;
      console.log(a);
    }
  }
};
</script>

<style lang="scss" scoped>
.drag_box {
  width: 200px;
  height: 100px;
  background: #ccc;
  border: 1px solid #000;
  margin: 10px;
  position: relative;
  span {
    font-size: 25px;
    font-family: KaiTi;
  }
}
>>> .span_text {
  position: absolute;
  display: block;
  font-size: 25px;
  font-family: KaiTi;
}
#div1 {
  width: 50px;
  height: 50px;
  border-bottom: 1px solid #aaaaaa;
}
#drag1 {
  /* 禁止选中 */
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  /* 鼠标样式 */
  cursor: pointer;
}
</style>
