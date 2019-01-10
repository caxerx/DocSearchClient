

const state = {
  login: {
    userInfo: {
      name: "test",
      pwd: "test",
    },
    isSuccess: false,

  }

}


const getters = {
  getLogin: state => state.login
}


const actions = {

  actionLogin({ commit }, obj) {
    if (obj.name == state.login.userInfo.name && obj.pwd == state.login.userInfo.pwd) {
      commit("success");
    } else {
     
      commit("fail");
    }
  },
  actionLogout({ commit }) {
    commit("logout");
  },

}
// mutations
const mutations = {
  ["success"](state) {
    state.login.isSuccess = true;
    console.log("state ", state.login.isSuccess);

  },
  ["fail"](state) {

    state.login.isSuccess = false;
    console.log("state ", state.login.isSuccess);
    console.log("state ", state.login.userInfo);

  },
  ["logout"](state) {

    state.login.isSuccess = false;
    console.log("state ", state.login.isSuccess);

  },
}

export default {
  state,
  getters,
  actions,
  mutations
}