<template>
  <v-toolbar dark color="secondary" id="searchBar">
    <v-select :items="specialty" class="select white-text" label="specialty"></v-select>
    <v-toolbar-title>
      <v-select :items="location" class="select" label="locations"></v-select>
    </v-toolbar-title>
    <v-toolbar-title>
      <v-select :items="language" class="select" label="language"></v-select>
    </v-toolbar-title>
    <v-toolbar-title>
      <v-select :items="gender" class="select" label="gender"></v-select>
    </v-toolbar-title>


    <v-spacer/>
      <v-text-field label="Search" ></v-text-field>
      <v-btn flat dark fab>
      <v-icon >search</v-icon>
    </v-btn>

  </v-toolbar>
</template>

<script>
export default {
  data() {
    return {
      search: "",
      specialty: ["General Pratice", "Cardiology", "Dentisry", "Dietetics"],
      location: ["Kowloon", "Hong Kong", "New Territories"],
      language: ["Chinese", "English"],
      gender: ["Male", "Female"]
    };
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
