<template>
  <div>
    <v-card v-for="(doctor,index) in doctorList" :key="index" style="margin-bottom:20px">
      <v-layout row wrap>
        <v-flex xs4 sm2>
          <v-card-title>
            <img src="@/assets/icon-person.png" class="icon">
          </v-card-title>
        </v-flex>
        <v-flex xs6 sm7>
          <v-card-text>
            <h3 class="headline mb primary--text">{{doctor.name}}</h3>
          </v-card-text>
          <v-card-text>
            <div>{{doctor.academic}}</div>
            <div>{{doctor.experience}}</div>
            <div>{{doctor.position}}</div>
          </v-card-text>
          <v-card-text>
            <h3 class="font-weight-bold">{{doctor.clinc}}</h3>
            <v-layout row wrap>
              <v-flex xs3 sm1>
                <img src="@/assets/image-icon.png" class="icon">
              </v-flex>
              <v-flex xs3 sm1>
                <img src="@/assets/image-icon.png" class="icon">
              </v-flex>
              <v-flex xs3 sm1>
                <img src="@/assets/image-icon.png" class="icon">
              </v-flex>
            </v-layout>
          </v-card-text>
        </v-flex>

        <v-flex sm3>
          <v-card-text>
            <div>
              <v-icon small>thumb_up</v-icon>
              {{doctor.like}}
            </div>
            <div>
              <v-icon small>comment</v-icon>
              {{doctor.feedback}} Feedback
            </div>
            <div>
              <v-icon small>place</v-icon>
              {{doctor.location}}
            </div>
            <div>
              <v-icon small>access_time</v-icon>
              {{doctor.available}}
            </div>
            {{showList}}
          </v-card-text>
        </v-flex>

        <v-card-actions style="width:100%">
          <v-spacer></v-spacer>

          <v-btn color="primary" @click="router('viewDoctorInfo')">
            <v-icon>person</v-icon>Profile
          </v-btn>
          <v-btn color="primary" @click="setContactShow(index)">
            <v-icon>local_phone</v-icon>Contact Clinc
          </v-btn>
          <v-btn color="primary" @click="setReservation(doctor)">
            <v-icon>add</v-icon>Create Reservation
          </v-btn>
        </v-card-actions>

        <!-- hidden contact -->
        <v-slide-y-transition>
          <v-card-text v-if="contactShowList[index].show">
            <hr>
            <div>
              <v-icon>local_phone</v-icon>
              {{doctor.phone}}
            </div>
            <div>
              <v-icon>email</v-icon>
              {{doctor.email}}
            </div>
            <v-btn block color="primary">
              <v-icon left dark>chat</v-icon>Online Chat Now
            </v-btn>
          </v-card-text>
        </v-slide-y-transition>
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
      show: false,
      showList: [],
      contactShowList: []
    };
  },
  components: {},
  computed: {
    ...mapGetters({
      getter: "getDoctorList"
    }),

    doctorList() {
      //also set showList
      for (let i = 0; i < this.getter.list.length; i++) {
        this.contactShowList.push({ index: i, show: false });
      }
      return this.getter.list;
    }
  },

  //   created: function() {
  //     this.actionInitForDoctorList();
  //   },

  methods: {
    ...mapActions(["actionSetDoctorForDoctorList"]),
    getImgPath(imgName) {
      let url = "@/assets/" + imgName;
      return url;
    },
    router(linkStr) {
      this.$router.push("/" + linkStr);
    },

    setContactShow(index) {
      this.contactShowList[index].show = !this.contactShowList[index].show;
    },
    setReservation(doctor) {
      this.actionSetDoctorForDoctorList(doctor);
      this.$router.push("/createReservation");
    }
  }
};
</script>

<style scoped>
.icon {
  width: 100%;
}
</style>

