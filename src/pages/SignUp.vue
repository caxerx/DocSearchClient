<template>
  <small-container>
    <div slot="title">Sign Up</div>
    <v-form slot="content" ref="form" height="100%" v-model="valid" lazy-validation>
      <v-text-field
        prepend-icon="email"
        name="email"
        label="Email"
        type="text"
        :rules="emailRules"
        v-model="email"
        required
      ></v-text-field>
      <v-text-field
        id="password"
        prepend-icon="lock"
        name="password"
        label="Password"
        type="password"
        :rules="pwdRules"
        v-model="pwd"
      ></v-text-field>
      <v-text-field
        id="cPassword"
        prepend-icon="lock"
        name="cPassword"
        label="Confirm Password"
        type="password"
        :rules="confirmPwdRules"
        v-model="cpwd"
      ></v-text-field>
      <v-text-field
        prepend-icon="person"
        name="name"
        label="Name"
        type="text"
        :rules="nameRules"
        v-model="name"
        required
      ></v-text-field>
      <v-text-field
        prepend-icon="phone"
        name="phone"
        label="Phone"
        type="number"
        :rules="phoneRules"
        v-model="phone"
        required
      ></v-text-field>
      <v-text-field
        id="address"
        prepend-icon="place"
        name="address"
        label="Address Line 1"
        type="text"
        :rules="addressRules"
        v-model="address1"
      ></v-text-field>
      <v-text-field
        prepend-icon="place"
        name="address"
        label="Address Line 2"
        type="text"
        :rules="addressRules"
        v-model="address2"
      ></v-text-field>
      <v-text-field
        prepend-icon="place"
        name="address"
        label="Districts"
        type="text"
        :rules="addressRules"
        v-model="district"
      ></v-text-field>

      <span style="color:red">{{errMsg}}</span>
      <br>
      <!-- <h1>FeedBack</h1> -->
      <div id="btnGroupInFeedBack">
        <v-btn @click="check" style="width:100%" color="primary">Sign Up</v-btn>
      </div>
      <v-card-text>
        <span class="font-weight-regular">Have an account?</span>
        <v-btn small flat color="secondary" @click="login">Login Account</v-btn>
      </v-card-text>
    </v-form>
  </small-container>
</template>


<script>
import axios from "axios";
import { mapGetters, mapActions, mapState } from "vuex";
import SmallContainer from "@/components/SmallContainer.vue";
export default {
  data: () => ({
    valid: true,
    email: "",
    phone: "",
    pwd: "",
    cpwd: "",
    address1: "",
    address2: "",
    district: "",
    pwdRules: [v => !!v || "Password is required"],
    addressRules: [v => !!v || "Address is required"],
    nameRules: [v => !!v || "Name is required"],
    phoneRules: [v => !!v || "Name is required"],
    errMsg: ""
  }),
  components: {
    SmallContainer
  },

  computed: {
    ...mapGetters({
      getter: "getLogin"
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
    ...mapActions(["actionLogin"]),
    clear() {},
    check() {
      if (this.$refs.form.validate()) {
      }
    },
    login() {
      this.$router.push("/login");
    }
  }
};
</script>
