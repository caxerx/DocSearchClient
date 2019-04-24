<template>
  <v-container v-if="!$apollo.loading">
    <v-card>
      <DoctorInfoCard :doctor="doctor"/>
    </v-card>

    <v-card style="margin-top: 25px">
      <v-card-title class="headline primary" primary-title>
        <v-tabs v-model="active" color="transparent" dark slider-color="yellow">
          <v-tab v-for="DocInfoType in DocInfoTypes" :key="DocInfoType" ripple>{{DocInfoType}}</v-tab>
        </v-tabs>
      </v-card-title>
      <v-flex v-if="active==0">
        <v-layout v-for="(clinic,index) in clinics" :key="index" style="padding: 25px;">
          <br>
          <v-card style="margin-right: 25px; width:100%" flat>
            <h2>{{doctor.workplace.name}}</h2>
            <h3>{{doctor.workplace.location}}</h3>

            <h2 style="padding-top: 25px;">opening hour</h2>
            <table>
              <tr v-for="(openingHour,index) in doctor.workplace.openingHours" :key="index">
                <th>{{switchDay(openingHour.day)}}</th>
                <td>{{openingHour.am}}</td>
                <td>{{openingHour.pm}}</td>
              </tr>
            </table>
          </v-card>
          <v-flex id="ClinicMap_div">
            <h2>Map</h2>
            <iframe
              v-bind:src="clinic.map"
              width="600"
              height="450"
              frameborder="0"
              style="border:0"
              allowfullscreen
            ></iframe>
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex v-if="active==1">
        <v-data-table
          id="Service_v_data_table"
          :items="doctor.services"
          hide-actions
          hide-headers
          class="elevation-1"
        >
          <template slot="items" slot-scope="props">
            <td class="text-xs-left">{{props.item.name}}</td>
          </template>
        </v-data-table>
      </v-flex>

      <v-flex v-if="active==2">
        <div class="display-1" style="padding: 20px">Feedback for Doctor</div>
        <div v-if="getLogin.id===null"/>
        <v-card flat v-else-if="!haveFeedback">
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-card-title class="title font-weight-medium">Rating</v-card-title>
            <v-rating
              v-model="myFeedback.rating"
              background-color="green lighten-3"
              color="green"
              large
            ></v-rating>

            <v-card-text>
              <v-textarea name="input-7-1" label="Comment" rows="3" v-model="myFeedback.comment"></v-textarea>
              <div style="color:red" v-if="showTips">Comment or rating is required</div>
              <v-btn @click="submit()" color="primary">create</v-btn>
            </v-card-text>
          </v-form>
        </v-card>
        <v-card flat v-else>
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-card-title class="title font-weight-medium">Rating</v-card-title>
            <v-rating
              v-model="myFeedback.rating"
              background-color="green lighten-3"
              color="green"
              large
            ></v-rating>

            <v-card-text>
              <v-textarea name="input-7-1" label="Comment" rows="3" v-model="myFeedback.comment"></v-textarea>
              <div style="color:red" v-if="showTips">Comment or rating is required</div>
              <v-card-actions>
                <v-btn @click="edit()" color="primary">edit</v-btn>
              </v-card-actions>
            </v-card-text>
          </v-form>
        </v-card>
        <v-divider/>

        <v-card></v-card>
        <v-card flat v-for="(feedback, index) in doctor.feedbacks" :key="index">
          <v-card flat>
            <v-card-title class="title font-weight-medium">{{feedback.patient.name}}</v-card-title>
            <v-rating
              :value="feedback.rating"
              background-color="green lighten-3"
              color="green"
              style="padding-left: 5px"
              readonly
            ></v-rating>
            <v-card-text class="body-2">{{feedback.comment}}</v-card-text>
            <v-divider/>
          </v-card>
        </v-card>
      </v-flex>
    </v-card>
  </v-container>
</template>
<style scoped>
table {
  border-collapse: collapse;
  width: 100%;
  border: 1px solid #ddd;
  background-color: white;
}

th,
td {
  padding: 8px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

tr:hover {
  background-color: #f5f5f5;
}
</style>
<script>
import gql from "graphql-tag";
import DoctorInfoCard from "@/components/DoctorInfoCard";
import { mapGetters } from "vuex";
import { error } from "util";

const editFeedback = gql`
  mutation($data: FeedbackInput!, $id: Float!) {
    editFeedback(data: $data, id: $id) {
      id
    }
  }
`;
const createFeedbackMutation = gql`
  mutation($data: CreateFeedbackInput!) {
    createFeedback(data: $data) {
      id
    }
  }
`;

const doctorQuery = gql`
  query($id: ID!) {
    doctor(id: $id) {
      id
      name
      gender
      email
      phoneNo
      language
      specialty
      avatar
      academic
      experience
      workplace {
        id
        name
        location
        openingHours {
          id
          day
          am
          pm
        }
      }
      feedbacks {
        id
        patient {
          id
          name
        }
        comment
        rating
      }
      averageRating
      timeSlots {
        weekday
        start
        end
      }
      services {
        name
      }
    }
  }
`;

export default {
  components: {
    DoctorInfoCard
  },
  data() {
    return {
      valid: true,
      feedbackRules: [v => !!v || "FeedBack is required"],
      clinics: [
        {
          map:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.3280691625514!2d114.16985791495483!3d22.303429085322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDE4JzEyLjMiTiAxMTTCsDEwJzE5LjQiRQ!5e0!3m2!1szh-TW!2shk!4v1546153405835"
        }
      ],

      DocInfoTypes: ["Information", "Services", "Feedback"],
      active: 0,
      haveFeedback: false,
      showTips: false,
      myFeedback: {
        id: "",
        patient: {
          id: "",
          name: ""
        },
        comment: "",
        rating: 0
      }
    };
  },
  computed: {
    ...mapGetters({
      getLogin: "getLogin"
    })
  },
  apollo: {
    doctor: {
      query: doctorQuery,
      variables() {
        return {
          id: this.$route.query.id
        };
      },
      update(data) {
        let ownId = this.getLogin.id;
        let mfb = data.doctor.feedbacks.find(function(myfb) {
          return myfb.patient.id == ownId;
        });

        if (mfb == undefined) {
          this.haveFeedback = false;
        } else {
          this.myFeedback = Object.assign({}, mfb);
          this.haveFeedback = true;
        }

        return data.doctor;
      }
    }
  },
  focus: {
    active: function(val) {
      console.log(val);
    }
  },
  methods: {
    switchDay(day) {
      switch (day) {
        case "sun":
          return "Sunday";
        case "mon":
          return "Monday";
        case "tue":
          return "Tuesday";
        case "wed":
          return "Wednesday";
        case "thu":
          return "Thursday";
        case "fri":
          return "Friday";
        case "sat":
          return "Saturday";
      }
    },
    edit() {
      if (this.myFeedback.rating < 1 || this.myFeedback.comment === "") {
        this.showTips = true;
        return;
      }
      if (this.$refs.form.validate()) {
        let feedbackInput = {
          rating: this.myFeedback.rating,
          comment: this.myFeedback.comment
        };
        console.log(feedbackInput);
        this.$apollo
          .mutate({
            mutation: editFeedback,
            variables: {
              data: feedbackInput,
              id: parseFloat(this.myFeedback.id)
            }
          })
          .then(data => {
            // console.log(data.data.editPatient);
            this.$apollo.queries.doctor.refetch();
            this.showTips = false;
          })
          .catch(error => {
            console.error(error);
          });
      }
    },
    submit() {
      if (this.myFeedback.rating < 1 || this.myFeedback.comment === "") {
        this.showTips = true;
        return;
      }

      if (this.$refs.form.validate()) {
        let feedbackInput = {
          comment: this.myFeedback.comment,
          rating: this.myFeedback.rating,
          doctorId: parseFloat(this.doctor.id),
          patientId: parseFloat(this.getLogin.id)
        };
        this.$apollo
          .mutate({
            mutation: createFeedbackMutation,
            variables: {
              data: feedbackInput
            }
          })
          .then(data => {
            this.$apollo.queries.doctor.refetch();
            this.showTips = false;
          })
          .catch(error => {
            console.error(error);
          });
      }
    },
    clear() {}
  }
};
</script>