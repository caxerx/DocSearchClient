<template>
  <v-form slot="content" ref="form" height="100%" v-model="valid" lazy-validation>
    <!-- opwd -->
    <v-text-field
      id="oPassword"
      prepend-icon="lock"
      name="oPassword"
      label="Old Password"
      type="password"
      :rules="pwdRules"
      v-model="opwd"
    ></v-text-field>
    <!-- npwd -->
    <v-text-field
      id="nPassword"
      prepend-icon="lock"
      name="nPassword"
      label="New Password"
      type="password"
      :rules="pwdRules"
      v-model="npwd"
    ></v-text-field>
    <!-- cPwd -->
    <v-text-field
      id="cPassword"
      prepend-icon="lock"
      name="cPassword"
      label="Confirm Password"
      type="password"
      :rules="confirmPwdRules"
      v-model="cpwd"
    ></v-text-field>

    <v-alert :value="isSuccess" type="success">{{msg}}</v-alert>
    <v-alert :value="isError" type="error">{{msg}}</v-alert>

    <br>

    <v-card-actions>
      <v-btn
        @click="confirmChPwd"
        style="width:100%"
        color="primary"
        :loading="loading"
        :disabled="loading"
      >Confirm</v-btn>
    </v-card-actions>
  </v-form>
</template>


<script>
import axios from "axios";
import { mapGetters, mapActions, mapState } from "vuex";
import SmallContainer from "@/components/SmallContainer.vue";
import gql from "graphql-tag";
import { locale } from "moment";

const changePwdMutation = gql`
  mutation($oldPassword: String!, $newPassword: String!, $id: ID!) {
    changePassword(
      oldPassword: $oldPassword
      newPassword: $newPassword
      userType: patient
      id: $id
    ) {
      success
      message
    }
  }
`;

export default {
  data: () => ({
    valid: true,

    opwd: "",
    npwd: "",
    cpwd: "",
    pwdRules: [v => !!v || "Password is required"],
    msg: "",
    isSuccess: false,
    isError: false,
    menu: false
  }),
  components: {
    SmallContainer
  },

  watch: {
    menu(val) {
      val && this.$nextTick(() => (this.$refs.picker.activePicker = "YEAR"));
    }
  },
  created() {},
  computed: {
    ...mapGetters({
      getLogin: "getLogin"
    }),
    loading() {
      return this.$apollo.loading;
    },
    confirmPwdRules() {
      var returnFunction = [];
      var pwd = this.npwd;
      returnFunction.push(function(v) {
        return !!v || "Confirm Password is required";
      });
      returnFunction.push(function(v) {
        if (v != pwd) {
          return "Password must be same";
        } else {
          return false;
        }
      });

      return returnFunction;
    }
  },
  methods: {
    ...mapActions(["actionSetLogout"]),
    clear() {},
    confirmChPwd() {
      if (this.$refs.form.validate()) {      
        this.$apollo
          .mutate({
            // Query
            mutation: changePwdMutation,
            // Parameters

            variables: {
              newPassword: this.npwd,
              oldPassword: this.opwd,
              id: this.getLogin.id
            }
          })
          .then(data => {
            // Result
            this.isSuccess = data.data.changePassword.success;
            this.isError = !data.data.changePassword.success;
            this.msg = data.data.changePassword.message;
            if (!this.isError) {
              this.$router.push("/");
              this.actionSetLogout();
            }
          })
          .catch(error => {
            // Error
            console.error(error);
          });
          
      }
    },
    login() {
      this.$router.push("/login");
    },
    save(dob) {
      this.$refs.menu.save(dob);
    }
  }
};
</script>
