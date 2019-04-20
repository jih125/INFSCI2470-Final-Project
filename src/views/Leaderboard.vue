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
                <td class="text-xs-right hidden-xs-only">{{ props.item.Anatomy }}</td>
                <td class="text-xs-right hidden-xs-only">{{ props.item.Physiology }}</td>
                <td class="text-xs-right hidden-xs-only">{{ props.item.BioChemistry }}</td>
                <td class="text-xs-right hidden-xs-only">{{ props.item.Selfcare }}</td>
                <td class="text-xs-right">{{ props.item.Total }}</td>
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
          sortable: true,
          value: "name"
        },
        { text: "Anatomy", value: "Anatomy" },
        { text: "Physiology", value: "Physiology" },
        { text: "BioChemistry", value: "BioChemistry" },
        { text: "Selfcare", value: "Selfcare" },
        { text: "Total", value: "Total" }
      ],
      desserts: [
        {
          name: "Danlan Huang",
          Anatomy: 159,
          Physiology: 6.0,
          BioChemistry: 24,
          Selfcare: 4.0,
          Total: "1%"
        },
        {
          name: "Andrew Mrkva",
          Anatomy: 237,
          Physiology: 9.0,
          BioChemistry: 37,
          Selfcare: 4.3,
          Total: "1%"
        },
        {
          name: "Patrick Hu",
          Anatomy: 262,
          Physiology: 16.0,
          BioChemistry: 23,
          Selfcare: 6.0,
          Total: "7%"
        },
        {
          name: "Jane Doe",
          Anatomy: 305,
          Physiology: 3.7,
          BioChemistry: 67,
          Selfcare: 4.3,
          Total: "8%"
        },
        {
          name: "Andy Samberg",
          Anatomy: 356,
          Physiology: 16.0,
          BioChemistry: 49,
          Selfcare: 3.9,
          Total: "16%"
        },
        {
          name: "Bruce Wayne",
          Anatomy: 375,
          Physiology: 0.0,
          BioChemistry: 94,
          Selfcare: 0.0,
          Total: "0%"
        },
        {
          name: "Jimmy Fallon",
          Anatomy: 392,
          Physiology: 0.2,
          BioChemistry: 98,
          Selfcare: 0,
          Total: "2%"
        },
        {
          name: "Kitty Perry",
          Anatomy: 408,
          Physiology: 3.2,
          BioChemistry: 87,
          Selfcare: 6.5,
          Total: "45%"
        },
        {
          name: "Lois Lane",
          Anatomy: 452,
          Physiology: 25.0,
          BioChemistry: 51,
          Selfcare: 4.9,
          Total: "22%"
        },
        {
          name: "Miley Cyrus",
          Anatomy: 518,
          Physiology: 26.0,
          BioChemistry: 65,
          Selfcare: 7,
          Total: "6%"
        }
      ]
    };
  }
};
</script>