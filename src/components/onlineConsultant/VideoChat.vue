<template>
  <v-card height="100%">
    <v-layout row justify-center fill-height>
      <img src="@/assets/doctor.jpeg" id="opponent_videoChat">

      <v-flex xs12 >
        <div id="smallVedio">
          <img src="@/assets/person.jpeg" id="self_videoChat">
        </div>
      </v-flex>
    </v-layout>
  </v-card>
</template>


<script>
import { mapGetters, mapActions, mapState } from "vuex";
import SmallContainer from "@/components/SmallContainer";
export default {
  name: "App",
  components: {
    SmallContainer
  },
  computed: {
    ...mapGetters({
      getter: "getOnlineConsultant"
    })
  },

  data() {
    return {
      //
    };
  },

  methods: {}
};
</script>

<style >
#smallVedio {
  /* position: absolute;
  right: 0px;
  top: 0px; */
}

#opponent_videoChat {
  /* height: 100%;
  width:auto;
  display: block;
  margin-left: auto;
  margin-right: auto; */
}

#self_videoChat {
  max-width: 150px;
}
</style>

