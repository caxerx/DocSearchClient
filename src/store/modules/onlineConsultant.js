

const state = {
    onlineConsultant: {
       userInfo:{
           name:"test",
           age:"19",

       },
       doctorInfo:{
           name:"IamDoctor",
           phone:6666666,
           age:"20",
           position:"西醫",
           duty:"內分泌及糖尿科",
           qualifications:["香港中文大學內外全科醫學士 MBChB (CUHK) 1994","香港醫學專科學院院士(內科) FHKAM (Medicine) 2003"],
           email:"doctor@docSearch.com",
       },
 
    }
  
  }
  
  
  const getters = {
    getOnlineConsultant: state => state.onlineConsultant
  }
  
  
  const actions = {

  
  }
  // mutations
  const mutations = {


    
  }
  
  export default {
    state,
    getters,
    actions,
    mutations
  }