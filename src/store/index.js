import Vue from 'vue'
import Vuex from 'vuex'
import tab from './tab'
import user from './user'
import createPersistedState from "vuex-persistedstate";
import theme from '@/store/theme.js';
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    tab,user,theme
  },
     // 数据的持久化处理
  plugins: [
    createPersistedState({
      // 存储方式：localStorage、sessionStorage、cookies
      // storage: window.cookie, //存储到cookie
      storage:window.sessionStorage,// 存储到sessionStorage
      // 如果不写默认存储到localStorage
      // 存储的 key 的key值
      key: "store",
      //方法1:render
      render(state) {
        // 要存储的数据：本项目采用es6扩展运算符的方式存储了state中所有的数据
        return { ...state };
        //需要存储其中的某些数据的话需要单独取出来
        // return {
        //只储存state中的assessmentData
        //assessmentData: val.assessmentData
        // }
      },
      // 方法2：用paths,数组里面填模块名，存储指定模块
      paths: ['theme']
    })
  ]
})
