<template>
  <div>
    <!-- dialog  -->
    <div v-if="dialogType=='add'">
      <add-item-form/>
    </div>
    <div v-else-if="dialogType=='edit'">
      <edit-item-form/>
    </div>




  <template>
  <v-toolbar dark color="primary" class="tableToolBar">
      <v-flex xs2> 
    <v-toolbar-title class="white--text">Reservation List</v-toolbar-title>
      </v-flex>
      <v-flex xs4 > 
       <v-text-field  color="white" v-model="search" append-icon="search" label="Search" single-line hide-details ></v-text-field>
      </v-flex>

    <v-spacer></v-spacer>

  </v-toolbar>

  
</template>
  
    <v-data-table :headers="headers" :search="search" :items="contents" class="elevation-1">
      <template slot="items" slot-scope="props">
        <td>{{ props.item.no }}</td>
        <td class="text-xs-left">{{ props.item.date }}</td>
        <td class="text-xs-left">{{ props.item.startTime }}</td>
        <td class="text-xs-left">{{ props.item.endTime }}</td>

        <!-- waiting -->
        <td
          class="text-xs-left"
          v-if="props.item.status==='Waiting'"
          style="color:red"
        >{{ props.item.status }}</td>

        <td class="text-xs-left" v-if="props.item.status==='Waiting'">
          <v-btn flat icon color="red" @click="deleteItem(props.item)">
            <v-icon>clear</v-icon>
          </v-btn>
        </td>
        <!-- Approval -->
        <td
          class="text-xs-left"
          v-else-if="props.item.status==='Approval'"
          style="color:blue"
        >{{ props.item.status }}</td>

        <td class="text-xs-left" v-if="props.item.status==='Approval'">
          <v-btn flat color=red icon @click="deleteItem(props.item)">
            <v-icon>clear</v-icon>
          </v-btn>
        </td>
        <!-- Finish -->
        <td
          class="text-xs-left"
          v-else-if="props.item.status==='Finish'"
          style="color:green"
        >{{ props.item.status }}</td>
        <td class="text-xs-left" v-if="props.item.status==='Finish'">

          <v-btn flat icon disabled>
            <v-icon>clear</v-icon>
          </v-btn>
        </td>
        <!-- cancel -->
        <td
          class="text-xs-left"
          v-else-if="props.item.status==='Cancel'"
          style="color:grey"
        >{{ props.item.status }}</td>
        <td class="text-xs-left" v-if="props.item.status==='Cancel'">
          <v-btn flat icon disabled>
            <v-icon>clear</v-icon>
          </v-btn>
        </td>
      </template>

      <v-alert
        slot="no-results"
        :value="true"
        color="error"
        icon="warning"
      >Your search for "{{ search }}" found no results.</v-alert>
    </v-data-table>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapState } from "vuex";

export default {
  data: () => ({
    dialogType: "",
    search: ""
  }),

  computed: {
    // formTitle() {
    //   return this.editedIndex === -1 ? "New Item" : "Edit Item";
    // }
    ...mapGetters({
        getter:"getViewReservation",
    }),

    headers(){
        return this.getter.headers;
    },
     contents(){
        return this.getter.contents;
    }
   
  },

  components: {

  },

  //   watch: {
  //     dialog(val) {
  //       val || this.close();
  //     }
  //   },

  methods: {
    ...mapActions([
     
    ]),

    approvalItem(item) {
      this.dialogType = "approval";
      this.actionApprovalItemFromReservationList(item);
    },

    viewAllergyDetail(item) {
      // this.dialogType = "viewAllergy";
      // this.actionViewAllergy(item);
    },

    open() {
      this.dialogType = "add";
      this.actionOpenDialog("normal");
      this.actionSetDatePickerTypeFromReservationList("addItemDialog");
    },



    close() {
      this.actionCloseDialog("normal");
    },

    save() {
      this.actionSaveItemFromReservationList();
    }
  }
};
</script>

