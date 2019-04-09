import Vue from 'vue'

// state
export const state = {
    dialog:{
        normal:false,
        fullscreen:false,
        login:false,
        cancelReservationDialog:false,
    }
}

// mutations
export const mutations = {



    ["setLoginDialog"](state,val){
        state.dialog.login = val;
        console.log(state.dialog.login)
    },
    ["cancelReservationDialog"](state,val){
        state.dialog.cancelReservationDialog = val;
        console.log(state.dialog.cancelReservationDialog )
    }

}

