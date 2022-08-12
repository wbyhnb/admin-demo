import http from "@/utils/http";
//获取菜单信息
export function getMenuList(params){
    return http.get(`/one-api/menu/list`,params)
}
//新增修改菜单
export function updataMenu(params){
    return http.post(`/one-api/menu/updata`,params)
}
//删除菜单
export function deleteMenu(params){
    return http.post(`/one-api/menu/delete`,params)
}
//获取菜单详情
export function getMenuDetail(params){
    return http.get(`/one-api/menu/detail/${params}`)
}