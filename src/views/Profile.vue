<template>
  <div class="Profile">
    <v-container fill-height fluid grid-list-xl>
      <v-layout justify-center>
        <v-flex xl8 xs12 sm10 md10 lg8>
          <v-card>
            <v-card-title>
              <h1>My Profile</h1>
            </v-card-title>
            <v-layout row align-center>
              <v-flex xl5 xs7 offset-xl1>
                <v-card height="150" flat>
                  <v-card-text>
                    <span>
                      <b>Name:</b> Danlan Huang
                      <br>
                      <b>Student ID:</b> dah189
                      <br>
                      <b>Email:</b> dah189@pitt.edu
                      <br>
                      <b>Year:</b> 1
                      <sup>st</sup>
                      <br>
                      <b>Study Area:</b> Information Science Human-Centered Computing
                    </span>
                  </v-card-text>
                </v-card>
              </v-flex>
              <v-flex xl2 offset-xl3>
                <v-card height="150" flat>
                  <br>
                  <v-layout column align-center>
                    <v-avatar size="100px">
                      <img src="../assets/Danlan_Huang.png" alt="Avatar">
                    </v-avatar>
                  </v-layout>
                </v-card>
              </v-flex>
            </v-layout>
            <v-flex xl10 md11 sm11 offset-xl1>
              <v-card flat>
                <v-card-actions>
                  <v-btn color="primary" dark>Edit Profile</v-btn>
                  <v-spacer></v-spacer>
                  <v-btn color="primary" dark>Edit portrait</v-btn>
                </v-card-actions>
              </v-card>
            </v-flex>
            <v-divider></v-divider>
            <v-card-title>
              <h1>My Quiz History</h1>
            </v-card-title>
            <v-flex>
              <v-container fluid fill-height grid-list-xs>
                <v-layout row wrap>
                  <v-flex lg3 v-for="item in history" :key="item">
                    <v-card color="primary" dark hover>
                      <v-card-text>
                        <h4>Date:</h4>
                        {{item.date}}
                        <h4>Topic:</h4>
                        {{item.Topic}}
                        <h4>Level:</h4>
                        {{item.level}}
                        <h4>Correct rate:</h4>
                        {{item.rate}}
                      </v-card-text>
                    </v-card>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-flex>
            <div class="text-xs-center">
              <v-pagination v-model="page" :length="2" circle></v-pagination>
            </div>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      page: "1",
      history: [
        {
          date: "04/20/2019",
          Topic: "Anatomy",
          level: "hard",
          rate: "9/10",
          color: "primary"
        },
        {
          date: "04/18/2019",
          Topic: "Self-Care",
          level: "Entry",

          rate: "8/10",
          color: "green"
        },
        {
          date: "04/16/2019",
          Topic: "BioChemistry",
          level: "hard",

          rate: "9/10",
          color: "red"
        },
        {
          date: "04/14/2019",
          Topic: "Anatomy",
          level: "intermediate",

          rate: "9/10",
          color: "primary"
        },
        {
          date: "04/10/2019",
          Topic: "Self-Care",
          level: "intermediate",

          rate: "9/10",
          color: "green"
        },
        {
          date: "04/10/2019",
          Topic: "Physiology",
          level: "hard",

          rate: "9/10",
          color: "orange"
        },
        {
          date: "04/10/2019",
          Topic: "Anatomy",
          level: "entry",

          rate: "9/10",
          color: "primary"
        }
      ]
    };
  }
};
</script>

<style>
</style>
