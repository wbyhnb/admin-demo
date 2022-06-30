<template>
  <div id="layout">
    <div class="nav-aside" v-show="isLeftMenu"><NavMenu /></div>
    <div class="main">
      <div class="main-header">
        <Header />
      </div>
      <div class="main-button">
        <TagPush />
      </div>
      <div class="main-content">
        <Main />
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "layout",
  components: {
    NavMenu: () => import("./components/leftMenu.vue"),
    Main: () => import("./components/Main.vue"),
    TagPush: () => import("./components/tagMenu.vue"),
    Header: () => import("./components/header.vue"),
  },
  data() {
    return {
      isLeftMenu: this.$store.getters.leftMenu,
    
    };
  },
  methods: {
   
  },
  computed: {},
  created() {
    console.log(this.$store.getters.leftMenu);
  }
};
</script>

<style lang="scss" scoped>
#layout {
  display: flex;
  height: 100vh;
  width: 100%;
  .nav-aside {
    height: 100%;
    overflow: hidden;
    box-shadow: 5px 1px 5px 0px #e7e7e7;
    box-sizing: border-box;
  }
  .main {
    flex: 1;
    display: flex;
    flex-direction: column;
      box-sizing: border-box;
    overflow: hidden;
    .main-header {
      height: 50px;
      background-color: #eee;
      margin-bottom: 10px;
    }
    .main-button {
      height: 30px;
      margin-bottom: 15px;
    }
    .main-content {
      flex: 1;
      padding: 0 15px;
      // overflow: scroll;
      // margin-right: -17px;
    }
  }
}
</style>
