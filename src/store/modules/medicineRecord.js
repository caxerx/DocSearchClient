

const state = {
    medicineRecord: {
      
        headers: [
            {
                text: "No.",
                align: "left",
                value: "no"

            },
            { text: "Clinc", value: "clinc" },
            { text: "Date", value: "date" },
            { text: "Start Time", value: "startTime" },
            { text: "End Time", value: "endTime" },
            { text: "Symptom", value: "symptom" },
            { text: "Medicine", value: "medicine" },
            { text: "Amount", value: "amount" },

        ],
        contents: [
            {

                no: "1",
                clinc:"c1",
                date: "2018-11-15",
                startTime: "10:00",
                endTime: "10:10",
                symptom: "s1",
                medicine: ["1","2","3","4"],
                amount: 100,

            },
            {
                no: "2",
                clinc:"c2",
                date: "2018-11-16",
                startTime: "10:00",
                endTime: "10:10",
                symptom: "asdsad",
                medicine: ["1"],
                amount: 200,

            }
        ],
  
    }
  
  }
  
  
  const getters = {
    getMedicineRecord: state => state.medicineRecord
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