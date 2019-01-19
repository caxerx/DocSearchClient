<template>
  <!-- table -->
  <container>
    <div slot="content">
     
    </div>
  </container>
</template>

<script>
import { mapGetters, mapActions, mapState } from "vuex";
import Container from "@/components/Container";
export default {
  name: "App",
  data() {
    return {
      search: ""
    };
  },
  components: {
    Container
  },
  computed: {
    ...mapGetters({
      getter: "getMedicineRecord"
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
