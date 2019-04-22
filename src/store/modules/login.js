

const state = {
    login: null
  
  }
  
  
  const getters = {
    getLogin: state => state.login
  }
  
  
  const actions = {
    actionSetLogin({commit},val){
        commit("setLogin",val);
    },
    actionSetLoginName({commit},val){
      commit("setLoginName",val);
    }
   
  
  }
  // mutations
  const mutations = {
    setLogin(state,val){
       state.login = val;
       console.log(state.login)
    },
    setLoginName(state,val){
      if(state.login!==null){
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