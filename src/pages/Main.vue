<template>
  <v-container>
    <v-card>
      <container>
        <search slot="content"/>
      </container>
    </v-card>

    <v-card style="margin-top: 50px">
      <container>
        <v-flex slot="content" id="medicalInfoTitle" class="display-3">Medical Information</v-flex>
        <v-flex slot="content">
          <div name="articleTitle">aaaawd</div>
        </v-flex>
      </container>
    </v-card>
  </v-container>
</template>


<script>
import Search from "@/components/Search.vue";
import Container from "@/components/Container";

export default {
  components: {
    Search,
    Container
  }
};
</script>


