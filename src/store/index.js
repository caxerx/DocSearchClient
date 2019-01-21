import Vue from 'vue';
import Vuex from 'vuex';

// root
import * as getters from './getters.js';
import * as actions from './actions.js';
import { state, mutations } from './mutations.js';

// modules
import viewReservation from './modules/viewReservation.js';
import createReservation from './modules/createReservation.js';
import onlineConsultant from './modules/onlineConsultant.js';
import medicineRecordList from './modules/medicineRecordList.js';
import login from './modules/login.js';
import signup from './modules/signup.js';
import doctorList from './modules/doctorList.js';
import reservationDetail from './modules/reservationDetail.js';




Vue.use( Vuex );

export default new Vuex.Store({
  // root
  state,
  mutations,
  getters,
  actions,

  modules: {
    viewReservation,
    createReservation,
    login,
    signup,
    onlineConsultant,
    medicineRecordList,
    doctorList,
    reservationDetail

  },

  strict: true
});