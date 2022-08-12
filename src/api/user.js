import http from "@/utils/http";
//获取用户列表
export function getUserList(params) {
  return http.get(`/one-api/user/page`, params);
}
//获取用户信息
export function getUserInfo(params) {
    return http.get(`/getUserInfo`, params);
}
//更新用户信息
export function updateUserInfo(params) {
    return http.post(`/one-api/user/save`, params);
}
//根据id查询用户信息
export function getUserById(params) {
    return http.get(`/one-api/user/detail/${params}`);
}
//删除用户
export function deleteUser(params) {
    return http.post(`/one-api/user/delete`,params)
}
