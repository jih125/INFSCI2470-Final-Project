<template>
  <div class="dashboard">
    <v-container fluid grid-list-xl>
      <v-layout row wrap>
        <v-flex xl12 lg8 sm12 md8>
          <v-card>
            <!-- <v-container fill-height fluid>
              <v-layout fill-height>
                <v-flex xl12 align-end flexbox>
                  <span class="headline">Set up your quiz</span>
                </v-flex>
              </v-layout>
            </v-container>-->
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
                  <v-btn large color="primary" round dark>
                    <span>Photography</span>
                  </v-btn>
                  <v-btn large color="primary" round dark>
                    <span>Photography</span>
                  </v-btn>
                  <v-btn large color="primary" round dark>
                    <span>Photography</span>
                  </v-btn>
                  <v-btn large color="primary" round dark>
                    <span>Photography</span>
                  </v-btn>
                </v-flex>
              </v-layout>
            </v-container>
            <!-- <v-tabs centered show-arrows>
              <v-tabs-slider></v-tabs-slider>
              <v-tab v-for="item in tabItems" :key="item.title">{{ item.title }}</v-tab>
              <v-tabs-items>
                <v-tab-item v-for="i in 9" :key="i">
                  <v-card>
                    <v-container fluid grid-list-xl>
                      <v-layout row wrap align-center justify-center>
                        <v-flex>
                          <v-btn color="primary" round dark>
                            <span>Photography</span>
                          </v-btn>
                          <v-btn color="primary" round dark>
                            <span>Photography</span>
                          </v-btn>
                          <v-btn color="primary" round dark>
                            <span>Photography</span>
                          </v-btn>
                          <v-btn color="primary" round dark>
                            <span>Photography</span>
                          </v-btn>
                          <v-btn color="primary" round dark>
                            <span>Photography</span>
                          </v-btn>
                          <v-btn color="primary" round dark>
                            <span>Photography</span>
                          </v-btn>
                          <v-btn color="primary" round dark>
                            <span>Photography</span>
                          </v-btn>
                        </v-flex>
                      </v-layout>
                    </v-container>
                  </v-card>
                </v-tab-item>
              </v-tabs-items>
            </v-tabs>-->
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
  data: () => ({
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
    text:
      "Lorem ipsum dolor nt ut labore et dolore magna aliqua. U quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  })
};
</script>
