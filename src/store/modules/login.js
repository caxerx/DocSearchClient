

const state = {
    login: null
  
  }
  
  
  const getters = {
    getLogin: state => state.login
  }
  
  
  const actions = {
    actionsSetLogin({commit},val){
        commit("setLogin",val);
    }
   
  
  }
  // mutations
  const mutations = {
    setLogin(state,val){
       state.login = val;
       console.log(state.login)
    }
  }
  
  export default {
    state,
    getters,
    actions,
    mutations
  }