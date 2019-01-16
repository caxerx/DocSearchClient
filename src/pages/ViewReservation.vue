<template>
    <container>
      <div slot="content">
     <h1 class="font-weight-regular ">Your Reservation</h1>

        <c-list/>
      </div>
    </container>

</template>

<script>
import Container from '@/components/Container.vue'
import cTable from '@/components/viewReservation/Table.vue'
import cList from '@/components/viewReservation/List.vue'

export default {
  data() {
    return {
     
    };
  },
  
  components:{
    Container,
    cList
  }
};
</script>

<style>


</style>