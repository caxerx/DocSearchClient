<template>
  <v-container>
    <v-card>
      <v-card-title class="headline primary" primary-title>
        <v-tabs v-model="active" color="transparent" dark slider-color="yellow">
          <v-tab v-for="DocInfoType in DocInfoTypes" :key="DocInfoType" ripple>{{DocInfoType}}</v-tab>
        </v-tabs>
      </v-card-title>
      <v-card-text>
        <v-flex v-if="active==0">
         <v-layout row wrap>
        <v-flex xs4 sm2>
          <v-card-title>
            <img src="@/assets/icon-person.png" class="icon">
          </v-card-title>
        </v-flex>
        <v-flex xs6 sm7>
          <v-card-text>
            <h3 class="headline mb primary--text">{{infos.name}}</h3>
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
          
        </v-flex>
        <v-flex v-if="active==1">
          <div id="DocQuali_div" slot="content" style>
            <div class="display-1 font-weight-regular">Qualification</div>
            <v-data-table
              id="DocQuali_v_data_table"
              :items="quali"
              hide-actions
              hide-headers
              class="elevation-1"
            >
              <template slot="items" slot-scope="props">
                <td class="text-xs-left">{{props.item.details}}</td>
              </template>
            </v-data-table>
          </div>
        </v-flex>

        <v-flex v-if="active==2">
          <div id="Service_div" slot="content">
            <div>Services</div>
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
          </div>
        </v-flex>
      </v-card-text>
    </v-card>
    <div v-bind:style="layoutStyle">
      <h1>Clinic/Hospital Information</h1>
      <v-layout v-for="(clinic,index) in clinics" :key="index" style="padding-top: 25px;">
        <br>
        <v-flex style="padding-right: 25px;">
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
        </v-flex>
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
    </div>
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
export default {
  data() {
    return {
      infos: {
        name: "YellowGreen",

        gender: "Male",

        professional: ["General Pratice", "Paediatrics"],

        email:"123456@gmail.com",

        phone:"12345678"
      },
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

      DocInfoTypes: ["Information", "Qualification", "Services"],
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

