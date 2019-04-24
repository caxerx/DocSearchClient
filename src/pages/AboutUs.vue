<template>
  <div>
    <v-card>
      <v-card class="primary" dark flat>
        <v-layout justify-center>
          <v-card-title class="display-3">About us</v-card-title>
        </v-layout>
      </v-card>
      <v-card
        dark
        :img="image"
        class="bgImage"
        style="height:700px"
      >
        <v-layout justify-center align-center>
          <v-flex sm8>
            <v-container>
              <v-card-text class="display-1 font-weight-light" style="text-align:center">
                DocSearch provide a platform for people to search for medical information such as doctor information and health information, and efficient way to book their services.
                Also, we provide a brand new way to see doctor, Online consultation which can provide a more convenient way to do the consultation.
              </v-card-text>
            </v-container>
          </v-flex>
        </v-layout>
      </v-card>
    </v-card>
  </div>
</template>

<script>
export default {
  data:()=>({
    image:require("@/assets/aboutUs_hero.png"),
  }),
  components: {

  }
};
</script>

<style scoped>

</style>
