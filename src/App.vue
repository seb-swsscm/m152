<template>
  <v-app>
    <!-- navbar, flat so it doesnt stick out, #084C61 colour -->
    <v-app-bar app flat color="primary" dark>
      <v-toolbar-title>Heimreise</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-toolbar-items class="pr-0">
        <!-- object type, text to embedd within bar -->
        <v-btn text to="/">Home</v-btn>

        <v-btn text to="/video">Video</v-btn>

        <v-btn text to="/drehbuch">Drehbuch</v-btn>
      </v-toolbar-items>
    </v-app-bar>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>
