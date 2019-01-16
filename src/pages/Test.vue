<template>
  <div class="text-xs-center">
    <v-dialog v-model="dialog" width="500">
        <v-btn
        slot="activator"
        color="red lighten-2"
        dark
      >
        Click Me
      </v-btn>
      <v-card>
        <v-card-title class="headline primary" primary-title>
          <v-tabs v-model="active" color="transparent" dark slider-color="yellow">
            <v-tab v-for="type in types" :key="type" ripple>{{type}}</v-tab>
          </v-tabs>
        </v-card-title>

        <v-card-text>
          <login v-if="active==0"/>
          <sign-up v-if="active==1"/>
        </v-card-text>

        <v-divider></v-divider>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import Login from "@/pages/Login";
import SignUp from "@/pages/SignUp";
import { mapGetters, mapActions, mapState } from "vuex";
export default {
  name: "App",
  data() {
    return {
      search: "",
      active: null,
      types: ["Login", "Sign Up"]
    };
  },

  watch: {
    active: function(val) {
      console.log(val);
    }
  },
  components: {
    Login,
    SignUp
  },
  computed: {
    $state() {
      return this.$store.state.login.login;
    },
    ...mapGetters({
      getter: "getLogin"
    }),

  },

  methods: {}
};
</script>