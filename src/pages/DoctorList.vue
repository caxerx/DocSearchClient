<template>
  <div>
    <search-bar/>
    <container>
      <div slot="content">
        <div class="grey--text">79 matches found for:General Physician In Indiranagar, Bangalore</div><br/>
        <c-list slot="content"/>
      </div>
    </container>
  </div>
</template>


<script>
import Container from "@/components/Container";
import SearchBar from "@/components/doctorList/SearchBar.vue";
import cList from "@/components/doctorList/List.vue";
import { mapGetters, mapActions, mapState } from "vuex";

export default {

    data() {
    return {
       search: "",
   
    };
  },
  components: {
    cList,
    Container,
    SearchBar
  },
  computed: {
  

  },


  methods: {
  
  }
};
</script>


<style scoped>
img {
  width: 100px;
  height: 100px;
}
</style>

