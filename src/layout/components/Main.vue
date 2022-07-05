<template>
  <div class="main-box">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  components: {}
};
</script>

<style lang="scss" scoped>
@import "@/style/dynamic.scss";
.main-box {
  overflow-x: hidden;
  // width: 100%;
  height: calc(100vh - $mainHeight) ;
  // padding-top: 20px;
  box-sizing: border-box;
  // overflow: scroll;
  // margin-right: -17px;
  padding: 20px;
  // margin-left: 20px;
  // margin-right: -17px;
  border-radius: 5px;
  box-sizing: border-box;
  box-shadow: 0px 0px 15px rgba(133, 133, 133, 0.5);
}
.main-box::-webkit-scrollbar {
  width: 3px;
}
</style>
