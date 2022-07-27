// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import store from "@/store";
import "@/style/index.scss";
import ElementUI from "element-ui";
import Element from "element-ui";
import axios from "@/utils/request";
import "@/mocks/index";
import "@/router/permission";
import IconSvg from "@/components/Icon-svg";
import textOver from "@/components/text-over";
import butCol from "@/components/but-col";
import prism from "@/components/editor/vue-prism-editor.vue";
import mavonEditor from "mavon-editor";
import "mavon-editor/dist/css/index.css";


//自定义指令
import "@/plugins/index";
//全局过滤器
import * as filters from "@/plugins/filter.js";

Object.keys(filters).forEach(item=>{
  Vue.filter(item,filters[item])
})






// use
Vue.use(mavonEditor);
Vue.component("icon-svg", IconSvg);
Vue.component("text-over", textOver);
Vue.component("but-col", butCol);
Vue.component("prism", prism);
Vue.prototype.$axios = axios;
Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(Element);

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  store,
  components: { App },
  template: "<App/>"
});
