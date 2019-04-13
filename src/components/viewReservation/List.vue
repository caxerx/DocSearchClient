<template>
  <div>
    <loading-dialog :dialog="dialog"/>
    <div v-if="patient!=null&&reservationForDetail===null">
      <v-layout row wrap align-center>
        <v-flex sm4>
          <span class="grey--text" style="padding-left:16px" v-if="active===0">All Reservation List</span>
          <span
            class="grey--text"
            style="padding-left:16px"
            v-if="active===1"
          >Clinc Reservation List</span>
          <span
            class="grey--text"
            style="padding-left:16px"
            v-if="active===2"
          >Online Reservation List</span>
        </v-flex>
        <v-layout justify-end>
          <v-tabs v-model="active" color="transparent" slider-color="transparent">
            <v-tab>All</v-tab>
            <v-tab>Clinc</v-tab>
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
          v-for="(reservation, index) in clincArr(patient.reservations)"
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
import LoadingDialog from "@/components/dialog/loadingDialog.vue";
import ReservationDetail from "./ReservationDetail.vue";
import gql from "graphql-tag";

const reservationQuery = gql`
  query($id: ID!) {
    patient(id: $id) {
      reservations {
        id

        doctor {
          name
        }
        note
        startTime
        endTime
        workplace {
          name
        }
        status
        type
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
    if (this.getLogin === null) {
      this.$store.commit("setLoginDialog", true);
    }
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
    ReservationDetail,
    LoadingDialog
  },
  computed: {
    ...mapGetters({
      getCreateReservation: "getCreateReservation",
      getLogin: "getLogin"
    }),
    isCreateSuccess() {
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
    computedNewArr(arr) {
      let newArr = arr.slice();

      newArr.sort(function(a, b) {
        let atime = new Date(a.startTime);
        let btime = new Date(b.startTime);
        return btime - atime;
      });
      return newArr;
    },

    clincArr(reservations) {
      let newArr = reservations.filter(function(e) {
        return e.type === "clinc";
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
