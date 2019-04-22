<template>
  <v-dialog width="550" :value="dialog" persistent @keyup.prevent>
    <v-card>
      <v-card-title class="headline primary" primary-title>
        <v-tabs v-model="active" color="transparent" dark slider-color="yellow">
          <v-tab v-for="(type,index) in types" :key="index" ripple>{{type}}</v-tab>
        </v-tabs>
        <v-spacer/>
        <v-btn dark flat icon @click="closeDialog()">
          <v-icon>clear</v-icon>
        </v-btn>
      </v-card-title>

      <v-card-text>
        <login v-if="active==0"/>
        <sign-up v-if="active==1"/>
      </v-card-text>

      <v-divider></v-divider>
    </v-card>
  </v-dialog>
</template>

<script>
import Login from "@/pages/Login";
import SignUp from "@/pages/SignUp";
import { mapGetters, mapActions, mapState } from "vuex";
export default {
  data: () => ({
    search: "",
    active: 0,
    types: ["Login", "Sign Up"]
  }),
  props: {},

  components: {
    Login,
    SignUp
  },
  computed: {
    ...mapGetters({
      getDialog: "getDialog"
    }),

    dialog() {
      return this.getDialog.login;
    }
  },
  watch: {
    dialog: function(val) {
      if (!val) {
        this.active = 0;
      }
    }
  },
  methods: {
    closeDialog() {
      this.$store.commit("setLoginDialog", false);
    }
  },
};
</script>