

const state = {
    doctorList: {
        // showIndex:-1,
        // showList:[],
        list: [
            {
                
                name:"Dr. Nirmala Rajgopalan",
                academic:"MBBS, Diploma in Hospital Administration",
                experience:"20 years experience",
                position:"General Physician",
                icon:"icon-person.png",
                clinc:"Niramai Clinic and Counselling Center",
                img:["@/assets/image-icon.png","@/assets/image-icon.png","@/assets/image-icon.png"],
                like:"98%",
                feedback:47,
                location:"Indiranagar, Bangalore",
                available:"Available Tomorrow",
                phone:11223366,
                email:"miahcel8884",
                timeList:["9:00","9:20","9:40","10:30"],


            },
            {
                name:"Dr. Nirmala Rajgopalan",
                academic:"MBBS, Diploma in Hospital Administration",
                experience:"20 years experience",
                position:"General Physician",
                icon:"icon-person.png",
                clinc:"Niramai Clinic and Counselling Center",
                img:["@/assets/image-icon.png","@/assets/image-icon.png","@/assets/image-icon.png"],
                like:"98%",
                feedback:47,
                location:"Indiranagar, Bangalore",
                available:"Available Tomorrow",
                phone:11223366,
                email:"miahcel8883",
                timeList:["9:00","9:20","9:40","10:30"],
               


            },
            {
                name:"Dr. Nirmala Rajgopalan",
                academic:"MBBS, Diploma in Hospital Administration",
                experience:"20 years experience",
                position:"General Physician",
                icon:"icon-person.png",
                clinc:"Niramai Clinic and Counselling Center",
                img:["@/assets/image-icon.png","@/assets/image-icon.png","@/assets/image-icon.png"],
                like:"98%",
                feedback:47,
                location:"Indiranagar, Bangalore",
                available:"Available Tomorrow",
                phone:11223366,
                email:"miahcel8882",
                timeList:["9:00","9:20","9:40","10:30"],


            },
            {
                name:"Dr. Nirmala Rajgopalan",
                academic:"MBBS, Diploma in Hospital Administration",
                experience:"20 years experience",
                position:"General Physician",
                icon:"icon-person.png",
                clinc:"Niramai Clinic and Counselling Center",
                img:["@/assets/image-icon.png","@/assets/image-icon.png","@/assets/image-icon.png"],
                like:"98%",
                feedback:47,
                location:"Indiranagar, Bangalore",
                available:"Available Tomorrow",
                phone:11223366,
                email:"miahcel111",
                timeList:["9:00","9:20","9:40","10:30"],


            },

        ],

        doctor:{

        }


    }

}


const getters = {
    getDoctorList: state => state.doctorList,
    getDoctor:state => state.doctorList.doctor,
}


const actions = {
    // actionInitForDoctorList({commit}){
    //     commit("initForDoctorList");
    // },

    // actionSetShowListForDoctorList({commit},index){
    //     commit("setShowListForDoctorList",index);
    // }
    actionSetDoctorForDoctorList({commit},doctor){
        commit("setSetDoctorForDoctorList",doctor);
    }
    



}
// mutations
const mutations = {
//    ["initForDoctorList"](state){
//        for(let i=0;i<state.doctorList.details.length;i++){
//           state.doctorList.showList.push(false);
//        }

//        console.log(state.doctorList.showList);
//    },
//    ["setShowListForDoctorList"](state,index){
//     state.doctorList.details[index].name= "hallo"
//     state.doctorList.showIndex = index;
//     state.doctorList.showList[index] = ! state.doctorList.showList[index];
//     console.log(state.doctorList.showList)
//    }
        ["setSetDoctorForDoctorList"](state,doctor){
            state.doctorList.doctor = doctor;
            console.log(state.doctorList.doctor);

        }
}

export default {
    state,
    getters,
    actions,
    mutations
}