<template>
  <container>
    <div slot="content" id="content" ref="content">
        <v-toolbar color="white" flat id="toolbar">
          <v-toolbar-title class="left">Your Drive</v-toolbar-title>
          <img src="@/assets/icon-person.png">
          <v-toolbar-title class="right"></v-toolbar-title>
        </v-toolbar>
        <v-layout row wrap id="layout">
          <v-flex sm2 id="drawer" :style="{height:routerHeight}">
            <v-navigation-drawer stateless value="true">
              <v-list>
                <v-list-tile @click>
                  <v-list-tile-action>
                    <v-icon>home</v-icon>
                  </v-list-tile-action>
                  <v-list-tile-title>Home</v-list-tile-title>
                </v-list-tile>
              </v-list>
            </v-navigation-drawer>
          </v-flex>
          <v-flex sm10 id="router" :style="{height:routerHeight}">
            <router-view class="nested-routes"></router-view>
          </v-flex>
        </v-layout>
      </div>
  </container>
  <!-- nested-routes -->
</template>


<script>
import Container from "@/components/Container";
import { mapGetters, mapActions, mapState } from "vuex";

export default {
  data: function() {
    return {
      active: null,
      height: ""
    };
  },

  mounted: function() {
    let clientHeight = this.$refs.content.clientHeight;
      this.height = this.$refs.content.clientHeight * 0.8;
    
    console.log(this.$refs.content.offsetHeight*0.8);
    console.log(this.$el.clientHeight);
  },

  computed: {
    ...mapGetters({
      getter: "getLogin"
    }),
    routerHeight() {
      return this.height + "px";
    }
  },

  method: {},
  components: {
    Container
  }
};
</script>

<style scoped>
#toolbar {
  margin-bottom: 3px;
}
.nested-routes {
  margin-left: 3px;
}

.left {
  width: 15.5%;
}
.right {
}
img {
  width: 40px;
}

#router {
  /* height: 450px; */
  overflow-y: auto;
}

#drawer {
  overflow-y: auto;
}

</style>

