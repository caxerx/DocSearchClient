<template>
  <div>
    <v-menu
      :close-on-content-click="false"
      v-model="menu1"
      :nudge-right="40"
      lazy
      transition="scale-transition"
      offset-y
      full-width
      max-width="290px"
      min-width="290px"
    >
      <v-text-field
        slot="activator"
        v-model="reservationDate"
        label="Date (read only text field)"
        hint="YYYY-MM-DD format"
        persistent-hint
        prepend-icon="event"
        readonly
      ></v-text-field>
      <v-date-picker
        v-model="reservationDate"
        :min="minDate"
        no-title
        @input="close"
   
      ></v-date-picker>
    </v-menu>
  </div>
</template>


<script>
import { mapGetters, mapActions, mapState } from "vuex";
let moment = require("moment");
export default {
  data: () => ({
    menu1: false,
    menu2: false,
    arrayEvents: null,
    minDate:moment(new Date()).format("YYYY-MM-DD")
  }),

  computed: {
    $state() {
      return this.$store.state.createReservation.createReservation;
    },

    reservationDate: {
      get() {
        console.log(this.$state.date)
        return this.$state.date;
      },
      set(date) {
        this.$store.commit("setDateForCreateReservation", date);
      }
    },

    ...mapGetters({}),

    eventColor() {
      return function(date) {
        var days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        const [, , day] = date.split("-");
        var color = days.includes(parseInt(day)) ? "red" : "green";
        return color;
      };
    }
  },
  methods: {
    close() {
      this.menu1 = false;
      this.menu2 = false;
    },

    functionEvents(date) {
      const [, , day] = date.split("-");
      return true;
    },
    formatDate(newDate) {
      if (!newDate) return null;

      const [year, month, day] = newDate.split("-");
      return `${year}-${month}-${day}`;
    }
  }
};
</script>