//引入element-variables文件，文件路径根据自己项目存放位置来
import variables from '@/style/element-variables.scss'
const state = {
  theme: variables.theme,//主题色
}

const getters = {
	theme: function (state) {
		return state.theme;
	}
};

const mutations = {
  CHANGE_SETTING: (state, { key, value }) => {
    // eslint-disable-next-line no-prototype-builtins
    if (state.hasOwnProperty(key)) {
      state[key] = value
    }
  }
}

const actions = {
  changeSetting({ commit }, data) {
    commit('CHANGE_SETTING', data)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}

