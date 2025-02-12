
let moment = require("moment");
const state = {
    
    createReservation: {
        date: moment(new Date()).format("YYYY-MM-DD"),
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
            reserverId:"",
            status:"",

        },
        
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
    actionAfterCreationForCreateReservation({commit},val){
        commit("afterCreateionForCreateReservation",val)
    },
    actionResetForCreateReservation({commit}){
        commit("resetForCreateReservation")
    }




}
// mutations
const mutations = {
    ["setDateForCreateReservation"](state, newDate) {
        state.createReservation.date = newDate;

    },
    ["resetForCreateReservation"](state){
        state.createReservation = {
            date: moment(new Date()).format("YYYY-MM-DD"),
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
                reserverId: "",
                status:"",
            },
            
        }
    },

    ["setReservationForCreateReservation"](state, reservation) {

        state.createReservation.end = reservation.end;
        state.createReservation.start = reservation.start;
        state.createReservation.reservation.workplaceId = reservation.workplaceId;
        state.createReservation.reservation.patientId = reservation.patientId;
        state.createReservation.reservation.doctorId = reservation.doctorId;
        state.createReservation.reservation.reserverId = reservation.reserverId;

        
    },

    ["setReservationTypeAndNoteForCreateReservation"](state, inf){
        state.createReservation.reservation.type = inf.type;
        state.createReservation.reservation.note = inf.note;
        state.createReservation.reservation.startTime = inf.startTime;
        state.createReservation.reservation.endTime = inf.endTime;
        state.createReservation.reservation.status = "pending";
    
    },



}




export default {
    state,
    getters,
    actions,
    mutations
}