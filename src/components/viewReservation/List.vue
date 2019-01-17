<template>
  <div>
      
    <v-layout row wrap>
      <v-flex>
        <v-card v-for="(content, index) in contents" :key="index" style="margin-bottom:0.1%">
          <v-card-title primary-title>
            <div style="width:50%">
              <div class="headline">No.{{content.no}}</div>

              <table>
                <tr class="grey--text">
                  <td>Clinc:</td>
                  <td>{{content.clinc}}</td>
                </tr>
                <tr class="grey--text">
                  <td>Doctor:</td>
                  <td>{{content.doctor}}</td>
                </tr>
                <tr class="grey--text">
                  <td>Date:</td>
                  <td>{{content.date}}</td>
                </tr>
                <tr class="grey--text">
                  <td>Time:</td>
                  <td>{{content.startTime}} to {{content.endTime}}</td>
                </tr>
              </table>
            </div>

            <v-spacer></v-spacer>
            <v-btn icon @click="changeShow(content)">
              <v-icon>keyboard_arrow_right</v-icon>
            </v-btn>
          </v-card-title>
        </v-card>
      </v-flex>
    </v-layout>
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
     display: inline-table;
 } */
</style>
