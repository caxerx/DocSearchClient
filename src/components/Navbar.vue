<template>
  <div>
    <!-- <drawer/> -->
    <v-toolbar>
      <slot name="hiddenIcon"></slot>

      <v-toolbar-items>
        <v-btn flat large @click="router(docSearch.link)" class="text-capitalize display-1">
          <img src="@/assets/docSearchIcon.png" height="50px">
          {{docSearch.title}}
        </v-btn>
      </v-toolbar-items>

      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat>About us</v-btn>
        <v-btn flat @click="router(feedBack.link)">FeedBack</v-btn>
        <v-btn flat>download our app</v-btn>
      </v-toolbar-items>
      <loading-dialog :dialog="loadingDialog"/>
      <span v-if="isSuccess()&&getLogin!=null">
        
        <v-menu offset-y open-on-hover>
          <v-btn slot="activator" flat>
            <v-icon>person</v-icon>
            {{getLogin.name}}
          </v-btn>
          <v-list>
            <v-list-tile v-for="(pInf, index) in profile" :key="index" @click="router(pInf.link)">
              <v-list-tile-title>{{pInf.title}}</v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-menu>
      </span>
      <span v-if="!isSuccess()">
        <div class="text-xs-center">
          <v-btn flat @click="openDialog()">{{signIn.title}}</v-btn>

          <login-dialog :dialog="dialog"/>
        </div>
      </span>
    </v-toolbar>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapState } from "vuex";
import LoginDialog from "@/components/dialog/loginDialog";
import LoadingDialog from "@/components/dialog/loadingDialog";
import gql from "graphql-tag";


export default {
  components: {
    LoginDialog,
    LoadingDialog
  },
  data() {
    return {
      //
      skipQuery: true,
      feedBack: { title: "FeedBack", link: "feedBack" },
      signIn: { title: "sign-in", link: "login" },
      docSearch: { title: "DocSearch", link: "" },
      onlineConsultant: { title: "Online Doctor", link: "onlineConsultant" },
      doctorList: { title: "Doctor List", link: "doctorList" },
      reservation: [
        { title: "Create Reservation", link: "createReservation" },
        { title: "View Reservation", link: "viewReservation" }
      ]
    };
  },
  apollo: {
  
  },
  computed: {
    ...mapGetters({
      getter: "getDialog",
      getLogin:"getLogin",
    }),

    
    dialog: {
      get() {
        return this.getter.login;
      },
      set(val) {
        this.$store.commit("setLoginDialog", val);
      }
    },
    loadingDialog: {
      get() {
       
       return false;
      },
      set(val) {
        console.log(val);
        this.loadingDialog = val;
      }
    },
    profile() {
      return [
        { title: "Medical Record", link: "yourDriver/medicalRecordList" },
        { title: "View Reservation", link: "yourDriver/viewReservation" },
        { title: "Edit Profile", link: "yourDriver/editProfile" },
        { title: "Change Password", link: "yourDriver/changePassword" },
        { title: "Logout", link: "actionLogout" }
      ];
    }
  },

  methods: {
    ...mapActions(["actionsSetLogin"]),
    router(linkStr) {
      if (linkStr === "actionLogout") {
        this.actionsSetLogin(null)
        this.$router.push("/");
        this.$forceUpdate();
      } else {
        this.$router.push("/" + linkStr);
      }
    },
    menuItems() {
      return this.menu;
    },
    isSuccess() {
      if(this.getLogin!== null){
        return true;
      }else{
        return false;
      }
    },
    openDialog() {
      this.$store.commit("setLoginDialog", true);
    }
  }
};
</script>
