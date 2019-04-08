<template>
  <div>
    <v-layout row justify-center>
      <v-dialog v-model="dialog" persistent width="300">
        <v-card color="primary" dark>
          <v-card-text>
            Please stand by
            <v-progress-linear indeterminate color="white" class="mb-0"></v-progress-linear>
          </v-card-text>
        </v-card>
      </v-dialog>
    </v-layout>
    <v-card>
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
                  <v-btn color="primary" @click="setReservation(time.start,time.end)">{{time.start}}</v-btn>
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

const patientQuery = gql`
  query($id: ID!) {
    patient(id: $id) {
      consultations {
        id
        consultant {
          name
        }
        note
        startTime
        endTime
        diseases {
          id
          name
          description
        }
      }
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
    },
    patientObj: {},
    dialog: true
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

    patient: {
      query: patientQuery,
      variables() {
        return {
          id: this.$cookie.get("userId")
        };
      },
      update(data) {
        this.patientObj = data.patient;
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
    },

    dialog: {
      get() {
        if (this.$apollo.loading) {
          return true;
        } else {
          return false;
        }
      },
      set(val){
        this.dialog = val;
      }
    }
  },

  components: {
    DatePicker,
    DoctorInfoCard
  },

  methods: {
    ...mapActions(["actionSetReservationForCreateReservation"]),

    setReservation(start, end) {
      this.actionSetReservationForCreateReservation({
        start: start,
        end: end,
        doctor: this.doctor
      });
    },

    test() {}
  }
};
</script>

<style scoped>
img {
  width: 100%;
}
</style>
