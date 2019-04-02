<template>
  <div class="text-xs-center">
      <v-btn @click="setCookie()"></v-btn>
       {{getCookie}}
  </div>
</template>

<script>
import Login from "@/pages/Login";
import SignUp from "@/pages/SignUp";
import { mapGetters, mapActions, mapState } from "vuex";
export default {

  data() {
    return {
      search: "",
      active: null,
      types: ["Login", "Sign Up"]
    };
  },

  watch: {
    active: function(val) {
      console.log(val);
    }
  },
  components: {
    Login,
    SignUp
  },

  computed: {
    $state() {
      return this.$store.state.login.login;
    },
    getCookie(){
      localStorage.clear();
      return this.$cookie.get('stringSuffixs');
    },
    ...mapGetters({
      
    }),

  },

  methods: {
    setCookie(){
      this.$cookie.set('stringSuffixs', 'Thirty seconds later', { expires: '30m' });
    }
  }
};
</script>