<template>
  <v-content>
    <v-container fluid fill-height>
      <v-layout row justify-center fill-height>
        <v-flex xs12 sm8 md4>
          <v-card>
            <v-toolbar dark color="primary" class="tableToolBar">
              <v-toolbar-title class="white--text">
                <slot name="title"></slot>
              </v-toolbar-title>

              <v-spacer></v-spacer>
            </v-toolbar>
            <v-card-text>
              <div id="content">
                <slot name="content"></slot>
              </div>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<style>
</style>


