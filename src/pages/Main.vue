<template>
<<<<<<< HEAD
  <div>
    
     
        <v-card flat style="background-color:red">
         <v-container>
        <search/>
         </v-container>
        </v-card>
    
   
=======
<v-content>
    <v-card>
      <container>
        <search slot="content"/>
      </container>
    </v-card>
>>>>>>> 7d74c3e42e125d27a8fe56bdaf936cbc186e764a

    <v-card style="margin-top: 50px">
      <container>
        <v-flex slot="content" id="medicalInfoTitle" class="display-3">Medical Information</v-flex>
        <v-flex slot="content">
          <div name="articleTitle"></div>
        </v-flex>
      </container>
    </v-card>
<<<<<<< HEAD
  </div>
=======
</v-content>
>>>>>>> 7d74c3e42e125d27a8fe56bdaf936cbc186e764a
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


