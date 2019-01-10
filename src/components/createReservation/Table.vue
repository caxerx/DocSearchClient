<template>
  <div>
     <v-toolbar dark color="primary">
   <v-icon>date_range</v-icon>

    <v-toolbar-title class="white--text">{{date}}</v-toolbar-title>
     </v-toolbar>
    <v-data-table
      :items="timeList"
      id="createResTable"
      class="elevation-1"
      :headers="headers"
      hide-actions
    >
      <template slot="items" slot-scope="props">
        <td class="text-xs-left">{{ props.item.startTime }}</td>
        <td class="text-xs-left">{{ props.item.endTime }}</td>
        <td
          class="text-xs-left"
          v-if="props.item.status"
          @click="selectTime(props.item.startTime,props.item.endTime)"
        >
          <v-btn color="info">available</v-btn>
        </td>
        <td class="text-xs-left" v-else>
          <v-btn disabled>available</v-btn>
        </td>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapState } from "vuex";
export default {
  data() {
    return {};
  },

  computed: {
    ...mapGetters({
      getter:"getCreateReservation"
    }),

    date(){
      return this.getter.date;
    },
    timeList(){
      return this.getter.timeList;
    },
    headers(){
      return this.getter.headers;
    }


    // rowsPerPageItems(){
    //   return [ 9, 20, 30, { "text": "$vuetify.dataIterator.rowsPerPageAll", "value": -1 } ];
    // },
 
  },

  created:function(){
      this.actionSetDefaultReservation();
  },

  methods: {
    ...mapActions(["actionSetTime","actionSetDefaultReservation"]),
    selectTime(startTime, endTime) {
      this.actionSetTime(startTime + " - " + endTime);
    },


  }
};
</script>

<style>
#createResTable {
  max-height: 450px;
  overflow-y: auto;
}
</style>