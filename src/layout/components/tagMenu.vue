<template>
  <div class="tag-button">
    <div class="" v-for="(item, index) in tagList" :key="index">
      <div :class="item.path != routePush.path ? 'links' : 'links active'" @contextmenu.prevent="flushedChild">
        <div class="links-push">
          <router-link :to="item.path" :style="{ display: 'block' }">
            {{ item.title }}</router-link
          >
        </div>
        <div
          class="links-del"
          v-if="item.path != '/home'"
          @click="removeTags(item)"
        >
          <icon-svg icon-class="shanchu" class="icons" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tagList: [{ path: "/home", title: "首页" }],
      tagNames: ["/home"],
      fillNames: ["/home"],
    };
  },
  created() {
    if (this.$route.path != "/home") {
      this.tagList.push(this.routePush);
      this.tagNames.push(this.$route.path);
    }
  },
  methods: {
    flushedChild(){
      this.$emit("flushedChild");
    },
    removeTags(row) {
      if (this.tagList.length == 2) {
        this.tagList.splice(this.tagList.indexOf(row), 1);
        this.tagNames.splice(this.tagNames.indexOf(row.path), 1);
        this.fillNames.splice(this.fillNames.indexOf(row.fill), 1);
        this.$router.push("/home");
      } else {
        this.tagList.splice(this.tagList.indexOf(row), 1);
        this.tagNames.splice(this.tagNames.indexOf(row.path), 1);
        this.fillNames.splice(this.fillNames.indexOf(), 1);
        if (!this.fillNames.includes(row.fill)) {
          this.$router.push(row.fill);
        } else {
          this.$router.push(this.tagNames[this.tagNames.length - 1]);
        }
      }
    },
  },
  computed: {
    routePush() {
      return { path: this.$route.path, title: this.$route.meta.title };
    },
  },
  watch: {
    $route(to, from) {
      if (to.path != "/home") {
        if (!this.fillNames.includes(`${from.fullPath}`)) {
          this.fillNames.push(from.fullPath);
        }
        if (!this.tagNames.includes(`${to.path}`)) {
          this.tagNames.push(to.path);

          this.tagList.push({
            path: to.path,
            title: to.meta.title,
            fill: from.fullPath,
          });
        } else return false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.tag-button {
  display: flex;
  padding: 0 15px;
  margin-bottom: 20px;
}
.links {
  border-radius: 5px;
  font-size: 12px;
  font-family: NSimSun;
  margin-right: 14px;
  font-weight: 600;
  // width: 100px;
  height: 30px;
  background-color: #4dccc6;
  background-image: linear-gradient(315deg, #4dccc6 0%, #96e4df 74%);
  padding: 0 10px;
  line-height: 30px;
  text-align: center;
  cursor: pointer;
  display: flex;
  transition: all 0.5s ease;
  .links-push {
    flex: 1;
    a {
      color: #ffffff;
    }
  }
  .links-del {
    width: 0px;
    display: none;
    animation: slide-in-blurred-right 0.3s cubic-bezier(0.23, 1, 0.32, 1) both;
    .icons {
      font-size: 20px;
      padding-top: 5px;
    }
  }
  @keyframes slide-in-blurred-right {
    0% {
      -webkit-transform: translateX(1000px) scaleX(2.5) scaleY(0.2);
      transform: translateX(1000px) scaleX(2.5) scaleY(0.2);
      -webkit-transform-origin: 0% 50%;
      transform-origin: 0% 50%;
      -webkit-filter: blur(40px);
      filter: blur(40px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateX(0) scaleY(1) scaleX(1);
      transform: translateX(0) scaleY(1) scaleX(1);
      -webkit-transform-origin: 50% 50%;
      transform-origin: 50% 50%;
      -webkit-filter: blur(0);
      filter: blur(0);
      opacity: 1;
    }
  }
}
.links:hover {
  box-shadow: 4px 4px 5px 0px rgba(0, 0, 0, 0.3);
  a {
    color: #ffffff;
  }
  .links-del {
    color: #ffffff;
    display: block;
    width: 20px;
    .icons {
      color: #ffffff;
    }
  }
}
.active {
  box-shadow: 4px 4px 5px 0px rgba(0, 0, 0, 0.3);
  a {
    color: #ffffff;
  }
  .links-del {
    color: #ffffff;
    display: block;
    width: 20px;
    .icons {
      color: #ffffff;
    }
  }
}
</style>
