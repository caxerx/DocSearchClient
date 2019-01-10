

const state = {
    signup: {
      
      dob: "",
  
    }
  
  }
  
  
  const getters = {
    getSignUp: state => state.signup
  }
  
  
  const actions = {
    actionSetDOBSignup({commit},dob){
        commit("setDOBSignup",dob);
    }
   
  
  }
  // mutations
  const mutations = {
    setDOBSignup(state,dob){
        state.signup.dob=dob;
        console.log(state.signup.dob)
    }
  }
  
  export default {
    state,
    getters,
    actions,
    mutations
  }