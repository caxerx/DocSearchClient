<template>
  <div>
    <v-card flat>
      <v-layout row wrap>
        <v-flex sm1>
          <v-btn fab flat small @click="back()">
            <v-icon>arrow_back</v-icon>
          </v-btn>
        </v-flex>
        <v-flex sm10 style="padding-top:3px">
          <div class="grey--text text-sm-center">Date and Time</div>
          <div
            class="text-sm-center font-weight-black"
          >{{reservation.startTime|moment("utc"," DD MMMM YYYY, h:mm A")}}</div>
        </v-flex>
      </v-layout>
    </v-card>

    <v-card flat class="card">
      <v-container>
        <v-card-text class="text-sm-center">
          <img :src="computedAvatar(reservation.doctor.avatar)" id="icon">
          <div class="grey--text">{{reservation.doctor.type}}</div>
          <div class="font-weight-black">Dr. {{reservation.doctor.name}}</div>
          <div class="grey--text">Clinic</div>
          <div class="font-weight-black">{{reservation.workplace.name}}</div>

          <div class="font-weight-light body-1">{{reservation.workplace.location}}</div>
          <div class="font-weight-light body-1">{{reservation.doctor.phoneNo}}</div>
          <div class="font-weight-light body-1">{{reservation.doctor.email}}</div>
        </v-card-text>
      </v-container>
    </v-card>
    <v-card flat class="card">
    </v-card>
    <v-card flat class="card">
      <!-- <v-card-actions> -->

      <v-btn
        v-if="reservation.status==='finished'"
        @click.stop="nothing()"
        flat
        color="grey"
      >Cancel Reservation</v-btn>
      <v-btn v-else flat color="error" @click="showCancelDialog(reservation)">Cancel Reservation</v-btn>
      <!-- </v-card-actions> -->
    </v-card>
    <v-card flat class="card">
      <v-card-text>
        <div class="grey--text">Reservation ID:</div>
        <div class="font-weight-black">{{reservation.id}}</div>
        <span v-if="reservation.note!==''">
          <div class="grey--text">Reservation Note:</div>
          <div class="font-weight-black">{{reservation.note}}</div>
        </span>
      </v-card-text>

      <div v-if="reservation.status=='approved'&&reservation.type=='clinic' ">
        {{convertToBase64()}}
        <qrcode-vue id="qrCode" :value="base64Str"></qrcode-vue>
      </div>
    </v-card>
  </div>
</template>


<script>
import { mapGetters, mapActions, mapState } from "vuex";
import QrcodeVue from "qrcode.vue";

export default {
  data() {
    return {
      search: "",
      base64Str: ""
    };
  },
  props: {
    reservation: Object
  },

  components: {
    QrcodeVue
  },
  computed: {
    ...mapGetters({
      getLogin: "getLogin"
    })
  },

  methods: {
    ...mapActions([
      "actionSetIdFromViewReservation",
      "actionSetIsDetailPageFromViewReservation"
    ]),
    router(linkStr) {
      this.$router.push("/" + linkStr);
    },
    back() {
      this.$emit("input", null);
    },
    showCancelDialog(reservation) {
      this.actionSetIsDetailPageFromViewReservation(true);
      this.actionSetIdFromViewReservation(reservation.id);
      this.$store.commit("cancelReservationDialog", true);
    },
    computedAvatar(avatar) {
      if (avatar === "" || avatar === undefined) {
        return require("@/assets/icon-person.png");
      }
      return "https://dsapi.1lo.li/assets/avatars/" + avatar;
    },
    nothing() {},

    convertToBase64() {
      let dId = this.reservation.doctor.id;
      let pId = this.getLogin.id;
      let wId = this.reservation.workplace.id;
      let rId = this.reservation.id;
      let type = this.reservation.type;
      let str =
        "[" + dId + ", " + pId + ", " + wId + ", " + rId + ', "' + type + '"]';
      this.base64Str = btoa(str);
    }
  }
};
</script>

<style scoped>
.card {
  margin-top: 3px;
}
#icon {
  width: 40px;
}

#qrCode {
  width: 300px;
  padding-left: 15px;
}
</style>

