<template>
  <div>
    <cancel-dialog/>
    <c-list/>
  </div>
</template>

<script>
import cList from "@/components/viewReservation/List.vue";
import CancelDialog from "@/components/dialog/cancelReservationDialog"

export default {
  data() {
    return {
      search: ""
    };
  },

  components: {
    cList,
    CancelDialog
  }
};
</script>

<style>
</style>