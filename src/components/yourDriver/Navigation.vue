<template>
     <v-navigation-drawer stateless value="true">
              <v-list>
                
                <v-list-tile v-for="(driver,index) in drivers" :key="index" @click="router(driver.link)">
                  <v-list-tile-title>{{driver.title}}</v-list-tile-title>
                  
                </v-list-tile>
                
              </v-list>
              
            </v-navigation-drawer>
</template>


<script>
export default {
    data(){
        return{
            drivers:[
                {title:"Medicine Record",link:"medicalRecordList"},
                {title:"Your Reservation",link:"viewReservation"},
                {title:"Edit Profile",link:"editProfile"},
                {title:"Change Password", link:"changePassword"}
            ]
        }
    },
    methods:{
        router(link){
            this.$router.push(link);
        }
    }
}
</script>
