// 定义樱花, idx 是修改添加的
export const Sakura = function(x, y, s, r, fn, idx) {
    this.x = x;
    this.y = y;
    this.s = s;
    this.r = r;
    this.fn = fn;
    this.idx = idx;
  };
  
  export const SakuraList = function() {
    this.list = [];
  };
  