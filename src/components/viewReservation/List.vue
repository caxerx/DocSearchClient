<template>
  <v-container fluid grid-list-lg>
    <v-layout row wrap>
      <v-flex>
        <v-card v-for="(content, index) in contents" :key="index" style="margin-bottom:0.1%">
            
          <v-card-title primary-title>
            <div>
              <div class="headline">{{content.doctor}}</div>
              <span class="grey--text">{{content.date}}</span>
            </div>
          </v-card-title>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn icon @click="changeShow(content)">
              <v-icon>{{ content.show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
            </v-btn>
          </v-card-actions>

          <v-slide-y-transition>
            <v-card-text
              v-show="content.show"
            >I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.</v-card-text>
          </v-slide-y-transition>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
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
