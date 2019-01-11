<template>
  <v-toolbar height="60" color="secondary" dark>
    <v-toolbar-items>
      <v-btn flat large @click="router(docSearch.link)" class="text-capitalize display-1">
      <img  src="../assets/logo.png" height="50px"/>
      {{docSearch.title}} 
      </v-btn>
    </v-toolbar-items>
   
   
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat>Link One</v-btn>
      <v-btn flat @click="router(feedBack.link)">FeedBack</v-btn>

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
          <v-icon>{{personal.icon}}</v-icon>
          {{personal.title}}
        </v-btn>
        <v-list>
          <v-list-tile v-for="(pInf, index) in profile" :key="index" @click="router(pInf.link)">
            <v-list-tile-title>{{pInf.title}}</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
      <!-- <v-btn flat @click="router(personal.link)">
        <v-icon>{{personal.icon}}</v-icon>
        {{personal.title}}
      </v-btn>-->
    </span>
    <span v-else>
      <v-btn flat @click="router(signIn.link)">{{signIn.title}}</v-btn>
    </span>

    <!-- it is hidden menu -->
    <v-menu class="hidden-md-and-up">
      <v-toolbar-side-icon slot="activator"></v-toolbar-side-icon>

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

    <!-- it is hidden menu -->
    <v-menu class="hidden-md-and-up">
      <v-toolbar-side-icon slot="activator"></v-toolbar-side-icon>
      <v-list>
        <v-list-tile v-for="item in menu" :key="item.icon">
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-menu>
  </v-toolbar>
</template>

<script>
import { mapGetters, mapActions, mapState } from "vuex";
export default {
  name: "App",
  components: {},
  computed: {
    ...mapGetters({
      getter: "getLogin"
    }),

    personal() {
      return { icon: "person", title: this.getter.userInfo.name, link: "" };
    },
    profile() {
      return [
        { title: "Edit Profile", link: "" },
        { title: "Logout", link: "actionLogout" }
      ];
    }
  },
  data() {
    return {
      //
      menu: [
        { icon: "home", title: "Link A" },
        { icon: "info", title: "Link B" },
        { icon: "warning", title: "Link C" }
      ],
      feedBack: { title: "FeedBack", link: "feedBack" },
      signIn: { title: "sign-in", link: "login" },
      docSearch:{title:"DocSearch",link:"main"},

      reservation: [
        { title: "Create Reservation", link: "createReservation" },
        { title: "View Reservation", link: "viewReservation" }
      ]
    };
  },

  methods: {
    ...mapActions(["actionLogout"]),
    router(linkStr) {
      if (linkStr === "actionLogout") {
        this.actionLogout();
             this.$router.push("/main");
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
