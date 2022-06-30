
export default {
  state: {
    //获取本地存储的主题
    themeColor: sessionStorage.getItem("theme") || "#f56c6c",
    leftMenu: sessionStorage.getItem("leftMenu") || true,
  },
  mutations: {
    SET_THEME(state, theme) {
      state.themeColor = theme;
    },
    SET_LEFTMENU(state, leftMenu) {
      state.leftMenu = leftMenu;
    }
  },
  actions: {
    setTheme({ commit }, theme) {
      commit("SET_THEME", theme);
    },
    setLeftMenu({ commit }, leftMenu) {
      commit("SET_LEFTMENU", leftMenu);
    }
  },
  getters: {
    themeColor: state => state.theme,
    leftMenu: state => state.leftMenu
  },

};
