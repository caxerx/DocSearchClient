

const state = {
  login: {
    id: localStorage.getItem("userId"),
    name: localStorage.getItem("name"),
  }

}


const getters = {
  getLogin: state => state.login
}


const actions = {
  actionSetLogin({ commit }, val) {
    commit("setLogin", val);
  },
  actionSetLoginName({ commit }, val) {
    commit("setLoginName", val);
  },
  actionSetLogout({ commit }) {
    commit("setLogout");
  }

}
// mutations
const mutations = {
  setLogin(state, val) {
    localStorage.setItem("userId", val.id);
    localStorage.setItem("name", val.name);
    state.login.id = localStorage.getItem("userId");
    state.login.name = localStorage.getItem("name");
  },
  setLogout(state) {
    localStorage.clear();
    state.login.id = localStorage.getItem("userId");
    state.login.name = localStorage.getItem("name");
  },
  setLoginName(state, val) {
    if (state.login !== null) {
      state.login.name = val;
      console.log(state.login)
    }
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}