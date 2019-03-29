<template>
  <v-card>
    <v-layout row wrap>
      <v-flex xs4 sm2>
        <v-card-title>
          <img src="@/assets/icon-person.png" class="icon">
        </v-card-title>
      </v-flex>
      <v-flex xs6 sm7>
        <v-card-text>
          <h3 class="headline mb primary--text">Dr. {{doctor.name}}</h3>
        </v-card-text>
        <v-card-text>
          <div>{{doctor.a}}</div>
          <div>{{doctor.experience}}</div>
          <div>{{doctor.specialty}}</div>
        </v-card-text>
        <v-card-text>
          <h3 class="font-weight-bold">{{doctor.workplace.name}}</h3>
          <v-layout row wrap>
            <v-flex xs3 sm1>
              <img src="@/assets/image-icon.png" class="icon">
            </v-flex>
            <v-flex xs3 sm1>
              <img src="@/assets/image-icon.png" class="icon">
            </v-flex>
            <v-flex xs3 sm1>
              <img src="@/assets/image-icon.png" class="icon">
            </v-flex>
          </v-layout>
        </v-card-text>
      </v-flex>

      <v-flex sm3>
        <v-card-text>
          <div>
            <v-icon small>thumb_up</v-icon>98%
          </div>
          <div>
            <v-icon small>comment</v-icon>47 Feedback
          </div>
          <div>
            <v-icon small>place</v-icon>
            {{doctor.workplace.location}}
          </div>
          <div>
            <v-icon small>access_time</v-icon>Available Today
          </div>
        </v-card-text>
      </v-flex>

      <v-card-actions style="width:100%">
        <v-spacer></v-spacer>

        <v-btn color="primary" @click="setProfile(doctor)">
          <v-icon>person</v-icon>Profile
        </v-btn>
        <v-btn color="primary" @click="show=!show">
          <v-icon>local_phone</v-icon>Contact Clinc
        </v-btn>
        <v-btn color="primary" @click>
          <v-icon>add</v-icon>Create Reservation
        </v-btn>
      </v-card-actions>

      <!-- hidden contact -->
      <v-slide-y-transition>
        <v-card-text v-if="show">
          <hr>
          <div>
            <v-icon>local_phone</v-icon>
            {{doctor.phoneNo}}
          </div>
          <div>
            <v-icon>email</v-icon>
            {{doctor.email}}
          </div>
        </v-card-text>
      </v-slide-y-transition>
    </v-layout>
  </v-card>
</template>

<script>
import { mapGetters, mapActions, mapState } from "vuex";
export default {
  data() {
    return {
      show: false
    };
  },
  props: {
    // attribute name: Type
    doctor: Object,
    icon: String
  },
  methods: {
    ...mapActions(["actionSetDoctorForDoctorList"]),
    setProfile(doctor) {
      this.actionSetDoctorForDoctorList(doctor);
      this.$router.push("/viewDoctorInfo");
    }
  }
};
</script>

<style scoped>
.icon {
  width: 100%;
}
</style>