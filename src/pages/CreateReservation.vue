<template>
  <container>
    <div slot="content">
    <v-layout row wrap justify-space-around>
      <v-flex sm8>
        <reservation-form/>
      </v-flex>
      <v-flex sm4 >
          <confirm-form/>
      </v-flex>
    </v-layout>
    </div>
  </container>

</template>


<script>
import ReservationForm from "@/components/createReservation/ReservationForm.vue";
import ConfirmForm from "@/components/createReservation/ConfirmForm.vue";
import Container from "@/components/Container";



export default {
 
  components: {
    ReservationForm,
    ConfirmForm,
    Container,
  },

  computed: {
    
  },

  data: () => ({})
};
</script>

