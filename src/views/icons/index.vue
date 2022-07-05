<template>
  <div class="">
    <el-tabs type="border-card">
      <el-tab-pane label="iconfont">
        <div class="search-box">
          <el-input
            class="search"
            size="large"
            v-model="keywords"
            clearable
            placeholder="请输入图标名称"
          ></el-input>
        </div>
        <ul>
          <li class="icon-li" v-for="(item, index) in lists" :key="index">
            <div class="icon-li-content">
              <icon-svg :icon-class="item" class="svg" />
              <span>{{ item }}</span>
            </div>
          </li>
        </ul>
      </el-tab-pane>
      <el-tab-pane label="element-ui">
        <div class="search-box">
          <el-input
            class="search"
            size="large"
            v-model="keyword"
            clearable
            placeholder="请输入图标名称"
          ></el-input>
        </div>
        <ul>
          <li class="icon-li" v-for="(item, index) in list" :key="index">
            <div class="icon-li-content">
              <i :class="`el-icon-${item}`"></i>
              <span>{{ item }}</span>
            </div>
          </li>
        </ul>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      iconfontList: [
        "markdown1",
        "markdown",
        "github-fill",
        "a-Chevron-Right2",
        "BaiDu",
        "sousuo1",
        "sousuo",
        "CheckMark",
        "Chevron-Right",
        "Clock",
        "Eye",
        "CloseDefault",
        "Download",
        "Money",
        "More",
        "Plus",
        "EyeInvisible",
        "Redo",
        "Resizer",
        "Plus-Rectangle",
        "Upload",
        "Search-20",
        "Moon-Star",
        "Sun",
        "Chevron-Left",
        "ArrowRight",
        "Arrow-down",
        "Calendar",
        "Check",
        "Arrow-up",
        "a-Chevron-Left2",
        "Chevron-down",
        "Chevron-up",
        "shanchu1",
        "xinzeng1",
        "xinzeng2",
        "jiazai2",
        "shanchutianchong",
        "xinzeng",
        "jiazai",
        "jiazai1",
        "zhankai",
        "shezhi",
        "31shezhi",
        "tubiao",
        "shouye-shouye",
        "wendang",
        "zujian",
        "tuichuquanping",
        "quanpingmu",
        "fuwenben",
        "huodongtuiguang",
        "daibanshixiang",
        "yonghu",
        "fangwenliang",
        "shanchu",
        "xiazaizhong",
        "shuazi",
        "jinzhichakan",
        "chakan",
        "dianhua",
        "huitui",
        "zhaopianjiazaishibai",
        "jingshi",
        "daohang",
        "daohang",
        "yonghu1",
        "zuoxiangshuangjiantou",
        "xuanzeqi",
        "yun",
        "xiangshangjiantou",
        "zhexiantu",
        "IP",
        "zuoshangjiantou",
        "zuojiantou",
        "zhaopianbeifen",
        "yunjinyong",
        "zan",
        "yuyin",
        "youshangjiantou",
        "zhaopian",
        "youjian",
        "youxiangshuangjiantou",
        "youzhengbianma",
        "youjiantou",
        "yuyan",
        "xiazai2",
        "yuechi",
        "wenhao",
        "yinhangka",
        "yanjing",
        "wenjian",
        "xiajiantou",
        "wenzijianju",
        "wenjianjia",
        "xiangxiajiantou",
        "xingbie",
        "caidan",
        "tuichu",
        "xiazai",
        "tuichuquanping1",
        "wenbenhuanhang",
        "shubiao",
        "wenbenwenjian",
        "shouye",
        "shuaxin",
        "suoxiao",
        "shoucang",
        "wangzhan",
        "tianjia",
        "shezhi1",
        "shouji",
        "sousuo2",
        "shangchuan",
        "quxiaolianjie",
        "shenfenzheng",
        "quill-pen-line",
        "input1",
        "biaoge1",
        "biaoge",
        "quill-pen-fill",
        "input",
        "aliwangwang-fill",
        "aliwangwang"
      ],
      iconList: [
        "platform-eleme",
        "eleme",
        "delete-solid",
        "delete",
        "s-tools",
        "setting",
        "user-solid",
        "user",
        "phone",
        "phone-outline",
        "more",
        "more-outline",
        "star-on",
        "star-off",
        "s-goods",
        "goods",
        "warning",
        "warning-outline",
        "question",
        "info",
        "remove",
        "circle-plus",
        "success",
        "error",
        "zoom-in",
        "zoom-out",
        "remove-outline",
        "circle-plus-outline",
        "circle-check",
        "circle-close",
        "s-help",
        "help",
        "minus",
        "plus",
        "check",
        "close",
        "picture",
        "picture-outline",
        "picture-outline-round",
        "upload",
        "upload2",
        "download",
        "camera-solid",
        "camera",
        "video-camera-solid",
        "video-camera",
        "message-solid",
        "bell",
        "s-cooperation",
        "s-order",
        "s-platform",
        "s-fold",
        "s-unfold",
        "s-operation",
        "s-promotion",
        "s-home",
        "s-release",
        "s-ticket",
        "s-management",
        "s-open",
        "s-shop",
        "s-marketing",
        "s-flag",
        "s-comment",
        "s-finance",
        "s-claim",
        "s-custom",
        "s-opportunity",
        "s-data",
        "s-check",
        "s-grid",
        "menu",
        "share",
        "d-caret",
        "caret-left",
        "caret-right",
        "caret-bottom",
        "caret-top",
        "bottom-left",
        "bottom-right",
        "back",
        "right",
        "bottom",
        "top",
        "top-left",
        "top-right",
        "arrow-left",
        "arrow-right",
        "arrow-down",
        "arrow-up",
        "d-arrow-left",
        "d-arrow-right",
        "video-pause",
        "video-play",
        "refresh",
        "refresh-right",
        "refresh-left",
        "finished",
        "sort",
        "sort-up",
        "sort-down",
        "rank",
        "loading",
        "view",
        "c-scale-to-original",
        "date",
        "edit",
        "edit-outline",
        "folder",
        "folder-opened",
        "folder-add",
        "folder-remove",
        "folder-delete",
        "folder-checked",
        "tickets",
        "document-remove",
        "document-delete",
        "document-copy",
        "document-checked",
        "document",
        "document-add",
        "printer",
        "paperclip",
        "takeaway-box",
        "search",
        "monitor",
        "attract",
        "mobile",
        "scissors",
        "umbrella",
        "headset",
        "brush",
        "mouse",
        "coordinate",
        "magic-stick",
        "reading",
        "data-line",
        "data-board",
        "pie-chart",
        "data-analysis",
        "collection-tag",
        "film",
        "suitcase",
        "suitcase-1",
        "receiving",
        "collection",
        "files",
        "notebook-1",
        "notebook-2",
        "toilet-paper",
        "office-building",
        "school",
        "table-lamp",
        "house",
        "no-smoking",
        "smoking",
        "shopping-cart-full",
        "shopping-cart-1",
        "shopping-cart-2",
        "shopping-bag-1",
        "shopping-bag-2",
        "sold-out",
        "sell",
        "present",
        "box",
        "bank-card",
        "money",
        "coin",
        "wallet",
        "discount",
        "price-tag",
        "news",
        "guide",
        "male",
        "female",
        "thumb",
        "cpu",
        "link",
        "connection",
        "open",
        "turn-off",
        "set-up",
        "chat-round",
        "chat-line-round",
        "chat-square",
        "chat-dot-round",
        "chat-dot-square",
        "chat-line-square",
        "message",
        "postcard",
        "position",
        "turn-off-microphone",
        "microphone",
        "close-notification",
        "bangzhu",
        "time",
        "odometer",
        "crop",
        "aim",
        "switch-button",
        "full-screen",
        "copy-document",
        "mic",
        "stopwatch",
        "medal-1",
        "medal",
        "trophy",
        "trophy-1",
        "first-aid-kit",
        "discover",
        "place",
        "location",
        "location-outline",
        "location-information",
        "add-location",
        "delete-location",
        "map-location",
        "alarm-clock",
        "timer",
        "watch-1",
        "watch",
        "lock",
        "unlock",
        "key",
        "service",
        "mobile-phone",
        "bicycle",
        "truck",
        "ship",
        "basketball",
        "football",
        "soccer",
        "baseball",
        "wind-power",
        "light-rain",
        "lightning",
        "heavy-rain",
        "sunrise",
        "sunrise-1",
        "sunset",
        "sunny",
        "cloudy",
        "partly-cloudy",
        "cloudy-and-sunny",
        "moon",
        "moon-night",
        "dish",
        "dish-1",
        "food",
        "chicken",
        "fork-spoon",
        "knife-fork",
        "burger",
        "tableware",
        "sugar",
        "dessert",
        "ice-cream",
        "hot-water",
        "water-cup",
        "coffee-cup",
        "cold-drink",
        "goblet",
        "goblet-full",
        "goblet-square",
        "goblet-square-full",
        "refrigerator",
        "grape",
        "watermelon",
        "cherry",
        "apple",
        "pear",
        "orange",
        "coffee",
        "ice-tea",
        "ice-drink",
        "milk-tea",
        "potato-strips",
        "lollipop",
        "ice-cream-square",
        "ice-cream-round"
      ],
      keyword: "",
      keywords: ""
    };
  },
  computed: {
    list() {
      return this.iconList.filter(item => {
        return item.indexOf(this.keyword) !== -1;
      });
    },
    lists() {
      return this.iconfontList.filter(item => {
        return item.indexOf(this.keywords) !== -1;
      });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/style/dynamic.scss";
.example-p {
  height: 45px;
  display: flex;
  align-items: center;
}
.search-box {
  text-align: center;
  margin-top: 10px;
  margin-bottom: 10px;
}
.search {
  width: 300px;
}
ul,
li {
  list-style: none;
}
.icon-li {
  display: inline-block;
  border: 1px solid #eee;
  padding: 10px;
  width: 120px;
  height: 120px;
}
.svg {
  font-size: 36px;
}
.icon-li:hover {
  i {
    color: $leftColor;
  }
  span {
    color: $leftColor;
  }
  .svg {
    color: $leftColor;
  }
}
.icon-li-content {
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.icon-li-content i {
  font-size: 36px;
  color: #606266;
}
.icon-li-content span {
  margin-top: 10px;
  color: #787878;
}
</style>
