

const state = {
    createReservation: {
        date: new Date().toISOString().substr(0, 10),
        time:"",

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
        state.createReservation.time = time;
        console.log("state ", state.createReservation.time);

    },



}




export default {
    state,
    getters,
    actions,
    mutations
}