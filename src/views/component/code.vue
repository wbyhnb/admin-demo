<template>
  <div class="drag">
    <div class="drag_box" ref="dragbox">
      <span class="span_text">好</span>
    </div>
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
    <button @click="onMeth">456</button>
  </div>
</template>

<script>
export default {
  name: "logincodes",
  props: {},
  data() {
    return {
      dataForm: [
        "月落乌啼霜满天",
        "明月何时照我还",
        "我欲乘风归去",
        "又送君千里",
        "江上入海",
        "大风起兮云飞扬",
        "长江东逝水",
        "海上生明月",
        "东风无力百花残",
        "更销不尽愁",
        "暮春不至",
        "江畔何处客",
        "疑是青花依旧"
      ],
      oldText: "",
      newText: "",
      times: "",
      value: ""
    };
  },
    mounted() {
        this.$nextTick(()=>{
           console.log(this.$refs.dragbox);
        let span = document.createElement("span");
        let dom = this.$refs.dragbox;
        span.innerHTML = "你";
        span.classList = ["span_text"];
        span.style.marginTop = "50px";
        span.style.left = "50px";
        dom.appendChild(span);  
        })
       
    },
  methods: {
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
  },
};
</script>

<style lang="scss" scoped>
.drag_box {
  width: 200px;
  height: 100px;
  background: #ccc;
  border: 1px solid #000;
  margin: 10px;
  span{
     font-size: 25px;
    font-family: KaiTi;
  }
}
>>>.span_text{
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
