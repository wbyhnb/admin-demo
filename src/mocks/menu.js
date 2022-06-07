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
