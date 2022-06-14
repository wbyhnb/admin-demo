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
          avatar:'https://s3.bmp.ovh/imgs/2022/06/13/f48750114b37d6c0.jpeg',
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
          rolename:'普通用户',
          avatar:'https://s3.bmp.ovh/imgs/2022/06/13/aa1d2a89e0ef23f0.jpg',
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
