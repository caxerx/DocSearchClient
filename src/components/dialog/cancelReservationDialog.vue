<template>
  <div class="text-xs-center">
    <v-dialog :value="dialog" width="500" @input="cancelDialog()">
      <v-card>
        <v-card-title class="headline grey lighten-2" primary-title>Cancel Reservation</v-card-title>

        <v-card-text>Do you want to delete this reservation?</v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" flat @click>I accept</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapState } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      getDialog: "getDialog"
    }),
    dialog() {
      return this.getDialog.cancelReservationDialog;
    }
  },
  props: {},
  methods: {
    cancelDialog() {
      this.$store.commit("cancelReservationDialog", false);
    }
  }
};
</script>
