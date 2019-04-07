

const state = {
    createReservation: {
        date: new Date().toISOString().substr(0, 10),
        note: "",
        type: "",
        endTime: "",
        startTime: "",
        workplaceId: "",
        patientId: "",
        doctorId: "",
        staffId: "",

    },
   

}


const getters = {
    getCreateReservation: state => state.createReservation,
}

const actions = {


    actionSetDateForCreateReservation({ commit }, newDate) {
        commit("setDateForCreateReservation", newDate);
    },


    actionSetTimeForCreateReservation({ commit }, time) {
        commit("setTimeForCreateReservation", time);
    },




}
// mutations
const mutations = {
    ["setDateForCreateReservation"](state, newDate) {
        state.createReservation.date = newDate;

    },
    ["setTimeForCreateReservation"](state, time) {
        state.createReservation.startTime = time.start;
        state.createReservation.endTime = time.end;

    },



}




export default {
    state,
    getters,
    actions,
    mutations
}