<template>
  <div>
    <v-form slot="content" ref="form" height="100%" v-model="valid" lazy-validation>
      <v-layout row wrap>
        <v-flex sm6 style="padding-right:15px">
          <!-- name -->
          <v-text-field
            prepend-icon="person"
            name="name"
            label="Username"
            type="text"
            :rules="nameRules"
            v-model="username"
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
        </v-flex>

        <v-flex sm6>
          <!-- gender -->
          <v-radio-group v-model="gender" row :mandatory="false">
            <v-icon>face</v-icon>
            <v-radio label="Male" value="male"></v-radio>
            <v-radio label="Female" value="female"></v-radio>
          </v-radio-group>

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
            v-model="phoneNo"
            required
          ></v-text-field>
          <v-text-field
            prepend-icon="credit_card"
            label="Hkid card"
            hint="eg.R1234567(7)"
            :rules="idcardRules"
            v-model="hkid"
            required
          ></v-text-field>
        </v-flex>
        <v-flex>
          <!-- <h1>FeedBack</h1> -->
          <span style="color:red">{{errMsg}}</span>
          <v-card-actions>
            <v-btn
              @click="check"
              style="width:100%"
              color="primary"
              :disabled="loading"
              :loading="loading"
            >Sign Up</v-btn>
          </v-card-actions>
        </v-flex>
      </v-layout>
    </v-form>
  </div>
</template>


<script>
import axios from "axios";
import { mapGetters, mapActions, mapState } from "vuex";
import gql from "graphql-tag";

const createPatientMutation = gql`
  mutation($data: CreatePatientInput!) {
    createPatient(data: $data) {
      id
    }
  }
`;

export default {
  data: () => ({
    valid: true,
    email: "",
    phoneNo: "",
    pwd: "",
    cpwd: "",
    name: "",
    dob: "",
    gender: "male",
    username: "",
    hkid: "",
    idcardRules: [v => !!v || "HKID CARD is required"],
    dobRules: [v => !!v || "Birthday is required"],
    pwdRules: [v => !!v || "Password is required"],
    nameRules: [v => !!v || "Name is required"],
    phoneRules: [v => !!v || "Phone is required"],
    errMsg: "",
    menu: false,
    loading: false,
    createSuccess: false,
    timer: ""
  }),
  components: {},

  watch: {
    menu(val) {
      val && this.$nextTick(() => (this.$refs.picker.activePicker = "YEAR"));
    }
  },

  computed: {
    ...mapGetters({}),
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
    ...mapActions[""],
    clear() {},
    check() {
      // this.dialog = false;

      this.loading = true;
      if (this.$refs.form.validate()) {
        let createPatientInput = {
          name: this.name,
          gender: this.gender,
          email: this.email,
          phoneNo: this.phoneNo,
          dob: this.dob,
          hkid: this.hkid,
          password: this.pwd,
          username: this.username,
          allergies: []
        };

        this.$apollo
          .mutate({
            // Query
            mutation: createPatientMutation,
            // Parameters
            variables: {
              data: createPatientInput
            }
          })
          .then(data => {
            // Result
            this.loading = false;
            this.$store.commit("setLoginDialog", false);
            this.$swal("Congrats!", "Your account is created!", "success");
            console.log(data);
          })
          .catch(error => {
            // Error
            this.loading = false;
            this.createSuccess = false;
            this.errMsg = "Repeat User Name";
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

