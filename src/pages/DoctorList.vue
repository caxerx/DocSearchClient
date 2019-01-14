<template>
<v-container>
  <v-card>
    <container>
      <search slot="content"/>
    </container>
  </v-card>


    <v-card style="margin-top: 50px">
      <container>
      <v-list slot="content">
        <v-list-tile v-for="item in items" :key="item.title" >
          <v-list-tile-action>
            <v-icon>account_circle</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      </container>
    </v-card>

</v-container>
</template>


<script>
import Container from "@/components/Container";
import Search from "@/components/Search.vue";

export default {
  data() {
    return {
      items: [
        {
          title: "Dr. Jason Oner",
          avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg"
        },
        {
          title: "Dr. Travis Howard",
          avatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg"
        },
        {
          title: "Dr. Ali Connors",
          avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg"
        },
        {
          title: "Dr. Cindy Baker",
          avatar: "https://cdn.vuetifyjs.com/images/lists/4.jpg"
        }
      ]
    };
  },
  components: {
    Container,
    Search
  }
};
</script>
