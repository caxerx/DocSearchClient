<template>
  <div>
    <div v-if="!$apollo.loading">
      <div v-if="searchResultStr===''">
        <div class="grey--text">{{doctors.length}} matches found for: {{searchResultStr}}</div>
        <div v-for="(doctor,index) in doctors" :key="index" style="margin-bottom:20px">
          <doctor-card :doctor="doctor"/>
        </div>
      </div>
      <div v-else>
        <div class="grey--text">{{newDoctorList.length}} matches found for: {{searchResultStr}}</div>
        <div v-for="(doctor,index) in newDoctorList" :key="index" style="margin-bottom:20px">
          <doctor-card :doctor="doctor"/>
        </div>
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
      searchResult: "",
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
    }),

    gender() {
      return this.getter.search.gender;
    },
    keyword() {
      return this.getter.search.keyword;
    },
    specialty() {
      return this.getter.search.specialty;
    },
    location() {
      return this.getter.search.location;
    },
    language() {
      return this.getter.search.language;
    },
       newDoctorList() {
      return this.getter.newDoctorList;
    },

    searchResultStr() {
      this.actionUpdateDoctorListForDoctorList(this.doctors);
      let str =
        (this.specialty !== "" ? ", " + this.specialty : "") +
        (this.location !== "" ? ", " + this.location : "") +
        (this.language !== "" ? ", " + this.language : "") +
        (this.gender !== "" ? ", " + this.gender : "") +
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
    ...mapActions([
      "actionSetDoctorForDoctorList",
      "actionUpdateDoctorListForDoctorList"
    ]),
    getImgPath(imgName) {
      let url = "@/assets/" + imgName;
      return url;
    },

  },

  apollo: {
    doctors: {
      query: doctorsQuery
    }
  }
};
</script>



