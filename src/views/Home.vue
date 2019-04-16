<template>
  <div class="dashboard">
    <v-container fluid grid-list-xl>
      <v-layout row wrap>
        <v-flex d-flex xl8 lg8 sm12 md8>
          <v-card>
            <v-subheader>Set up your quiz</v-subheader>
            <v-select
              v-model="schoolPicker"
              :items="school"
              :menu-props="{ maxHeight: '200' }"
              label="Select your school"
              solo
            ></v-select>
            <v-container fluid grid-list-xl>
              <v-layout row wrap align-center justify-center>
                <v-flex>
                  <v-dialog v-model="dialog" max-width="400">
                    <template v-slot:activator="{ on }">
                      <v-btn large color="primary" round dark v-on="on">
                        <span>Anatomy</span>
                      </v-btn>
                      <v-btn large color="primary" round dark v-on="on">
                        <span>Physiology</span>
                      </v-btn>
                      <v-btn large color="primary" round dark v-on="on">
                        <span>BioChemistry</span>
                      </v-btn>
                      <v-btn large color="primary" round dark v-on="on">
                        <span>Self-Care</span>
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
            </v-container>
          </v-card>
        </v-flex>
        <v-flex d-flex>
          <v-layout column wrap>
            <v-flex d-flex xl4 lg6 sm8 md5>
              <v-card>
                <v-list subheader>
                  <v-subheader>Profile</v-subheader>
                  <v-list-tile avatar v-for="item in items" :key="item.title" @click>
                    <v-list-tile-avatar>
                      <img :src="item.avatar">
                    </v-list-tile-avatar>
                    <v-list-tile-content>
                      <v-list-tile-title v-html="item.title"></v-list-tile-title>
                    </v-list-tile-content>
                    <v-list-tile-action>
                      <v-icon :color="item.active ? 'teal' : 'grey'">chat_bubble</v-icon>
                    </v-list-tile-action>
                  </v-list-tile>
                </v-list>
              </v-card>
            </v-flex>
            <v-flex d-flex xl4 lg6 sm8 md5>
              <v-card>
                <v-list subheader>
                  <v-subheader>Leaderboard</v-subheader>
                  <v-list-tile avatar v-for="item in items" :key="item.title" @click>
                    <v-list-tile-avatar>
                      <img :src="item.avatar">
                    </v-list-tile-avatar>
                    <v-list-tile-content>
                      <v-list-tile-title v-html="item.title"></v-list-tile-title>
                    </v-list-tile-content>
                    <v-list-tile-action>
                      <v-icon :color="item.active ? 'teal' : 'grey'">chat_bubble</v-icon>
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
      schoolPicker: [],
      school: [
        "School of Pharmacy",
        "School of Dental Medicine",
        "School of Health and Rehabilitation Science",
        "School of Medicine",
        "School of Nursing",
        "School of Public Health",
        "School of Computing and Information",
        "Swanson School of Engineering",
        "School of Social Work"
      ],
      items: [
        {
          active: true,
          title: "Danlan Huang",
          avatar: "https://randomuser.me/api/portraits/men/85.jpg"
        },
        {
          active: true,
          title: "Andrew Mrkva",
          avatar: "https://randomuser.me/api/portraits/men/85.jpg"
        },
        {
          title: "Patrick Hu",
          avatar: "https://randomuser.me/api/portraits/men/85.jpg"
        },
        {
          title: "Jane Doe",
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
        { title: "Anatomy" },
        { title: "Self Care" },
        { title: "Physiology" },
        { title: "BioChemestry" }
      ],
      text:
        "Lorem ipsum dolor nt ut labore et dolore magna aliqua. U quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    };
  }
};
</script>
