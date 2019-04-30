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
                <v-img :src="item.urlToImage" style="width : 100%" contain></v-img>
              </v-flex>
              <v-flex xs10>
                <v-card-title primary-title style="padding-top: 0px">
                  <div>
                    <div class="display-1 font-weight-medium" style="padding-bottom : 10px">
                      <a :href="item.url" style="text-decoration: none;">{{item.title}}</a>
                    </div>
                    <div class="headline" style="padding-bottom : 10px">{{item.description}}</div>
                    <div
                      class="grey--text"
                    >From {{item.source.name}} at {{getDate(item.publishedAt)}}</div>
                  </div>
                </v-card-title>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-flex>
      </container>
    </v-card>
    <div class="text-xs-center py-2 grey--text">
      News Provided By
      <a href="https://newsapi.org/">NewsAPI.org</a>
    </div>
  </div>
</template>


<script>
import Search from "@/components/Search.vue";
import Container from "@/components/Container";
import axios from "axios";
import moment from "moment";
export default {
  components: {
    Search,
    Container
  },
  mounted() {
    this.loadNews();
  },
  data() {
    return {
      items: [],
      page: 1
    };
  },
  methods: {
    getDate(d) {
      return moment(d).format("YYYY-MM-DD");
    },
    async loadNews() {
      let data = await axios(
        "https://newsapi.org/v2/top-headlines?category=health&country=gb&apiKey=f1f9880ed2cd4d818985778915348e7e"
      );
      if (data.data.status == "ok") {
        let articles = data.data.articles;
        let i = 0;
        while (this.items.length < 5 && i < articles.length) {
          console.log(articles[i]);
          if (articles[i].urlToImage && articles[i].urlToImage != "") {
            this.items.push(articles[i]);
          }
          i++;
        }
      }
    }
  }
};
</script>




