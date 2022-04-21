const state = {
  userName: '',
  enterPrise: [
    { name: '万钧文化', userName: '万钧文化用户一', index: 1 },
    { name: '神州租车', userName: '神州租车用户一', index: 2 },
    { name: '西斯特科技', userName: '西斯特科技用户一', index: 3 }
  ],
  coreName: '',
  usersName: '',
  isSignIn: ''
}
const mutations = {
  SET_USER_NAME(state, name) {
    state.userName = name
  }
}
const actions = {
  // 设置name
  setUserName({ commit }, name) {
    commit('SET_USER_NAME', name)
  }
}
export default {
  state,
  mutations,
  actions
}
