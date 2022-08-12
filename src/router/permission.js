import router from "./index";
import Vue from "vue";
import store from "@/store/index";
import VueRouter from "vue-router";
import "element-ui/lib/theme-chalk/index.css";
// import '@fortawesome/fontawesome-free/css/all.min.css'
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { getToken } from "@/utils/auth";
import { getMenu} from "@/api/logins";
import {getUserInfo} from "@/api/user";
import Layout from "@/layout";

NProgress.configure({
  easing: "ease", // 动画方式
  speed: 500, // 递增进度条的速度
  showSpinner: true, // 是否显示加载ico
  trickleSpeed: 200, // 自动递增间隔
  minimum: 0.3 // 初始化时的最小百分比
});

// 解决Vue-Router升级导致的Uncaught(in promise) navigation guard问题
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject)
    return originalPush.call(this, location, onResolve, onReject);
  return originalPush.call(this, location).catch(err => err);
};
// replace
const originalReplace = VueRouter.prototype.replace;
VueRouter.prototype.replace = function replace(location) {
  return originalReplace.call(this, location).catch(err => err);
};
Vue.use(VueRouter);

// 白名单
const whiteList = ["/login"]; // no redirect whitelist

// 导航守卫
router.beforeEach((to, from, next) => {
  NProgress.start();
  // 判断是否登录
  if (getToken())
    if (to.path === "/login") {
      // 如果已经登录，重定向到主页
      next({ path: "/" });
      NProgress.done();
      return false;
    } else {
      if (store.state.user.roles.length === 0) {
        getUserInfo().then(res => {//获取登录用户信息
          const data = res.data.data;
          store.commit("setUser", data);
          store.commit("setRoles", data.roles);
          getMenuList(to, next);
        });
      } else {
        next();
      }
    }
  else {
    if (whiteList.indexOf(to.path) !== -1) {
      // 在免登录白名单，直接进入
      next();
      return false;
    } else {
      // 否则全部重定向到登录页
      next({
        path: "/login",
        query: {
          redirect: to.fullPath
        }
      });
      NProgress.done();
      return false;
    }
  }
});

const constantRoutes = [
  //404
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    hidden: true,
    component: () => import("@/views/error/404"),
    meta: {
      title: "404",
    }
  }
];

async function getMenuList(to, next) {
  const token = 123456;//获取token
  const { data } = await getMenu({ token: token });//获取动态路由菜单
  const routerList = filterRoutes(data.data);
  //动态添加路由
  routerList.map(item => {
    router.options.routes.push(item);
    router.addRoute(item);
  });
  //最后添加404
  constantRoutes.map(item => {
    router.options.routes.push(item);
    router.addRoute(item);
  });
  next({ ...to, replace: true });
}
function filterRoutes(data) {//过滤路由数据
  data.map(item => {
    // console.log(item);
    if (item.component == "Layout") item.component = Layout;
    else item.component = loadView(item.component);
    if (item.children) {
      filterRoutes(item.children);
    }
  });
  return data;
}
//处理commponent的路径
function loadView(view) {
  return resolve => require([`@/views/${view}`], resolve);
}
router.afterEach((to, from, next) => {
  // 在即将进入新的页面组件前，关闭掉进度条,设置标题
  document.title = to.meta.title
  window.scrollTo(0, 0);
  NProgress.done();
});
