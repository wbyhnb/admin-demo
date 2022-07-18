import Msg from "./message.vue";
import Vue from "vue";

const messageBox = Vue.extend(Msg);
let instance;
let instances = [];
const msg = function(options) {
  // options= m
  console.log(options);
  const userOnClose = options.onClose;
  options.onClose = function() {
    msg.close(userOnClose);
  };
  instance = new messageBox({
    data: options
  });
  instance.$mount();
  instance.dom = instance.$el;
  instances.push(instance);
  let offset = 34;
  instances.forEach(item => {
    offset += item.$el.offsetHeight + 15;
  });
  offset += 15;
  instance.$el.style.top = offset + "px";

  document.body.appendChild(instance.$el);
  return instance;
};

msg.close = function(userOnClose) {
  let index = -1;
  
  const len = instances.length;
  if (!instance) return;

  if (typeof userOnClose === "function") {
    userOnClose(instance);
  }
  instances.splice(index, 1);
  if (len <= 1) return;
  const removedHeight = instance.dom.offsetHeight;
  console.log(removedHeight);
  console.log(instances);
  for (let i = 1; i < len - 1; i++) {
    console.log(i);
    console.log(instances[1]);
    instances[i].dom.style.top = parseInt(instances[i].dom.style.top, 10) - removedHeight - 16 + "px";
  }
};
export default msg;

/*
export default function message(props) {
  const vm = new Vue({
    render(h) {
      //虚拟dom
      return h(Msg, { props }); //Component是要挂载的组件,props是要挂载组件的props属性
    }
  }).$mount();
  let instances = [];
  let vmNode;
  let bodyChild
  // if (document.querySelector(".message_box")) {
  // console.log(document.querySelector("body > .message_box"));
  // console.log(document.querySelector(" body> .message_box").length);
  // }
  setTimeout(() => {
    bodyChild = document.querySelector("body").children;
  
  for (var i = 0; i < bodyChild.length; i++) {
    if (bodyChild[i].className === "message_box") {
      var liChildDiv = bodyChild[i];
      if (i>2) {
        liChildDiv.style.top = bodyChild[i-1].offsetHeight + 16 + "px";
      }else{
        liChildDiv.style.top = "50px";
      }
      
      console.log(liChildDiv.offsetHeight);
      instances.push(liChildDiv);
    }
  }
  document.body.appendChild(vm.$el)
  console.log(bodyChild);
  console.log(instances);
},200)

  ; //vm.$el是虚拟dom（vm）对应的真实dom,也可以用vm.$root替代vm.$el

  const dom = vm.$children[0]; //用与挂载全局的alert提示，dom就相当于alert组件。
  dom.remove = () => {
    //当执行remove()方法时，即从body上移除掉挂载的真实dom，并销毁虚拟dom
    document.body.removeChild(vm.$el);
    vm.$destroy(); //销毁虚拟dom
  };
  return dom;
}*/
