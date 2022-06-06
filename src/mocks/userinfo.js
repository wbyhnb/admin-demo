import Mock from "mockjs";
export default {
  getUserinfo: config => {
    const { token } = JSON.parse(config.body);
    if (token == 123456) {
      return {
        code: 200,
        data: {
          name: 'admin',
          email:'123@123.com',
          rolename:'超级管理员',
          roles:['admin']

        },
        message: "获取成功"
      };
    } else if (token == 654321) {
      return {
        code: 200,
        data:{
          name:'user',
          email:'456@456.com',
          roles:['editor']

        },
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
