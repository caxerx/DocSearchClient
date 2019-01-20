<template>
  <container>
    <div slot="content">
      <v-layout row wrap>
        <v-flex fill-height>
          <v-card flat>
            <video-chat style="height: 500px"/>
          </v-card>
        </v-flex>
      </v-layout>
      <v-card>
        <v-toolbar color="primary" dark>
          <v-toolbar-title>chat</v-toolbar-title>
        </v-toolbar>
        <div style="height: 100px"></div>

        <v-layout row wrap>
          <v-flex xs11 sm11>
            <v-text-field
              name="keywords"
              v-model="message"
              :append-outer-icon="'send'"
              box
              clear-icon="cancel"
              clearable
              label="Search"
              type="text"
              @click:append="toggleMarker"
              @click:append-outer="sendMessage"
              @click:clear="clearMessage"
              style=""
            ></v-text-field>
          </v-flex>
          <v-flex xs12 sm1  >
            <v-layout justify-center>
            <v-btn color="primary" fab   dark>
                <v-icon>description</v-icon>
              </v-btn>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-card>
    </div>
  </container>
</template


<script>
import axios from "axios";
import DoctorInfo from "@/components/onlineConsultant/DoctorInfo.vue";
import VideoChat from "@/components/onlineConsultant/VideoChat.vue";
import { mapGetters, mapActions, mapState } from "vuex";
import Container from "@/components/Container.vue";
export default {
  data: () => ({
    password: "Password",
    show: false,
    message: "",
    marker: true
  }),
  components: {
    Container,
    DoctorInfo,
    VideoChat
  },

  computed: {
    ...mapGetters({
      getter: "getLogin"
    })
  },
  methods: {
    toggleMarker() {
      this.marker = !this.marker;
    },
    sendMessage() {
      this.resetIcon();
      this.clearMessage();
    },
    clearMessage() {
      this.message = "";
    },
    resetIcon() {
      this.iconIndex = 0;
    },
    changeIcon() {
      this.iconIndex === this.icons.length - 1
        ? (this.iconIndex = 0)
        : this.iconIndex++;
    }
  }
};
</script>
