<template>
        <v-layout row wrap>
        <v-flex xs4 sm2>
          <v-card-title>
            <img src="@/assets/icon-person.png" class="icon">
          </v-card-title>
        </v-flex>
        <v-flex xs2 sm7>
          <v-card-text>
            <h3 class="headline mb primary--text">{{doctor.name}}</h3>
          </v-card-text>
          <v-card-text>
            <div>{{doctor.academic}}</div>
            <div>{{doctor.experience}}</div>
            <div>{{doctor.position}}</div>
          </v-card-text>
          <v-card-text>
            <h3 class="font-weight-bold">{{doctor.clinc}}</h3>
            <v-layout row wrap>
              <v-flex xs3 sm1>
                <img src="@/assets/image-icon.png" class="icon">
              </v-flex>
              <v-flex xs3 sm1>
                <img src="@/assets/image-icon.png" class="icon">
              </v-flex>
              <v-flex xs3 sm1>
                <img src="@/assets/image-icon.png" class="icon">
              </v-flex>
            </v-layout>
          </v-card-text>
        </v-flex>

        <v-flex sm3>
          <v-card-text>
            <div>
              <v-icon small>thumb_up</v-icon>
              {{doctor.like}}
            </div>
            <div>
              <v-icon small>comment</v-icon>
              {{doctor.feedback}} Feedback
            </div>
            <div>
              <v-icon small>place</v-icon>
              {{doctor.location}}
            </div>
            <div>
              <v-icon small>access_time</v-icon>
              {{doctor.available}}
            </div>
          </v-card-text>
        </v-flex>
      </v-layout>
</template>

<script>

import { mapGetters, mapActions, mapState } from "vuex";

export default {
  data: () => ({}),

  created: function() {
   
  },

  computed: {
    ...mapGetters({
      // getter: "getCreateReservation"
      doctor: "getDoctor",

    }),

  },

  components: {
    
  },

  methods: {

  }
};
</script>

<style scoped>
img {
  width: 100%;
}
</style>