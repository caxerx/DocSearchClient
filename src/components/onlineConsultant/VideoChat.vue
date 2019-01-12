<template>
  <v-card height="100%">
    <img src="@/assets/doctor.jpeg" id="opponent_videoChat">
    <div id="smallVedio">
           <img src="@/assets/person.jpeg" id="self_videoChat">
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

#self_videoChat{
    max-width:150px;
}
</style>

