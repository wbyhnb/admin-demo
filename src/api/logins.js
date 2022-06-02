import http from '@/utils/http'
//登录
export function loginUser(params){
    return http.post(`/api/userForm`,params)
}
//获取动态路由信息
export function getMenu(params){
    return http.post(`/api/menuForm`,params)
}
//获取用户信息
export function getUserinfo(params){
  return http.post(`/api/getUserinfo`,params)
}
