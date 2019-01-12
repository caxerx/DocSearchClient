<template>
    <container>
        <div slot="content">
             <v-layout row wrap>
            <v-flex xs4>
            <doctor-info/>
            </v-flex>
              <v-flex xs8>
            <video-chat/>
            </v-flex>
             </v-layout>
        </div>
    </container>
</template>


<script>
import axios from "axios";
import DoctorInfo from '@/components/onlineConsultant/DoctorInfo.vue'
import VideoChat from '@/components/onlineConsultant/VideoChat.vue'
import { mapGetters, mapActions, mapState } from "vuex";
import Container from "@/components/Container.vue";
export default {
  data: () => ({

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
 
  }
};
</script>
