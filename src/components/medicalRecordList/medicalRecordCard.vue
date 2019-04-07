<template>
  <v-card>
    <v-layout row wrap>
      <v-flex sm1>
        <v-layout justify-center row pt-5>
          <v-card color="blue-grey lighten-5">
            <div id="dateDiv">
              <div class="headline text-md-center">{{medicalRecord.startTime|moment("utc","DD")}}</div>
              <span class="headline grey--text">{{medicalRecord.startTime |moment("utc","MMM")}}</span>
            </div>
          </v-card>
        </v-layout>
      </v-flex>
      <v-flex sm11>
        <v-card-text>
          <div class="headline">Dr. {{medicalRecord.consultant.name}}</div>
          <div
            class="grey--text"
          >{{medicalRecord.startTime|moment("utc","YYYY-MM-DD")}}, {{medicalRecord.startTime|moment("utc","HH:MM")}}</div>
          <span class="grey--text">{{medicalRecord.note}}</span>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn icon @click="show=!show">
            <v-icon>{{ show ? 'keyboard_arrow_up' : 'keyboard_arrow_down' }}</v-icon>
          </v-btn>
        </v-card-actions>

        <v-slide-y-transition>
          <v-card-text>
            <div v-show="show">
              <hr>
              <div class="font-weight-bold">Symptoms:</div>
              <div
                v-for="(symptom,index) in medicalRecord.diseases"
                :key="index"
                class="font-weight-regular"
              >
                
                <div class="font-weight-medium">{{symptom.name}}</div>
                <div>{{symptom.description}}</div>
              </div>
              <!-- <br>
            <div class="font-weight-bold">Medications</div>
            <div
              v-for="medicine in medicalRecord.medicine"
              :key="medicine"
              class="font-weight-regular"
            >{{medicine}}</div>
            <br>
            <div class="font-weight-bold">Price:</div>
              <div class="font-weight-regular">{{medicalRecord.amount}}</div>-->
            </div>
          </v-card-text>
        </v-slide-y-transition>
      </v-flex>
    </v-layout>
  </v-card>
</template>

<script>
import { mapGetters, mapActions, mapState } from "vuex";
export default {
  data() {
    return {
      search: "",
      show: false
    };
  },
  props: {
    medicalRecord: Object
  },
  components: {},
  computed: {
    ...mapGetters({})
  },

  methods: {
    getDay(date) {
      let d = new Date(date);
      return d.getDate();
    },
    getDate(d) {
      return;
    }
    // getMonth(date) {
    //   let d = new Date(date);
    //   let month = d.toLocaleString("en-us", { month: "short" });
    //   return month;
    // }
  }
};
</script>

<style scoped>
#dateDiv {
  padding-left: 5px;
  padding-right: 5px;
}
img {
  width: 40px;
}
</style>