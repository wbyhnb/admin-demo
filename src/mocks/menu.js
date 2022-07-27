import Mock from "mockjs";
export default {
  getMenu: config => {
    const { token } = JSON.parse(config.body);
    if (token == 123456) {
      return {
        code: 200,
        data: [
          //图标
          {
            path: "/icon",
            name: "Icon",
            hidden: false,
            component: "Layout",
            redirect: "/icon/index",
            meta: {
              title: "图标",
              icon: "tubiao"
            },
            children: [
              {
                path: "/icon/index",
                name: "IconIndex",
                hidden: false,
                component: "icons",
                meta: {
                  requireAuth: true,
                  title: "图标",
                  icon: "tubiao"
                }
              }
            ]
          },
          //组件
          {
            path: "/component",
            name: "Component",
            hidden: false,
            component: "Layout",
            redirect: "/component/index",
            meta: {
              title: "组件",
              icon: "zujian"
            },
            children: [
              {
                path: "/component/index",
                name: "ComponentIndex",
                hidden: false,
                component: "component",
                meta: {
                  requireAuth: true,
                  title: "input组件",
                  icon: "input1"
                }
              },
              {
                path: "/component/button",
                name: "Button",
                hidden: false,
                component: "component/button",
                meta: {
                  requireAuth: true,
                  title: "button组件",
                  icon: "anniu"
                }
              },
              //过滤器
              {
                path: "/component/filter",
                name: "Filter",
                hidden: false,
                component: "component/filter",
                meta: {
                  requireAuth: true,
                  title: "过滤器",
                  icon: "guolv"
                }
              },
              //按钮组件
              {
                path: "/component/code",
                name: "Code",
                hidden: false,
                component: "component/code",
                meta: {
                  requireAuth: true,
                  title: "code组件",
                  icon: "qrcode"
                }
              },
              //消息提示
              {
                path: "/component/message",
                name: "Message",
                hidden: false,
                component: "component/message",
                meta: {
                  requireAuth: true,
                  title: "message组件",
                  icon: "message"
                }
              }
            ]
          },
          //富文本
          {
            path: "/editor",
            name: "Editor",
            hidden: false,
            component: "Layout",
            redirect: "/editor/tinymce",
            meta: {
              title: "富文本",
              icon: "fuwenben"
            },
            children: [
              {
                path: "/editor/tinymce",
                name: "EditorIndex",
                hidden: false,
                component: "editor/tinymce",
                meta: {
                  requireAuth: true,
                  title: "tinymce",
                  icon: "fuwenben"
                }
              },
              {
                path: "/editor/wangEditor",
                name: "wangEditor",
                hidden: false,
                component: "editor/wangEditor",
                meta: {
                  requireAuth: true,
                  title: "wangEditor",
                  icon: "aliwangwang"
                }
              },
              {
                path: "/editor/quillEditor",
                name: "quillEditor",
                hidden: false,
                component: "editor/quillEditor",
                meta: {
                  requireAuth: true,
                  title: "quillEditor",
                  icon: "quill-pen-line"
                }
              },

              {
                path: "/editor/baidu",
                name: "EditorBaidu",
                hidden: false,
                component: "editor/baidu",
                meta: {
                  requireAuth: true,
                  title: "ueditor",
                  icon: "BaiDu"
                }
              }
            ]
          },
          //markdown
          {
            path: "/markdown",
            name: "markdown",
            hidden: false,
            component: "Layout",
            redirect: "/markdown/index",
            meta: {
              requireAuth: true,
              title: "markdown编辑器",
              icon: "markdown"
            },
            children: [
              {
                path: "/markdown/index",
                name: "markdownIndex",
                hidden: false,
                component: "markdown/index",
                meta: {
                  requireAuth: true,
                  title: "markdown编译器",
                  icon: "markdown"
                }
              }
            ]
          },
          //表格
          {
            path: "/table",
            name: "Table",
            hidden: false,
            component: "Layout",
            redirect: "/table/index",
            meta: {
              title: "表格",
              icon: "biaoge1"
            },
            children: [
              {
                path: "/table/index",
                name: "TableIndex",
                hidden: false,
                component: "table",
                meta: {
                  title: "表格",
                  icon: "biaoge1"
                }
              },
              {
                path: "/table/o-table",
                name: "TableO",
                hidden: false,
                component: "table/o-table",
                meta: {
                  title: "表格封装",
                  icon: "biaoge1"
                }
              }
            ]
          },
          //动画
          {
            path: "/animation",
            name: "Animation",
            hidden: false,
            component: "Layout",
            redirect: "/animation/index",
            meta: {
              title: "动画",
              icon: "a-zujiantianchong_huaban1fuben7"
            },
            children: [
              {
                path: "/animation/index",
                name: "AnimationIndex",
                hidden: false,
                component: "animation",
                meta: {
                  title: "动画",
                  icon: "a-zujiantianchong_huaban1fuben7"
                }
              }
            ]
          }
        ],
        message: "获取成功"
      };
    } else if (token == 654321) {
      return {
        code: 200,
        data: [
          {
            path: "/user",
            hidden: false,
            name: "User",
            component: "Layout",
            redirect: "/user/index",
            meta: {
              requireAuth: true,
              title: "用户管理"
            },
            children: [
              {
                path: "/user/index",
                name: "UserIndex",
                component: "users",
                meta: {
                  requireAuth: true,
                  title: "用户列表"
                }
              },
              {
                path: "/user/add",
                name: "UserAdd",
                component: "add",
                meta: {
                  requireAuth: true,
                  title: "添加用户"
                }
              }
            ]
          }
        ],
        message: "获取成功"
      };
    } else {
      return {
        code: 500,
        data: [],
        message: "用户未登录"
      };
    }
  }
};
