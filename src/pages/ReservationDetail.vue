<template>
  <div>
    <v-card flat>
      <div class="grey--text text-sm-center">Date and Time</div>
      <div class="text-sm-center font-weight-black">{{computedDate}}</div>
    </v-card>

    <v-card flat class="card">
      <v-container>
        <v-card-text class="text-sm-center">
          <img src="@/assets/icon-person.png" id="icon">
            <div class="grey--text ">{{doctor.position}}</div>
        <div class="font-weight-black">{{doctor.name}}</div>
        <div class="grey--text">Clinc</div>
        <div class="font-weight-black">{{doctor.clinc}}</div>
        </v-card-text>
      
        <hr>
        <br>
        <v-card-actions>
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
        </v-card-actions>
      </v-container>
    </v-card>

    <v-card flat class="card">
        <v-card-text ><span class="grey--text">Reservation ID:</span><br>
           <span class="font-weight-black"> {{detail.id}}</span>
            
        </v-card-text>
             <img src="@/assets/qr-code.png" id="qrCode">
        
    </v-card>
       <v-card flat class="card">
        <v-card-actions>
            <v-btn outline color="error">Cancel Reservation</v-btn>
        </v-card-actions>
        
    </v-card>
  </div>

</template>


<script>
import { mapGetters, mapActions, mapState } from "vuex";
export default {
  name: "App",
  data() {
    return {
      search: ""
    };
  },
  components: {},
  computed: {
    ...mapGetters({
      getter: "getReservationDetail"
    }),
    detail() {
      return this.getter.detail;
    },

    computedDate() {
      let options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
      };
      let dateStr =
        this.getter.detail.date + "T" + this.getter.detail.startTime;
      let d = new Date(dateStr);

      return (
        d.toLocaleDateString("en-US", options) +
        ", " +
        d.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" })
      );
    },

    doctor() {
      return this.getter.doctor;
    }
  },

  methods: {}
};
</script>

<style scoped>
.card {
  margin-top: 3px;
}
#icon {
  width: 40px;
}

#qrCode{
    width:200px;
}
</style>

