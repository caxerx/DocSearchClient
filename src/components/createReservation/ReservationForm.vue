<template>
  <div v-if="!$apollo.loading">
    <v-card>
      <doctor-info-card :doctor="doctor"/>
      <v-layout row wrap>
        <v-card-text>
          <hr>
          <br>
          <v-flex sm12>
            <p class="text-sm-center">Select a time slot to create an reservation</p>
          </v-flex>
          <v-flex sm12>
            <date-picker/>
          </v-flex>
          <v-flex sm12>
            <v-layout row wrap justify-space-arround>
              <span v-for="(time,index) in compareTimeSlot(date,doctor.timeSlots)" :key="index">
                <v-btn color="primary" @click="setTime(time.start)">{{time.start}}</v-btn>
              </span>
            </v-layout>
          </v-flex>
        </v-card-text>
      </v-layout>
    </v-card>
  </div>
</template>

<script>
import axios from "axios";
import DatePicker from "./DatePicker";
import DoctorInfoCard from "@/components/DoctorInfoCard";
import { mapGetters, mapActions, mapState } from "vuex";
import gql from "graphql-tag";
let moment = require("moment");

const doctorQuery = gql`
  query($id: ID!) {
    doctor(id: $id) {
      id
      name
      gender
      email
      phoneNo
      language
      specialty
      academic
      experience
      workplace {
        id
        name
        location
      }
      feedbacks {
        id
        comment
        rating
      }
      averageRating
      timeSlots {
        id
        weekday
        start
        end
      }
    }
  }
`;

export default {
  data: () => ({}),

  apollo: {
    doctor: {
      query: doctorQuery,
      variables() {
        return {
          id: this.$route.query.id
        };
      }
    }
  },

  computed: {
    ...mapGetters({
      // getter: "getCreateReservation"
      getter: "getCreateReservation"
    }),
    date() {
      return this.getter.date;
    }
  },

  components: {
    DatePicker,
    DoctorInfoCard
  },

  methods: {
    ...mapActions(["actionSetTimeForCreateReservation"]),
    setTime(time) {
      this.actionSetTimeForCreateReservation(time);
    },
    compareTimeSlot(date, timeslots) {
      let weekdayOfDate = moment.utc(date).format("ddd").toLowerCase();
      // filter weekday of the timeslots
      var filterTimeslot = timeslots.filter(function(item) {
        return item.weekday === weekdayOfDate?true:false
      });
      //filter the time is available in the reservations (undo part)

      return filterTimeslot
    }
  }
};
</script>

<style scoped>
img {
  width: 100%;
}
</style>
