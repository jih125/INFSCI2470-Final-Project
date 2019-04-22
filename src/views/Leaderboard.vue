<template>
  <div class="challenge">
    <v-container grid-list-xl text-xs-center>
      <v-layout row wrap>
        <v-flex
          lg8
          sm8
          md7
          xl7
          offset-sm2
          offset-md0
          offset-lg0
          offset-xl1
          order-sm2
          order-xs2
          order-lg1
          order-xl1
        >
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
            <v-flex>
              <v-data-table :headers="headers" :items="desserts" :search="search">
                <template v-slot:items="props">
                  <td class="text-xs-center">{{ props.item.Ranking}}</td>
                  <td class="text-xs-left">{{ props.item.name }}</td>
                  <td class="text-xs-center">{{ props.item.Anatomy }}</td>
                  <td class="text-xs-center">{{ props.item.Physiology }}</td>
                  <td class="text-xs-center">{{ props.item.BioChemistry }}</td>
                  <td class="text-xs-center">{{ props.item.Selfcare }}</td>
                  <td class="text-xs-center">{{ props.item.Total }}</td>
                </template>
                <v-alert
                  v-slot:no-results
                  :value="true"
                  color="error"
                  icon="warning"
                >Your search for "{{ search }}" found no results.</v-alert>
              </v-data-table>
            </v-flex>
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
                <v-layout column align-center justify-center>
                  <v-flex>
                    <v-avatar size="80px">
                      <img src="../assets/Danlan_Huang.png" alt="Avatar">
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
                <v-flex xl4 lg4 md4 v-for="item in items" :key="item">
                  <v-card hover>
                    <v-layout column align-center>
                      <v-card-title primary-title>
                        <div>
                          <div>{{item.title}}</div>
                          <div class="headline">{{item.value}}</div>
                        </div>
                      </v-card-title>
                    </v-layout>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>
            <v-subheader>Your Anatomy score</v-subheader>
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
        { text: "Ranking", value: "Ranking" },
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
          Anatomy: 1500,
          Physiology: 1400,
          BioChemistry: 1700,
          Selfcare: 1600,
          Total: 6200,
          Ranking: 1
        },
        {
          name: "Andrew Mrkva",
          Anatomy: 1400,
          Physiology: 1600,
          BioChemistry: 1400,
          Selfcare: 1500,
          Total: 5900,
          Ranking: 2
        },
        {
          name: "Patrick Hu",
          Anatomy: 1400,
          Physiology: 1300,
          BioChemistry: 1500,
          Selfcare: 1400,
          Total: 5600,
          Ranking: 3
        },
        {
          name: "Jane Doe",
          Anatomy: 1400,
          Physiology: 1400,
          BioChemistry: 1400,
          Selfcare: 1300,
          Total: 5500,
          Ranking: 4
        },
        {
          name: "Andy Samberg",
          Anatomy: 1400,
          Physiology: 1200,
          BioChemistry: 1400,
          Selfcare: 1300,
          Total: 5300,
          Ranking: 5
        },
        {
          name: "Bruce Wayne",
          Anatomy: 1400,
          Physiology: 1300,
          BioChemistry: 1400,
          Selfcare: 1200,
          Total: 5300,
          Ranking: 5
        },
        {
          name: "Jimmy Fallon",
          Anatomy: 1300,
          Physiology: 1300,
          BioChemistry: 1300,
          Selfcare: 1200,
          Total: 5100,
          Ranking: 7
        },
        {
          name: "Kitty Perry",
          Anatomy: 1100,
          Physiology: 1300,
          BioChemistry: 1300,
          Selfcare: 1200,
          Total: 4900,
          Ranking: 8
        },
        {
          name: "Lois Lane",
          Anatomy: 1200,
          Physiology: 1200,
          BioChemistry: 1200,
          Selfcare: 1200,
          Total: 4800,
          Ranking: 9
        },
        {
          name: "Miley Cyrus",
          Anatomy: 1200,
          Physiology: 1200,
          BioChemistry: 1200,
          Selfcare: 1000,
          Total: 4600,
          Ranking: 10
        }
      ],
      items: [
        {
          title: "Score",
          value: "6200"
        },
        {
          title: "Completed:",
          value: "8"
        },
        {
          title: "Friends",
          value: "10"
        }
      ]
    };
  }
};
</script>