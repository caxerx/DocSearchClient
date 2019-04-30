<template>
  <div>
    <v-progress-circular
      width="5"
      size="50"
      color="primary"
      indeterminate
      style="left: 48%;
      top: 50%;
      position: fixed"
      v-if="$apollo.loading"
    ></v-progress-circular>
    <v-form
      slot="content"
      ref="form"
      height="100%"
      v-model="valid"
      lazy-validation
      v-if="!$apollo.loading"
    >
      <v-layout row>
        <v-flex sm3>
          <v-container>
            <v-layout column>
              <v-img class="mb-4" aspect-ratio="1" :src="computedAvatar"></v-img>
              <v-btn color="primary">Change avatar</v-btn>
            </v-layout>
          </v-container>
        </v-flex>
        <v-divider vertical></v-divider>
        <v-flex sm8 pl-3>
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

            <!-- gender -->
            <v-radio-group v-model="gender" row :mandatory="false">
              <v-icon>face</v-icon>
              <v-radio label="Male" value="M"></v-radio>
              <v-radio label="Female" value="F"></v-radio>
            </v-radio-group>
            <v-text-field
              prepend-icon="credit_card"
              label="Hkid card"
              hint="eg.R1234567(7)"
              :rules="idcardRules"
              v-model="hkid"
              required
            ></v-text-field>
            <!-- 
        <v-select
          prepend-icon="subject"
          v-model="value"
          :items="items"
          item-text="id"
          return-object
          dense
          attach
          chips
          persistent-hint
          label="Allergies"
          multiple
          disabled
          :menu-props="menuProps"
        >
          <template slot="selection" slot-scope="data">
            <v-chip
              :selected="data.selected"
              class="chip--select-multi"
              :key="JSON.stringify(data.item)"
            >
              <span>{{ data.item.name}}</span>
            </v-chip>
          </template>

          <template slot="item" scope="data">
            <v-list-tile-content>
              <v-list-tile-title v-html="data.item.name"></v-list-tile-title>
              <v-list-tile-sub-title v-html="data.item.description"></v-list-tile-sub-title>
            </v-list-tile-content>
          </template>
            </v-select>-->
          </div>

          <span style="color:red">{{errMsg}}</span>

          <!-- <h1>FeedBack</h1> -->
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn outline right fab color="primary" @click="edit()">
              <v-icon>edit</v-icon>
            </v-btn>
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
      avatar
    }
  }
`;
const editPatinetMutation = gql`
  mutation($data: PatientInput!, $id: ID!) {
    editPatient(data: $data, id: $id) {
      id
      name
      gender
    }
  }
`;
export default {
  data: () => ({
    editing: 0,
    valid: true,
    email: "",
    phone: "",
    name: "",
    dob: "",
    gender: "M",
    hkid: "",
    dobRules: [v => !!v || "Birthday is required"],
    pwdRules: [v => !!v || "Password is required"],
    nameRules: [v => !!v || "Name is required"],
    phoneRules: [v => !!v || "Phone is required"],
    idcardRules: [v => !!v || "HKID CARD is required"],
    errMsg: "",
    menu: false,
    modal: false
  }),
  components: {},

  apollo: {
    patient: {
      query: profileQuery,
      variables() {
        return {
          id: this.getLogin.id
        };
      },
      update(data) {
        this.name = data.patient.name;
        this.phone = data.patient.phoneNo;
        this.email = data.patient.email;
        this.dob = this.formatDate(data.patient.dob);
        this.gender = data.patient.gender;
        this.hkid = data.patient.hkid;
        return data.patient;
      }
    }
  },
  created() {
    this.$apollo.queries.patient.refetch();
  },
  computed: {
    ...mapGetters({
      getLogin: "getLogin"
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
    },

    computedAvatar() {
      if (this.patient.avatar === "" || this.patient.avatar === undefined) {
        return require("@/assets/icon-person.png");
      }
      return "https://dsapi.1lo.li/assets/avatars/" + this.patient.avatar;
    }
  },

  methods: {
    ...mapActions(["actionSetLogin", "actionSetLogout"]),
    clear() {},

    login() {
      this.$router.push("/login");
    },
    save(dob) {
      this.$refs.menu.save(dob);
    },
    formatDate(d) {
      let moment = require("moment");
      let date = moment.utc(d).format("YYYY-MM-DD");
      return date;
    },
    async edit() {
      if (this.$refs.form.validate()) {
        let patientInput = {
          name: this.name,
          gender: this.gender,
          email: this.email,
          phoneNo: this.phone,
          dob: this.dob,
          hkid: this.hkid
        };
        await this.$apollo
          .mutate({
            mutation: editPatinetMutation,
            // Parameter
            variables: {
              data: patientInput,
              id: this.getLogin.id
            }
          })
          .then(data => {
            // Result
            console.log("hku")
            this.$router.push("/");
            this.actionSetLogout();
          })
          .catch(error => {
            // Error
            console.error(error);
          });

            console.log("fku")
      }
    }
  }
};
</script>

<style scoped>
img {
  width: 200px;
}
</style>
