<template>
  <div>
    
    <c-list/>
  </div>
</template>

<script>
import Container from "@/components/Container.vue";
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