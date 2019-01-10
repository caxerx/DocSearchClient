<template>
  <v-toolbar height="60" class="blue lighten-1" dark>
    <img src="../assets/logo.png" height="50">

    <v-toolbar-title>title</v-toolbar-title>

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

      <v-btn flat>Sign-in</v-btn>
    </v-toolbar-items>

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
    <v-btn flat @click="router(loginOrLogout.link)">
      <v-icon>{{loginOrLogout.icon}}</v-icon>
      {{loginOrLogout.title}}
    </v-btn>

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
export default {
  name: "App",
  components: {},
  data() {
    return {
      //
      menu: [
        { icon: "home", title: "Link A" },
        { icon: "info", title: "Link B" },
        { icon: "warning", title: "Link C" }
      ],
      feedBack: { title: "FeedBack", link: "feedBack" },
      loginOrLogout: { icon: "person", title: "Login", link: "login" },

      reservation: [
        { title: "Create Reservation", link: "createReservation" },
        { title: "View Reservation", link: "viewReservation" }
      ]
    };
  },

  methods: {
    router(linkStr) {
      this.$router.push("/" + linkStr);
    },
    menuItems() {
      return this.menu;
    }
  }
};
</script>
