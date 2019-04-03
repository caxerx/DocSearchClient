<template>
  <v-toolbar dark color="secondary" id="searchBar">
    <v-select :items="specialty" class="select white-text" label="specialty" @change="searchSpecialty"></v-select>
    <v-toolbar-title>
      <v-select :items="location" class="select" label="locations" @change="searchLocation"></v-select>
    </v-toolbar-title>
    <v-toolbar-title>
      <v-select :items="language" class="select" label="language" @change="searchLanguage"></v-select>
    </v-toolbar-title>
    <v-toolbar-title>
      <v-select
        :items="gender"
        class="select"
        label="gender"
        @change="searchGender"
      ></v-select>
    </v-toolbar-title>

    <v-spacer/>
    <v-text-field label="Name" @input="searchKeyWord"></v-text-field>
    <v-btn flat dark fab>
      <v-icon>search</v-icon>
    </v-btn>
  </v-toolbar>
</template>

<script>
import { mapGetters, mapActions, mapState } from "vuex";

export default {
  data() {
    return {
      specialty: ["General Pratice", "Cardiology", "Dentisry", "Dietetics"],
      location: ["Kowloon", "Hong Kong", "New Territories"],
      language: ["Chinese", "English"],
      gender: ["Male", "Female"]
    };
  },

  methods: {
    ...mapActions([
      "actionSearchGenderForDoctorList",
      "actionSearchSpecialtyForDoctorList",
      "actionSearchLocationForDoctorList",
      "actionSearchLanguageForDoctorList",
      "actionSearchKeyWordForDoctorList"
    ]),
    searchGender(val) {
      this.actionSearchGenderForDoctorList(val);
    },
    searchKeyWord(val) {
      this.actionSearchKeyWordForDoctorList(val);
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
