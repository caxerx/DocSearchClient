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

        <!-- <v-menu offset-y open-on-hover>
          <v-btn slot="activator" flat>reservation
            <v-icon>arrow_drop_down</v-icon>
          </v-btn>
          <v-list>
            <v-list-tile
              v-for="(reservation, index) in reservation"
              :key="index"
              @click="router(reservation.link)"
            >
              <v-list-tile-title>{{reservation.title}}</v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-menu>-->
      </v-toolbar-items>

      <span v-if="isSuccess()&&patient!=null">
        <v-menu offset-y open-on-hover>
          <v-btn slot="activator" flat>
            <v-icon>person</v-icon>
            {{patient.name}}
          </v-btn>
          <v-list>
            <v-list-tile v-for="(pInf, index) in profile" :key="index" @click="router(pInf.link)">
              <v-list-tile-title>{{pInf.title}}</v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-menu>
      </span>
      <span v-else>
        <div class="text-xs-center">
          <v-btn flat @click="openDialog()">{{signIn.title}}</v-btn>
          <v-dialog width="500" :value="dialog" @input="closeDialog()">
            <login-dialog/>
          </v-dialog>
        </div>
      </span>
    </v-toolbar>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapState } from "vuex";
import LoginDialog from "@/components/dialog/loginDialog";
import gql from "graphql-tag";

const patientQuery = gql`
  query($id: ID!) {
    patient(id: $id) {
      name
    }
  }
`;

export default {
  components: {
    LoginDialog
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
    patient: {
      query:patientQuery,
      variables() {
        return {
           id: this.$cookie.get("userId")
        };
      },
      skip() {
        return this.skipQuery;
      }
    }
  },
  computed: {
    ...mapGetters({
      getter: "getDialog"
    }),
    dialog() {
      return this.getter.normal;
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
    ...mapActions(["actionOpenDialog", "actionCloseDialog"]),

    router(linkStr) {
      if (linkStr === "actionLogout") {
       this.$cookie.delete("userId");
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
      if (this.$cookie.get("userId") != null&&this.$cookie.get("userId")!="") {
        this.$apollo.queries.patient.skip = false;
        this.$apollo.queries.patient.refetch();
        return true;
      }

      return false;
    },
    openDialog() {
      this.actionOpenDialog("normal");
    },
    closeDialog() {
      this.actionCloseDialog("normal");
    }
  }
};
</script>
