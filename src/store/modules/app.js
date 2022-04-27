import { sessionStorage } from '@/utils/storage'
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
  // 登录之后token
  token: ''
}
const mutations = {
  SET_USER_NAME(state, name) {
    state.userName = name
  },
  SET_CURRENT_ENTERPRISE(state,val) {
    sessionStorage.set('currentEnterPrise',val);
    state.currentEnterPrise = val;
  },
  SET_IS_LOGIN(state,val) {
    state.isLogin = val;
  },
  SET_TOKEN(state,val) {
    sessionStorage.set('token',val);
    state.token = val;
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
  setToken({commit},val) {
    commit('SET_TOKEN',val);
    commit('SET_IS_LOGIN',true);
  },
  clearToken({commit}) {
    commit('SET_TOKEN','');
  },
  setIsLogin({commit},val) {
    commit('SET_IS_LOGIN',val);
  }
}
const getters = {
  token:(state) => {
    if (state.token) {
      return state.token
    }else {
      const item = sessionStorage.get('token')
      return item?item:null;
    }
  },
  currentEnterPrise: (state) => {
    if (state.currentEnterPrise) {
      return state.currentEnterPrise
    }else {
      const item = sessionStorage.get('currentEnterPrise')
      return item?item:null;
    }
  }
}
export default {
  namespaced:true,
  state,
  mutations,
  actions,
  getters
}
