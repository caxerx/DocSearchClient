<template>
  <div>
    <v-layout row justify-center>
      <v-dialog v-model="dialog" persistent width="300">
        <v-card color="primary" dark>
          <v-card-text>
            Please stand by
            <v-progress-linear indeterminate color="white" class="mb-0"></v-progress-linear>
          </v-card-text>
        </v-card>
      </v-dialog>
    </v-layout>

    <div v-if="!$apollo.loading">
      <div
        v-for="(medicalRecord,index) in patient.consultations"
        :key="index"
        style="margin-bottom:2%"
      >
        <medical-record-card :medicalRecord="medicalRecord" style="padding-left:2%"/>
      </div>
    </div>
  </div>
</template>


<script>
import { mapGetters, mapActions, mapState } from "vuex";
import MedicalRecordCard from "./medicalRecordCard.vue";
import gql from "graphql-tag";

const patientQuery = gql`
  query($id: ID!) {
    patient(id: $id) {
      consultations {
        id
        consultant {
          name
        }
        note
        startTime
        endTime
        diseases {
          id
          name
          description
        }
      }
    }
  }
`;

export default {
  data() {
    return {
      search: "",
      show: "",
    };
  },
  apollo: {
    patient: {
      query: patientQuery,
      variables() {
        return {
          id: this.$cookie.get("userId")
        };
      }
    }
  },
  components: {
    MedicalRecordCard
  },
  computed: {
    ...mapGetters({}),
    dialog: {
      get() {
        if (this.$apollo.loading) {
          return true;
        } else {
          return false;
        }
      },
      set(val) {
        this.dialog = val;
      }
    }
  },

  methods: {}
};
</script>


