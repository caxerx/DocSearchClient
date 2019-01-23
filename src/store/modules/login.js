

const state = {
  login: {
    userInfo: {
      email: "test@gmail.com",
      pwd: "test",
      name:"test",
      phone:"12345678",
    },
    isSuccess: false,
    dialog:false,

  }

}


const getters = {
  getLogin: state => state.login
}


const actions = {

  actionLogin({ commit }, obj) {
    // if (obj.email == state.login.userInfo.email && obj.pwd == state.login.userInfo.pwd) {
    //   commit("success");
    // } else {
     
    //   commit("fail");
    // }
    commit("success",obj);
  },
  actionLogout({ commit }) {
    commit("logout");
  },
  actionOpenDialogLogin({ commit }) {
    commit("openDialogLogin");
  },
  actionCloseDialogLogin({ commit }) {
    commit("closeDialogLogin");
  },

}
// mutations
const mutations = {
  ["openDialogLogin"](state){
    state.login.dialog=true;
    console.log(state.login.dialog)
  },
  ["closeDialogLogin"](state){
    state.login.dialog=false;
  },
  ["success"](state,obj) {
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