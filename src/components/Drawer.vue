<template>
  <div>
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
      <v-toolbar-side-icon
        slot="hiddenIcon"
        class="hidden-md-and-up"
        @click.stop="drawer = !drawer"
      ></v-toolbar-side-icon>
    </nav-bar>

    <!-- <v-content> -->

    <!-- <slot name="content"></slot> -->
    <router-view v-if="isRouterAlive" />
    <!-- </v-content> -->
  </div>
</template>
<script>
import NavBar from "@/components/Navbar";

export default {
  components: {
    NavBar
  },
  provide() {
    return {
      reload: this.reload
    };
  },
  data() {
    return {
      drawer: false,
      isRouterAlive:true,
      items: [
        { title: "Home", icon: "dashboard" },
        { title: "About", icon: "question_answer" }
      ]
    };
  },
  methods: {
    reload() {
      this.isRouterAlive = false;
      this.$nextTick(function(){
        this.isRouterAlive = true;
      })
    }
  }
};
</script>

