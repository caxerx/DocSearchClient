

<template >
  <v-form>
    <div id="title" class="display-3" style="text-align: center ">Search a Doctor</div>
    <v-text-field
      color="white"
      name="keywords"
      v-model="newKeyword"
      :append-outer-icon="'search'"
      box
      clear-icon="cancel"
      clearable
      label="Search Name/Location/Language/Gender/Clinc"
      type="text"
      @click:append="toggleMarker"
      @click:append-outer="sendMessage"
      @click:clear="clearMessage"
      style="padding-top: 50px"
    ></v-text-field>
    <v-layout wrap align-center>
      <v-flex xs12 sm3 d-flex class="selectbox">
        <v-select :items="specialty" label="specialty" outline name="specialty" v-model="newSpecialty" color="white" ></v-select>
      </v-flex>
      <v-flex xs12 sm3 d-flex class="selectbox">
        <v-select :items="location" label="location" outline name="location" color="white" v-model="newLocation" ></v-select>
      </v-flex>
      <v-flex xs12 sm3 d-flex class="selectbox">
        <v-select :items="language" label="language" outline name="Language" color="white" v-model="newLanguage" ></v-select>
      </v-flex>
      <v-flex xs12 sm3 d-flex class="selectbox">
        <v-select :items="gender" label="gender" outline name="Gender" color="white" v-model="newGender" ></v-select>
      </v-flex>
    </v-layout>
  </v-form>
</template>


<style scoped>
.selectbox {
  padding-right: 10px;
}
</style>

<script>
import Container from "@/components/Container";
import SmallContainer from "@/components/SmallContainer.vue";
import { mapGetters, mapActions, mapState } from "vuex";

export default {
  data: () => ({
    password: "Password",
    show: false,
    marker: true,
    specialty: ["General Pratice", "Cardiology", "Dentisry", "Dietetics"],
    location: ["Kowloon", "Hong Kong", "New Territories"],
    language: ["Chinese", "English"],
    gender: ["Male", "Female"],
    newSpecialty:"",
    newLocation:"",
    newLanguage:"",
    newGender:"",
    newKeyword:"",
  }),

  components: {
    Container,
    SmallContainer
  },

  methods: {
    ...mapActions([
      "actionSearchGenderForDoctorList",
      "actionSearchSpecialtyForDoctorList",
      "actionSearchLocationForDoctorList",
      "actionSearchLanguageForDoctorList",
      "actionSearchKeyWordForDoctorList"
    ]),
    toggleMarker() {
      this.marker = !this.marker;
    },
    sendMessage() {
      this.resetIcon();
      this.searchGender();
      this.searchSpecialty();
      this.searchKeyWord();
      this.searchLocation();
      this.searchLanguage();
      this.$router.push("/doctorList");
    },
    clearMessage() {
      this.newKeyword = "";
    },
    resetIcon() {
      this.iconIndex = 0;
    },
    changeIcon() {
      this.iconIndex === this.icons.length - 1
        ? (this.iconIndex = 0)
        : this.iconIndex++;
    },

    searchGender() {
      this.actionSearchGenderForDoctorList(this.newGender);
    },
    searchKeyWord() {
      this.actionSearchKeyWordForDoctorList(this.newKeyword);
    },
    searchSpecialty() {
      this.actionSearchSpecialtyForDoctorList(this.newSpecialty);
    },
    searchLocation() {
      this.actionSearchLocationForDoctorList(this.newLocation);
    },
    searchLanguage() {
      this.actionSearchLanguageForDoctorList(this.newLanguage);
    }
  }
};
</script>
