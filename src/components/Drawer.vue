<template>
  <v-app class="blue lighten-5">
    <v-navigation-drawer v-model="drawer" temporary app>
      <v-list dense>
        <v-list-tile @click>
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Home</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click>
          <v-list-tile-action>
            <v-icon>contact_mail</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Contact</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <nav-bar>
      <v-toolbar-side-icon slot="hiddenIcon" class="hidden-md-and-up" @click.stop="drawer = !drawer"></v-toolbar-side-icon>
    </nav-bar>

        <!-- <v-content> -->
    
      <!-- <slot name="content"></slot> -->
      <router-view/>
        <!-- </v-content> -->
   
  </v-app>
</template>
<script>
import NavBar from "@/components/Navbar";

export default {
  components: {
    NavBar
  },
  data() {
    return {
      drawer: false,
      items: [
        { title: "Home", icon: "dashboard" },
        { title: "About", icon: "question_answer" }
      ]
    };
  }
};
</script>

