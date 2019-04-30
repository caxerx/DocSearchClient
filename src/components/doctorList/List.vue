<template>
  <div>
    <v-progress-circular
      width="5"
      size="50"
      color="primary"
      indeterminate
      style="left: 48%;
      top: 50%;
      position: fixed"
      v-if="$apollo.loading"
    ></v-progress-circular>
    <div v-if="!$apollo.loading">
      <div class="grey--text">{{searchDoctors.length}} matches found for: {{searchResultStr}}</div>
     <div v-if="searchDoctors.length>1" class="headline font-weight-medium">  Recommended Doctor </div>
      <div style="margin-bottom:40px;">
        <doctor-card :doctor="searchDoctors[randomIndex]" :color="'#F5F5F5'" :isRecommend="true" />
      </div>
      <div
        v-for="(doctor,index) in pagination(page,searchDoctors)"
        :key="index"
        style="margin-bottom:20px"
      >
        <doctor-card v-if="doctor.id!==searchDoctors[randomIndex].id" :doctor="doctor"/>
      </div>

      <div class="text-xs-center" style="padding-bottom:30px" v-if="searchDoctors.length>0">
        <v-container>
          <v-layout justify-center>
            <v-flex xs8>
              <v-pagination v-model="page" :length="length"></v-pagination>
            </v-flex>
          </v-layout>
        </v-container>
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
      experience
      academic
      avatar
      workplace {
        id
        name
        location
        type
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
      searchResult: "",
      test: "",
      show: false,
      page: 1,
      perpage: 5,
      length: 1,
      randomIndex: 0
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
      },
      update(data) {
        this.length = Math.ceil(data.searchDoctors.length / this.perpage);
        this.random(data.searchDoctors.length);
        return data.searchDoctors;
      }
    }
  },

  watch: {
    page(val) {
      this.random(this.searchDoctors.length);
    }
  },
  components: {
    DoctorCard
  },

  computed: {
    ...mapGetters({
      getter: "getDoctorList",
      getDialog: "getDialog"
    }),

    loginDialog: {
      get() {
        return this.getDialog.login;
      },
      set(val) {
        this.loginDialog = val;
      }
    },

    gender() {
      let g = this.getter.criteria.gender;
      if (g === "Male") {
        return "M";
      } else if (g === "Female") {
        return "F";
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
      if (gender === "M") {
        gender = "Male";
      } else if (gender === "F") {
        gender = "Female";
      }

      let specialty = this.specialty;
      if (this.specialty.includes("_")) {
        specialty = this.specialty.split("_").join(" ");
      }
      let str =
        (this.specialty !== "" ? ", " + specialty : "") +
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
    pagination(page, arr) {
      let newArr = arr.slice();
      let from = page * this.perpage - this.perpage;
      let to = page * this.perpage;
      // Returns a random integer between min (include) and max (include)

      return newArr.slice(from, to);
    },

    random(length) {
      let max = length;
      this.randomIndex = parseInt(Math.random() * max);
      console.log(length,this.randomIndex);
    }
  }
};
</script>



