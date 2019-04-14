<template>
  <div>
     <loading-dialog :dialog="dialog" />

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
import LoadingDialog from "@/components/dialog/loadingDialog.vue"
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
      if (this.getLogin === null) {
        this.$store.commit("setLoginDialog", true);
      }
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
    LoadingDialog
  },
  computed: {
    ...mapGetters({
      getLogin:"getLogin"
    }),
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


