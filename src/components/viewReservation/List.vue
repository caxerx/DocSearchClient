<template>
    <v-layout row wrap>
      <v-flex>
        <v-card v-for="(content, index) in contents" :key="index" style="margin-bottom:0.1%">
            
          <v-card-title primary-title>
            <div>
              <div class="headline">No.{{content.no}}</div>
              <div class="grey--text">Clinc: {{content.clinc}}</div>
               <div class="grey--text">Doctor: {{content.doctor}}</div>
              <div class="grey--text">Date: {{content.date}}</div>
              <div class="grey--text">Time: {{content.startTime}} to {{content.endTime}}</div>
            </div>

              <v-spacer></v-spacer>
            <v-btn icon @click="changeShow(content)">
              <v-icon>keyboard_arrow_right</v-icon>
            </v-btn>
          </v-card-title>

          

          <v-slide-y-transition>
            <v-card-text
              v-show="content.show"
            >I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.</v-card-text>
          </v-slide-y-transition>
        </v-card>
      </v-flex>
    </v-layout>
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
      changeShow(content){
          this.actionSetShowForViewReservation(content);
      }
  }
};
</script>
