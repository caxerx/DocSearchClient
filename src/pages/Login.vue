<template>
<div>
    <v-form  ref="form" height="100%" v-model="valid" lazy-validation>
      <v-text-field
        prepend-icon="email"
        name="email"
        label="email"
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
  
      <span style="color:red">{{errMsg}}</span>
      <br/>
      <!-- <h1>FeedBack</h1> -->
     <v-card-actions>
        <v-btn @click="check" style="width:100%" color="primary">Login</v-btn>
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
import SmallContainer from "@/components/SmallContainer.vue";
export default {
  data: () => ({
    valid: true,
    email: "",
    emailRules: [v => !!v || "Email is required"],
    pwd: "",
    pwdRules: [v => !!v || "Password is required"],
    errMsg: ""
  }),
  components: {
    SmallContainer
  },

  computed: {
    ...mapGetters({
   
    })
  },
  methods: {
    ...mapActions(["actionCloseDialog"]),
    clear() {},
    check() {
      if (this.$refs.form.validate()) {
        var obj = {
          email: this.email,
          pwd: this.pwd
        };
        

        localStorage.setItem("userId",1);
        this.$router.push("/")
        this.actionCloseDialog("normal")
        

        // if (this.getter.isSuccess) {
        //   this.$router.push("/");
        //   this.errMsg = "";
        // } else {
        //   this.errMsg = "Login Fail";
        // }
      }
    },
    signUp(){
           this.$router.push("/signup");
    }
  }
};
</script>
