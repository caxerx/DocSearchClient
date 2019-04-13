<template>
<div >
  <v-card @click="showDetail(reservation)" style="padding-left: 2%;">
      
    <v-layout row wrap>
      <v-flex sm1>
        <v-layout align-center justify-center row fill-height>
          <v-card color="blue-grey lighten-5">
            <div id="dateDiv">
              <div class="headline text-md-center">{{reservation.startTime |moment("utc","DD")}}</div>
              <span class="headline grey--text">{{reservation.startTime|moment("utc","MMM")}}</span>
            </div>
          </v-card>
        </v-layout>
      </v-flex>
      <v-flex sm8>
        <v-card-text>
          <div class="headline">Dr. {{reservation.doctor.name}}</div>
          <div class="grey--text">{{reservation.startTime|moment("utc","YYYY-MM-DD")}}, {{reservation.startTime|moment("utc","HH:mm")}}</div>

          <div v-if="reservation.status==='pending'" class="error--text">{{reservation.status}}</div>
          <div v-if="reservation.status==='checked_in'" class="success--text">{{reservation.status}}</div>
          <div v-if="reservation.status==='expired'" class="grey--text">{{reservation.status}}</div>
        </v-card-text>
      </v-flex>
      <v-flex sm2 offset-sm1>
        <v-layout align-center justify-center row fill-height>
          <v-btn
            v-if="reservation.status==='checked_in'||reservation.status==='expired'"
            @click.stop="nothing()"
            outline
            color="grey"
          >Cancel</v-btn>
          <v-btn v-else color="error" outline @click.stop="showCancelDialog()">Cancel</v-btn>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-card>
</div>
</template>

<script>
import { mapGetters, mapActions, mapState } from "vuex";



export default {
  data() {
    return {
      search: "",
      date: null,
  
     
      
    };
  },
  components: {
   
  },
  computed: {
    ...mapGetters({
      getDialog:"getDialog",
    }),
  },
  props:{
      reservation:Object
  },

  methods: {
    ...mapActions([

    ]),

    showDetail(reservation) {
        this.$emit("input", reservation);
        
    },
    showCancelDialog(){
        this.$store.commit("cancelReservationDialog",true);
    },

    nothing(){

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

#dateDiv {
  padding-left: 5px;
  padding-right: 5px;
}

</style>