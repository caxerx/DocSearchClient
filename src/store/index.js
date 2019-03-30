import Vue from 'vue';
import Vuex from 'vuex';
import gql from "graphql-tag";

// root
import * as getters from './getters.js';
import * as actions from './actions.js';
import { state, mutations } from './mutations.js';

// modules
import viewReservation from './modules/viewReservation.js';
import createReservation from './modules/createReservation.js';
import onlineConsultant from './modules/onlineConsultant.js';
import medicalRecordList from './modules/medicalRecordList.js';
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
    signup,
    onlineConsultant,
    medicalRecordList,
    doctorList,
    reservationDetail

  },

  strict: true
});