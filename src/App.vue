<template>
  <!-- <div id="app"> -->
  <v-app id="inspire">
    <Navbar/>
    <!-- <v-parallax height="700" src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"> -->
    <v-content>
      <v-container>
        <v-layout>
          <v-flex>
            <router-view></router-view>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
    <!-- </v-parallax> -->
    <v-footer dark auto>
      <v-card class="flex" flat tile>
        <v-card-title class="teal">
          <strong class="subheading">Feel free to provide your feedback!</strong>
          <v-spacer></v-spacer>
        </v-card-title>
        <v-card-actions class="grey darken-3 justify-center">
          &copy;2019 -
          <strong>MyQuiz</strong>
        </v-card-actions>
      </v-card>
    </v-footer>
  </v-app>
  <!-- </div> -->
</template>

<script>
import Navbar from "@/components/Navbar";

export default {
  name: "App",
  components: {
    Navbar
  },
  data() {
    return {
      //
    };
  }
};
</script>
