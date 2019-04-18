<template>
  <div class="challenge">
    <v-container grid-list-xl text-xs-center>
      <v-layout row wrap>
        <v-flex lg8 sm8 md7 offset-sm2 offset-md0 order-sm2 order-xs2 order-lg1 order-xl1>
          <v-card>
            <v-card-title>
              Leaderboard
              <v-spacer></v-spacer>
              <v-text-field
                v-model="search"
                append-icon="search"
                label="Search"
                single-line
                hide-details
              ></v-text-field>
            </v-card-title>
            <v-data-table :headers="headers" :items="desserts" :search="search">
              <template v-slot:items="props">
                <td class="text-xs-left">{{ props.item.name }}</td>
                <td class="text-xs-right">{{ props.item.calories }}</td>
                <td class="text-xs-right">{{ props.item.fat }}</td>
                <td class="text-xs-right">{{ props.item.carbs }}</td>
                <td class="text-xs-right">{{ props.item.protein }}</td>
                <td class="text-xs-right">{{ props.item.iron }}</td>
              </template>
              <v-alert
                v-slot:no-results
                :value="true"
                color="error"
                icon="warning"
              >Your search for "{{ search }}" found no results.</v-alert>
            </v-data-table>
          </v-card>
        </v-flex>
        <v-flex
          xl3
          lg4
          md5
          sm8
          offset-sm2
          order-md2
          offset-md0
          order-sm1
          order-xs1
          order-lg2
          order-xl2
        >
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
                <v-flex xl4 lg4 md4>
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
                <v-flex xl4 lg4 md4>
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
                <v-flex xl4 lg4 md4>
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
            <v-subheader>Your score</v-subheader>
            <v-flex xl4>
              <v-card flat>
                <v-progress-circular
                  :rotate="-90"
                  size="150"
                  width="15"
                  value="value"
                  color="primary"
                >
                  <p align="center">
                    <br>Your score: 1500
                  </p>
                </v-progress-circular>
              </v-card>
            </v-flex>
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
      search: "",
      headers: [
        {
          text: "Name",
          align: "left",
          sortable: false,
          value: "name"
        },
        { text: "Calories", value: "calories" },
        { text: "Fat (g)", value: "fat" },
        { text: "Carbs (g)", value: "carbs" },
        { text: "Protein (g)", value: "protein" },
        { text: "Iron (%)", value: "iron" }
      ],
      desserts: [
        {
          name: "Danlan Huang",
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          iron: "1%"
        },
        {
          name: "Andrew Mrkva",
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          iron: "1%"
        },
        {
          name: "Patrick Hu",
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          iron: "7%"
        },
        {
          name: "Jane Doe",
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          iron: "8%"
        },
        {
          name: "Andy Samberg",
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
          iron: "16%"
        },
        {
          name: "Bruce Wayne",
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
          iron: "0%"
        },
        {
          name: "Jimmy Fallon",
          calories: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0,
          iron: "2%"
        },
        {
          name: "Kitty Perry",
          calories: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5,
          iron: "45%"
        },
        {
          name: "Lois Lane",
          calories: 452,
          fat: 25.0,
          carbs: 51,
          protein: 4.9,
          iron: "22%"
        },
        {
          name: "Miley Cyrus",
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          iron: "6%"
        }
      ]
    };
  }
};
</script>