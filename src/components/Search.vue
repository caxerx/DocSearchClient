

<template >
    
    <v-form >    
      <div id="title" class="display-3" style="text-align: center ">        
        Search a Doctor        
      </div>
      <v-text-field
        color="white"
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
      <v-select :items="specialty" label="specialty" outline name="specialty" color="white"></v-select>
      </v-flex>
      <v-flex xs12 sm3 d-flex class="selectbox">
      <v-select :items="location" label="location" outline name="location" color="white"></v-select>
      </v-flex>
      <v-flex xs12 sm3 d-flex class="selectbox">
      <v-select :items="language" label="language" outline name="Language" color="white"></v-select>
      </v-flex>
      <v-flex xs12 sm3 d-flex class="selectbox">
      <v-select :items="gender" label="gender" outline name="Gender" color="white"></v-select>
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
    specialty: ["General Pratice", "Cardiology", "Dentisry", "Dietetics"],
    location: ["Kowloon", "Hong Kong", "New Territories"],
    language: ["Chinese","English"],
    gender:["Male", "Female"]
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
      this.$router.push("/doctorList");
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
