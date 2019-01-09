<template>
    <container>
      <div slot="content">
      <h1 >Your Reservation</h1><br/>

        <c-table/>
      </div>
    </container>

</template>

<script>
import Container from '@/components/Container.vue'
import cTable from '@/components/viewReservation/Table.vue'

export default {
  data() {
    return {
     
    };
  },
  
  components:{
    Container,
    cTable
  }
};
</script>

<style>


</style>