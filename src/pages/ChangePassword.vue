<template>
  <div>
    <v-card-text>
      <span class="grey--text">Your Information</span>
      <v-card color="white" style="padding:15px">           
      <password/>
      </v-card>
    </v-card-text>
  </div>
</template>

<script>
import {mapGetters, mapActions, mapState } from "vuex";
import Container from "@/components/Container";
import List from "@/components/medicalRecordList/List";
import Password from "@/components/yourDriver/password";
import axios from "axios";
import SmallContainer from "@/components/SmallContainer.vue";
export default {

  data() {
    return {
      valid: true,
      email: "",
      phone: "",
      pwd: "",
      cpwd: "",
      name: "",
      dob: "",
      dobRules: [v => !!v || "Birthday is required"],
      pwdRules: [v => !!v || "Password is required"],
      nameRules: [v => !!v || "Name is required"],
      phoneRules: [v => !!v || "Phone is required"],
      errMsg: "",
      menu: false
    };
  },
  components: {
    Container,
    List,
    Password
  },
  computed: {
    ...mapGetters({
   
    })
  },

  methods: {}
};
</script>

<style scoped>
td {
  word-wrap: break-word;
  word-break: break-all;
  width: 100px;
}
</style>
