

const state = {
    createReservation: {
        date: new Date().toISOString().substr(0, 10),
        note: "",
        type: "",
        endTime: "",
        startTime: "",
        doctor:{},

          reservation:{
            id:null,
            reserver:{
                id:null,
                name:"",
                gender:"",
                email:"",
                phoneNo:"",
                dob:"",
                hkid:"",
                type:"",
                
            }
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




}
// mutations
const mutations = {
    ["setDateForCreateReservation"](state, newDate) {
        state.createReservation.date = newDate;

    },
    ["setReservationForCreateReservation"](state, reservation) {
        state.createReservation.startTime = reservation.start;
        state.createReservation.endTime = reservation.end;
        state.createReservation.doctor = reservation.doctor

    },



}




export default {
    state,
    getters,
    actions,
    mutations
}