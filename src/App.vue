<template >
  <div>
    <v-app class="blue lighten-5">
      <drawer>
        <v-content slot="content">
          <router-view/>
        </v-content>
      </drawer>
    </v-app>
  </div>
</template>




<script>
import Drawer from "@/components/Drawer.vue";

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

  methods: {}
};
</script>
