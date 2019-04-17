<template>
  <v-flex xl3 lg5 md6 sm8 offset-sm2 offset-md0 offset-xl1>
    <v-card>
      <v-img
        height="240px"
        class="white--text"
        src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
      >
        <v-container fill-height fluid>
          <v-layout column align-center>
            <v-flex>
              <v-avatar size="80px">
                <img src="https://randomuser.me/api/portraits/men/85.jpg" alt="Avatar">
              </v-avatar>
              <v-card-title primary-title>
                <div>
                  <div class="headline">Danlan Huang</div>
                  <div>School of Computing and Science</div>
                  <div>Beginner</div>
                </div>
              </v-card-title>
            </v-flex>
          </v-layout>
        </v-container>
      </v-img>
      <v-container fill-height fluid>
        <v-layout row align-center>
          <v-flex xl4>
            <v-card hover>
              <v-container fill-height fluid>
                <v-layout column align-center>
                  <v-card-title primary-title>
                    <div>
                      <div>Score</div>
                      <div class="headline">1500</div>
                    </div>
                  </v-card-title>
                </v-layout>
              </v-container>
            </v-card>
          </v-flex>
          <v-flex xl4>
            <v-card hover>
              <v-container fill-height fluid>
                <v-layout column align-center>
                  <v-card-title primary-title>
                    <div>
                      <div>Studied</div>
                      <div class="headline">6</div>
                    </div>
                  </v-card-title>
                </v-layout>
              </v-container>
            </v-card>
          </v-flex>
          <v-flex xl4>
            <v-card hover>
              <v-container fill-height fluid>
                <v-layout column align-center>
                  <v-card-title primary-title>
                    <div>
                      <div>Friends</div>
                      <div class="headline">5</div>
                    </div>
                  </v-card-title>
                </v-layout>
              </v-container>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
  </v-flex>
</template>
