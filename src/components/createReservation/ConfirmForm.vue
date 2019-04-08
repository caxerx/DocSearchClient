<template>
  <div id="cForm">
    <h1 class="font-weight-regular headline">Confirm Reservation</h1>
    <br>
    <v-form>
      <div class="body-2">Date:</div>
      <v-text-field solo disabled v-model="date"></v-text-field>
      <div class="body-2">Time:</div>
      <v-text-field solo disabled v-model="time"></v-text-field>
      <div class="body-2">Note:</div>
      <v-text-field solo v-model="note" hint="reservation reason or other things"></v-text-field>
      <div class="body-2">Type:</div>
      <v-radio-group v-model="type" :mandatory="false">
        <v-radio label="Clinc Reservation" value="clincReservation"></v-radio>
        <v-radio label="Online Consultation" value="onlineConsultation"></v-radio>
      </v-radio-group>

      <v-btn block color="primary" @click>Confirm</v-btn>
    </v-form>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapState } from "vuex";



export default {
  data() {
    return {
      search: "",
      type: "",
      note: ""
    };
  },

  components: {},
  computed: {
    ...mapGetters({
      getter: "getCreateReservation"
    }),

    date() {
      return this.getter.date;
    },
    time() {
      return this.getter.startTime + " - " + this.getter.endTime;
    }
  },

  methods: {
    createReservation() {
      console.log(this.date + " " + this.time);
    }
  }
};
</script>



<style scoped>
#cForm {
  padding-left: 5%;
}
</style>

