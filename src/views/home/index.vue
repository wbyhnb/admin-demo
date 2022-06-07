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
          <el-col :span="14">
            <el-card class="box-card">
              <el-row :gutter="20">
                <el-col :span="8"> 系统消息</el-col>
                <el-col :span="8"> </el-col>
                <el-col :span="8"> </el-col>
                <el-col :span="8"> </el-col>
              </el-row>
            </el-card>
          </el-col> </el-row
        ><el-row :gutter="20">
          <el-col :span="8">
            <el-card class="box-card">
              <el-row>
                <el-col :span="3">html:</el-col>
                <el-col :span="21"
                  ><el-progress :percentage="50"></el-progress
                ></el-col>
                <el-col :span="3">css:</el-col>
                <el-col :span="21"
                  ><el-progress :percentage="100"></el-progress
                ></el-col>
                <el-col :span="3">js:</el-col>
                <el-col :span="21"
                  ><el-progress :percentage="60" status="success"></el-progress
                ></el-col>
                <el-col :span="3">echarts:</el-col>
                <el-col :span="21"
                  ><el-progress :percentage="40" status="warning"></el-progress
                ></el-col>
                <el-col :span="3">vue:</el-col>
                <el-col :span="21"
                  ><el-progress
                    :percentage="90"
                    status="exception"
                  ></el-progress
                ></el-col>
              </el-row>
            </el-card> </el-col
        ></el-row>
      </el-col>
      <el-col :span="6"></el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      color: "",
      ipconfig: ""
    };
  },
  mounted() {
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
