<template>

       <kalendar :configuration="calendar_settings" :appointments="appointments">
           <template slot="first-date" slot-scope="{ date }">
		<!-- Displays first date in week navigation header -->
		{{ date | normalizeDate('MMM DD') }}
	</template>
	<template slot="last-date" slot-scope="{ date }">
		<!-- Displays last date in week navigation header -->
		{{ date | normalizeDate('DD MMM, YYYY') }}
	</template>
    <div slot="creating-card" slot-scope="{appointment_props}">
		<!-- This is the card that is displayed while the user is dragging mouse on cells -->
		<!-- You can access various attributes of that selection using the slot scope appointment_props. It contains fields like: start_value, end_value and status. -->
		<h4 class="appointment-title" style="text-align: left;">New Appointment</h4>
		<span class="time">{{appointment_props.start_value.value}} - {{appointment_props.end_value.value}}
		</span>
	</div>
       </kalendar>
      <!-- </v-card>
    </v-dialog>

    <slot name="normalDialog"></slot>
  </v-layout> -->
</template>

<script>
import { Kalendar } from "kalendar-vue";
import 'kalendar-vue/dist/KalendarVue.css';


export default {
  data() {
    return {
      dialog: false,
      appointments: [],
	calendar_settings: {
	style: 'material_design', // ['flat_design', 'material_design']
			view_type: 'Month', // ['Month', 'Day']
			split_value: 20, // Value % 60 === 0
			cell_height: 20, // !isNaN(Value)
			scrollToNow: true, // Boolean
			current_day: new Date(), // Valid date
            military_time: true, // Boolean
            last_day:new Date()
	},
    };
  },
  components: {
    Kalendar
  },

  methods:{
      close(){
          this.dialog=false;
      }
  }
};
</script>