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
          >{{reservation.startTime|moment("utc","dddd, MMMM, DD, YYYY, HH:mm A")}}</div>
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
        </v-card-text>

        <hr>
        <br>
        <v-card-actions v-if="reservation.type==='online'">
          <v-flex sm4>
            <v-layout justify-center>
              <v-btn outline color="primary" @click="router('onlineConsultant')">Online Chat Now</v-btn>
            </v-layout>
          </v-flex>
          <v-flex sm4>
            <v-layout justify-center>
              <v-btn outline color="primary">Call Clinic</v-btn>
            </v-layout>
          </v-flex>
          <v-flex sm4>
            <v-layout justify-center>
              <v-btn outline color="primary">Get Directions</v-btn>
            </v-layout>
          </v-flex>
        </v-card-actions>
        <v-card-actions v-else>
          <v-flex sm6>
            <v-layout justify-center>
              <v-btn outline color="primary">Call Clinic</v-btn>
            </v-layout>
          </v-flex>
          <v-flex sm6>
            <v-layout justify-center>
              <v-btn outline color="primary">Get Directions</v-btn>
            </v-layout>
          </v-flex>
        </v-card-actions>
      </v-container>
    </v-card>

    <v-card flat class="card" v-if="reservation.status==='Approval'">
      <!-- <v-card-actions> -->
      <v-btn flat color="primary" @click="router('onlineConsultant')">Online Chat Now</v-btn>
    </v-card>
    <v-card flat class="card">
      <!-- <v-card-actions> -->
      <v-btn
        v-if="reservation.status==='checked_in'||reservation.status==='expired'"
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

      <qrcode-vue v-if="reservation.type=='clinic'" id="qrCode" :value="base64Str"></qrcode-vue>
    </v-card>
  </div>
</template>


<script>
import { mapGetters, mapActions, mapState } from "vuex";
import QrcodeVue from 'qrcode.vue';

export default {
  data() {
    return {
      search: "",
      base64Str:"",
    };
  },
  props: {
    reservation: Object
  },
  created() {
    let dId = this.reservation.doctor.id;
    let pId = this.getLogin.id;
    let wId = this.reservation.workplace.id;
    let rId = this.reservation.id;
    let type = this.reservation.type;
    let s = this.convertToBase64(dId,pId,wId,rId,type);
    this.base64Str = s;
  },
  components: {
    QrcodeVue
  },
  computed: {
    ...mapGetters({
      getLogin:"getLogin"
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
    convertToBase64(dId, pId, wId, rId, type) {
      let str = '['+dId+', '+pId+', '+wId+', '+rId+', "'+type+'"]';
      console.log(str);
      return btoa(str);
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
  padding-left:15px;
}
</style>

