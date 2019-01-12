<template>
  <!-- table -->
  <container>
    <div slot="content">
      <h1 class="font-weight-regular">Your Medicine Record</h1>
      <v-toolbar dark color="primary" class="tableToolBar">
        <v-flex xs2>
          <v-toolbar-title class="white--text">Medicine Record List</v-toolbar-title>
        </v-flex>
        <v-flex xs4>
          <v-text-field
            color="white"
            v-model="search"
            append-icon="search"
            label="Search"
            single-line
            hide-details
          ></v-text-field>
        </v-flex>

        <v-spacer></v-spacer>
      </v-toolbar>
      <v-data-table :headers="headers" :search="search" :items="contents" class="elevation-1">
        <template slot="items" slot-scope="props">
          <td>{{ props.item.no }}</td>
          <td class="text-xs-left">{{ props.item.clinc }}</td>
          <td class="text-xs-left">{{ props.item.date }}</td>
          <td class="text-xs-left">{{ props.item.startTime }}</td>
          <td class="text-xs-left">{{ props.item.endTime }}</td>
          <td class="text-xs-left">{{ props.item.symptom }}</td>

          <td class="text-xs-left">
            <div v-for="(medicine,index) in props.item.medicine " :key="index">
              {{ medicine }}
              <!-- <span v-if="index == props.item.medicine.length-1"></span>
              <span v-else>,</span> -->
            </div>
          </td>
          <td class="text-xs-left">{{ props.item.amount }}</td>
        </template>

        <v-alert
          slot="no-results"
          :value="true"
          color="error"
          icon="warning"
        >Your search for "{{ search }}" found no results.</v-alert>
      </v-data-table>
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

    headers() {
      return this.getter.headers;
    },
    contents() {
      return this.getter.contents;
    }
  },

  methods: {}
};
</script>

<style>
   td{
       word-wrap:break-word;word-break:break-all;
       width:100px;
       top:0px;

   }
</style>
