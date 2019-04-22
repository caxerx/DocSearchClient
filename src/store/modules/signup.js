

const state = {
    signup: {
      
      createPatientInput:{
        name:"",
        gender:"",
        email:"",
        phoneNo:"",
        dob:"",
        hkid:"",
        password:"",
        username:"",
        allergies:[],
      }
  
    }
  
  }
  
  
  const getters = {
    getSignUp: state => state.signup
  }
  
  
  const actions = {
    actionSetSignup({commit},obj){
        commit("setSignup",obj);
    }
   
  
  }
  // mutations
  const mutations = {
    setSignup(state,obj){
        state.signup.createPatientInput = obj;
    }
  }
  
  export default {
    state,
    getters,
    actions,
    mutations
  }