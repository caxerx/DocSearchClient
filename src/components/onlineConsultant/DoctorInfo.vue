<template>
  <div ref="docInfDiv">
    <v-card>
      <v-toolbar dark color="primary" class="tableToolBar">
        <v-toolbar-title class="white--text">DoctorInfo</v-toolbar-title>

        <v-spacer></v-spacer>
      </v-toolbar>
      <v-container fluid grid-list-lg>
        <v-layout row wrap>
          <v-flex xs12>
            <v-card color="secondary" class="white--text">
              <v-card-title>
                <div>
                  <div class="headline">Doctor {{doctorInfo.name}}</div>
                  <div>
                    <span class="leftText">Position:</span>
                    {{doctorInfo.position}}
                  </div>
                  <div>
                    <span class="leftText">Duty:</span>
                    {{doctorInfo.duty}}
                  </div>
                </div>
              </v-card-title>
            </v-card>
          </v-flex>
          <v-flex xs12>
            <v-card color="secondary" class="white--text">
              <v-card-title primary-title>
                <div>
                  <div class="headline">Qualifications</div>
                  <ul>
                    <li
                      v-for="(qualification, index) in doctorInfo.qualifications"
                      :key="index"
                    >{{qualification}}</li>
                  </ul>
                </div>
              </v-card-title>
            </v-card>
          </v-flex>
          <v-flex xs12>
            <v-card color="secondary" class="white--text">
              <v-card-title primary-title>
                <div>
                  <div class="headline">Other Information</div>
                  <div>phone: {{doctorInfo.phone}}</div>
                  <div>email: {{doctorInfo.email}}</div>
                </div>
              </v-card-title>
            </v-card>
          </v-flex>
          
          
        </v-layout>
      </v-container>
      <!-- <v-toolbar dark color="primary" class="tableToolBar">
      <v-toolbar-title class="white--text">DoctorInfo</v-toolbar-title>

      <v-spacer></v-spacer>
    </v-toolbar>
    <table>
      <tr v-for="(inf, index) in doctorInfo" :key="index">
        <td class="font-weight-medium">{{inf.name}}</td>
        <td>
          <span v-if=" Array.isArray(inf.value)">
            <div class="font-weight-medium" v-for="(inf, index) in inf.value" :key="index">{{inf}}</div>
          </span>
          <span v-else class="font-weight-medium">{{inf.value}}</span>
        </td>
      </tr>
      </table>-->
    </v-card>
  </div>
</template>




<script>
import { mapGetters, mapActions, mapState } from "vuex";
export default {

  data: () => ({
    // height: this.$refs.docInfDiv.clientHeight
  }),
  components: {},
  computed: {
    ...mapGetters({
      getter: "getOnlineConsultant"
    }),

    doctorInfo() {
      return this.getter.doctorInfo;
    },

   
  },
  data() {
    return {
      //
    };
  },




  methods: {
  
    
  }
};
</script>

<style scoped>
table {
  border: 1;
}
td {
  height: 30px;
  padding-left: 6%;
}
td:first-child {
  vertical-align: text-top;
}
.leftText {
  width: 300px;
}
</style>
