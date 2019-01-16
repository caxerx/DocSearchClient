<template>
    <v-form slot="content" ref="form" height="100%" v-model="valid" lazy-validation>
      <!-- email -->
      <v-text-field
        prepend-icon="email"
        name="email"
        label="Email"
        type="text"
        :rules="emailRules"
        v-model="email"
        required
      ></v-text-field>
      <!-- pwd -->
      <v-text-field
        id="password"
        prepend-icon="lock"
        name="password"
        label="Password"
        type="password"
        :rules="pwdRules"
        v-model="pwd"
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
      <!-- name -->
      <v-text-field
        prepend-icon="person"
        name="name"
        label="Name"
        type="text"
        :rules="nameRules"
        v-model="name"
        required
      ></v-text-field>
      <!-- gender -->
     
       <!-- <v-radio-group v-model="row" row>
          <v-icon>face</v-icon>
      <v-radio label="Male" value="male"></v-radio>
      <v-radio label="Female" value="female"></v-radio>
    </v-radio-group> -->

      <!-- birthDayPicker -->
      <v-menu
        ref="menu"
        :close-on-content-click="false"
        v-model="menu"
        :nudge-right="40"
        lazy
        transition="scale-transition"
        offset-y
        full-width
        min-width="290px"
      >
        <v-text-field
          slot="activator"
          name="dob"
          type="text"
          v-model="dob"
          label="Birthday date"
          :rules="dobRules"
          prepend-icon="event"
          readonly
        ></v-text-field>
        <v-date-picker
          ref="picker"
          v-model="dob"
          :max="new Date().toISOString().substr(0, 10)"
          min="1950-01-01"
          @change="save"
        ></v-date-picker>
      </v-menu>
      <!-- phone -->
      <v-text-field
        prepend-icon="phone"
        name="phone"
        label="Phone"
        type="number"
        :rules="phoneRules"
        v-model="phone"
        required
      ></v-text-field>


      <span style="color:red">{{errMsg}}</span>
      <br>
      <!-- <h1>FeedBack</h1> -->
      <v-card-actions>
        <v-btn @click="check" style="width:100%" color="primary">Sign Up</v-btn>
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
    ...mapActions(["actionLogin"]),
    clear() {},
    check() {
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
