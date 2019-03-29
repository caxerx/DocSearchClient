<template>
  <div>
    <!-- {{hello}} -->
    <div v-for="(doctor,index) in doctors" :key="index" style="margin-bottom:20px">
      <doctor-card :doctor="doctor"/>
    </div>
  </div>
</template>


<script>
import { mapGetters, mapActions, mapState } from "vuex";
import DoctorCard from "./DoctorCard.vue";
import gql from "graphql-tag";

export default {
  data() {
    return {
      search: "",
      test: "",
      show: false
    };
  },

  components: {
    DoctorCard
  },

  computed: {
    ...mapGetters({
      getter: "getDoctorList"
    })
  },

  //   created: function() {
  //     this.actionInitForDoctorList();
  //   },

  methods: {
    ...mapActions(["actionSetDoctorForDoctorList"]),
    getImgPath(imgName) {
      let url = "@/assets/" + imgName;
      return url;
    },
    router(linkStr) {
      this.$router.push("/" + linkStr);
    },

    setProfile(doctor) {
      this.actionSetDoctorForDoctorList(doctor);
      this.$router.push("/viewDoctorInfo");
    }
  },

  apollo: {
    doctors: gql`
      query {
        doctors {
          id
          name
          gender
          email
          phoneNo
          dob
          hkid
          type
          language
          specialty
          workplace {
            id
            name
            location
            type
          }
        }
      }
    `
  }
};
</script>


