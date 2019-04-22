<template>
  <div>
    <loading-dialog :dialog="dialog"/>
    <div v-if="!$apollo.loading">
      <div class="grey--text">{{searchDoctors.length}} matches found for: {{searchResultStr}}</div>
      <div
        v-for="(doctor,index) in pagination(page,searchDoctors)"
        :key="index"
        style="margin-bottom:20px"
      >
        <doctor-card :doctor="doctor"/>
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
import LoadingDialog from "@/components/dialog/loadingDialog.vue";

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
      length: 1
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
        return data.searchDoctors;
      }
    }
  },
  components: {
    LoadingDialog,
    DoctorCard
  },

  computed: {
    ...mapGetters({
      getter: "getDoctorList",
      getDialog: "getDialog"
    }),

    dialog: {
      get() {
        if (this.$apollo.loading) {
          return true;
        } else {
          return false;
        }
      },
      set(val) {
        this.dialog = val;
      }
    },
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
      if(this.specialty.includes("_")){
        specialty =  this.specialty.split("_").join(" ")
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
    getImgPath(imgName) {
      let url = "@/assets/" + imgName;
      return url;
    },
    pagination(page, arr) {
      let newArr = arr.slice();
      let from = page * this.perpage - this.perpage;
      let to = page * this.perpage;
      return newArr.slice(from, to);
    }
  }
};
</script>



