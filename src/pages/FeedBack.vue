<template>
  <small-container>
    <span slot="title">FeedBack</span>
    <v-form slot="content" ref="form" v-model="valid" lazy-validation>
      <!-- <h1>FeedBack</h1> -->
       <v-card-title class="title font-weight-medium">Rating </v-card-title>
      <v-rating
        v-model="rating"
        background-color="green lighten-3"
        color="green"
        large
      ></v-rating>

      <v-textarea name="input-7-1" label="Comment" rows="10" value></v-textarea>

      <v-card-actions>
        <v-btn @click="submit" color="primary">submit</v-btn>
        <v-btn @click="clear" color="primary">clear</v-btn>
      </v-card-actions>
    </v-form>
  </small-container>
</template>


<script>
import axios from "axios";
import SmallContainer from "@/components/SmallContainer.vue";

export default {
  data: () => ({
    
    rating: 4,
    valid: true,
    name: "",
    nameRules: [v => !!v || "Name is required"],
    email: "",
    emailRules: [
      v => !!v || "E-mail is required",
      v => /.+@.+/.test(v) || "E-mail must be valid"
    ],
    select: null,

    checkbox: false
  }),

  components: {
    SmallContainer
  },

  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        // Native form submission is not yet supported
        axios.post("/api/submit", {
          name: this.name,
          email: this.email,
          select: this.select,
          checkbox: this.checkbox
        });
      }
    },
    clear() {
      this.$refs.form.reset();
    }
  }
};
</script>

<style>
#btnGroupInFeedBack {
}
</style>
