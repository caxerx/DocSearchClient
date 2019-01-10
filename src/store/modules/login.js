

const state = {
  login: {
    userInfo: {
      email: "test",
      pwd: "test",
      name:"test",
    },
    isSuccess: false,

  }

}


const getters = {
  getLogin: state => state.login
}


const actions = {

  actionLogin({ commit }, obj) {
    if (obj.email == state.login.userInfo.email && obj.pwd == state.login.userInfo.pwd) {
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