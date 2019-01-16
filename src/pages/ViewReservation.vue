<template>
    <container>
      <div slot="content">
     <div class="display-1 font-weight-regular">Your Reservation</div>

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