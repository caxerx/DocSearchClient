<template>
<div>
  <v-toolbar prominent=true>
   
    <v-toolbar-title>Title</v-toolbar-title>
=======
  <v-toolbar  height="80">
    <img src="./assets/logo.png" height="70"/>
    
    <v-toolbar-title> title </v-toolbar-title>
>>>>>>> 21b560459e8141e4e055739cf6eece0f1545a8aa
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat>Link One</v-btn>
      <v-btn flat>Link Two</v-btn>
      <v-btn flat>Link Three</v-btn>
    </v-toolbar-items>
  </v-toolbar>
  <router-view/>
</div>
</template>


<script>


export default {
  name: 'App',
  components: {

  },
  data () {
    return {
      //
    }
  },

  methods:{
     feedBack() {
      this.$router.push("/feedBack");
    },
  }
}
</script>
