<template>
      <v-container  fill-height>
        <v-layout  justify-center >
          <v-flex xs5>
            <v-card height="100%">
                  <v-toolbar dark color="primary" class="tableToolBar">
                    <v-toolbar-title class="white--text"><slot name="title"></slot></v-toolbar-title>

                    <v-spacer></v-spacer>
                  </v-toolbar>
              <v-flex xs12 sm10 offset-sm1 style="mar">
                <div id="content" >
                
                  <slot name="content"></slot>
                </div>
              </v-flex>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
</template>

<style>

</style>


