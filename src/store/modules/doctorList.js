


const state = {
    doctorList: {
        search: {
            keyword: "",
            specialty: "",
            location: "",
            language: "",
            gender: "",
        },

        newDoctorList: [],




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

    actionUpdateDoctorListForDoctorList({ commit }, doctors) {
        commit("updateDoctorListForDoctorList", doctors);
    }



}
// mutations
const mutations = {

    ["searchSpecialtyForDoctorList"](state, key) {
        state.doctorList.search.specialty = key;
    },
    ["searchLocationForDoctorList"](state, key) {
        state.doctorList.search.location = key;
    },
    ["searchGenderForDoctorList"](state, key) {
        state.doctorList.search.gender = key;
        // console.log(state.doctorList.search.gender)
    },

    ["searchLanguageForDoctorList"](state, key) {
        state.doctorList.search.language = key;
    },

    ["searchKeyWordForDoctorList"](state, key) {
        state.doctorList.search.keyword = key;
        // console.log(state.doctorList.search.searchKey);
    },
    ["updateDoctorListForDoctorList"](state, doctors) {
        let mapDoctorList = doctors;
        let gender = state.doctorList.search.gender;

        if (state.doctorList.search.gender === "Male") {
            gender = "M";
        } else if (state.doctorList.search.gender === "Female") {
            gender = "F";
        }
        let keyword = state.doctorList.search.keyword;
        let specialty = state.doctorList.search.specialty;
        let location = state.doctorList.search.location;
        let language = state.doctorList.search.language;

        if (keyword !== "") {
            mapDoctorList = mapDoctorList.filter(function (doctor) {
                if (doctor.name.includes(keyword)) {
                    return true;
                } else if (doctor.specialty.includes(keyword)) {
                    console.log(doctor)
                    return true;
                } else if (doctor.workplace.name.includes(keyword)) {
                    return true;
                }
                else if (doctor.language.includes(keyword)) {
                    return true;
                }
                else if (doctor.gender.includes(keyword)) {
                    return true;
                }
                return false;
            });
        }
        if (gender !== "") {
            mapDoctorList = mapDoctorList.filter(function (doctor) {
                if (doctor.gender.includes(gender)) {
                    return true;
                }
                return false;
            });
        }
        if (specialty !== "") {
            mapDoctorList = mapDoctorList.filter(function (doctor) {
                if (doctor.gender.includes(specialty)) {
                    return true;
                }
                return false;
            });
        }
        if (location !== "") {
            mapDoctorList = mapDoctorList.filter(function (doctor) {
                if (doctor.workplace.name.includes(location)) {
                    return true;
                }

                return false;
            });
        }
        if (language !== "") {
            mapDoctorList = mapDoctorList.filter(function (doctor) {
                if (doctor.language.includes(language)) {
                    return true;
                }
                return false;
            });
        }

        state.doctorList.newDoctorList = mapDoctorList;
        // console.log( state.doctorList.newDoctorList);
    }
}



export default {
    state,
    getters,
    actions,
    mutations
}