<template>
  <v-card>
    <div>
      <doctor-info-card :doctor="doctorObj"/>
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
            <v-layout row wrap v-if="timeslots.length !== 0 ">
              <v-flex v-for="(time,index) in timeslots" :key="index" sm2>
                <v-layout justify-center>
                  <v-btn color="primary" @click="setTime(time.start,time.end)">{{time.start}}</v-btn>
                </v-layout>
              </v-flex>
            </v-layout>
            <v-layout row wrap v-else>
              <v-flex>
                <p class="text-sm-center">No available time in this day</p>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-card-text>
      </v-layout>
    </div>
  </v-card>
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
    }
  }
`;

const timeSlotQuery = gql`
  query($date: DateTime!, $doctorId: ID!) {
    getDoctorTimeSlots(date: $date, doctorId: $doctorId) {
      id
      weekday
      start
      end
    }
  }
`;

export default {
  data: () => ({
    timeslots: [],
    doctorObj: {
      id: "",
      name: "",
      gender: "",
      email: "",
      phoneNo: "",
      language: "",
      specialty: "",
      academic: "",
      experience: "",
      workplace: {
        id: "",
        name: "",
        location: ""
      },
      feedbacks: {
        id: "",
        comment: "",
        rating: ""
      },
      averageRating: ""
    }
  }),

  apollo: {
    doctor: {
      query: doctorQuery,
      variables() {
        return {
          id: this.$route.query.id
        };
      },
      update(data) {
        this.doctorObj = data.doctor;
      }
    },

    getDoctorTimeSlots: {
      query: timeSlotQuery,
      variables() {
        return {
          date: this.date,
          doctorId: this.$route.query.id
        };
      },
      update(data) {
        this.timeslots = data.getDoctorTimeSlots;
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

    setTime(start, end) {
      this.actionSetTimeForCreateReservation({
        start: start,
        end: end
      });
    }
  }
};
</script>

<style scoped>
img {
  width: 100%;
}
</style>
