<template >
  <div >
      <v-app class="blue lighten-5">
       <navbar/>
    <v-content>
    <router-view/>
    </v-content>
    </v-app>
  </div>
</template>




<script>
import Navbar from '@/components/Navbar.vue'

export default {
  name: "App",
  components: {
    Navbar,
    
  },
  data() {
    return {
      //
      
    };
  },

  methods: {
    
  }
};
</script>
