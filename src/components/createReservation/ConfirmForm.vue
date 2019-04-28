<template>
  <div>
    <loading-dialog :dialog="dialog"/>
    <div id="cForm">
      <h1 class="font-weight-regular headline">Confirm Reservation</h1>
      <br>
      <v-form ref="form" v-model="valid" lazy-validation>
        <div class="body-2">Date:</div>
        <v-text-field solo disabled v-model="date" :rules="dateRules"></v-text-field>
        <div class="body-2">Time:</div>
        <v-text-field solo disabled v-model="time" :rules="timeRules"></v-text-field>
        <div class="body-2">Note:</div>
        <v-text-field solo v-model="note" hint="reservation reason or other things"></v-text-field>
        <div class="body-2">Type:</div>
        <v-radio-group v-model="type" :rules="typeRules" :mandatory="false">
          <v-radio label="Clinic Consultation" value="clinic"></v-radio>
          <v-radio label="Online Consultation" value="online"></v-radio>
        </v-radio-group>

        <v-btn block color="primary" @click="createReservation()">Confirm</v-btn>
      </v-form>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapState } from "vuex";
import LoadingDialog from "@/components/dialog/loadingDialog.vue";
import gql from "graphql-tag";

import axios from "axios";
let moment = require("moment");

const createReservationMutation = gql`
  mutation($data: CreateReservationInput!) {
    createReservation(data: $data) {
      id
    }
  }
`;

export default {
  data() {
    return {
      valid: true,
      search: "",
      type: "",
      note: "",
      timeRules: [v => !!v || "Time is required"],
      dateRules: [v => !!v || "Date is required"],
      typeRules: [v => !!v || "Type is required"],
      loadingDialog: false
    };
  },
  apollo: {},
  components: {
    LoadingDialog
  },
  computed: {
    ...mapGetters({
      getter: "getCreateReservation"
    }),

    date() {
      return this.getter.date;
    },
    time() {
      if (this.getter.start === "" || this.getter.end === "") {
        return "";
      }
      return this.getter.start + " - " + this.getter.end;
    },
    dialog: {
      get() {
        return this.loadingDialog;
      },
      set(val) {
        this.dialog = val;
      }
    }
  },

  methods: {
    ...mapActions(["actionSetReservationTypeAndNoteForCreateReservation"]),
    createReservation() {
      if (this.$refs.form.validate()) {
        let startDateFormat = this.date + " " + this.getter.start;
        let endDateFormat = this.date + " " + this.getter.end;
        let startTime = moment.utc(startDateFormat).format();
        let endTime = moment.utc(endDateFormat).format();
        let moreinf = {
          type: this.type,
          note: this.note,
          startTime: startTime,
          endTime: endTime
        };

        this.actionSetReservationTypeAndNoteForCreateReservation(moreinf);
        this.$apollo
          .mutate({
            // Query
            mutation: createReservationMutation,
            // Parameters

            variables: {
              data: this.getter.reservation
            }
          })
          .then(data => {
            // Result
            console.log(data);
            this.$swal
              .fire({
                title: "Appointment Requested!",
                text:
                  "Your Appointment is requested, you will recieve message or phone call from clinic if yourappointment Is confirmed",
                type: "success",
                confirmButtonText: "Back to Home!"
              })
              .then(result => {
                if(result.value){
                  this.$router.push("/");
                }
              });
          })
          .catch(error => {
            // Error
            console.error(error);
          });
      }
    }
  }
};
</script>



<style scoped>
#cForm {
  padding-left: 5%;
}
</style>

