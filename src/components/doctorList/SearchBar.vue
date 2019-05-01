<template>
  <v-toolbar dark color="secondary" id="searchBar">
    <v-select
      :items="specialty"
      class="select white-text"
      label="Specialty"
      item-text="text"
      item-value="value"
      @change="searchSpecialty"
      v-model="selected1"
    ></v-select>
    <v-toolbar-title>
      <v-select
        :items="location"
        class="select"
        label="Locations"
        @change="searchLocation"
        v-model="selected2"
      ></v-select>
    </v-toolbar-title>
    <v-toolbar-title>
      <v-select
        :items="language"
        class="select"
        label="Language"
        @change="searchLanguage"
        v-model="selected3"
      ></v-select>
    </v-toolbar-title>
    <v-toolbar-title>
      <v-select
        :items="gender"
        class="select"
        label="Gender"
        @change="searchGender"
        v-model="selected4"
      ></v-select>
    </v-toolbar-title>
    <v-btn flat small @click="reset()">Reset Filters</v-btn>
    <v-spacer/>
    <v-text-field label="Search" @change="searchKeyWord" v-model="keyword"></v-text-field>
    <v-btn flat dark fab>
      <v-icon @click="searchKeyWord">search</v-icon>
    </v-btn>
  </v-toolbar>
</template>

<script>
import { mapGetters, mapActions, mapState } from "vuex";

export default {
  data() {
    return {
      specialty: [
        {
          text: "General Practice",
          value: "General_Practice"
        },
        {
          text: "Cardiology",
          value: "Cardiology"
        },
        {
          text: "Dentistry",
          value: "Dentistry"
        },
        {
          text: "Dietetics",
          value: "Dietetics"
        }
      ],
      location: [
        "Central and Western",
        "Eastern",
        "Southern",
        "Wan Chai",
        "Sham Shui Po",
        "Kowloon City",
        "Kwun Tong",
        "Wong Tai Sin",
        "Yau Tsim Mong",
        "Islands",
        "Kwai Tsing",
        "North",
        "Sai Kung",
        "Sha Tin",
        "Tai Po",
        "Tsuen Wan",
        "Tuen Mun",
        "Yuen Long"
      ],
      language: ["Cantonese", "English", "Mandarin"],
      gender: ["Male", "Female"],
      selected1: "",
      selected2: "",
      selected3: "",
      selected4: "",
      keyword: ""
    };
  },

  methods: {
    ...mapActions([
      "actionSearchGenderForDoctorList",
      "actionSearchSpecialtyForDoctorList",
      "actionSearchLocationForDoctorList",
      "actionSearchLanguageForDoctorList",
      "actionSearchKeyWordForDoctorList",
      "actionResetSearchForDoctorList"
    ]),
    searchGender(val) {
      this.actionSearchGenderForDoctorList(val);
    },
    searchKeyWord() {
      this.actionSearchKeyWordForDoctorList(this.keyword);
    },
    searchSpecialty(val) {
      this.actionSearchSpecialtyForDoctorList(val);
    },
    searchLocation(val) {
      this.actionSearchLocationForDoctorList(val);
    },
    searchLanguage(val) {
      this.actionSearchLanguageForDoctorList(val);
    },

    reset() {
      this.selected1 = null;
      this.selected2 = null;
      this.selected3 = null;
      this.selected4 = null;
      this.keyword = null;
      this.actionResetSearchForDoctorList();
    }
  }
};
</script>

<style scoped>
#searchBar {
  position: sticky;
  top: 0px;
  z-index: 1;
}

.select {
  max-width: 180px;
}
</style>
