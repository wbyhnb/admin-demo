import Vue from "vue";
import Router from "vue-router";
import Layout from "@/layout";
Vue.use(Router);
//静态路由
export const  routes= [
  //首页
    {
      path: "/",
      hidden: false,
      component: Layout,
      redirect: "/home",
      meta: {
        title: "首页",
        icon:"shouye-shouye"
      },
      children: [
        {
          path: "/home",
          name: "Home",
          hidden: false,
          component: () => import("@/views/home"),
          meta: {
            requireAuth: true,
            title: "首页",
            icon:"shouye-shouye"
          }
        }
      ]
    },
    //文档
    {
      path: "/document",
      hidden: false,
      component: Layout,
      redirect: "/document/index",
      meta: {
        title: "文档",
        icon:"wendang"
      },
      children: [
        {
          path: "/document/index",
          name: "Document",
          hidden: false,
          component: () => import("@/views/document"),
          meta: {
            requireAuth: true,
            title: "文档",
            icon:"wendang"
          }
        }
      ]
    },
    // 登录
    {
      path: "/login",
      hidden: true,
      name: "Login",
      component: () => import("@/views/login/index"),
      meta: {
        title: "登录",
        requireAuth: false
      }
    }
  ]


const createRouter = () => new Router({
  routes: routes
})
const router = createRouter()
//重置路由的方法，切换用户后，或者退出时清除动态加载的路由
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // 新路由实例matcer，赋值给旧路由实例的matcher，（相当于replaceRouter）
}
export default router
