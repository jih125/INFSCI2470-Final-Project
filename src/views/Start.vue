<template>
  <div class="dashboard">
    <v-container fluid grid-list-lg>
      <v-layout column wrap>
        <v-flex lg4>
          <v-card>
            <v-tabs centered show-arrows>
              <v-tabs-slider></v-tabs-slider>
              <v-tab v-for="i in 10" :key="i" :href="'#tab-' + i">Item {{ i }}</v-tab>
              <v-tabs-items>
                <v-tab-item v-for="i in 10" :key="i" :id="'tab-' + i">
                  <v-card>
                    <v-container fluid grid-list-sm>
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
            </v-tabs>
          </v-card>
        </v-flex>
        <v-flex d-flex>
          <v-layout column wrap>
            <v-flex pa-1 grow md7>
              <v-card>
                <v-card-text>Profile</v-card-text>
              </v-card>
            </v-flex>
            <v-flex pa-1 grow xs5>
              <v-card>
                <v-list subheader>
                  <v-subheader>Recent chat</v-subheader>
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
    schoollist: [
      {
        title: "School of Pharmacy"
      }
    ],
    text:
      "Lorem ipsum dolor nt ut labore et dolore magna aliqua. U quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  })
};
</script>
