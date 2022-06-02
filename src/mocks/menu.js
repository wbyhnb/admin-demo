import Mock from "mockjs";
export default {
  getMenu: config => {
    const { token } = JSON.parse(config.body);
    if (token == 123456) {
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
            id: 1,
            name: "/",
            path: "/",
            component: "Layout",
            redirect: "/index",
            hidden: false,
            children: [
              {
                name: "index",
                path: "/index",
                meta: { title: "index" },
                component: "index/index"
              }
            ]
          },
          {
            id: 2,
            name: "/form",
            path: "/form",
            component: "Layout",
            redirect: "/form/index",
            hidden: false,
            children: [
              {
                name: "/form/index",
                path: "/form/index",
                meta: { title: "form" },
                component: "form/index"
              }
            ]
          },
          {
            id: 3,
            name: "/example",
            path: "/example",
            component: "Layout",
            redirect: "/example/tree",
            meta: { title: "example" },
            hidden: false,
            children: [
              {
                name: "/tree",
                path: "/example/tree",
                meta: { title: "tree" },
                component: "tree/index"
              },
              {
                name: "/copy",
                path: "/example/copy",
                meta: { title: "copy" },
                component: "tree/copy"
              }
            ]
          },
          {
            id: 4,
            name: "/table",
            path: "/table",
            component: "Layout",
            redirect: "/table/index",
            hidden: false,
            children: [
              {
                name: "/table/index",
                path: "/table/index",
                meta: { title: "table" },
                component: "table/index"
              }
            ]
          },
          {
            id: 5,
            name: "/admin",
            path: "/admin",
            component: "Layout",
            redirect: "/admin/index",
            hidden: false,
            children: [
              {
                name: "/admin/index",
                path: "/admin/index",
                meta: { title: "admin" },
                component: "admin/index"
              }
            ]
          },
          {
            id: 6,
            name: "/people",
            path: "/people",
            component: "Layout",
            redirect: "/people/index",
            hidden: false,
            children: [
              {
                name: "/people/index",
                path: "/people/index",
                meta: { title: "people" },
                component: "people/index"
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
