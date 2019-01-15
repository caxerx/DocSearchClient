<template>
  <small-container>
    <span slot="title">FeedBack</span>
    <v-form slot="content" ref="form" v-model="valid" lazy-validation>
      <!-- <h1>FeedBack</h1> -->
      <v-text-field v-model="name" :rules="nameRules" label="Name" required></v-text-field>
      <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>

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
