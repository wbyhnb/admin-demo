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
              icon: "zujian",

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
                  icon: "zujian"
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
                  icon: "zujian"
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
                path:'/editor/wangEditor',
                name:'wangEditor',
                hidden:false,
                component:'editor/wangEditor',
                meta:{
                  requireAuth:true,
                  title:'wangEditor',
                  icon:'fuwenben'
                }
              },
              {
                path:'/editor/quillEditor',
                name:'quillEditor',
                hidden:false,
                component:'editor/quillEditor',
                meta:{
                  requireAuth:true,
                  title:'quillEditor',
                  icon:'fuwenben'
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

                }
              },
            ]
          },
          //表格
          {
            path:"/table",
            name:"Table",
            hidden: false,
            component: "Layout",
            redirect: "/table/index",
            meta:{
              title:"表格"
            },
            children:[
              {
                path:"/table/index",
                name:"TableIndex",
                hidden: false,
                component: "table",
                meta: {
                  title:"表格"
                }
              }
            ]
          },
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
          },
          {
            path: "/role",
            hidden: false,
            component: "Layout",
            name: "Role",
            redirect: "/role/index",
            meta: {
              requireAuth: true,
              title: "权限管理"
            },
            children: [
              {
                path: "/role/index",
                name: "RoleIndex",
                component: "role",
                meta: {
                  requireAuth: true,
                  title: "角色列表"
                }
              }
            ]
          },
          {
            path: "/name",
            component: "Layout",
            name: "Name",
            redirect: "/name/index",
            hidden: false,
            meta: {
              requireAuth: true,
              title: "角色管理"
            },
            children: [
              {
                path: "/name/index",
                name: "NameIndex",
                component: "name",
                meta: {
                  requireAuth: true,
                  title: "角色列表"
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
