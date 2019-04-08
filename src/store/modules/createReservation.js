

const state = {
    createReservation: {
        date: new Date().toISOString().substr(0, 10),
        start:"",
        end:"",

        reservation: {
            note: "",
            type: "",
            endTime: "",
            startTime: "",
            workplaceId: "",
            patientId: "",
            doctorId: "",
            staffId: "",
        }

    },


}


const getters = {
    getCreateReservation: state => state.createReservation,
}

const actions = {


    actionSetDateForCreateReservation({ commit }, newDate) {
        commit("setDateForCreateReservation", newDate);
    },


    actionSetReservationForCreateReservation({ commit }, reservation) {
        commit("setReservationForCreateReservation", reservation);
    },
    actionSetReservationTypeAndNoteForCreateReservation({commit},inf){
        commit("setReservationTypeAndNoteForCreateReservation",inf)
    },




}
// mutations
const mutations = {
    ["setDateForCreateReservation"](state, newDate) {
        state.createReservation.date = newDate;

    },

    ["setReservationForCreateReservation"](state, reservation) {

        state.createReservation.end = reservation.end;
        state.createReservation.start = reservation.start;
        state.createReservation.reservation.workplaceId = reservation.workplaceId;
        state.createReservation.reservation.patientId = reservation.patientId;
        state.createReservation.reservation.doctorId = reservation.doctorId;
        state.createReservation.reservation.staffId = reservation.staffId;

        
    },

    ["setReservationTypeAndNoteForCreateReservation"](state, inf){
        state.createReservation.reservation.type = inf.type;
        state.createReservation.reservation.note = inf.note;
        state.createReservation.reservation.startTime = inf.startTime;
        state.createReservation.reservation.endTime = inf.endTime;
    
    }



}




export default {
    state,
    getters,
    actions,
    mutations
}