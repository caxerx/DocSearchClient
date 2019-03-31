<template>
  <v-container>
    <v-card>
      <DoctorInfoCard/>
    </v-card>
    <v-card style="margin-top: 25px">
      <v-card-title class="headline primary" primary-title>
        <v-tabs v-model="active" color="transparent" dark slider-color="yellow">
          <v-tab v-for="DocInfoType in DocInfoTypes" :key="DocInfoType" ripple>{{DocInfoType}}</v-tab>
        </v-tabs>
      </v-card-title>
      <v-flex v-if="active==0">
        <!-- <v-layout v-for="(clinic,index) in clinics" :key="index" style="padding: 25px;">
          <br>
          <v-card style="margin-right: 25px; width:100%" flat>
            <h2>{{clinic.name}}</h2>
            <h3>{{clinic.Address}}</h3>

            <h2 style="padding-top: 25px;">opening hour</h2>
            <table>
              <tr v-for="(time,index) in clinic.times" :key="index">
                <th>{{time.date}}</th>
                <td>{{time.am}}</td>
                <td>{{time.pm}}</td>
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
        </v-layout>-->
        <v-layout v-for="(clinic,index) in clinics" :key="index" style="padding: 25px;">
          <br>
          <v-card style="margin-right: 25px; width:100%" flat>
            <h2>{{doctor.workplace.name}}</h2>
            <h3>{{doctor.workplace.location}}</h3>

            <h2 style="padding-top: 25px;">opening hour</h2>
            <table>
              <tr v-for="(time,index) in clinic.times" :key="index">
                <th>{{time.date}}</th>
                <td>{{time.am}}</td>
                <td>{{time.pm}}</td>
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
          :items="Services"
          hide-actions
          hide-headers
          class="elevation-1"
        >
          <template slot="items" slot-scope="props">
            <td class="text-xs-left">{{props.item.details}}</td>
          </template>
        </v-data-table>
      </v-flex>

      <v-flex v-if="active==2">
        <div class="display-1" style="padding: 20px">Feedback for Doctor</div>
        <v-divider/>
        <v-card flat>
          <v-card-title class="title font-weight-medium">user a</v-card-title>
          <v-card-text class="body-2">
            He was down to earth in behaviour and attitude
            Explained every aspect if our doubt
            Appropriate advice for each point of query
          </v-card-text>
          <v-divider/>
        </v-card>

        <v-card flat>
          <v-card-title class="title font-weight-medium">user b</v-card-title>
          <v-card-text class="body-2">
            He was down to earth in behaviour and attitude
            Explained every aspect if our doubt
            Appropriate advice for each point of query
          </v-card-text>
          <v-divider/>
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

// const workplaceQuery = gql`
//   query($id: ID!)){
//     doctor(id: $id) {
//       workplace {
//         name
//         location
//         type
//       }
//     }
//   }
// `;

export default {
  apollo: {
    doctor: {
      query: gql`
        query doctor($id: ID!) {
          doctor(id: $id) {
            workplace {
              name
              location
              type
            }
          }
        }
      `,
      variables() {
        return {
          id: this.$route.query.id
        };
      }
    }
  },

  components: {
    DoctorInfoCard
  },
  data() {
    return {
      quali: [
        {
          details: "MBBS (HK) 1975"
        },
        {
          details: "FHKAM (OPHTHALMOLOGY) 1993"
        }
      ],
      Services: [
        {
          details: "General Consultation"
        },
        {
          details: "XXXXX"
        }
      ],
      layoutStyle: {
        padding: "20px"
      },
      clinics: [
        {
          name: "ABC Clinic",
          Address:
            "Unit A, 99/F, HSH Kowloon Centre, 192-194 Nathan Road, Jordan, Kowloon",
          times: [
            {
              date: "Monday",
              am: "9:00 - 12:00",
              pm: "14:00 - 17:00"
            },
            {
              date: "Tuesday",
              am: "9:00 - 12:00",
              pm: "14:00 - 17:00"
            },
            {
              date: "Wednesday ",
              am: "9:00 - 12:00",
              pm: "14:00 - 17:00"
            },
            {
              date: "Thursday ",
              am: "9:00 - 12:00",
              pm: "14:00 - 17:00"
            },
            {
              date: "Friday",
              am: "9:00 - 12:00",
              pm: "14:00 - 17:00"
            },
            {
              date: "Saturday",
              am: "9:00 - 12:00",
              pm: "--"
            },
            {
              date: "Sunday",
              am: "--",
              pm: "--"
            }
          ],

          map:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.3280691625514!2d114.16985791495483!3d22.303429085322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDE4JzEyLjMiTiAxMTTCsDEwJzE5LjQiRQ!5e0!3m2!1szh-TW!2shk!4v1546153405835"
        },
        {
          name: "CDE Hospital",
          Address:
            "Unit A, 99/F, HSH Kowloon Centre, 192-194 Nathan Road, Jordan, Kowloon",
          times: [
            {
              date: "Monday",
              am: "9:00 - 12:00",
              pm: "14:00 - 17:00"
            },
            {
              date: "Tuesday",
              am: "9:00 - 12:00",
              pm: "14:00 - 17:00"
            },
            {
              date: "Wednesday ",
              am: "9:00 - 12:00",
              pm: "--"
            },
            {
              date: "Thursday ",
              am: "9:00 - 12:00",
              pm: "14:00 - 17:00"
            },
            {
              date: "Friday",
              am: "9:00 - 12:00",
              pm: "14:00 - 17:00"
            },
            {
              date: "Saturday",
              am: "9:00 - 12:00",
              pm: "--"
            },
            {
              date: "Sunday",
              am: "--",
              pm: "--"
            }
          ],

          map:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.3280691625514!2d114.16985791495483!3d22.303429085322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDE4JzEyLjMiTiAxMTTCsDEwJzE5LjQiRQ!5e0!3m2!1szh-TW!2shk!4v1546153405835"
        }
      ],

      DocInfoTypes: ["Information", "Services", "Feedback"],
      active: 0
    };
  },
  focus: {
    active: function(val) {
      console.log(val);
    }
  }
};
</script>

