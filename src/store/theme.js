
export default {
  state: {
    //获取本地存储的主题
    themeColor: "#f56c6c",
    leftMenu: true,
    tagView: true,
  },
  mutations: {
    SET_THEME(state, theme) {
      state.themeColor = theme;
    },
    SET_LEFTMENU(state, leftMenu) {
      state.leftMenu = leftMenu;
    },
    SET_TAGVIEW(state, tagView) {
      state.tagView = tagView;
    }

  },
  actions: {
    setTheme({ commit }, theme) {
      commit("SET_THEME", theme);
    },
    setLeftMenu({ commit }, leftMenu) {
      commit("SET_LEFTMENU", leftMenu);
    },
    setTagView({ commit }, tagView) {
      commit("SET_TAGVIEW", tagView);
    }
  },
  getters: {
    themeColor: state => state.themeColor,
    leftMenu: state => state.leftMenu,
    tagView: state => state.tagView
  },

};
