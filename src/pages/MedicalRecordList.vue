<template>
  <div>
    <v-card-text>
      
      <span class="grey--text">Medical Record List</span>
      <!-- <v-text-field id="search" label="Append" append-icon="place"></v-text-field> -->
    </v-card-text>

    <list/>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapState } from "vuex";
import Container from "@/components/Container";
import List from "@/components/medicalRecordList/List";
export default {

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
      getter: "getMedicalRecordList"
    })
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
