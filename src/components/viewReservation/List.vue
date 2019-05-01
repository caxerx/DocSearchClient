<template>
  <div>
    <v-progress-circular
      width="5"
      size="50"
      color="primary"
      indeterminate
      style="left: 50%;
      top: 50%;
      position: fixed"
      v-if="$apollo.loading"
    ></v-progress-circular>

    <div v-if="patient!=null&&reservationForDetail===null">
      <v-layout row wrap align-center>
        <v-flex sm4>
          <span class="grey--text" style="padding-left:16px" v-if="active===0">All Reservation List</span>
          <span
            class="grey--text"
            style="padding-left:16px"
            v-if="active===1"
          >Clinic Reservation List</span>
          <span
            class="grey--text"
            style="padding-left:16px"
            v-if="active===2"
          >Online Reservation List</span>
        </v-flex>
        <v-layout justify-end>
          <v-tabs v-model="active" color="transparent" slider-color="transparent">
            <v-tab>All</v-tab>
            <v-tab>Clinic</v-tab>
            <v-tab>Online</v-tab>
          </v-tabs>
        </v-layout>
      </v-layout>
      <div v-if="active===0">
        <div
          v-for="(reservation, index) in computedNewArr(patient.reservations)"
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
      <div v-if="active===1">
        <div
          v-for="(reservation, index) in clinicArr(patient.reservations)"
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
      <div v-if="active===2">
        <div
          v-for="(reservation, index) in onlineArr(patient.reservations)"
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
    </div>

    <div v-else-if="reservationForDetail!=null">
      <reservation-detail :reservation="reservationForDetail" v-model="reservationForDetail"/>
    </div>
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
        doctor {
          id
          name
          avatar
          phoneNo
          email
        }
        note
        startTime
        endTime
        workplace {
          id
          name
          location
        }
        status
        type
        consultation {
          id
        }
      }
    }
  }
`;
export default {
  data() {
    return {
      reservationForDetail: null,
      active: 0
    };
  },
  created: function() {
    this.$apollo.queries.patient.refetch();
  },
  apollo: {
    patient: {
      query: reservationQuery,
      variables() {
        return {
          id: this.getLogin.id
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
      getCreateReservation: "getCreateReservation",
      getLogin: "getLogin",
      getViewReservation: "getViewReservation"
    }),
    isCreateSuccess() {
      return this.getCreateReservation.isCreateSuccess;
    },
    isCancel() {
      return this.getViewReservation.isCancel;
    }
  },
  watch: {
    isCancel: function(val) {
      if (val && this.getViewReservation.isDetailPage) {
        this.actionSetIsCancelFromViewReservation(false);
        this.actionSetIsDetailPageFromViewReservation(false);
        this.$apollo.queries.patient.refetch();
        this.reservationForDetail = null;
      } else if (val) {
        this.$apollo.queries.patient.refetch();
        this.actionSetIsCancelFromViewReservation(false);
      }
    },
    dialog: function(val) {
      console.log(val);
    }
  },
  methods: {
    ...mapActions([
      "actionSetIsCancelFromViewReservation",
      "actionSetIsDetailPageFromViewReservation"
    ]),
    computedNewArr(arr) {
      let newArr = arr.slice();

      newArr.sort(function(a, b) {
        return b.id - a.id;
      });
      return newArr;
    },

    clinicArr(reservations) {
      let newArr = reservations.filter(function(e) {
        return e.type === "clinic";
      });

      return this.computedNewArr(newArr);
    },
    onlineArr(reservations) {
      let newArr = reservations.filter(function(e) {
        return e.type === "online";
      });

      return this.computedNewArr(newArr);
    }
  }
};
</script>


<style scoped>
.clickable {
  cursor: pointer;
}
</style>
