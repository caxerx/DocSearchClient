<template>
  <small-container>
    <div slot="title">Sign Up</div>
    <v-form slot="content" ref="form" height="100%" v-model="valid" lazy-validation>
      <v-text-field
        prepend-icon="person"
        name="name"
        label="name"
        type="text"
        :rules="nameRules"
        v-model="name"
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
  
      <span style="color:red">{{errMsg}}</span>
      <br/>
      <!-- <h1>FeedBack</h1> -->
      <div id="btnGroupInFeedBack">
        <v-btn @click="check" style="width:100%" color="primary">Sign Up</v-btn>
      </div>
        <p>
         <v-btn small flat color="secondary">Forgot Password?</v-btn>
        </p>
        <v-card-text>
       <span class="font-weight-regular"> Have an account? </span>
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
    name: "",
    nameRules: [v => !!v || "Name is required"],
    pwd: "",
    pwdRules: [v => !!v || "Password is required"],
    errMsg: ""
  }),
  components: {
    SmallContainer
  },

  computed: {
    ...mapGetters({
      getter: "getLogin"
    })
  },
  methods: {
    ...mapActions(["actionLogin"]),
    clear() {},
    check() {
      if (this.$refs.form.validate()) {
        var obj = {
          name: this.name,
          pwd: this.pwd
        };
        this.actionLogin(obj);

        if (this.getter.isSuccess) {
          this.errMsg = "";
        } else {
          this.errMsg = "Login Fail";
        }
      }
    },
    login(){
           this.$router.push("/login");
    }
  }
};
</script>
