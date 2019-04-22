<template >
  <v-app class="indigo lighten-5">
    <drawer></drawer>
  </v-app>
</template>




<script>
import Drawer from "@/components/Drawer.vue";
import { mapGetters, mapActions, mapState } from "vuex";

export default {
  name: "App",
  components: {
    Drawer
  },
 
  data() {
    return {
      //
    };
  },
  
  computed:{
    ...mapGetters({
      getLogin:"getLogin"
    }),

  },

  methods: {}
};
</script>
