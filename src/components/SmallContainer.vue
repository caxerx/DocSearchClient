<template>
  <v-container fluid fill-height>
    <v-layout row justify-center fill-height>
      <v-flex xs4>
        <v-card>
          <v-toolbar dark color="primary" class="tableToolBar">
            <v-toolbar-title class="white--text">
              <slot name="title"></slot>
            </v-toolbar-title>

            <v-spacer></v-spacer>
          </v-toolbar>
          <v-flex xs12 sm10 offset-sm1 style="mar">
            <div id="content">
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


