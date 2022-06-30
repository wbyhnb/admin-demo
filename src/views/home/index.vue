<template>
  <div class="home">
    <!-- <div class="border back" :style="`background:${color}`" @click="getRandomColor"></div> -->
    <!-- <div class=""></div> <div class="border" :style="`color:${color}`">123456</div> -->
    <el-row :gutter="20">
      <el-col :span="18">
        <el-row :gutter="20">
          <el-col :span="8">
            <el-card>
              <el-row :gutter="20">
                <el-col :span="12">
                  <div class="user-img">
                    <el-avatar
                      shape="square"
                      :size="100"
                      fit="fill"
                      :src="userInfo.avatar"
                    ></el-avatar>
                  </div>
                </el-col>
                <el-col :span="12"
                  ><div class="user-info">
                    <text-over :text="'欢迎回来'" /><br />
                    <text-over :text="userInfo.name" /><br />
                    <text-over :text="userInfo.rolename" /><br /></div
                ></el-col>
                <el-col :span="24">
                  <el-divider content-position="left">┗|｀O′|┛ 嗷~~</el-divider>
                </el-col>
                <el-col :span="24"> 登录ip：{{ ipconfig.ip }} </el-col>
                <el-col :span="24"> 登录地点：{{ ipconfig.province }} </el-col>
              </el-row>
            </el-card>
          </el-col>
          <el-col :span="16">
            <el-card class="box-card">
              系统消息
              <el-divider content-position="left">o_o ....</el-divider>
              <div class="topmsg">
                <div :span="6" class="mag1 box" @click="highlight('访问数量')">
                  <div class="text">访问数量</div>
                  <div class="num">
                    <icon-svg icon-class="fangwenliang" class="icons" />
                    320
                  </div>
                </div>
                <div :span="6" class="mag2 box" @click="highlight('用户数量')">
                  <div class="text">用户数量</div>
                  <div class="num">
                    <icon-svg icon-class="yonghu" class="icons" />
                    390
                  </div>
                </div>
                <div :span="6" class="mag3 box" @click="highlight('代办事项')">
                  <div class="text">代办事项</div>
                  <div class="num">
                    <icon-svg icon-class="daibanshixiang" class="icons" /> 320
                  </div>
                </div>
                <div :span="6" class="mag4 box" @click="highlight('推广数量')">
                  <div class="text">推广数量</div>
                  <div class="num">
                    <icon-svg icon-class="huodongtuiguang" class="icons" /> 320
                  </div>
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>
        <el-row :gutter="20" :style="{ marginTop: '20px' }">
          <el-col :span="24">
            <el-card>
              <Charts ref="charts" />
            </el-card>
          </el-col>
        </el-row>
        <el-row :gutter="20" :style="{ marginTop: '20px' }">
          <el-col :span="16">
            <el-card>
              <div class="head">
                <div class="head-text">每日一笑</div>
                <div class="head-but" @click="getJoke">换一个</div>
              </div>
              <el-divider content-position="left">(＠_＠;).</el-divider>
              <div class="joke-box">
                <div v-for="(item, index) in jokeList" :key="index">
                  <div class="joke-text">
                    &emsp;&emsp;{{ index + 1 }}.{{ item.content }}
                  </div>
                </div>
              </div>
            </el-card>
          </el-col>
          <el-col :span="8">
            <el-card class="hall">
              <div class="hall-tag">
                <div class="tags" v-for="item in items" :key="item.label">
                  <el-tag effect="dark" :type="item.type">
                    {{ item.label }}
                  </el-tag>
                </div>
              </div>
            </el-card>
          </el-col>
          <el-col :span="8">
            <el-card class="box-card">
              项目配置
              <el-divider content-position="left">༼ つ ◕_◕ ༽つ</el-divider>
              <el-row>
                <el-col :span="4">HTML:</el-col>
                <el-col :span="20"
                  ><el-progress :percentage="50"></el-progress
                ></el-col>
              </el-row>
              <el-row>
                <el-col :span="4">CSS:</el-col>
                <el-col :span="20"
                  ><el-progress :percentage="100"></el-progress
                ></el-col>
              </el-row>
              <el-row>
                <el-col :span="4">JS:</el-col>
                <el-col :span="20"
                  ><el-progress :percentage="60" status="success"></el-progress
                ></el-col>
              </el-row>
              <el-row>
                <el-col :span="4">ECHARTS:</el-col>
                <el-col :span="20"
                  ><el-progress :percentage="40" status="warning"></el-progress
                ></el-col>
              </el-row>
              <el-row>
                <el-col :span="4">VUE:</el-col>
                <el-col :span="20"
                  ><el-progress
                    :percentage="90"
                    status="exception"
                  ></el-progress
                ></el-col>
              </el-row>
            </el-card>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="6">
        <el-card>
          <el-row :gutter="20">
            <el-col :span="8">
              <div class="weather">
                湿度<el-divider direction="vertical"></el-divider
                >{{ dayWeather.humidity }}<br />
                温度<el-divider direction="vertical"></el-divider
                >{{ dayWeather.temp }}<br />
                天气<el-divider direction="vertical"></el-divider
                >{{ dayWeather.weather }}<br />
                风向<el-divider direction="vertical"></el-divider
                >{{ dayWeather.windDirection }}<br />
                风力<el-divider direction="vertical"></el-divider
                >{{ dayWeather.windPower }}
              </div>
            </el-col>
            <el-col :span="16"
              ><div
                class="times"
                :style="{ color: this.color }"
                @click="getRandomColor"
              >
                {{ time }}
              </div>
              <div class="years" :style="{ color: this.color }">
                {{ year }}<el-divider direction="vertical"></el-divider
                >{{ dayInfo.yearTips }}
                <el-divider direction="vertical"></el-divider
                >{{ dayInfo.chineseZodiac }}年<br />
                农历<el-divider direction="vertical"></el-divider
                >{{ dayInfo.lunarCalendar
                }}<el-divider direction="vertical"></el-divider
                >{{ dayInfo.solarTerms }}<br />
                今日<el-divider direction="vertical"></el-divider
                >{{ dayInfo.typeDes
                }}<el-divider direction="vertical"></el-divider>星座<el-divider
                  direction="vertical"
                ></el-divider
                >{{ dayInfo.constellation }}<br />
              </div>
            </el-col>
            <el-col :span="24">
              <el-tag type="success" effect="dark">宜</el-tag
              ><span class="span1">{{ dayInfo.suit }}</span>
            </el-col>
            <el-col :span="24"
              ><el-tag type="danger" effect="dark">忌</el-tag
              ><span class="span2">{{ dayInfo.avoid }}</span>
            </el-col>
          </el-row>
        </el-card>
        <el-card>
          <div class="gusi">
            <div class="head">
              <div class="head-text">吾日三省</div>
              <div class="head-but" @click="getGusi">换一个</div>
            </div>
            <el-divider content-position="left">O｡o...</el-divider>
            <div class="gs-title" :style="{ color: this.color }">
              {{ poetry.content }}
            </div>
            <div class="gs-zz">{{ poetry.title }}--{{ poetry.author }}</div>
          </div>
        </el-card>
        <el-card>
          <div class="gusi">
            <div class="gs-title" :style="{ color: this.color }">
              {{ lizhi }}
            </div>
          </div>
        </el-card>
        <el-card>
          <div class="gusi">
            <div class="gs-title" :style="{ color: this.color }">
              {{ dujitang }}
            </div>
          </div>
        </el-card>
        <el-card>
          <ItemCharts />
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
var moment = require("moment");
let icnow = new Date(); // 初始化时间
let interval; // 定义全局定时器，用于清除定时器
import * as api from "@/api/home.js";
export default {
  name: "home",
  data() {
    return {
      color: "",
      ipconfig: {
        province: "",
      },
      jokeList: [],
      time: icnow.toTimeString().substring(0, 8),
      year: icnow.getFullYear(),
      month: icnow.getMonth() + 1,
      date: icnow.getDate(),
      yearday: moment().format("YYYYMMDD"),
      dayInfo: {},
      poetry: {},
      dayWeather: {},
      lizhi: "",
      dujitang: "",
      items: [
        { type: "", label: "VUE" },
        { type: "success", label: "HTML" },
        { type: "info", label: "JAVASCRIPT" },
        { type: "danger", label: "CSS" },
        { type: "warning", label: "ECHARTS" },
      ],
    };
  },
  created() {
    this.getJoke();
    this.getIp();
    this.getRandomColor();
    this.getTime();
    this.getData();
    this.getGusi();
  },
  mounted() {},
  components: {
    Charts: () => import("./components/charts.vue"),
    ItemCharts: () => import("./components/item.vue"),
  },
  computed: {
    userInfo() {
      return this.$store.state.user.userInfo;
    },
  },
  methods: {
    highlight(name) {
      this.$refs.charts.heightChart(name);
    },
    //获取天气
    getWeather() {
      console.log(this.ipconfig.province);
      api.getWeather(this.ipconfig.province).then((res) => {
        this.dayWeather = res.data.data;
      });
    },
    //获取古诗词
    async getGusi() {
      await api.getPoetry().then((res) => {
        this.poetry = res.data.data;
      });
      //获取励志
      await api.getLizhi().then((res) => {
        this.lizhi = res.data.data;
      });
      //毒鸡汤
      await api.getDjt().then((res) => {
        this.dujitang = res.data.data;
      });
    },
    //获取时间
    getTime() {
      interval = setInterval(() => {
        let icnow = new Date();
        this.time = icnow.toTimeString().substring(0, 8);
      }, 1000);
    },
    //获取笑话
    getJoke() {
      api.getJoke().then((res) => {
        this.jokeList = res.data.data;
        this.jokeList = this.jokeList;
      });
    },
    //获取今日信息
    getData() {
      api.getData(this.yearday).then((res) => {
        this.dayInfo = res.data.data;
      });
    },
    getIp() {
      api.getIp().then((res) => {
        this.ipconfig = res.data.data;
        this.getWeather();
      });
    },
    getRandomColor() {
      var str = "#";
      var arr = [
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
      ];
      for (var i = 0; i < 6; i++) {
        var num = parseInt(Math.random() * 16);
        str += arr[num];
      }
      this.color = str;
    },
  },
  beforeDestroy() {
    clearInterval(interval);
  },
};
</script>

<style lang="scss" scoped>
@import "@/style/dynamic.scss";
.home {
  .user-info {
    height: 100%;
    font-weight: 700;
    font-size: 23px;
  }
  .topmsg {
    display: flex;
    justify-content: space-between;
    .box {
      border-radius: 5px;
      width: 23%;
      cursor: pointer;
      box-sizing: border-box;

      padding: 15px;
      font-weight: 700;
      color: #ffffff;
      .text {
        text-align: center;
        font-size: 20px;
        font-family: KaiTi;
      }
      .num {
        padding: 20px 0;
        text-align: center;
        font-size: 30px;
        font-family: KaiTi;
        .icons {
          font-size: 50px;
        }
      }
    }
    .box:hover {
      animation: vibrate-1 0.3s linear infinite both;
    }
    @keyframes vibrate-1 {
      0% {
        -webkit-transform: translate(0);
        transform: translate(0);
      }
      20% {
        -webkit-transform: translate(-2px, 2px);
        transform: translate(-2px, 2px);
      }
      40% {
        -webkit-transform: translate(-2px, -2px);
        transform: translate(-2px, -2px);
      }
      60% {
        -webkit-transform: translate(2px, 2px);
        transform: translate(2px, 2px);
      }
      80% {
        -webkit-transform: translate(2px, -2px);
        transform: translate(2px, -2px);
      }
      100% {
        -webkit-transform: translate(0);
        transform: translate(0);
      }
    }

    .mag1 {
      height: 126px;
      background-color: #ed2c2c;
      opacity: 0.8;
    }
    .mag1:hover {
      background: #ffffff;
      border: 3px solid #4bb300;
      color: #4bb300;
    }
    .mag2 {
      height: 126px;
      background-color: #5470c6;
    }
    .mag2:hover {
      background: #ffffff;
      border: 3px solid #7a7374;
      color: #7a7374;
    }
    .mag3 {
      height: 126px;
      background-color: #91cc75;
    }
    .mag3:hover {
      background: #ffffff;
      border: 3px solid #ec2d7a;
      color: #ec2d7a;
    }
    .mag4 {
      height: 126px;
      background-color: #fac858;
    }
    .mag4:hover {
      background: #ffffff;
      border: 3px solid #93b5cf;
      color: #93b5cf;
    }
  }
  .joke-text {
    font-size: 15px;
    line-height: 25px;
  }
  .joke-box {
    height: 150px;
    overflow-y: scroll;
  }
  .joke-box::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }
  .joke-box::-webkit-scrollbar-thumb {
    background: $leftColor;
    border-radius: 5px;
  }
  .head {
    display: flex;
    justify-content: space-between;
    .head-but {
      font-size: 15px;
      cursor: pointer;
      font-weight: 700;
    }
    .head-but:hover {
      color: #c04851;
    }
  }
  .hall {
    height: 74px;

    .hall-tag {
      display: flex;
      margin-right: 20px;
      overflow-x: scroll;
      // margin-bottom: 25px;
      .tags {
        margin-right: 20px;
        cursor: pointer;
      }
    }
    .hall-tag::-webkit-scrollbar {
      width: 8px;
      height: 8px;
    }
    .hall-tag::-webkit-scrollbar-thumb:hover {
      display: block;
    }
    .hall-tag::-webkit-scrollbar-thumb {
      display: none;
      background: $leftColor;
      border-radius: 5px;
    }
  }
  .times {
    font-size: 30px;
    cursor: pointer;
    user-select: none;
    font-family: NSimSun;
    text-align: right;
    animation: times-text 0.8s cubic-bezier(0.215, 0.61, 0.355, 1) both;
  }
  @keyframes times-text {
    0% {
      letter-spacing: -0.5em;
      -webkit-transform: translateZ(-700px);
      transform: translateZ(-700px);
      opacity: 0;
    }
    40% {
      opacity: 0.6;
    }
    100% {
      -webkit-transform: translateZ(0);
      transform: translateZ(0);
      opacity: 1;
    }
  }
  .years {
    text-align: right;
    font-size: 16px;
    font-weight: 700;
    font-family: LiSu;
  }
  .span1 {
    font-size: 14px;
    margin-left: 15px;
    color: #67c23a;
    font-weight: 700;
    font-family: LiSu;
  }
  .span2 {
    font-size: 14px;
    color: #f56c6c;
    margin-left: 15px;
    font-weight: 700;
    font-family: LiSu;
  }
  .gusi {
    .gs-title {
      font-size: 20px;
      font-weight: 700;

      font-family: KaiTi;
    }
    .gs-zz {
      font-size: 14px;
      font-weight: 700;
      font-family: KaiTi;
      margin-top: 5px;
      text-align: right;
    }
  }
  .weather {
    font-size: 12px;
    font-weight: 700;
    font-family: MingLiU;
  }
}
.back {
  width: 50px;
  height: 50px;
}
.border {
  position: relative;
}
.back {
  overflow: hidden;
}
.back:before,
.back::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  background: rgb(232, 5, 5);
  transition: all 0.3s ease;
  animation: bdtop 4s linear infinite;
}
@-webkit-keyframes bdtop {
  0% {
    height: 10px;
    width: 0;
  }
  100% {
    height: 10px;
    width: 100%;
  }
}
.back:hover {
  transition: all 0.3s ease;
  animation: bdlast 1s linear infinite;
  /* border: 1px solid #000; */
}
@-webkit-keyframes bdlast {
  0% {
    transform: rotate(0deg);
  }
  40% {
    /* border-left: 1px solid #000; */
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
