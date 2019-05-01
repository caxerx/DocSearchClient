<template>
  <v-card v-if="doctor!=null">
    <doctor-info-card :doctor="doctor" :color="color" >
      <div slot="doctorListBtn">
        <v-btn color="primary" @click="linkProfile(doctor.id)">
          <v-icon>person</v-icon>Profile
        </v-btn>
        <v-btn color="primary" @click="linkReservation(doctor.id)">
          <v-icon>add</v-icon>Create Reservation
        </v-btn>
      </div>
    </doctor-info-card>
  </v-card>
</template>

<script>
import { mapGetters, mapActions, mapState } from "vuex";
import DoctorInfoCard from "@/components/DoctorInfoCard";

export default {
  data() {
    return {
      show: false
    };
  },

  computed: {
    ...mapGetters({
      getLogin: "getLogin"
    }),
    countFeedBacks() {
      return this.doctor.feedbacks.length !== null
        ? this.doctor.feedbacks.length
        : 0;
    },
    computedAvatar() {
      if (this.doctor.avatar === "" || this.doctor.avatar === undefined) {
        return require("@/assets/icon-person.png");
      }
      return "https://dsapi.1lo.li/assets/avatars/" + this.doctor.avatar;
    }
  },
  components: {
    DoctorInfoCard
  },
  props: {
    doctor: Object,
    color:String,
  },
  methods: {
    ...mapActions(["actionSetDoctorForDoctorList"]),
    linkProfile(doctorId) {
      this.$router.push({
        name: "viewDoctorInfo",
        query: {
          id: doctorId
        }
      });
    },
    linkReservation(doctorId) {
      if (this.getLogin.id === null) {
        this.$store.commit("setLoginDialog", true);
      } else {
        this.$router.push({
          name: "createReservation",
          query: {
            id: doctorId
          }
        });
      }
    },
    newSpecialtyStr(specialty) {
      switch (specialty) {
        case "general_practice":
          return "General Practice";
          break;
        case "cardiology":
          return "Cardiology";
          break;
        case "dentistry":
          return "Dentistry";
          break;
        case "dietetics":
          return "Dietetics";
          break;
      }
    }
  }
};
</script>

<style scoped>
.icon {
  width: 100%;
}
</style>