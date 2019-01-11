

<template>
  <container>
    <v-form slot="content">
      <v-text-field 
        v-model="message"
        :append-outer-icon="'search'"
        box
        clear-icon="cancel"
        clearable
        label="Search"
        type="text"
        @click:append="toggleMarker"
        @click:append-outer="sendMessage"
        @click:clear="clearMessage"
      ></v-text-field>
    </v-form>
  </container>
</template>


<script>
import Container from "@/components/Container";
import SmallContainer from "@/components/SmallContainer.vue";

export default {
  data: () => ({
    password: "Password",
    show: false,
    message: "Hey!",
    marker: true
  }),

  components: {
    Container,
    SmallContainer
  },

  methods: {
    toggleMarker() {
      this.marker = !this.marker;
    },
    sendMessage() {
      this.resetIcon();
      this.clearMessage();
    },
    clearMessage() {
      this.message = "";
    },
    resetIcon() {
      this.iconIndex = 0;
    },
    changeIcon() {
      this.iconIndex === this.icons.length - 1
        ? (this.iconIndex = 0)
        : this.iconIndex++;
    }
  }
};
</script>
