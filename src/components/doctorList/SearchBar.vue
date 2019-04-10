<template>
  <v-toolbar dark color="secondary" id="searchBar">
    <v-select
      :items="specialty"
      class="select white-text"
      label="specialty"
      @change="searchSpecialty"
      v-model="selected"
    ></v-select>
    <v-toolbar-title>
      <v-select :items="location" class="select" label="locations" @change="searchLocation"  v-model="selected"></v-select>
    </v-toolbar-title>
    <v-toolbar-title>
      <v-select :items="language" class="select" label="language" @change="searchLanguage"  v-model="selected"></v-select>
    </v-toolbar-title>
    <v-toolbar-title>
      <v-select :items="gender" class="select" label="gender" @change="searchGender"  v-model="selected"></v-select>
    </v-toolbar-title>
    <v-btn flat small @click="reset()">Reset Filters</v-btn>
    <v-spacer/>
    <v-text-field label="Name"  @change="searchKeyWord" v-model="keyword"></v-text-field>
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
      specialty: ["General_Practice", "Cardiology", "Dentisry", "Dietetics"],
      location: ["Kowloon", "Hong Kong", "New Territories"],
      language: ["Chinese", "English"],
      gender: ["Male", "Female"],
      selected:"",
      keyword:"",
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
      this.selected = undefined
      this.keyword = undefined
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
