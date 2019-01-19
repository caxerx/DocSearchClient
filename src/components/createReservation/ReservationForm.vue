<template>
  <div>
    <v-card>
      <doctor-info-card/>
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
            <v-layout row wrap justify-space-between>
              <span v-for="(time,index) in timeList" :key="index">
                <v-btn color="primary" @click="setTime(time.startTime)">{{time.startTime}}</v-btn>
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

export default {
  data: () => ({}),

  created: function() {
    this.actionSetDefaultReservationForCreateReservation();
  },

  computed: {
    ...mapGetters({
      // getter: "getCreateReservation"
      doctor: "getDoctor",
      getter: "getCreateReservation"
    }),

    timeList() {
      return this.getter.timeList;
    }
  },

  components: {
    DatePicker,
    DoctorInfoCard
  },

  methods: {
    ...mapActions(["actionSetDefaultReservationForCreateReservation","actionSetTimeForCreateReservation"]),
    setTime(time){
      this.actionSetTimeForCreateReservation(time);
    }
  }
};
</script>

<style scoped>
img {
  width: 100%;
}
</style>
