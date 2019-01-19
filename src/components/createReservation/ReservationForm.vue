<template>
  <div>
    <v-card>
      <v-layout row wrap>
        <v-flex xs4 sm2>
          <v-card-title>
            <img src="@/assets/icon-person.png" class="icon">
          </v-card-title>
        </v-flex>
        <v-flex xs2 sm7>
          <v-card-text>
            <h3 class="headline mb primary--text">{{doctor.name}}</h3>
          </v-card-text>
          <v-card-text>
            <div>{{doctor.academic}}</div>
            <div>{{doctor.experience}}</div>
            <div>{{doctor.position}}</div>
          </v-card-text>
          <v-card-text>
            <h3 class="font-weight-bold">{{doctor.clinc}}</h3>
            <v-layout row wrap>
              <v-flex xs3 sm1>
                <img src="@/assets/image-icon.png" class="icon">
              </v-flex>
              <v-flex xs3 sm1>
                <img src="@/assets/image-icon.png" class="icon">
              </v-flex>
              <v-flex xs3 sm1>
                <img src="@/assets/image-icon.png" class="icon">
              </v-flex>
            </v-layout>
          </v-card-text>
        </v-flex>

        <v-flex sm3>
          <v-card-text>
            <div>
              <v-icon small>thumb_up</v-icon>
              {{doctor.like}}
            </div>
            <div>
              <v-icon small>comment</v-icon>
              {{doctor.feedback}} Feedback
            </div>
            <div>
              <v-icon small>place</v-icon>
              {{doctor.location}}
            </div>
            <div>
              <v-icon small>access_time</v-icon>
              {{doctor.available}}
            </div>
          </v-card-text>
        </v-flex>
      </v-layout>
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
    DatePicker
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
