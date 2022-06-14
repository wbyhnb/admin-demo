<template>
  <div class="headers"></div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    userInfo() {
      return this.$store.state.user.userInfo;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>