

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
        isCancel : false,
        rid:"",
        isDetailPage:false,
    }
  }
  
  
  const getters = {
    getViewReservation: state => state.viewReservation,
  }
  
  
  const actions = {
    actionSetShowForViewReservation({commit},content){
        commit("setShowForViewReservation",content);
    },
    actionSetIsCancelFromViewReservation({commit},val){
       commit("setIsCancelFromViewReservation",val)
    },
    actionSetIdFromViewReservation({commit},val){
      commit("setIdFromViewReservation",val);
    },
    actionSetIsDetailPageFromViewReservation({commit},val){
      commit("setIsDetailPageFromViewReservation",val);
    }

   
  
  }
  // mutations
  const mutations = {
    ["setShowForViewReservation"](state,content){
        let editedIndex = state.viewReservation.contents.indexOf(content);
        state.viewReservation.contents[editedIndex].show=!state.viewReservation.contents[editedIndex].show;
    },
    ["setIsCancelFromViewReservation"](state,val){
      state.viewReservation.isCancel = val;
    },
    ["setIdFromViewReservation"](state,val){
      state.viewReservation.rid = val
    },
    ["setIsDetailPageFromViewReservation"](state,val){
      state.viewReservation.isDetailPage = val
    }
    // ["setReservationDetailForViewReservation"]()
  }
  
  export default {
    state,
    getters,
    actions,
    mutations
  }