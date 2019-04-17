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
                      <img src="https://randomuser.me/api/portraits/men/85.jpg" alt="Avatar">
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
              <h1>My Performance</h1>
            </v-card-title>
            <v-flex xs12 offset-xl9>
              <v-btn-toggle v-model="text">
                <v-btn value="Today">Today</v-btn>
                <v-btn value="Overall">Overall</v-btn>
              </v-btn-toggle>
            </v-flex>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>
