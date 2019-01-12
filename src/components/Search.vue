

<template>
  
    <v-form>
      <div id="title" class="display-3" style="text-align: center ">        
        Search a Doctor        
      </div>
      <v-text-field
        name="keywords"
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
        style="padding-top: 50px"
      ></v-text-field>
      <v-layout wrap align-center>
      <v-flex xs12 sm3 d-flex class="selectbox">
      <v-select :items="specialty" label="specialty" outline name="specialty"></v-select>
      </v-flex>
      <v-flex xs12 sm3 d-flex class="selectbox">
      <v-select :items="specialty" label="locations" outline name="specialty"></v-select>
      </v-flex>
      <v-flex xs12 sm3 d-flex class="selectbox">
      <v-select :items="specialty" label="language" outline name="specialty"></v-select>
      </v-flex>
      <v-flex xs12 sm3 d-flex class="selectbox">
      <v-select :items="specialty" label="gender" outline name="specialty"></v-select>
      </v-flex>
      </v-layout>
    </v-form>
  
</template>

<style scoped>
.selectbox{
  padding-right: 10px;
}
</style>

<script>
import Container from "@/components/Container";
import SmallContainer from "@/components/SmallContainer.vue";

export default {
  data: () => ({
    password: "Password",
    show: false,
    message: "",
    marker: true,
    specialty: ["General Pratice", "Cardiology", "Dentisry", "Dietetics"]
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
