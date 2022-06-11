import http from "@/utils/http";
//获取笑话
export function getJoke(params) {
  return http.get(
    `/api/jokes/list/random?app_id=cfqvqqhvrbqqatpf&app_secret=U05NaC9FTkVVek1Rcld0NWFDMzZnUT09`,
    params
  );
}
//获取日期信息
export function getData(params) {
  return http.get(
    `/api/holiday/single/${params}?ignoreHoliday=false&app_id=cfqvqqhvrbqqatpf&app_secret=U05NaC9FTkVVek1Rcld0NWFDMzZnUT09`
  );
}
//获取ip
export function getIp(params) {
  return http.get(
    `/api/ip/self?app_id=cfqvqqhvrbqqatpf&app_secret=U05NaC9FTkVVek1Rcld0NWFDMzZnUT09`
  );
}
//获取古诗词
export function getPoetry(params) {
  return http.get(`/home/shici/ajax`);
}
//获取天气信息
export function getWeather(params) {
  return http.get(
    `/api/weather/current/${params}?app_id=cfqvqqhvrbqqatpf&app_secret=U05NaC9FTkVVek1Rcld0NWFDMzZnUT09`
  );
}
//获取励志语录
export function getLizhi(params) {
  return http.get(`/home/lizhi/ajax`);
}
