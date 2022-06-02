import Cookies from 'js-cookie'
//token名字
const TokenKey = 'admin-token'
//设置token过期时间
const seconds = 24 * 60 * 60 // 24小时
const expires = new Date(new Date() * 1 + seconds * 1000);
// 获取token
export function getToken() {
  return Cookies.get(TokenKey);
}
// 设置token
export function setToken(token) {
  return Cookies.set(TokenKey, token,{expires: expires})
}
// 清除token
export function removeToken() {
  return Cookies.remove(TokenKey)
}
