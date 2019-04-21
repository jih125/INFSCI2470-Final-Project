<template>
  <div class="dashboard">
    <v-container fluid grid-list-xl>
      <v-layout row wrap>
        <v-flex d-flex xl6 lg8 sm12 md7 offset-xl0>
          <v-card>
            <v-subheader>Set up your quiz</v-subheader>
            <v-flex>
              <v-select
                v-model="schoolPicker"
                :items="school"
                :menu-props="{ maxHeight: '200' }"
                label="Select your school"
                solo
              ></v-select>
            </v-flex>
            <v-subheader>Choose your topic</v-subheader>
            <v-layout column align-center justify-center>
              <v-flex>
                <v-layout row wrap align-start>
                  <v-item v-for="item in topicItems" :key="item.title">
                    <v-chip
                      slot-scope="{active, toggle}"
                      :selected="active"
                      @click="toggle"
                      color="green"
                      dark
                    >{{item.title}}</v-chip>
                  </v-item>
                </v-layout>
              </v-flex>
              <v-flex>
                <v-dialog v-model="dialog" max-width="400">
                  <template v-slot:activator="{ on }">
                    <v-btn color="primary" dark v-on="on">
                      <span>Submit</span>
                    </v-btn>
                  </template>
                  <v-card>
                    <v-container fluid>
                      <v-layout column align-center justify-center>
                        <v-card-title class="headline">Set your Quiz</v-card-title>
                        <v-select :items="number" label="Number of Questions"></v-select>
                        <v-select :items="time" label="Time Limits per Questions"></v-select>
                        <v-card-actions>
                          <v-spacer></v-spacer>
                          <v-container fluid>
                            <v-layout align-center justify-center>
                              <v-btn color="indigo" large round dark href="/game">Start!</v-btn>
                            </v-layout>
                          </v-container>
                        </v-card-actions>
                      </v-layout>
                    </v-container>
                  </v-card>
                </v-dialog>
              </v-flex>
            </v-layout>
          </v-card>
        </v-flex>
        <v-flex d-flex xl4 lg4 md5>
          <v-layout column>
            <v-flex xl3 lg4 md4 sm6 offset-md0 offset-xl0>
              <v-card>
                <v-img
                  height="180px"
                  class="white--text"
                  src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
                >
                  <v-container fill-height fluid>
                    <v-layout row align-center justify-center>
                      <v-flex>
                        <v-avatar size="100px">
                          <img src="https://randomuser.me/api/portraits/men/85.jpg" alt="Avatar">
                        </v-avatar>
                      </v-flex>
                      <v-card-title>
                        <div>
                          <div class="headline">Danlan Huang</div>
                          <div>School of Computing and Science</div>
                          <div>Beginner</div>
                        </div>
                      </v-card-title>
                    </v-layout>
                  </v-container>
                </v-img>
                <v-subheader>Your current topic: XXX</v-subheader>
                <v-layout column align-center justify-center>
                  <v-flex xl4>
                    <v-card flat href="/Leaderboard">
                      <v-progress-circular
                        :rotate="-90"
                        size="180"
                        width="15"
                        value="value"
                        color="primary"
                      >
                        <p align="center">
                          <br>Today's score: 1500
                        </p>
                      </v-progress-circular>
                    </v-card>
                  </v-flex>
                </v-layout>
              </v-card>
            </v-flex>
            <v-flex xl4 lg6 sm8 md5>
              <v-card>
                <v-list subheader>
                  <v-subheader>Topic Ranking:</v-subheader>
                  <v-list-tile avatar v-for="item in items" :key="item.title" @click>
                    <v-list-tile-content>
                      <!-- <v-layout row> -->
                      <v-list-tile-title v-html="item.number"></v-list-tile-title>
                    </v-list-tile-content>
                    <v-list-tile-avatar>
                      <img :src="item.avatar">
                    </v-list-tile-avatar>
                    <v-list-tile-content>
                      <v-list-tile-title v-html="item.title"></v-list-tile-title>
                    </v-list-tile-content>
                    <!-- <v-list-tile-content> -->
                    <!-- <v-list-tile-title v-html="item.number"></v-list-tile-title> -->

                    <!-- </v-layout> -->
                    <!-- </v-list-tile-content> -->
                    <v-list-tile-action>
                      <v-flex>
                        <v-dialog v-model="dialog2" max-width="400">
                          <template v-slot:activator="{ on }">
                            <v-btn flat icon v-on="on">
                              <v-icon :color="item.active ? 'teal' : 'grey'">gamepad</v-icon>
                            </v-btn>
                          </template>
                          <v-card>
                            <v-container fluid>
                              <v-layout column wrap align-center justify-center>
                                <v-card-title class="headline">Challenge Start</v-card-title>
                                <v-flex>
                                  <v-card-text>You're gonna Challenge your friend. Are you sure you want to start now?</v-card-text>
                                </v-flex>
                                <v-card-actions>
                                  <v-spacer></v-spacer>
                                  <v-container fluid>
                                    <v-layout align-center justify-center>
                                      <v-btn
                                        color="red"
                                        large
                                        round
                                        dark
                                        @click="dialog2 = false"
                                      >Cancel</v-btn>
                                      <v-btn color="green" large round dark href="/game">Start!</v-btn>
                                    </v-layout>
                                  </v-container>
                                </v-card-actions>
                              </v-layout>
                            </v-container>
                          </v-card>
                        </v-dialog>
                      </v-flex>
                    </v-list-tile-action>
                  </v-list-tile>
                </v-list>
              </v-card>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      cards: [],
      items: [
        {
          active: true,
          number: "1",
          title: "Danlan Huang",
          avatar: "https://randomuser.me/api/portraits/men/85.jpg"
        },
        {
          active: true,
          number: "2",
          title: "Andrew Mrkva",
          avatar: "https://randomuser.me/api/portraits/men/85.jpg"
        },
        {
          title: "Patrick Hu",
          number: "3",
          avatar: "https://randomuser.me/api/portraits/men/85.jpg"
        },
        {
          title: "Jane Doe",
          number: "4",
          avatar: "https://randomuser.me/api/portraits/men/85.jpg"
        }
      ],
      tabItems: [
        {
          title: "School of Pharmacy"
        },
        {
          title: "School of Dental Medicine"
        },
        {
          title: "School of Computing and Information"
        },
        {
          title: "School of Health and Rehabilitation Science"
        },
        {
          title: "School of Medicine"
        },
        {
          title: "School of Nursing"
        },
        {
          title: "Swanson School of Engineering"
        },
        {
          title: "School of Public Health"
        },
        {
          title: "School of Social Work"
        }
      ],
      number: ["1", "5", "10", "15", "All"],
      time: ["Unlimited", "5", "10", "15", "30", "60"],
      topicItems: [
        { number: "1", title: "Anatomy" },
        { number: "2", title: "Self Care" },
        { number: "3", title: "Physiology" },
        { number: "4", title: "BioChemestry" }
      ],
      text:
        "Lorem ipsum dolor nt ut labore et dolore magna aliqua. U quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    };
  }
};
</script>
