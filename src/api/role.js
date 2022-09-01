import http from "@/utils/http";
//获取角色列表
export function getRoleList(params) {
  return http.get(`/one-api/role/page`, params);
}
//新增修改角色
export function updataRole(params) {
    return http.post(`/one-api/role/updata`, params);
    }
//删除角色
export function deleteRole(params) {
    return http.post(`/one-api/role/delete`,params)
}
//获取角色详情
export function getRoleDetail(params) {
    return http.get(`/one-api/role/detail/${params}`)
}
//分配菜单
export function allotMenu(params,data) {
    return http.post(`/one-api/role/roleMenu/${params}`,data)
}
//查询角色已分配的菜单
export function getRoleMenu(params) {
    return http.get(`/one-api/role/roleMenu/${params}`)
}