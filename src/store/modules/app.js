const state = {
  userName: '',
  enterPrise: [
    { coreName: '万钧文化', userName: '万钧文化用户一', index: 1 },
    { coreName: '神州租车', userName: '神州租车用户一', index: 2 },
    { coreName: '西斯特科技', userName: '西斯特科技用户一', index: 3 }
  ],
  currentEnterPrise: {},
  //是否登录
  isLogin: false,
}
const mutations = {
  SET_USER_NAME(state, name) {
    state.userName = name
  },
  SET_CURRENT_ENTERPRISE(state,val) {
    state.currentEnterPrise = val;
  },
  SET_IS_LOGIN(state,val) {
    state.isLogin = val;
  }
}
const actions = {
  // 设置name
  setUserName({ commit }, name) {
    commit('SET_USER_NAME', name)
  },
  setCurrentEnterPrise({commit},val) {
    commit('SET_CURRENT_ENTERPRISE',val);
  },
  setIsLogin({commit},val) {
    commit('SET_IS_LOGIN',val);
  }
}
export default {
  namespaced:true,
  state,
  mutations,
  actions
}
