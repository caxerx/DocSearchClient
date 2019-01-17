<template>
  <container>
    <div slot="content">
      <div class="display-1 font-weight-regular">Your Reservation</div>
      <v-toolbar dark color="primary" class="tableToolBar">
        <v-toolbar-title class="white--text">Reservation List</v-toolbar-title>

        <v-spacer></v-spacer>
        <v-flex xs5>
        <v-text-field
          color="white"
          v-model="search"
          append-icon="search"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
        </v-flex>
      </v-toolbar>
      <c-list/>
    </div>
  </container>
</template>

<script>
import Container from "@/components/Container.vue";
import cTable from "@/components/viewReservation/Table.vue";
import cList from "@/components/viewReservation/List.vue";

export default {
  data() {
    return {
      search:""
    };
  },

  components: {
    Container,
    cList
  }
};
</script>

<style>
</style>