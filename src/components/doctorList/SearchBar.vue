<template>
  <v-toolbar  flat dark id="searchBar">
     

      <v-select :items="specialty"  class="select white-text" label="specialty" ></v-select>
    <v-toolbar-title>
      <v-select :items="specialty" class="select" label="locations" ></v-select>
    </v-toolbar-title>
    <v-toolbar-title>
      <v-select :items="specialty" class="select" label="language" ></v-select>
    </v-toolbar-title>
    <v-toolbar-title>
      <v-select :items="specialty" class="select" label="gender" ></v-select>
    </v-toolbar-title>
    <v-spacer/>
     <v-toolbar-title>
      <v-text-field label="Search"  append-icon="search"></v-text-field>
    </v-toolbar-title>
    
  </v-toolbar>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      search: "",
      specialty: ["General Pratice", "Cardiology", "Dentisry", "Dietetics"]
    };
  }
};
</script>

<style scoped>
#searchBar {
  position: sticky;
  top: 0px;
  z-index: 100;
  height:50px;

}

.select{
    max-width: 180px;
}


</style>
