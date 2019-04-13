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
      ></v-text-field>
      <v-text-field
        prepend-icon="lock"
        name="password"
        label="Password"
        type="password"
         :rules="pwdRules"
        v-model="pwd"
      ></v-text-field>

      <span style="color:red" v-if="!success">{{errMsg}}</span>
      <br>
      <!-- <h1>FeedBack</h1> -->
      <v-card-actions>
        <v-btn
          @click="check()"
          style="width:100%"
          :disabled="dialog"
          :loading="dialog"
         
          class="white--text"
          color="primary"
        >Login</v-btn>
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
    errMsg: "",
    success: false,
    skipQuery: true
  }),
  components: { LoadingDialog },

  apollo: {
    // Query with parameters

    patientLogin: {
      query: patientLoginQuery,
      variables() {
        return {
          username: this.name,
          password: this.pwd
        };
      },
      skip() {
        return this.skipQuery;
      },
      update(data) {
        this.success = data.patientLogin.success;
        this.errMsg = data.patientLogin.message;
        this.$apollo.queries.patientLogin.skip = true;
        if (data.patientLogin.success) {
          this.actionsSetLogin(data.patientLogin.patient);
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
    },
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
  watch: {},
  methods: {
    ...mapActions(["actionsSetLogin"]),
    clear() {},
    check() {
      if (this.$refs.form.validate()) {
        this.$apollo.queries.patientLogin.skip = false;
        // if (this.success) {
        //   this.actionsSetLogin(this.patientLogin.patient);
        //   this.$store.commit("setLoginDialog", false);
        // } else {
        //   this.success = false;
        // }
      }
    },
    signUp() {
      this.$router.push("/signup");
    }
  }
};
</script>
