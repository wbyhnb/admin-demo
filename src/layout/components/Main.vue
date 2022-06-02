<template>
  <div class="">
      <TagPush></TagPush>
      <router-view></router-view>
  </div>
</template>

<script>
export default {
  components:{
    TagPush: ()=>import('./components/tagPush.vue'),
  }

}
</script>

<style lang="scss" scoped>


</style>
