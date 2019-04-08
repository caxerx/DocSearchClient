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
          >{{reservation.startTime|moment("utc","dddd, MMMM, DD, YYYY, h:MM A")}}</div>
        </v-flex>
      </v-layout>
    </v-card>

    <v-card flat class="card">
      <v-container>
        <v-card-text class="text-sm-center">
          <img src="@/assets/icon-person.png" id="icon">
          <div class="grey--text">{{reservation.reserver.type}}</div>
          <div class="font-weight-black">Dr. {{reservation.reserver.name}}</div>
          <div class="grey--text">Clinc</div>
          <div class="font-weight-black">{{reservation.clinc}}</div>
        </v-card-text>

        <hr>
        <br>
        <v-card-actions >
          <v-flex sm4>
            <v-layout justify-center>
              <v-btn outline color="primary" @click="router('onlineConsultant')">Online Chat Now</v-btn>
            </v-layout>
          </v-flex>
          <v-flex sm4>
            <v-layout justify-center>
              <v-btn outline color="primary">Call Clinc</v-btn>
            </v-layout>
          </v-flex>
          <v-flex sm4>
            <v-layout justify-center>
              <v-btn outline color="primary">Get Directions</v-btn>
            </v-layout>
          </v-flex>
        </v-card-actions>
        <!-- <v-card-actions>
          <v-flex sm6>
            <v-layout justify-center>
              <v-btn outline color="primary">Call Clinc</v-btn>
            </v-layout>
          </v-flex>
          <v-flex sm6>
            <v-layout justify-center>
              <v-btn outline color="primary">Get Directions</v-btn>
            </v-layout>
          </v-flex>
        </v-card-actions> -->
      </v-container>
    </v-card>

    <v-card flat class="card" v-if="reservation.status==='Approval'">
      <!-- <v-card-actions> -->
      <v-btn flat color="primary" @click="router('onlineConsultant')">Online Chat Now</v-btn>
    </v-card>
    <v-card flat class="card">
      <!-- <v-card-actions> -->
      <v-btn flat color="error" @click="showCancelDialog()">Cancel Reservation</v-btn>
      <!-- </v-card-actions> -->
    </v-card>
    <v-card flat class="card">
      <v-card-text>
        <span class="grey--text">Reservation ID:</span>
        <br>
        <span class="font-weight-black">{{reservation.id}}</span>
      </v-card-text>
      <img src="@/assets/qr-code.png" id="qrCode">
    </v-card>
  </div>
</template>


<script>
import { mapGetters, mapActions, mapState } from "vuex";
export default {
  data() {
    return {
      search: ""
    };
  },
  props: {
    reservation: Object
  },
  components: {},
  computed: {
    ...mapGetters({})
  },

  methods: {

    router(linkStr) {
      this.$router.push("/" + linkStr);
    },
    back() {
      this.$emit("input", null);
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
  width: 200px;
}
</style>

