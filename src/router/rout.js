let add =[{
  path: '/user',
  name: 'user',
  hidden: true,
  component: Layout,
  meta: {
    requireAuth: true,
    title: '用户管理'
  },
  children: [{
      path: '/list',
      name: 'userList',
      component: (resolve) => require([`@/views/users`], resolve),
      meta: {
        requireAuth: true,
        title: '用户列表'
      }
    },
    {
      path: '/add',
      name: 'userAdd',
      component: (resolve) => require([`@/views/add`], resolve),
      meta: {
        requireAuth: true,
        title: '添加用户'
      }
    },
  ]
}, {
  path: '/role',
  name: 'role',
  hidden: true,
  component: Layout,
  meta: {
    requireAuth: true,
    title: '权限管理'
  },
  children: [{
    path: '/lists',
    name: 'roleList',
    component: (resolve) => require([`@/views/role`], resolve),
    meta: {
      requireAuth: true,
      title: '角色列表'
    }
  }, ]
}, {
  path: '/name',
  name: 'name',
  component: Layout,
  meta: {
    requireAuth: true,
    title: '角色管理'
  },
  children: [{
    path: '/names',
    name: 'nameList',
    component: (resolve) => require([`@/views/name`], resolve),
    meta: {
      requireAuth: true,
      title: '角色列表'
    }
  }]
},]
