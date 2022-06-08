<template>
  <div class="home">
    <!-- <text-over :text="'欢迎你的来到'"/>
    <but-col style="width:50px;height:50px">
      123
    </but-col> -->

    <!-- <div class="border back" :style="`background:${color}`" @click="getRandomColor"></div> -->
    <!-- <div class=""></div> <div class="border" :style="`color:${color}`">123456</div> -->
    <!-- <Times></Times> -->
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
                      src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
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
                <el-col :span="24"> 登录ip：{{ ipconfig[0] }} </el-col>
                <el-col :span="24"> 登录地点：{{ ipconfig[1] }} </el-col>
              </el-row>
            </el-card>
          </el-col>
          <el-col :span="16">
            <el-card class="box-card">
              系统消息
              <el-divider content-position="left">o_o ....</el-divider>
              <div class="topmsg">
                <div :span="6" class="mag1 box">
                  <div class="text">访问数量</div>
                  <div class="num">320</div>
                </div>
                <div :span="6" class="mag2 box">
                  <div class="text">用户数量</div>
                  <div class="num">320</div>
                </div>
                <div :span="6" class="mag3 box">
                  <div class="text">代办事项</div>
                  <div class="num">320</div>
                </div>
                <div :span="6" class="mag4 box">
                  <div class="text">推广数量</div>
                  <div class="num">320</div>
                </div>
              </div>
            </el-card>
          </el-col> </el-row
        ><el-row :gutter="20" style="marginTop:20px">
          <el-col :span="16">
            <el-card>
              每日一笑
              <el-divider content-position="left">(＠_＠;).</el-divider>
              <div class="" v-for="item,index in jokeList" :key="index">
                <div class="joke-text">&emsp;&emsp;{{index+1}}.{{item.content}}</div>
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
      <el-col :span="6"> </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      color: "",
      ipconfig: "",
      jokeList: [],
    };
  },
  mounted() {
    this.getJoke();
    this.getCusIpAdress();
  },
  components: {
    Times: () => import("./times.vue")
  },
  computed: {
    userInfo() {
      return this.$store.state.user.userInfo;
    }
  },
  methods: {
    //获取笑话
    getJoke() {
      this.$axios
        .get(
          "https://www.mxnzp.com/api/jokes/list/random?app_id=cfqvqqhvrbqqatpf&app_secret=U05NaC9FTkVVek1Rcld0NWFDMzZnUT09"
        )
        .then(res => {
          this.jokeList = res.data.data
          this.jokeList = this.jokeList.splice(7)
        });
    },
    getCusIpAdress() {
      var data;
      let xmlHttpRequest;
      if (window.ActiveXObject) {
        xmlHttpRequest = new ActiveXObject("Microsoft.XMLHTTP");
      } else if (window.XMLHttpRequest) {
        xmlHttpRequest = new XMLHttpRequest();
      }
      xmlHttpRequest.onreadystatechange = function() {
        if (xmlHttpRequest.readyState == 4) {
          if (xmlHttpRequest.status == 200) {
            data = xmlHttpRequest.responseText;
          } else {
          }
        }
      };
      xmlHttpRequest.open("get", "https://2022.ip138.com", false);
      xmlHttpRequest.send(null);
      var datalist = data.split("\n");
      var patt = [/[0-9]+.[0-9]+.[0-9]+.[0-9]+/, /来自/, []];
      for (var i in datalist) {
        if (patt[0].test(datalist[i]) && patt[1].test(datalist[i])) {
          patt[2].push(patt[0].exec(datalist[i])[0]);
          patt[2].push(datalist[i].substr(patt[1].exec(datalist[i]).index + 3));
        }
      }
      this.ipconfig = patt[2];
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
        "f"
      ];
      for (var i = 0; i < 6; i++) {
        var num = parseInt(Math.random() * 16);
        str += arr[num];
      }
      this.color = str;
      console.log(str);
    }
  }
};
</script>

<style lang="scss" scoped>
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
        text-align: right;
        line-height: 70px;
        font-size: 30px;
        font-family: KaiTi;
      }
    }
    .mag1 {
      height: 126px;
      background-color: #c04851;
    }
    .mag1:hover {
      background: #ffffff;
      border: 3px solid #c04851;
      color: #c04851;
    }
    .mag2 {
      height: 126px;
      background-color: #7a7374;
    }
    .mag2:hover {
      background: #ffffff;
      border: 3px solid #7a7374;
      color: #7a7374;
    }
    .mag3 {
      height: 126px;
      background-color: #ec2d7a;
    }
    .mag3:hover {
      background: #ffffff;
      border: 3px solid #ec2d7a;
      color: #ec2d7a;
    }
    .mag4 {
      height: 126px;
      background-color: #93b5cf;
    }
    .mag4:hover {
      background: #ffffff;
      border: 3px solid #93b5cf;
      color: #93b5cf;
    }
  }
  .joke-text{
    font-size: 15px;
    line-height: 25px;
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
