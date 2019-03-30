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
     


      <span style="color:red">{{errMsg}}</span>
      <br>
      
      <v-card-actions>
        <v-btn @click="confirmChPwd" style="width:100%" color="primary">Confirm</v-btn>
      </v-card-actions>
    </v-form>
</template>


<script>
import axios from "axios";
import { mapGetters, mapActions, mapState } from "vuex";
import SmallContainer from "@/components/SmallContainer.vue";

export default {
  data: () => ({
    valid: true,
    
    opwd: "",
    npwd: "",
    cpwd: "",
    pwdRules: [v => !!v || "Password is required"],
    errMsg: "",
    menu: false
  }),
  components: {
    SmallContainer,

  },

  watch: {
    menu(val) {
      val && this.$nextTick(() => (this.$refs.picker.activePicker = "YEAR"));
    }
  },

  computed: {
    ...mapGetters({
      getter: "getSignUp"
    }),

    emailRules() {
      var returnFunction = [];
      returnFunction.push(function(v) {
        return !!v || "Email is required";
      });
      returnFunction.push(function(v) {
        return /.+@.+/.test(v) || "E-mail must be valid";
      });

      return returnFunction;
    },
    confirmPwdRules() {
      var returnFunction = [];
      var pwd = this.pwd;
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

    clear() {},
    confirmChPwd() {
      if (this.$refs.form.validate()) {
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
