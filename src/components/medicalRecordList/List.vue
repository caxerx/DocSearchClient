<template>
  <div>
       <v-progress-circular
      width="5"
      size="50"
      color="primary"
      indeterminate
      style="left: 48%;
      top: 50%;
      position: fixed"
      v-if="$apollo.loading"
    ></v-progress-circular>

    <div v-if="!$apollo.loading">
      <div
        v-for="(medicalRecord,index) in computedNewArr(patient.consultations)"
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
  created:function(){
      this.$apollo.queries.patient.refetch();

  },
  apollo: {
    patient: {
      query: patientQuery,
      variables() {
        return {
          id: this.getLogin.id
        };
      }
    }
  },
  components: {
    MedicalRecordCard,
    
  },
  computed: {
    ...mapGetters({
      getLogin:"getLogin"
    }),
  },

  methods: {
    computedNewArr(arr) {
      let newArr = arr.slice();

      newArr.sort(function(a, b) {
        return b.id - a.id;
      });

      return newArr;
    }
  }
};
</script>


