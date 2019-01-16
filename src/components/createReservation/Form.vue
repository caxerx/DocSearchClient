<template>
  <div>
    <v-toolbar dark color="primary">
      <v-toolbar-title class="white--text">Select Form</v-toolbar-title>
    </v-toolbar>
    <v-card>
      <v-card-text>
      <v-form ref="form" v-model="valid" lazy-validation id="createReservationForm">
        <v-text-field prepend-icon="person" v-model="doctorName" label="Doctor" disabled></v-text-field>
        <date-picker/>
        <v-text-field
          prepend-icon="access_time"
          v-model="time"
          label="Time"
          :checked="time"
          disabled
        ></v-text-field>
        <v-btn color="primary" :disabled="!valid" @click="submit">submit</v-btn>
        <v-btn color="primary" @click="clear">clear</v-btn>
      </v-form>
      </v-card-text>
      <br>
    </v-card>
  </div>
</template>

<script>
import axios from "axios";
import DatePicker from "./DatePicker";
import { mapGetters, mapActions, mapState } from "vuex";

export default {
  data: () => ({
    doctorName: "michael",
    valid: true,
    name: "",
    nameRules: [
      v => !!v || "Name is required",
      v => (v && v.length <= 10) || "Name must be less than 10 characters"
    ],
    email: "",
    emailRules: [
      v => !!v || "E-mail is required",
      v => /.+@.+/.test(v) || "E-mail must be valid"
    ],
    select: null,
    items: ["Item 1", "Item 2", "Item 3", "Item 4"],
    checkbox: false
  }),

  created:function(){
    this.actionSetDefaultReservationForCreateReservation();
  },

  computed: {
    ...mapGetters({
      getter: "getCreateReservation"
    }),

    time() {
      return this.getter.time;
    }
  },

  components: {
    DatePicker
  },

  methods: {
    ...mapActions(["actionReset","actionSetDefaultReservationForCreateReservation"]),

    submit() {
      if (this.$refs.form.validate()) {
        // Native form submission is not yet supported
        axios.post("/api/submit", {
          name: this.name,
          email: this.email,
          select: this.select,
          checkbox: this.checkbox
        });
      }
    },
    clear() {
      this.actionReset();
    }
  }
};
</script>

<style>
#createReservationForm {
  margin-right: 3%;
  margin-left: 1%;
}
</style>
