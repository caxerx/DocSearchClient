<template>
  <div v-if="!$apollo.loading">
    <div v-if="isEmptySearch">
      <div v-for="(doctor,index) in doctors" :key="index" style="margin-bottom:20px">
        <doctor-card :doctor="doctor"/>
      </div>
    </div>
    <div v-else>
      <div v-for="(doctor,index) in newDoctorList()" :key="index" style="margin-bottom:20px">
        <doctor-card :doctor="doctor"/>
      </div>
    </div>
  </div>
</template>


<script>
import { mapGetters, mapActions, mapState } from "vuex";
import DoctorCard from "./DoctorCard.vue";
import gql from "graphql-tag";

const doctorsQuery = gql`
  query {
    doctors {
      id
      name
      gender
      email
      phoneNo
      language
      specialty
      academic
      experience
      workplace {
        name
        location
      }
      feedbacks {
        id
        comment
        rating
      }
      averageRating
    }
  }
`;
export default {
  data() {
    return {
      search: [],
      test: "",
      show: false,

    };
  },

  components: {
    DoctorCard
  },

  computed: {
    ...mapGetters({
      getter: "getDoctorList"
    }),
    isEmptySearch() {
      if (
        this.getter.search.specialty === "" &&
        this.getter.search.location === "" &&
        this.getter.search.language === "" &&
        this.getter.search.gender === "" &&
        this.getter.search.searchKey === ""
      ) {
        console.log("true");
        return true;
      }

      return false;
    }
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

    newDoctorList() {
      let gender = this.getter.search.gender;
      let name = this.getter.search.searchKey;

      let mapDoctorList = this.doctors.map(function(doctor) {
        if (doctor.gender.includes(gender)) {
          return doctor;
        }

        return null;
      });
      return mapDoctorList;
    }
  },

  apollo: {
    doctors: {
      query: doctorsQuery
    }
  }
};
</script>


