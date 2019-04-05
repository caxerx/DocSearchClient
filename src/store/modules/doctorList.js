


const state = {
    doctorList: {
        criteria: {
            keyword: "",
            specialty: "",
            location: "",
            language: "",
            gender: "",
        },

    }

}


const getters = {
    getDoctorList: state => state.doctorList,
    getDoctor: state => state.doctorList.doctor,
}


const actions = {
    // actionInitForDoctorList({commit}){

    // actionSetDoctorForDoctorList({commit},doctor){
    //     commit("setSetDoctorForDoctorList",doctor);
    // }

    actionSearchSpecialtyForDoctorList({ commit }, key) {
        commit("searchSpecialtyForDoctorList", key)
    },
    actionSearchLocationForDoctorList({ commit }, key) {
        commit("searchLocationForDoctorList", key)
    },
    actionSearchLanguageForDoctorList({ commit }, key) {
        commit("searchLanguageForDoctorList", key)
    },
    actionSearchGenderForDoctorList({ commit }, key) {
        commit("searchGenderForDoctorList", key)
    },
    actionSearchKeyWordForDoctorList({ commit }, key) {
        commit("searchKeyWordForDoctorList", key)
    },

    actionResetSearchForDoctorList({ commit }) {
        commit("resetSearchForDoctorList");
    }



}
// mutations
const mutations = {

    ["searchSpecialtyForDoctorList"](state, key) {
        state.doctorList.criteria.specialty = key;
    },
    ["searchLocationForDoctorList"](state, key) {
        state.doctorList.criteria.location = key;
    },
    ["searchGenderForDoctorList"](state, key) {
        state.doctorList.criteria.gender = key;
        // console.log(state.doctorList.search.gender)
    },

    ["searchLanguageForDoctorList"](state, key) {
        state.doctorList.criteria.language = key;
    },

    ["searchKeyWordForDoctorList"](state, key) {
        state.doctorList.criteria.keyword = key;
    },

    ["resetSearchForDoctorList"](state) {
        state.doctorList.criteria = {
                keyword: "",
                specialty: "",
                location: "",
                language: "",
                gender: "",
        }
    }
}



export default {
    state,
    getters,
    actions,
    mutations
}