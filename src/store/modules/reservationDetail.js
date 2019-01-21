

const state = {
    reservationDetail: {
        doctor: {

            name: "Dr. Nirmala Rajgopalan",
            academic: "MBBS, Diploma in Hospital Administration",
            experience: "20 years experience",
            position: "General Physician",
            icon: "icon-person.png",
            clinc: "Niramai Clinic and Counselling Center",
            img: ["@/assets/image-icon.png", "@/assets/image-icon.png", "@/assets/image-icon.png"],
            like: "98%",
            feedback: 47,
            location: "Indiranagar, Bangalore",
            available: "Available Tomorrow",
            phone: 11223366,
            email: "miahcel8884",
            timeList: ["9:00", "9:20", "9:40", "10:30"],


        },

        detail:{
         
        }
        

    }

}


const getters = {
    getReservationDetail: state => state.reservationDetail
}


const actions = {
    actionSetReservationDetailForReservationDetail({commit},detail){
        commit("setReservationDetailForReservationDetail",detail);

    }


}
// mutations
const mutations = {
    ["setReservationDetailForReservationDetail"](state,detail){
        state.reservationDetail.detail = detail;
        // console.log(state.reservationDetail.detail)
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}