<template>
  <div>
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
import Search from "@/components/Search.vue";
import cList from "@/components/doctorList/List.vue";
import { mapGetters, mapActions, mapState } from "vuex";

export default {
  name: "App",
    data() {
    return {
       search: "",
   
    };
  },
  components: {
    cList,
    Container,
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

