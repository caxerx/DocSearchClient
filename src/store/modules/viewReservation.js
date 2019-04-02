

const state = {
    viewReservation:{
        // headers: [
        //     {
        //         text: "No.",
        //         align: "left",
        //         value: "no"

        //     },
        //     { text: "Date", value: "date" },
        //     { text: "Start Time", value: "startTime" },
        //     { text: "End Time", value: "endTime" },
        //     { text: "status", value: "status" },
        //     { text: "Actions", sortable: false }
        // ],
    }
  }
  
  
  const getters = {
    getViewReservation: state => state.viewReservation,
  }
  
  
  const actions = {
    actionSetShowForViewReservation({commit},content){
        commit("setShowForViewReservation",content);
    },

   
  
  }
  // mutations
  const mutations = {
    ["setShowForViewReservation"](state,content){
        let editedIndex = state.viewReservation.contents.indexOf(content);
        state.viewReservation.contents[editedIndex].show=!state.viewReservation.contents[editedIndex].show;
    },
    // ["setReservationDetailForViewReservation"]()
  }
  
  export default {
    state,
    getters,
    actions,
    mutations
  }