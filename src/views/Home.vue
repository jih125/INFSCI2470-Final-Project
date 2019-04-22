<template>
  <div class="dashboard">
    <v-container fluid grid-list-xl>
      <v-layout row wrap>
        <v-flex d-flex xl5 lg8 sm12 md7 offset-xl2>
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
                        <v-select :items="level" label="Choose your level"></v-select>
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
            <v-subheader>Tips:</v-subheader>
            <v-flex>
              <v-card flat>
                <v-card-text>
                  <font color="grey">
                    <p>Once you select the quiz topic, please click the "SUBMIT" button and select the difficulty level.</p>
                    <p>There are three levels provided for your game:</p>
                    <p>
                      <li>Entry: 10 questions per quiz, 100 credits per question, 60 seconds;</li>
                      <li>Intermediate: 15 questions per quiz, 100 credits per question, 60 seconds;</li>
                      <li>Hard: 20 questions per quiz, 100 credits per question, 60 seconds;</li>
                    </p>
                    <p>Plus, you'll get bonus credits if you answer your question correctly and fast within 30 secs!!!</p>
                    <p>Good luck! May the force be with you.</p>
                  </font>
                </v-card-text>
              </v-card>
            </v-flex>
          </v-card>
        </v-flex>
        <v-flex d-flex xl3 lg4 md5>
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
                          <img src="../assets/Danlan_Huang.png" alt="Avatar">
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
                  <v-subheader>Topic Ranking: Anatomy (temporary)</v-subheader>
                  <v-list-tile avatar v-for="item in items" :key="item.title" @click>
                    <v-list-tile-avatar>
                      <img :src="item.avatar">
                    </v-list-tile-avatar>
                    <v-list-tile-content>
                      <v-list-tile-title v-html="item.title"></v-list-tile-title>
                    </v-list-tile-content>
                    <v-list-tile-content>
                      <v-list-tile-title v-html="item.number"></v-list-tile-title>
                    </v-list-tile-content>
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
      schoolPicker: [],
      cards: [],
      items: [
        {
          active: true,
          number: "#1",
          title: "Danlan Huang",
          avatar: "https://randomuser.me/api/portraits/men/85.jpg"
        },
        {
          active: true,
          number: "#2",
          title: "Andrew Mrkva",
          avatar: "https://randomuser.me/api/portraits/men/85.jpg"
        },
        {
          title: "Patrick Hu",
          number: "#3",
          avatar: "https://randomuser.me/api/portraits/men/85.jpg"
        },
        {
          title: "Jane Doe",
          number: "#4",
          avatar: "https://randomuser.me/api/portraits/men/85.jpg"
        }
      ],
      school: [
        "School of Pharmacy",
        "School of Dental Medicine",
        "School of Computing and Information",
        "School of Health and Rehabilitation Science",
        "School of Medicine",
        "School of Nursing",
        "Swanson School of Engineering",
        "School of Public Health",
        "School of Social Work"
      ],
      level: [
        "Entry(10 questions)",
        "Intermediate(15 questions)",
        "Hard(20 questions)"
      ],
      topicItems: [
        { number: "1", title: "Anatomy" },
        { number: "2", title: "Self Care" },
        { number: "3", title: "Physiology" },
        { number: "4", title: "BioChemestry" }
      ]
    };
  }
};
</script>
