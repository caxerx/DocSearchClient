

const state = {
    medicineRecordList: {

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
                clinc: "WeServeEveryone Clinic",
                doctor:"Dr. Nirmala Rajgopalan",
                date: "2018-11-15",
                startTime: "10:00",
                symptom: ["DIABETES MELLITUS (ICD-250.)", "HYPERTENSION, BENIGN ESSENTIAL (ICD-401.1)"],
                medicine: ["PRINIVIL TABS 20 MG (LISINOPRIL) 1 po qd", "Last Refill: #30 x 2 : Carl Savem MD (08/27/2010)", "HUMULIN INJ 70/30 (INSULIN REG & ISOPHANE (HUMAN)) 20 units ac breakfast", "Last Refill: #600 u x 0 : Carl Savem MD (08/27/2010)"],
                amount: 100,

            },
            {
                no: "2",
                clinc: "WeServeEveryone Clinic",
                doctor:"Dr. Nirmala Rajgopalan",
                date: "2018-11-16",
                startTime: "10:00",
                symptom: ["DIABETES MELLITUS (ICD-250.)"],
                medicine: ["PRINIVIL TABS 20 MG (LISINOPRIL) 1 po qd"],
                amount: 200,

            },
            {

                no: "1",
                clinc: "WeServeEveryone Clinic",
                doctor:"Dr. Nirmala Rajgopalan",
                date: "2018-11-15",
                startTime: "10:00",
                symptom: ["DIABETES MELLITUS (ICD-250.)", "HYPERTENSION, BENIGN ESSENTIAL (ICD-401.1)"],
                medicine: ["PRINIVIL TABS 20 MG (LISINOPRIL) 1 po qd", "Last Refill: #30 x 2 : Carl Savem MD (08/27/2010)", "HUMULIN INJ 70/30 (INSULIN REG & ISOPHANE (HUMAN)) 20 units ac breakfast", "Last Refill: #600 u x 0 : Carl Savem MD (08/27/2010)"],
                amount: 100,

            },
        ],

    }

}


const getters = {
    getMedicineRecordList: state => state.medicineRecordList
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