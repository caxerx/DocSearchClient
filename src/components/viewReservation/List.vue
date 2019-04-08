<template>
  <div>
    <v-layout row justify-center>
      <v-dialog v-model="queryDialog" persistent width="300">
        <v-card color="primary" dark>
          <v-card-text>
            Please stand by
            <v-progress-linear indeterminate color="white" class="mb-0"></v-progress-linear>
          </v-card-text>
        </v-card>
      </v-dialog>
    </v-layout>
    <div v-if="patient!=null&&reservationForDetail===null">
      <v-card-text class="grey--text">Reservation List</v-card-text>
      <div
        v-for="(reservation, index) in patient.reservations"
        :key="index"
        style="margin-bottom:2%;"
      >
        <reservation-card
          :reservation="reservation"
          class="clickable"
          v-model="reservationForDetail"
        />
      </div>
    </div>

    <div v-else-if="reservationForDetail!=null">
      <reservation-detail :reservation="reservationForDetail" v-model="reservationForDetail"/>
    </div>

    <template>
      <div class="text-xs-center">
        <v-dialog :value="dialog" width="500" @input="cancelDialog()">
          <v-card>
            <v-card-title class="headline grey lighten-2" primary-title>Cancel Reservation</v-card-title>

            <v-card-text>Do you want to delete this reservation?</v-card-text>

            <v-divider></v-divider>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="primary" flat @click="cancelDialog()">I accept</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </div>
    </template>
  </div>
</template>

<script>
import ReservationCard from "./ReservationCard";
import { mapGetters, mapActions, mapState } from "vuex";
import ReservationDetail from "./ReservationDetail.vue";
import gql from "graphql-tag";

const reservationQuery = gql`
  query($id: ID!) {
    patient(id: $id) {
      reservations {
        id
        reserver {
          name
        }
        note
        startTime
        endTime
      }
    }
  }
`;
export default {
  data() {
    return {
      reservationForDetail: null
    };
  },

  apollo: {
    patient: {
      query: reservationQuery,
      variables() {
        return {
          id: this.$cookie.get("userId")
        };
      }
    }
  },
  components: {
    ReservationCard,
    ReservationDetail
  },
  computed: {
    ...mapGetters({
      getDialog: "getDialog"
    }),

    dialog() {
      return this.getDialog.normal;
    },
    queryDialog: {
      get() {
        if (this.$apollo.loading) {
          return true;
        } else {
          return false;
        }
      },
      set(val) {
        this.dialog = val;
      }
    }
  },

  methods: {
    ...mapActions(["actionCloseDialog"]),

    cancelDialog() {
      this.actionCloseDialog("normal");
    }
  }
};
</script>


<style scoped>
.clickable {
  cursor: pointer;
}
</style>
