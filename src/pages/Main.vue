<template>
  <div>
    
     
        <v-card flat class="primary" dark style="padding-top:70px ; padding-bottom: 70px">
         <v-container>
        <search/>
         </v-container>
        </v-card>
    
   

    <v-card >
      <container>
        <v-flex slot="content" id="medicalInfoTitle" class="display-3">Medical Information</v-flex>
        <v-flex slot="content">
          <div name="articleTitle"></div>
        </v-flex>
      </container>
    </v-card>
  </div>
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


