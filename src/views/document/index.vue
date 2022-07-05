<template>
  <div class="document">
    <h1>项目文档</h1>
    <el-divider></el-divider>
    <h3>项目介绍：WEIONE后台管理系统，基于VUE2和ELEMENT-UI搭建</h3>
    <h3>技术栈：</h3>
    <p>
      <el-link href="https://cn.vuejs.org" target="_blank">VUE2:</el-link
      ><span
        >Vue (读音 /vjuː/，类似于 view)
        是一套用于构建用户界面的渐进式框架。与其它大型框架不同的是，Vue
        被设计为可以自底向上逐层应用。Vue
        的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。另一方面，当与现代化的工具链以及各种支持类库结合使用时，Vue
        也完全能够为复杂的单页应用提供驱动。</span
      >
    </p>

    <p>
      <el-link href="https://element.eleme.cn" target="_blank"
        >ELEMENT-UI:</el-link
      ><span
        >一套为开发者、设计师和产品经理准备的基于 Vue 2.0 的桌面端组件库</span
      >
    </p>

    <p>
      <el-link href="https://router.vuejs.org/zh" target="_blank"
        >VUE-ROUTER:</el-link
      ><span
        >Vue Router 是 Vue.js 的官方路由。它与 Vue.js 核心深度集成，让用 Vue.js
        构建单页应用变得轻而易举。</span
      >
    </p>

    <p>
      <el-link href="https://vuex.vuejs.org/zh/guide/" target="_blank"
        >VUEX:</el-link
      ><span
        >Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式 +
        库。它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。</span
      >
    </p>

    <p>
      <el-link href="https://www.npmjs.com/package/vue-cli" target="_blank"
        >VUE-CLI:</el-link
      ><span
        >Vue CLI 是一个用于创建 Vue
        应用的工具。它可以让你更加精确地控制用户界面的展示和更改。</span
      >
    </p>

    <p>
      <el-link href="https://www.npmjs.com/package/vue-loader" target="_blank"
        >VUE-LOADER:</el-link
      ><span
        >Vue Loader 是一个用于加载 Vue
        组件的插件。它可以让你更加精确地控制用户界面的展示和更改。</span
      >
    </p>
    <!-- //axios -->
    <p>
      <el-link href="https://www.axios-http.cn/" target="_blank">axios:</el-link
      ><span
        >Axios 是一个基于 promise 网络请求库，作用于node.js 和浏览器中。 它是
        isomorphic
        的(即同一套代码可以运行在浏览器和node.js中)。在服务端它使用原生 node.js
        http 模块, 而在客户端 (浏览端) 则使用 XMLHttpRequests</span
      >
    </p>

    <!-- mock -->
    <p>
      <el-link href="http://mockjs.com/" target="_blank">mockjs:</el-link
      ><span
        >mockjs
        是一个基于Promise的模拟数据生成器。它可以让你写出最简单易懂的代码，而且不用写任何
        HTTP 库。</span
      >
    </p>
    <!-- webpack  -->
    <p>
      <el-link href="https://www.webpackjs.com/concepts/" target="_blank"
        >webpack:</el-link
      ><span
        >本质上，webpack 是一个现代 JavaScript 应用程序的静态模块打包器(module
        bundler)。当 webpack
        处理应用程序时，它会递归地构建一个依赖关系图(dependency
        graph)，其中包含应用程序需要的每个模块，然后将所有这些模块打包成一个或多个
        bundle</span
      >
    </p>
    <!-- echarts -->
    <p>
      <el-link href="https://echarts.apache.org/zh/" target="_blank"
        >echarts:</el-link
      ><span
        >ECharts 是一个纯 JavaScript 和 HTML5 的图表库，它提供了一系列可定制的
        组件，帮助你生成高质量的数据图表。</span
      >
    </p>
    <!-- moment -->
    <p>
      <el-link href="https://momentjs.com/" target="_blank"
        >moment:</el-link
      ><span
        >Moment.js 是一个时间处理库，可以轻松地处理时间，并且提供了一些有用的方法。</span
      >
    </p>
    <!-- sass -->
    <p>
      <el-link href="https://www.sass-lang.com/" target="_blank"
        >sass:</el-link
      ><span
        >Sass 是一个用于创建 CSS 的语言。它的目标是让 CSS 更易于维护和组织。</span
      >
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style scoped>
span {
  color: #000;
  display: inline-block;
  font-weight: 700;
  font-family: KaiTi;
  font-size: 16px;
}
a {
  display: inline-block;
  color: #000;
  font-weight: 700;
  font-size: 18px;
}
p {
  line-height: 22px;
  margin-bottom: 15px;
}
</style>
