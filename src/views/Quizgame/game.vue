<template>
  <div class="game">
    <v-container fill-height text-xs-center fluid grid-list-xs>
      <v-layout column>
        <v-flex pa-1 lg8>
          <v-card>
            <v-layout column>
              <v-card-text>
                <h2>(1/1) TEXT QUESTION: WHICH PART PREVENT FOOD FROM ENTERING THE LARYNX?</h2>
              </v-card-text>
              <v-flex>
                <v-divider></v-divider>
              </v-flex>
              <v-card-action>
                <v-flex lg4 sm6 xs6 offset-xs3 offset-sm3 offset-lg4>
                  <v-layout row wrap align-start>
                    <v-flex v-for="item in answerItems" :key="item">
                      <v-btn
                        color="teal"
                        dark
                        large
                        round
                        block
                        href="/game/summary"
                      >{{item.answer}}</v-btn>
                    </v-flex>
                  </v-layout>
                </v-flex>
              </v-card-action>
              <v-card-text>
                <h2>
                  <v-icon>alarm</v-icon>Time remain: xx seconds
                </h2>
              </v-card-text>
            </v-layout>
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
      answerItems: [
        {
          answer: "STOMACH"
        },
        {
          answer: "LARGE INTESTINE"
        },
        {
          answer: "CAPILLARIES"
        },
        {
          answer: "EPIGLOTTIS"
        }
      ]
    };
  }
};
</script>