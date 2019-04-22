<template>
    <v-dialog :value="dialog"  width="200" @input="closeDialog()">
      <v-card>
        <v-card-text>
           <v-layout column justify-center align-center v-if="createSuccess">
            <img src="@/assets/createSuccess.png" style="width:70px;height:70px" />
            <p style="padding-top:15px" class="text-sm-center">Create Successfully</p>
          </v-layout>
           <v-layout column justify-center align-center v-else>
            <v-progress-circular :size="70" color="primary" indeterminate></v-progress-circular>
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
  watch:{

  },
  props:{
      dialog:Boolean,
      createSuccess:Boolean
  },
  methods:{
      closeDialog(){
          this.$emit("input",false)
      }
  },
};
</script>
