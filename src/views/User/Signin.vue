<template>
  <div class="Signin">
    <v-container fluid grid-list-xl>
      <v-layout row wrap>
        <v-flex d-flex xl5 sm7 md7 lg6 offset-xl2 offset-lg1>
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
        <v-flex d-flex sm5 xl3 md5 lg4>
          <v-card>
            <v-form v-model="valid">
              <v-container>
                <v-flex lg10 offset-lg1>
                  <v-text-field
                    v-model="username"
                    :rules="usernameRules"
                    label="Username"
                    outline
                    required
                  ></v-text-field>
                </v-flex>
                <v-flex lg10 offset-lg1>
                  <v-text-field
                    v-model="password"
                    :rules="passwordRules"
                    label="Password"
                    outline
                    required
                  ></v-text-field>
                </v-flex>
                <v-card-text class="text-xs-right">Forgot Password?</v-card-text>
                <v-flex>
                  <v-btn dark block color="green" href="/Home">Sign in</v-btn>
                </v-flex>
              </v-container>
            </v-form>
          </v-card>
        </v-flex>
        <!-- </v-flex> -->
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({
    valid: false,
    username: "",
    usernameRules: [v => !!v || "Username is required"],
    password: "",
    passwordRules: [
      v => !!v || "Password is required",
      v => v.length >= 6 || "Password must be more than 6 characters"
    ]
  })
};
</script>
