<template>
  <div>
     <v-card-text class="grey--text">Reservation List</v-card-text>
    <c-list/>
  </div>
</template>

<script>
import Container from "@/components/Container.vue";
import cTable from "@/components/viewReservation/Table.vue";
import cList from "@/components/viewReservation/List.vue";

export default {
  data() {
    return {
      search: ""
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