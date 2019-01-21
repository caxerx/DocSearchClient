<template>
  <!-- table -->
  <container>
    <div slot="content">
        <list/>
    </div>
  </container>
</template>

<script>
import { mapGetters, mapActions, mapState } from "vuex";
import Container from "@/components/Container";
import List from "@/components/medicineRecordList/List";
export default {
  name: "App",
  data() {
    return {
      search: ""
    };
  },
  components: {
    Container,
    List
  },
  computed: {
    ...mapGetters({
      getter: "getMedicineRecordList"
    }),

  },

  methods: {}
};
</script>

<style scoped>
td {
  word-wrap: break-word;
  word-break: break-all;
  width: 100px;


}
</style>
