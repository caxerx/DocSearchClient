


const state = {
    doctorList: {
      search:{
        searchKey:"",
        specialty:"",
        location:"",
        language:"",
        gender:"",
      }

   


    }

}


const getters = {
    getDoctorList:state=>state.doctorList,
    getDoctor:state => state.doctorList.doctor,
}


const actions = {
    // actionInitForDoctorList({commit}){

    // actionSetDoctorForDoctorList({commit},doctor){
    //     commit("setSetDoctorForDoctorList",doctor);
    // }
    actionSearchGenderForDoctorList({commit},key){
        commit("searchGenderForDoctorList",key)
    },
    actionSearchKeyWordForDoctorList({commit},key){
        commit("searchKeyWordForDoctorList",key)
    }



}
// mutations
const mutations = {

        // ["setSetDoctorForDoctorList"](state,doctor){
        //     state.doctorList.doctor = doctor;
        //     console.log(state.doctorList.doctor);

        // }

        ["searchGenderForDoctorList"](state,key){
            state.doctorList.search.gender=key;
            console.log(state.doctorList.search.gender)
        },
        ["searchKeyWordForDoctorList"](state,key){
            state.doctorList.search.searchKey=key;
            console.log(state.doctorList.search.searchKey);
        }
}

export default {
    state,
    getters,
    actions,
    mutations
}