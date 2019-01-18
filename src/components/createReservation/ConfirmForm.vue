<template>
  <div id="cForm">
    <h1 class="font-weight-regular headline">Confirm Reservation</h1>
    <br>
    <v-form>
      <div class="body-2">Date:</div>
      <v-text-field solo disabled v-model="date"></v-text-field>
      <div class="body-2">Time:</div>
      <v-text-field solo disabled v-model="time"></v-text-field>
      <v-btn block color="primary">Confirm</v-btn>
    </v-form>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapState } from "vuex";
export default {
  name: "App",
  data() {
    return {
      search: ""
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
        
      return this.getter.time;
    }
  },

  methods: {}
};
</script>



<style scoped>
#cForm {
  padding-left: 5%;
}
</style>

