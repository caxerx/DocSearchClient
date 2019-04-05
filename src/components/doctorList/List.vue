<template>
  <div>
    <div v-if="!$apollo.loading">
      <div class="grey--text">{{searchDoctors.length}} matches found for: {{searchResultStr}}</div>
      <div v-for="(doctor,index) in searchDoctors" :key="index" style="margin-bottom:20px">
        <doctor-card :doctor="doctor"/>
      </div>
    </div>
  </div>
</template>


<script>
import { mapGetters, mapActions, mapState } from "vuex";
import DoctorCard from "./DoctorCard.vue";
import gql from "graphql-tag";


const searchDoctorsQuery = gql`
  query($criteria: SearchDoctorInput!) {
    searchDoctors(criteria: $criteria) {
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
`;

export default {
  data() {
    return {
      searchResult: "",
      test: "",
      show: false
    };
  },
  apollo: {
    searchDoctors: {
      query: searchDoctorsQuery,
      variables() {
        return {
          criteria: {
            search: this.keyword,
            language: this.language,
            specialty: this.specialty,
            gender: this.gender,
            location: this.location
          }
        };
      }
    }
  },
  components: {
    DoctorCard
  },

  computed: {
    ...mapGetters({
      getter: "getDoctorList"
    }),

    gender() {
      let g = this.getter.criteria.gender;
      if(g==="Male"){
        return "M"
      }else if(g==="Female"){
        return "F"
      }
      
      return g;
    },
    keyword() {
      return this.getter.criteria.keyword;
    },
    specialty() {
      return this.getter.criteria.specialty;
    },
    location() {
      return this.getter.criteria.location;
    },
    language() {
      return this.getter.criteria.language;
    },

    searchResultStr() {
      let gender = this.gender;
      if(gender==="M"){
        gender="Male";
      }else if(gender==="F"){
        gender = "Female";
      }
      let str =
        (this.specialty !== "" ? ", " + this.specialty : "") +
        (this.location !== "" ? ", " + this.location : "") +
        (this.language !== "" ? ", " + this.language : "") +
        (gender !== "" ? ", " + gender : "") +
        (this.keyword !== "" ? ", " + this.keyword : "");

      if (str[0] === ",") {
        str = str.substring(1);
      }
      return str;
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
    }
  }
};
</script>



