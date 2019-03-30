<template>
  <div v-if="!$apollo.loading">
    <div
      v-for="(medicalRecord,index) in patient.consultations"
      :key="index"
      style="margin-bottom:2%"
    >
      <medical-record-card :medicalRecord="medicalRecord" style="padding-left:2%"/>
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
      show: ""
    };
  },
  apollo: {
    patient: {
      query: patientQuery,
      variables() {
        return {
          id: localStorage.getItem("userId")
        };
      }
    }
  },
  components: {
    MedicalRecordCard
  },
  computed: {
    ...mapGetters({})
  },

  methods: {}
};
</script>


