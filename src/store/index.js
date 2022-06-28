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

    
})
