import http from "@/utils/http";
//获取用户信息
export function getUserinfo(params){
  return http.post(`/api/getUserinfo`,params)
}
//登录
export function loginUser(params){
    return http.post(`/login`,params)
}
//获取动态路由信息
export function getMenu(params){
    return http.post(`/api/menuForm`,params)
}
