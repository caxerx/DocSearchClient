<template>
  <div>
    <v-form ref="form" height="100%" v-model="valid" lazy-validation>
      <v-text-field
        prepend-icon="person"
        label="username"
        type="text"
        :rules="nameRules"
        v-model="name"
        required
        v-on:keyup.enter="check()"
      ></v-text-field>
      <v-text-field
        prepend-icon="lock"
        name="password"
        label="Password"
        type="password"
        :rules="pwdRules"
        v-model="pwd"
        v-on:keyup.enter="check()"
      ></v-text-field>
      <span style="color:red">{{message}}</span>
      <br>
      <!-- <h1>FeedBack</h1> -->
      <v-card-actions>
        <v-btn @click="check()" style="width:100%" class="white--text" color="primary">Login</v-btn>
      </v-card-actions>
      <p>
        <v-btn small flat color="secondary">Forgot Password?</v-btn>
      </p>
    </v-form>
  </div>
</template>


<script>
import axios from "axios";
import { mapGetters, mapActions, mapState } from "vuex";
import LoadingDialog from "@/components/dialog/loadingDialog.vue";
import gql from "graphql-tag";

const patientLoginQuery = gql`
  query($username: String!, $password: String!) {
    patientLogin(username: $username, password: $password) {
      success
      message
      token
      patient {
        id
        name
      }
    }
  }
`;

export default {
  data: () => ({
    valid: true,
    name: "",
    nameRules: [v => !!v || "Name is required"],
    pwd: "",
    pwdRules: [v => !!v || "Password is required"],
    message: ""
  }),

  components: { LoadingDialog },
  created() {
    this.$apollo.queries.patientLogin.stop();
  },
  apollo: {
    // Query with parameters
    patientLogin: {
      query: patientLoginQuery,
      variables() {
        return {
          username: "",
          password: ""
        };
      },
      update(data) {
     
        this.message = data.patientLogin.message
        if (data.patientLogin.success) {
          this.actionSetLogin(data.patientLogin.patient);
          this.$store.commit("setLoginDialog", false);
        }
        return data.patientLogin;
      }
    }
  },

  computed: {
    ...mapGetters({
      getDialog: "getDialog"
    }),

    loginDialog() {
      return this.getDialog.login;
    }
    // dialog: {
    //   get() {
    //     if (this.$apollo.loading) {
    //       return true;
    //     } else {
    //       return false;
    //     }
    //   },
    //   set(val) {
    //     this.dialog = val;
    //   }
    // }
  },
  watch: {},
  methods: {
    ...mapActions(["actionSetLogin"]),
    clear() {},
    check() {
      
      if (this.$refs.form.validate()) {
         this.$apollo.queries.patientLogin.start();
        this.$apollo.queries.patientLogin.refetch({
          username: this.name,
          password: this.pwd
        });
      }
    },
    signUp() {
      this.$router.push("/signup");
    }
  }
};
</script>

