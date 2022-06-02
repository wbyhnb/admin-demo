<template>
  <div class="tag-button">
    <!-- {{ routePush }} -->
    <!-- <button class="custom-btn btn-1">
      <router-link to="/">首页</router-link>
    </button> -->
    <div class="" v-for="(item, index) in tagList" :key="index">
      <div class="links">
        <div class="links-push">
          <router-link :to="item.path" :style="{ display: 'block' }">
            {{ item.title }}</router-link
          >
        </div>
        <div
          class="links-del"
          v-if="item.path != '/'"
          @click="removeTags(item)"
        >
          <icon-svg icon-class="shanchu" class="icons" />
          <!-- <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-shanchu"></use>
          </svg> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tagList: [{ path: "/", title: "首页" }],
      tagNames: ["/home"]
    };
  },
  created() {
    if (this.$route.path != "/home") {
      this.tagList.push(this.routePush);
      this.tagNames.push(this.$route.path);
    }
  },
  methods: {
    removeTags(row) {
      if (this.tagList.length == 2) {
        this.tagList.splice(this.tagList.indexOf(row), 1);
        this.tagNames.splice(this.tagNames.indexOf(row.path), 1);
        this.$router.push("/home");
      } else {
        this.tagList.splice(this.tagList.indexOf(row), 1);
        this.tagNames.splice(this.tagNames.indexOf(row.path), 1);
        this.$router.push(row.fill);
      }
    }
  },
  computed: {
    routePush() {
      return { path: this.$route.path, title: this.$route.meta.title };
    }
  },
  watch: {
    $route(to, from) {
      if (to.path != "/home") {
        console.log(to.path);
        if (!this.tagNames.includes(`${to.path}`)) {
          this.tagNames.push(to.path);
          this.tagList.push({
            path: to.path,
            title: to.meta.title,
            fill: from.fullPath
          });
        } else return false;
        console.log(this.tagNames);
        console.log(this.tagList);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.tag-button {
  display: flex;
}
.links {
  // width: 100px;
  height: 30px;
  padding: 0 10px;
  line-height: 30px;
  text-align: center;
  cursor: pointer;
  display: flex;
  transition: all 0.5s ease;
  .links-push {
    flex: 1;
  }
  .links-del {
    width: 0px;
    display: none;
    .icons {
      font-size: 20px;
      padding-top: 5px;
    }
  }
}
.links:hover {
  box-shadow: 4px 4px 5px 0px rgba(0, 0, 0, 0.3);
  a {
    color: red;
  }
  .links-del {
    color: red;
    display: block;
    width: 20px;
    .icons {
      color: red;
    }
  }
}
</style>
