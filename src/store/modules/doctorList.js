


const state = {
    doctorList: {
        

   


    }

}


const getters = {
    getDoctorList:state=>state.getDoctorList,
    getDoctor:state => state.doctorList.doctor,
}


const actions = {
    // actionInitForDoctorList({commit}){
    //     commit("initForDoctorList");
    // },

    // actionSetShowListForDoctorList({commit},index){
    //     commit("setShowListForDoctorList",index);
    // }
    actionSetDoctorForDoctorList({commit},doctor){
        commit("setSetDoctorForDoctorList",doctor);
    }
    



}
// mutations
const mutations = {
//    ["initForDoctorList"](state){
//        for(let i=0;i<state.doctorList.details.length;i++){
//           state.doctorList.showList.push(false);
//        }

//        console.log(state.doctorList.showList);
//    },
//    ["setShowListForDoctorList"](state,index){
//     state.doctorList.details[index].name= "hallo"
//     state.doctorList.showIndex = index;
//     state.doctorList.showList[index] = ! state.doctorList.showList[index];
//     console.log(state.doctorList.showList)
//    }
        ["setSetDoctorForDoctorList"](state,doctor){
            state.doctorList.doctor = doctor;
            console.log(state.doctorList.doctor);

        }
}

export default {
    state,
    getters,
    actions,
    mutations
}