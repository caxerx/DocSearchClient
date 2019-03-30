<template>
  <container>
    <div slot="content" id="contentasdasd" ref="content">
      <v-toolbar color="white" flat id="toolbar">
        <!-- <v-layout row fill-height> -->
        <v-flex sm2>
          <v-toolbar-title class="left">Your Drive</v-toolbar-title>
        </v-flex>

        <!-- <v-flex sm1> -->
        <img src="@/assets/icon-person.png" class="px-0">
        <!-- </v-flex> -->
          <v-flex sm7 class="text-xs-left" style="padding-left:5px" v-if="patient!=null">
            <span class="headline">{{patient.name}}</span>
            <br>
            <span class="grey--text">{{patient.phoneNo}}, {{patient.email}}</span>
          </v-flex>
        <!-- </v-layout> -->
      </v-toolbar>
      <v-layout row wrap id="layout">
        <v-flex sm2 id="drawer" :style="{height:routerHeight}">
          <navigation/>
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
import Navigation from "@/components/yourDriver/Navigation.vue";
import gql from "graphql-tag";

import { mapGetters, mapActions, mapState } from "vuex";

const patientQuery = gql`
  query($id: ID!) {
    patient(id: $id) {
      name
      email
      phoneNo
    }
  }
`;

export default {
  data: function() {
    return {
      active: null,
      height: ""
    };
  },
  apollo: {
    patient: {
      query: patientQuery,
      variables() {
        return {
          id: localStorage.getItem("userId")
        };
      }
    }
  },
  mounted: function() {
    let windowHeight = window.innerHeight;
    this.height = windowHeight * 0.75;
  },

  computed: {
    ...mapGetters({}),
    routerHeight() {
      return this.height + "px";
    }
  },

  method: {},
  components: {
    Container,
    Navigation
  }
};
</script>

<style scoped>
#toolbar {
  margin-bottom: 3px;
}
.nested-routes {
  margin-left: 3px;
  margin-right: 3px;
}

/* .left {
  width: 15.5%;
}
.right {
    width:60%;
} */
img {
  width: 40px;
  float: right;
}

#router {
  /* height: 450px; */
  overflow-y: auto;
}

#drawer {
  overflow-y: auto;
}
</style>

