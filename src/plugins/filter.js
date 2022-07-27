let moment = require('moment');//导入moment.js
moment.locale('zh-cn');//中文语言包

//日期过滤器（参考moment.js官网）
let dateFilter = function(date, format) {
  if (date == null) {
    return "";
  }
  format = format || "YYYY-MM-DD";
  return moment(date).format(format);
};
//金额过滤器(三位加一逗号,保留两位小数)
let moneyFilter = function(money) {
  if (!money) return "";
  money = parseFloat(money);
  money = money.toFixed(2);
  let moneyStr = Number(money).toFixed(0); //去掉小数点后面的0
  let moneyInt = moneyStr.toString().replace(/(\d)(?=(?:\d{3})+$)/g, "$1,"); // 将整数部分逢三一断
  let moneyDecimal = money.toString().split(".")[1]; // 小数部分
  if (moneyDecimal) {
    return moneyInt + "." + moneyDecimal;
  } else {
    return moneyInt;
  }
};
//金额转换为大写
let moneyUpper = function(n) {
  var fraction = ["角", "分", "厘","毫"];
  var digit = ["零", "壹", "贰", "叁", "肆", "伍", "陆", "柒", "捌", "玖"];
  var unit = [
    ["元", "万", "亿"],
    ["", "拾", "佰", "仟"]
  ];
  var head = n < 0 ? "负人民币" : "人民币";
  n = Math.abs(n);
  var s = "";
  for (var i = 0; i < fraction.length; i++) {
    s += (
      digit[Math.floor(n * 10 * Math.pow(10, i)) % 10] + fraction[i]
    ).replace(/零./, "");
  }
  s = s || "整";
  n = Math.floor(n);
  for (var i = 0; i < unit[0].length && n > 0; i++) {
    var p = "";
    for (var j = 0; j < unit[1].length && n > 0; j++) {
      p = digit[n % 10] + unit[1][j] + p;
      n = Math.floor(n / 10);
    }
    s = p.replace(/(零.)*零$/, "").replace(/^$/, "零") + unit[0][i] + s;
    //s = p + unit[0][i] + s;
  }
  return (
    head +
    s
      .replace(/(零.)*零元/, "元")
      .replace(/(零.)+/g, "零")
      .replace(/^整$/, "零元整")
  );
};
//百分比过滤器（数值乘以100，保留两位小数）
let percentFilter = function(percent, format) {
  if (!percent) return "";
  if (!format) format = "#,##0.00%";
  percent = parseFloat(percent);
  percent = percent * 100;
  return format.replace("#,##0.00", percent.toFixed(2));
};
//字符替换，隐藏手机号或者身份证号等*
let replaceFilter = function(str, start, end) {
  if (!str) return "";
  if (!start) start = 3;
  if (!end) end = 4;
  let reg = new RegExp("(.{" + start + "}).*(.{" + end + "})", "g");
  return str.replace(reg, "$1****$2");
};
//字母大小写切换
let caseFilter = function(str, type) {
    if (!str) return "";
    if (!type) type = "upper";
    if (type == "upper") {
        return str.toUpperCase();
    } else {
        return str.toLowerCase();
    }
}
   
export {
  dateFilter,
  moneyUpper,
  moneyFilter,
  percentFilter,
  replaceFilter,
    caseFilter,

};
