<template>
  <div id="layout">
    <v-card-text class="grey--text">Reservation List</v-card-text>
    <v-card v-for="(content, index) in contents" :key="index" style="margin-bottom:2%">
      <v-card-title primary-title>
        <v-layout row wrap>
          <v-flex sm1></v-flex>
          <v-flex sm8 >
            <div class="headline">{{content.doctor}}</div>
            <div class="grey--text">{{content.date}}, {{content.startTime}}</div>
            <div v-if="content.status==='Waiting'" class="error--text">{{content.status}}</div>
            <div v-if="content.status==='Approval'" class="info--text">{{content.status}}</div>
            <div v-if="content.status==='Finish'" class="success--text">{{content.status}}</div>
            <div v-if="content.status==='Cancel'" class="error--text">{{content.status}}</div>
          </v-flex>
          <v-flex sm1 offset-sm1>
            <v-spacer/>
             <v-btn  v-if="content.status==='Cancel'" disabled>
               Cancel 
            </v-btn>
            <v-btn v-else color="error" @click="changeShow(content)">
               Cancel 
            </v-btn>
            
          </v-flex>
        </v-layout>
      </v-card-title>
    </v-card>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapState } from "vuex";
export default {
  name: "App",
  data() {
    return {
      search: ""
    };
  },
  components: {},
  computed: {
    ...mapGetters({
      getter: "getViewReservation"
    }),

    contents() {
      return this.getter.contents;
    }
  },

  methods: {
    ...mapActions(["actionSetShowForViewReservation"]),
    changeShow(content) {
      this.actionSetShowForViewReservation(content);
    }
  }
};
</script>

<style scoped>
/* .column1{
     width:10%;
     display: inline-table;
 }
  .column2{
     width:70%;
     display: inline-table;'
 } */

#layout {
  /* height:32em; */
  /* overflow-y:scroll; */
}
</style>
