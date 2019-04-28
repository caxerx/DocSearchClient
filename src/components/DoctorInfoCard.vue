<template>
  <v-card flat v-if="doctor!=null">
    <!-- {{doctor.id}} -->

    <v-layout row wrap>
      <v-flex xs4 sm2>
        <v-card-title>
          <img :src="computedAvatar" class="icon">
        </v-card-title>
      </v-flex>
      <v-flex xs6 sm7>
        <v-card-text>
          <h3 class="headline mb primary--text">Dr. {{doctor.name}}</h3>
        </v-card-text>
        <v-card-text>
          <div>{{doctor.academic}}</div>
          <div>{{doctor.experience}} Experience</div>
          <div>{{newSpecialtyStr(doctor.specialty)}}</div>
        </v-card-text>
        <v-card-text>
          <h3 class="font-weight-bold">{{doctor.workplace.name}}</h3>
          <div>
            <span>{{doctor.phoneNo}}</span>
          </div>
          <div>
            <span>{{doctor.email}}</span>
          </div>
        </v-card-text>
      </v-flex>

      <v-flex sm3>
        <v-card-text>
          <div>
            <v-icon small>star</v-icon>
            <span>&nbsp;{{Math.floor(doctor.averageRating*10)/10}}</span>
          </div>
          <div>
            <v-icon small>comment</v-icon>
            <span>&nbsp;{{countFeedBacks}} Feedback</span>
          </div>
          <div>
            <v-icon small>place</v-icon>
            <span>&nbsp;{{doctor.workplace.location}}</span>
          </div>
          <div>
            <v-icon small>access_time</v-icon>
            <span v-if="$apollo.loading"></span>
            <span v-else-if="!available">&nbsp;Available Tomorrow</span>
            <span v-else>&nbsp;Available Today</span>
          </div>
        </v-card-text>
      </v-flex>

      <v-card-actions style="width:100%">
        <v-spacer></v-spacer>
        <slot name="reservationBtn"></slot>
        <slot name="doctorListBtn"></slot>
      </v-card-actions>
    </v-layout>
  </v-card>
</template>

<script>
import { mapGetters, mapActions, mapState } from "vuex";
import gql from "graphql-tag";
let moment = require("moment");


export default {
  data: () => ({
    available: true
  }),

  props: {
    doctor: Object
  },

  created: function() {},

  computed: {
    countFeedBacks() {
      return this.doctor.feedbacks.length !== null
        ? this.doctor.feedbacks.length
        : 0;
    },

    computedAvatar() {
      if (this.doctor.avatar === "" || this.doctor.avatar === undefined) {
        return require("@/assets/icon-person.png");
      }
      return "https://dsapi.1lo.li/assets/avatars/" + this.doctor.avatar;
    }
  },

  components: {},

  methods: {
    newSpecialtyStr(specialty) {
      switch (specialty) {
        case "general_practice":
          return "General Practice";
          break;
        case "cardiology":
          return "Cardiology";
          break;
        case "dentistry":
          return "Dentistry";
          break;
        case "dietetics":
          return "Dietetics";
          break;
      }
    }
  }
};
</script>

<style scoped>
img {
  width: 100%;
}
</style>