<template>
  <v-toolbar dark color="secondary" id="searchBar" >
   
    <v-select :items="specialty" class="select white-text" label="specialty"></v-select>
    <v-toolbar-title>
      <v-select :items="location" class="select" label="locations"></v-select>
    </v-toolbar-title>
    <v-toolbar-title>
      <v-select :items="language" class="select" label="language"></v-select>
    </v-toolbar-title>
    <v-toolbar-title>
      <v-select :items="gender" item-text="name"  item-value="value" class="select" label="gender"  @change="searchGender"></v-select>
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
      gender: [
        {
          name: "Male",
          value: "M"
        },
        {
          name: "Female",
          value: "F"
        }
      ],
    };
  },

  methods:{
    ...mapActions(["actionSearchGenderForDoctorList","actionSearchKeyWordForDoctorList"]),
    searchGender(val){
     this.actionSearchGenderForDoctorList(val);
    },
    searchKeyWord(val){
      this.actionSearchKeyWordForDoctorList(val);
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
