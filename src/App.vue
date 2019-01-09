<template>
  <div>
      <v-app >
    <v-toolbar height="80">
      <img src="./assets/logo.png" height="70">

      <v-toolbar-title>title</v-toolbar-title>

      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat>Link One</v-btn>

        <v-menu offset-y>
          <v-btn slot="activator" flat>Clinc
            <v-icon>arrow_drop_down</v-icon>
          </v-btn>
          <v-list>
            <v-list-tile v-for="(clinc, index) in clinc" :key="index" @click="router(clinc.link)">
              <v-list-tile-title >{{clinc.title}}</v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-menu>
        <v-btn flat>
          <v-icon>person</v-icon>Login
        </v-btn>
      </v-toolbar-items>

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
    <v-content>
    <router-view/>
    </v-content>
    </v-app>
  </div>
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
      clinc: [
        { title: "Link A", link: "" },
        { title: "View Reservation", link: "viewReservation" },
        { title: "FeedBack", link: "feedBack" }
      ]
    };
  },

  methods: {
    router(linkStr){
       this.$router.push("/"+linkStr);
    },
    feedBack() {
      this.$router.push("/feedBack");
    },
    menuItems() {
      return this.menu;
    }
  }
};
</script>
