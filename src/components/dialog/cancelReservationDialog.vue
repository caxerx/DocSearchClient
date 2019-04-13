<template>
  <div class="text-xs-center">
    <v-dialog :value="dialog" width="500" @input="cancelDialog()">
      <v-card>
        <v-card-title class="headline grey lighten-2" primary-title>Cancel Reservation</v-card-title>

        <v-card-text>Do you want to delete this reservation?</v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            :disabled="loadingDialog"
            :loading="loadingDialog"
            flat
            @click="cancelReservation(reservationId)"
          >I accept</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapState } from "vuex";
import gql from "graphql-tag";

const removeReservationMutation = gql`
  mutation($id: ID!) {
    removeReservation(id: $id)
  }
`;
export default {
  data() {
    return {
      loadingDialog: false
    };
  },
  computed: {
    ...mapGetters({
      getDialog: "getDialog",
      getViewReservation: "getViewReservation"
    }),
    dialog() {
      return this.getDialog.cancelReservationDialog;
    },
    reservationId() {
      return this.getViewReservation.rid;
    }
  },
  props: {},
  methods: {
    ...mapActions(["actionSetIsCancelFromViewReservation"]),
    cancelDialog() {
      this.$store.commit("cancelReservationDialog", false);
    },
    cancelReservation(rid) {
      this.loadingDialog = true;
      this.$apollo
        .mutate({
          // Query
          mutation: removeReservationMutation,
          // Parameters
          variables: {
            id: rid
          }
        })
        .then(data => {
          // Result
          this.loadingDialog = false;
          this.actionSetIsCancelFromViewReservation(true);
          this.cancelDialog();
        })
        .catch(error => {
          // Error
          console.error(error);
        });
    }
  }
};
</script>
