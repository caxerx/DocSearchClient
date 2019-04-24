<template>
  <div>
    <v-card flat class="primary" dark style="padding-top:70px ; padding-bottom: 70px">
      <v-container>
        <search/>
      </v-container>
    </v-card>

    <v-card>
      <container>
        <v-flex slot="content" id="medicalInfoTitle" class="display-3">Medical Information</v-flex>
        <v-flex slot="content">
          <v-flex v-for="(item,index) in items" :key="index" style="padding-bottom: 20px">
            <v-layout>
              <v-flex xs2>
                <v-img
                  src="https://cdn.vuetifyjs.com/images/cards/foster.jpg"
                  style="width : 100%"
                  contain
                ></v-img>
              </v-flex>
              <v-flex xs10>
                <v-card-title primary-title style="padding-top: 0px">
                  <div>
                    <div
                      class="display-1 font-weight-medium"
                      style="padding-bottom : 10px"
                    >What is Lorem Ipsum?</div>
                    <div
                      class="headline"
                      style="padding-bottom : 10px"
                    >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</div>
                    <div>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages</div>
                  </div>
                </v-card-title>
              </v-flex>
            </v-layout>
          </v-flex>
          <v-flex>
            <v-layout justify-center>
              <v-pagination v-model="page" :length="6"></v-pagination>
            </v-layout>
          </v-flex>
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
  },
  data() {
    return {
      items: [{ key: 1 }, { key: 2 }, { key: 3 }],
      page: 1
    };
  }
};
</script>




