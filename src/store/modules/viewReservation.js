

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

        contents: [
            {

                no: 1,
                clinc:"Niramai Clinic and Counselling Center",
                doctor:"Dr. Nirmala Rajgopalan",
                date: "2018-10-15",
                startTime: "10:00",
                endTime: "10:10",
                status: "Waiting",


            },
            {
                no: 2,
                clinc:"Niramai Clinic and Counselling Center",
                doctor:"Dr. Nirmala Rajgopalan",
                date: "2018-10-16",
                startTime: "10:10",
                endTime: "10:20",
                status: "Waiting",


            },
            {
                no: 3,
                clinc:"Niramai Clinic and Counselling Center",
                doctor:"Dr. Nirmala Rajgopalan",
                date: "2018-10-17",
                startTime: "10:20",
                endTime: "10:30",
                status: "Approval",


            },
            {
                no: 4,
                clinc:"Niramai Clinic and Counselling Center",
                doctor:"Dr. Nirmala Rajgopalan",
                date: "2018-10-18",
                startTime: "10:30",
                endTime: "10:40",
                status: "Finish",
            },
            {
                no: 5,
                clinc:"Niramai Clinic and Counselling Center",
                doctor:"Dr. Nirmala Rajgopalan",
                date: "2018-10-19",
                startTime: "10:40",
                endTime: "10:50",
                status: "Cancel",

            },
            {
                no: 5,
                clinc:"Niramai Clinic and Counselling Center",
                doctor:"Dr. Nirmala Rajgopalan",
                date: "2018-10-19",
                startTime: "10:40",
                endTime: "10:50",
                status: "Cancel",
                show:false,
            },
            {
                no: 5,
                clinc:"Niramai Clinic and Counselling Center",
                doctor:"Dr. Nirmala Rajgopalan",
                date: "2018-10-19",
                startTime: "10:40",
                endTime: "10:50",
                status: "Cancel",
                show:false,
            },
            {
                no: 5,
                clinc:"Niramai Clinic and Counselling Center",
                doctor:"Dr. Nirmala Rajgopalan",
                date: "2018-10-19",
                startTime: "10:40",
                endTime: "10:50",
                status: "Cancel",
                show:false,
            },
        ],
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