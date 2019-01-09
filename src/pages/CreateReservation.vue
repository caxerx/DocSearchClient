<template>
  <container>
    <div slot="content">
      <h1>Create Reservation</h1>
    <v-layout row wrap justify-space-around>
      <v-flex xs6>
        <reservation-form/>
      </v-flex>
      <v-flex xs6>
          <reservation-table/>
      </v-flex>
    </v-layout>
    </div>
  </container>

</template>


<script>
import ReservationForm from "@/components/createReservation/Form.vue";
import ReservationTable from "@/components/createReservation/Table.vue";
import Container from "@/components/Container";



export default {
  name: "App",
  components: {
    ReservationForm,
    ReservationTable,
    Container,
  },

  computed: {
    
  },

  data: () => ({})
};
</script>

