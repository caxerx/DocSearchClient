<template>
  <div id="layout">
    <v-card-text class="grey--text">Reservation List</v-card-text>
    <v-card v-for="(content, index) in contents" :key="index" style="margin-bottom:2%">
      <v-card-title primary-title>
        <v-layout row wrap>
          <v-flex sm1>
            <v-layout align-center justify-center row fill-height>
              <v-card color="blue-grey lighten-5">
                  <div id="dateDiv">
                 <div class="headline text-md-center"> {{getDay(content.date)}} </div>
                 <span class="headline grey--text"> {{getMonth(content.date)}} </span>
                  </div>
                  </v-card>
            </v-layout>
          </v-flex>
          <v-flex sm8>
            <div class="headline">{{content.doctor}}</div>
            <div class="grey--text">{{content.date}}, {{content.startTime}}</div>
            <div v-if="content.status==='Waiting'" class="error--text">{{content.status}}</div>
            <div v-if="content.status==='Approval'" class="info--text">{{content.status}}</div>
            <div v-if="content.status==='Finish'" class="success--text">{{content.status}}</div>
            <div v-if="content.status==='Cancel'" class="error--text">{{content.status}}</div>
          </v-flex>
          <v-flex sm1 offset-sm1>
            <v-spacer/>
            <v-btn v-if="content.status==='Cancel'" disabled>Cancel</v-btn>
            <v-btn v-else color="error" @click="changeShow(content)">Cancel</v-btn>
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
      search: "",
      date: null
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
    },
    getDay(date) {
      //   this.date = new Date(date);
      //   var d = new Date(this.getter.contents.date);
      let d = new Date(date);
    //   console.log(d.toLocaleString('en-us', { month: 'long' }));
      return d.getDate();
    },
    getMonth(date){
        let d = new Date(date);
        let month = d.toLocaleString('en-us', { month: 'short' });
        return month;
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

#dateDiv{
    padding-left:5px;
    padding-right:5px;
}
</style>
