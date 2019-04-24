<template>
  <div>
    <v-flex xs12>
      <v-btn @click="show = !show">toggle</v-btn>
    </v-flex>

    <v-flex xs12>
      <v-tooltip v-model="show" top>
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on">
            <v-icon color="grey lighten-1"></v-icon>
          </v-btn>
        </template>
        <span>Programmatic tooltip</span>
      </v-tooltip>
    </v-flex>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false
    };
  }
};
</script>