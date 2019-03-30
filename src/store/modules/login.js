

// const state = {
//   login: {
//     userInfo: {
//       id:1,
//     },
//     dialog:false,

      
//   }

// }


// const getters = {
//   getLogin: state => state.login
// }


// const actions = {

//   actionLogin({ commit }, obj) {

//     commit("success",obj);
//   },
//   actionLogout({ commit }) {
//     commit("logout");
//   },
//   actionOpenDialogLogin({ commit }) {
//     commit("openDialogLogin");
//   },
//   actionCloseDialogLogin({ commit }) {
//     commit("closeDialogLogin");
//   },

// }
// // mutations
// const mutations = {
//   ["openDialogLogin"](state){
//     state.login.dialog=true;
//     console.log(state.login.dialog)
//   },
//   ["closeDialogLogin"](state){
//     state.login.dialog=false;
//   },
//   ["success"](state,obj) {
//     localStorage.setItem("userId",1);

//     console.log(localStorage)

//   },
//   ["fail"](state) {


//   },
//   ["logout"](state) {

//   },
// }

// export default {
//   state,
//   getters,
//   actions,
//   mutations
// }