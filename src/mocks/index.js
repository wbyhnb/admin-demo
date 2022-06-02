import Mock from 'mockjs';
import userForm from './user';
import menuForm from './menu';
import infoForm from './userinfo'

Mock.mock(/\/api\/userForm/, 'post',userForm.getUser);
Mock.mock(/\/api\/menuForm/, 'post',menuForm.getMenu);
Mock.mock(/\/api\/getUserinfo/, 'post',infoForm.getUserinfo);

Mock.setup({
    timeout: 0-500,
  })
