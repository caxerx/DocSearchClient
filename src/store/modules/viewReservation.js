

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
                doctor:"d1",
                date: "2018-10-15",
                startTime: "10:00",
                endTime: "10:10",
                status: "Waiting",
                show:false,


            },
            {
                no: 2,
                doctor:"d2",
                date: "2018-10-16",
                startTime: "10:10",
                endTime: "10:20",
                status: "Waiting",
                show:false,


            },
            {
                no: 3,
                doctor:"d3",
                date: "2018-10-17",
                startTime: "10:20",
                endTime: "10:30",
                status: "Approval",
                show:false,


            },
            {
                no: 4,
                doctor:"d4",
                date: "2018-10-18",
                startTime: "10:30",
                endTime: "10:40",
                status: "Finish",
                show:false,
            },
            {
                no: 5,
                doctor:"d5",
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
  
   
  
  }
  // mutations
  const mutations = {
  
  }
  
  export default {
    state,
    getters,
    actions,
    mutations
  }