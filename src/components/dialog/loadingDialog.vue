<template>
    <v-dialog :value="dialog"  width="150">
      <v-card>
        <v-card-text>
          <v-layout column justify-center align-center>
            <v-progress-circular :size="50" color="primary" indeterminate></v-progress-circular>
            <p style="padding-top:15px" class="text-sm-center">Loading</p>
          </v-layout>
        </v-card-text>
      </v-card>
    </v-dialog>

</template>

<script>
export default {
  data() {
    return {
      
    };
  },
  props:{
      dialog:Boolean
  }
};
</script>
