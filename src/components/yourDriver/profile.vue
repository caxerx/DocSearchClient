<template>
  <div v-if="!$apollo.loading">
    <v-form slot="content" ref="form" height="100%" v-model="valid" lazy-validation>
      <div>
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

        <!-- name -->
        <v-text-field
          prepend-icon="person"
          name="name"
          label="Name"
          type="text"
          :rules="dobRules"
          v-model="name"
          required
        ></v-text-field>
        <!-- gender -->
        <!-- <v-radio-group v-model="row" row>
          <v-icon>face</v-icon>
      <v-radio label="Male" value="male"></v-radio>
      <v-radio label="Female" value="female"></v-radio>
        </v-radio-group>-->
        <!-- birthDayPicker -->
        <v-menu
          :close-on-content-click="false"
          v-model="menu"
          :nudge-right="40"
          lazy
          transition="scale-transition"
          offset-y
          full-width
          max-width="290px"
          min-width="290px"
        >
          <v-text-field
            slot="activator"
            v-model="newDob"
            label="Date (read only text field)"
            hint="YYYY-MM-DD format"
            persistent-hint
            prepend-icon="event"
            readonly
          ></v-text-field>
          <v-date-picker v-model="dob" no-title @input="menu = false"></v-date-picker>
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
      </div>

      <span style="color:red">{{errMsg}}</span>
      <br>
      <!-- <h1>FeedBack</h1> -->
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn outline right fab color="primary">
          <v-icon>edit</v-icon>
        </v-btn>
      </v-card-actions>
    </v-form>
  </div>
</template>


<script>
import axios from "axios";
import { mapGetters, mapActions, mapState } from "vuex";
import SmallContainer from "@/components/SmallContainer.vue";
import gql from "graphql-tag";

const profileQuery = gql`
  query($id: ID!) {
    patient(id: $id) {
      name
      gender
      email
      phoneNo
      dob
      hkid
      type
      username
    }
  }
`;

export default {
  data: () => ({
    editing: 0,
    valid: true,
    newEmail: "",
    newPhone: "",
    newName: "",
    newDob: "",
    dobRules: [v => !!v || "Birthday is required"],
    pwdRules: [v => !!v || "Password is required"],
    nameRules: [v => !!v || "Name is required"],
    phoneRules: [v => !!v || "Phone is required"],
    errMsg: "",
    menu: false,
    modal: false
  }),
  components: {
    SmallContainer
  },

  watch: {
    newDob: function(val) {
      console.log(val);
    }
  },
  apollo: {
    patient: {
      query: profileQuery,
      variables() {
        return {
          id: this.getLogin.id
        };
      },
      update(data) {
        return data.patient;
      }
    }
  },
  computed: {
    ...mapGetters({
      getLogin: "getLogin"
    }),
    dob: {
      get() {
        let returnVal = this.formatDate(this.patient.dob);
        this.newDob = returnVal;
        return returnVal;
      },
      set(val) {
        console.log(val);
        this.newDob = val;
      }
    },
    name: {
      get() {
        return this.patient.name;
      },
      set(val) {
        this.newName = val;
      }
    },
    phone: {
      get() {
        return this.patient.phoneNo;
      },
      set(val) {
        this.newPhone = val;
      }
    },
    email: {
      get() {
        return this.patient.email;
      },
      set(val) {
        this.newEmail = val;
      }
    },
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
    check() {
      if (this.$refs.form.validate()) {
      }
    },
    login() {
      this.$router.push("/login");
    },
    save() {
      this.$refs.menu.save(newDob);
    },
    formatDate(d) {
      let moment = require("moment");
      let date = moment.utc(d).format("YYYY-MM-DD");
      return date;
    }
  }
};
</script>
