<template>
  <v-card v-if="!$apollo.loading" flat> 
    <!-- {{doctor.id}} -->
    <v-layout row wrap>
      <v-flex xs4 sm2>
        <v-card-title>
          <img src="@/assets/icon-person.png" class="icon">
        </v-card-title>
      </v-flex>
      <v-flex xs6 sm7>
        <v-card-text>
          <h3 class="headline mb primary--text">Dr. {{doctor.name}}</h3>
        </v-card-text>
        <v-card-text>
          <div>{{doctor.experience}}</div>
          <div>{{doctor.specialty}}</div>
        </v-card-text>
        <v-card-text>
          <h3 class="font-weight-bold">{{doctor.workplace.name}}</h3>
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
            <span>&nbsp;98%</span>
          </div>
          <div>
            <v-icon small>comment</v-icon>
            <span>&nbsp;47 Feedback</span>
          </div>
          <div>
            <v-icon small>place</v-icon>
            <span>&nbsp;{{doctor.workplace.location}}</span>
          </div>
          <div>
            <v-icon small>access_time</v-icon>
            <span>&nbsp;Available Today</span>
          </div>
        </v-card-text>
      </v-flex>
    </v-layout>
  </v-card>
</template>

<script>
import { mapGetters, mapActions, mapState } from "vuex";
import gql from "graphql-tag";

const doctorQuery = gql`
  query($id: ID!) {
    doctor(id: $id) {
      id
      name
      gender
      email
      phoneNo
      dob
      hkid
      type
      language
      specialty
      workplace {
        id
        name
        location
        type
      }
    }
  }
`;
export default {
  data: () => ({
    doctor: {
      name: ""
    }
  }),

  created: function() {},

  computed: {
    ...mapGetters({
      // getter: "getCreateReservation"
    }),

    routeId() {
      return this.$route.query.id;
    }
  },

  components: {},

  methods: {},

  apollo: {
    // Query with parameters

    doctor: {
      query: doctorQuery,
      variables() {
        return {
          id: this.routeId
        };
      }
    }
  }
};
</script>

<style scoped>
img {
  width: 100%;
}
</style>