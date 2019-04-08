import Vue from 'vue'

// state
export const state = {
    dialog:{
        normal:false,
        fullscreen:false,
        login:false,
    }
}

// mutations
export const mutations = {



    ["setLoginDialog"](state,val){
        state.dialog.login = val;
        console.log(state.dialog.login)
    }

}

