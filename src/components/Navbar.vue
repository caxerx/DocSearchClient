<template>
  <div>
    <!-- <drawer/> -->
    <v-toolbar color="secondary" dark>
      <slot name="hiddenIcon"></slot>

      <v-toolbar-items>
        <v-btn flat large @click="router(docSearch.link)" class="text-capitalize display-1">
          <img src="@/assets/docSearchIcon.png" height="50px">
          {{docSearch.title}}
        </v-btn>
      </v-toolbar-items>

      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat @click="router(onlineConsultant.link)">{{onlineConsultant.title}}</v-btn>
        <v-btn flat @click="router(feedBack.link)">FeedBack</v-btn>
        <v-btn flat @click="router(doctorList.link)">{{doctorList.title}}</v-btn>

        <v-menu offset-y open-on-hover>
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
        </v-menu>
      </v-toolbar-items>

      <span v-if="this.getter.isSuccess">
        <v-menu offset-y open-on-hover>
          <v-btn slot="activator" flat>
            <v-icon>{{personalName.icon}}</v-icon>
            {{personalName.title}}
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
          <v-dialog v-model="dialog" width="500">
            <v-btn flat slot="activator">{{signIn.title}}</v-btn>
            <login-dialog/>
          </v-dialog>
        </div>
      </span>
    </v-toolbar>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapState } from "vuex";
import LoginDialog from "@/components/dialog/login";

export default {
  name: "App",
  components: {
    LoginDialog
  },
  computed: {
    ...mapGetters({
      getter: "getLogin"
    }),

    personalName() {
      return { icon: "person", title: this.getter.userInfo.name, link: "" };
    },
    profile() {
      return [
        { title: "Medicine Record", link: "yourDriver/medicineRecord" },
         { title: "View Reservation", link: "yourDriver/viewReservation" },
        { title: "Edit Profile", link: "" },
        { title: "Logout", link: "actionLogout" }
      ];
    }
  },
  data() {
    return {
      //
      dialog: false,

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

  methods: {
    ...mapActions(["actionLogout", "actionOpenDialogLogin"]),

    router(linkStr) {
      if (linkStr === "actionLogout") {
        this.actionLogout();
        this.dialog = false;
        this.$router.push("/");
      } else {
        this.$router.push("/" + linkStr);
      }
    },
    menuItems() {
      return this.menu;
    }
  }
};
</script>
