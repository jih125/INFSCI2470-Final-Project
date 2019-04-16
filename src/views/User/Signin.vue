<template>
  <div class="Signin">
    <v-containter fluid grid-list-xl spacing-playground py-5>
      <v-layout row wrap>
        <v-flex d-flex xl7 sm4 lg6 offset-lg1>
          <v-card>
            <v-spacer></v-spacer>
            <v-spacer></v-spacer>
            <v-card-title primary-title>
              <h1>Welcome to the Quiz Game!</h1>
            </v-card-title>
            <v-card-text>
              <h4>
                Quiz game is an educational game application
                provided for you from University of Pittsburgh. Here you're able to practice, complete quizes,
                complete with your friends and review your study performance.
                Let's just begin and hail to Pitt!
              </h4>
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex d-flex xl4 lg4>
          <v-card color="primary">
            <v-spacer></v-spacer>
            <v-spacer></v-spacer>
            <v-flex lg10 offset-lg1>
              <v-text-field dark label="Username" placeholder="Username"></v-text-field>
            </v-flex>
            <v-flex lg10 offset-lg1>
              <v-text-field dark label="Password" placeholder="Password"></v-text-field>
            </v-flex>
            <v-flex offset-lg7>
              <v-card-text>Forgot Password?</v-card-text>
            </v-flex>
            <v-flex offset-lg4>
              <v-btn dark color="green" href="/Home">Sign in</v-btn>
            </v-flex>
          </v-card>
        </v-flex>
      </v-layout>
    </v-containter>
  </div>
</template>
