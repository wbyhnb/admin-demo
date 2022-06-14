<template>
  <div class="headers">
    <div class="icons" @click="drawerEdit = true">
      <icon-svg icon-class="31shezhi" class="svg" />
    </div>
    <but-col style="width: 40px; height: 40px">
      <el-avatar
        class="sub-title"
        shape="square"
        :size="40"
        :src="userInfo.avatar"
      ></el-avatar>
    </but-col>
    <el-drawer
    class="edit-drawer"
      :size="'25%'"
      :visible.sync="drawerEdit"
      :close-on-press-escape="true"
      :direction="direction"
      :withHeader="false"
      :modal="false"
    >
      <h1><icon-svg icon-class="31shezhi"  /> 系统设置</h1>
    </el-drawer>
  </div>
</template>

<script>
import butCol from "../../components/but-col.vue";
import IconSvg from "../../components/Icon-svg.vue";
export default {
  components: { butCol, IconSvg },
  data() {
    return {
        drawerEdit: false,
        direction: 'rtl',
    };
  },
  computed: {
    userInfo() {
      return this.$store.state.user.userInfo;
    },
  },
};
</script>

<style lang="scss" scoped>
.headers {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 100%;
  background-image: linear-gradient(
    225deg,
    #5271c4 0%,
    #b19fff 48%,
    #eca1fe 100%
  );
  padding: 0 20px;
  box-sizing: border-box;
  .icons {
    cursor: pointer;
    margin-right: 15px;
    .svg {
      font-size: 30px;
      color: #ffffff;
    }
  }
  >>>.el-drawer{
    padding: 20px;
border-radius: 4px 0 0 4px !important;
  }
}
</style>