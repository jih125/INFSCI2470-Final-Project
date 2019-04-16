<template>
  <div class="Signin">
    <v-container fluid grid-list-xl>
      <v-layout row wrap>
        <v-flex d-flex xl6 sm7 md7 lg6 offset-lg1>
          <v-card>
            <v-card-title class="text-xs-center">
              <h1>Welcome to the Quiz Game!</h1>
            </v-card-title>
            <v-card-text>
              <p>
                Quiz game is an educational game application
                provided for you from University of Pittsburgh. Here you're able to practice, complete quizes,
                complete with your friends and review your study performance.
                Let's just begin and hail to Pitt!
              </p>
            </v-card-text>
          </v-card>
        </v-flex>
        <!-- <v-flex> -->
        <v-flex d-flex sm5 xl6 md5 lg4>
          <v-card color="primary" class="white--text">
            <v-flex lg10 offset-lg1>
              <v-text-field dark label="Username" placeholder="Username"></v-text-field>
            </v-flex>
            <v-flex lg10 offset-lg1>
              <v-text-field dark label="Password" placeholder="Password"></v-text-field>
            </v-flex>
            <v-card-text class="text-xs-right">Forgot Password?</v-card-text>
            <v-flex>
              <v-btn dark block color="green" href="/Home">Sign in</v-btn>
            </v-flex>
          </v-card>
        </v-flex>
        <!-- </v-flex> -->
      </v-layout>
    </v-container>
  </div>
</template>
