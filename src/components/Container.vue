<template>
<v-content>
  <v-layout fill-height>
    <v-flex xs12>
      <!-- <v-flex xs12 sm10 offset-sm1> -->
        <v-flex xs12 sm10 offset-sm1 style="mar" fill-height>
          <div id="content">
          <slot name="content"></slot>
          </div>
        </v-flex>
    </v-flex>
  </v-layout>
</v-content>
</template>


<style>
  #vcard {
  /* height: 100%; */
  
}

#content{
  padding-top:20px;
  height:100%;
 
}
</style>
