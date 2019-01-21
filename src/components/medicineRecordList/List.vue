<template>
  <div>
    <v-card
      v-for="(content,index) in contents"
      :key="index"
      style="margin-bottom:2%;padding-left:2%"
    >
      <v-layout row wrap>
        <v-flex sm1>
          <v-layout justify-center row pt-5>
            <v-card color="blue-grey lighten-5">
              <div id="dateDiv">
                <div class="headline text-md-center">{{getDay(content.date)}}</div>
                <span class="headline grey--text">{{getMonth(content.date)}}</span>
              </div>
            </v-card>
          </v-layout>
        </v-flex>
        <v-flex sm11>
          <v-card-text>
            <div class="headline">{{content.clinc}}</div>
            <div class="grey--text">{{content.date}}, {{content.startTime}}</div>
            <span class="grey--text">{{content.doctor}}</span>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn icon @click="setShow(index)">
              <v-icon>{{ showList[index].show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
            </v-btn>
          </v-card-actions>

          <v-slide-y-transition>
            <v-card-text>
              <div v-show="showList[index].show">
                <hr>
                <div class="font-weight-bold">Symptoms:</div>
                <div
                  v-for="symptom in content.symptom"
                  :key="symptom"
                  class="font-weight-regular"
                >{{symptom}}</div>
                <br>
                <div class="font-weight-bold">Medications</div>
                <div
                  v-for="medicine in content.medicine"
                  :key="medicine"
                  class="font-weight-regular"
                >{{medicine}}</div>
                <br>
                <div class="font-weight-bold">Price:</div>
                <div class="font-weight-regular">{{content.amount}}</div>
              </div>
            </v-card-text>
          </v-slide-y-transition>
        </v-flex>
      </v-layout>
    </v-card>
  </div>
</template>


<script>
import { mapGetters, mapActions, mapState } from "vuex";
export default {
  name: "App",
  data() {
    return {
      search: "",
      show: "",
      showList: []
    };
  },
  components: {},
  computed: {
    ...mapGetters({
      getter: "getMedicineRecordList"
    }),

    contents() {
      //   also set the list
      for (let i = 0; i < this.getter.contents.length; i++) {
        this.showList.push({ index: i, show: false });
      }
      return this.getter.contents;
    }
  },

  methods: {
    getDay(date) {
      let d = new Date(date);
      return d.getDate();
    },
    getMonth(date) {
      let d = new Date(date);
      let month = d.toLocaleString("en-us", { month: "short" });
      return month;
    },
    setShow(index) {
      this.showList[index].show = !this.showList[index].show;
    }
  }
};
</script>

<style scoped>
#dateDiv {
  padding-left: 5px;
  padding-right: 5px;
}
img {
  width: 40px;
}
</style>
