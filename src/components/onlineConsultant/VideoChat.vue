<template>
  <v-card height="100%">
    <img src="@/assets/doctor.jpeg" id="opponent_videoChat">
    <div id="smallVedio">
      <v-card width="100%" height="100%"></v-card>
    </div>
  </v-card>
</template>


<script>
import { mapGetters, mapActions, mapState } from "vuex";
export default {
  name: "App",
  components: {},
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
  width: 150px;
  height: 150px;
  position: absolute;
  right: 0px;
  top: 0px;
}

#opponent_videoChat {
  height: 100%;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>

