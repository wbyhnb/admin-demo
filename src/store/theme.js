
export default {
  state: {
    //获取本地存储的主题
    theme: sessionStorage.getItem("theme") || "f56c6c",
  },
  mutations: {
    SET_THEME(state, theme) {
      state.theme = theme;
    }
  },
  actions: {
    setTheme({ commit }, theme) {
      commit("SET_THEME", theme);
    }
  },
  getters: {
    theme: state => state.theme
  },

};
