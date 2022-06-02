import router from "./index";
import Layout from "@/layout";
import store from "@/store/index";
const constantRoutes1 = [
  {
    path: "/",
    hidden: false,
    component: Layout,
    redirect: "/home",
    meta: {
      title: "首页"
    },
    children: [
      {
        path: "/home",
        name: "Home",
        hidden: false,
        component: () => import("@/views/home"),
        meta: {
          requireAuth: true,
          title: "首页"
        }
      }
    ]
  },
  // 登录
  {
    path: "/login",
    hidden: false,
    name: "Login",
    component: () => import("@/views/login/index"),
    meta: {
      title: "登录",
      requireAuth: false
    }
  }
];
const constantRoutes2 = [
  //404
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("@/views/error/404"),
    meta: {
      title: "404",
      requireAuth: false
    }
  }
];
3
constantRoutes1.forEach(item => {
  router.options.routes.push(item);
  router.addRoute(item);
});
/*
// 路由拼接
var data = [];
data = store.state.tab.menu || "";
// console.log(data);
const arr = filterRoutes(data);
console.log(arr);
arr.forEach(item => {
  router.options.routes.push(item);
  router.addRoute(item);
});
function filterRoutes(data) {
  data.map(item => {
    // console.log(item);
    if (item.component == "Layout") item.component = Layout;
    else
      item.component = loadView(item.component)
    if (item.children) {
      filterRoutes(item.children);
    }
  });
  return data;
}

function loadView(view) {
  return (resolve) => require([`@/views/${view}`], resolve)
}
*/
constantRoutes2.forEach(item => {
  router.options.routes.push(item);
  router.addRoute(item);
});
