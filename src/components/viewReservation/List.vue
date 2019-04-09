<template>
  <div>    
    <loading-dialog :dialog="dialog"/>
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

  </div>
</template>

<script>
import ReservationCard from "./ReservationCard";
import { mapGetters, mapActions, mapState } from "vuex";
import LoadingDialog from "@/components/dialog/loadingDialog.vue";
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
  created:function(){
     this.$apollo.queries.patient.refetch();
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
    ReservationDetail,
    LoadingDialog
  },
  computed: {
    ...mapGetters({
      getCreateReservation:"getCreateReservation",

    }),
    isCreateSuccess(){
      return this.getCreateReservation.isCreateSuccess;
    },
    dialog: {
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

  }
};
</script>


<style scoped>
.clickable {
  cursor: pointer;
}
</style>
