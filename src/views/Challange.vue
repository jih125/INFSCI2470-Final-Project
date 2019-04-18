<template>
  <div class="challenge">
    <v-container grid-list-xl text-xs-center>
      <v-layout row wrap>
        <v-flex
          lg6
          sm8
          md7
          offset-lg1
          offset-sm2
          offset-md0
          order-sm2
          order-xs2
          order-lg1
          order-xl1
        >
          <v-card>
            <v-list three-line>
              <template v-for="(item, index) in items">
                <v-subheader v-if="item.header" :key="item.header">{{ item.header }}</v-subheader>

                <v-divider v-else-if="item.divider" :key="index" :inset="item.inset"></v-divider>

                <v-list-tile v-else :key="item.title" avatar @click>
                  <v-list-tile-avatar>
                    <img :src="item.avatar">
                  </v-list-tile-avatar>

                  <v-list-tile-content>
                    <v-list-tile-title v-html="item.title"></v-list-tile-title>
                    <v-list-tile-sub-title v-html="item.subtitle"></v-list-tile-sub-title>
                  </v-list-tile-content>
                </v-list-tile>
              </template>
            </v-list>
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
      items: [
        { header: "Today" },
        {
          avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
          title: "Brunch this weekend?",
          subtitle:
            "<span class='text--primary'>Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?"
        },
        { divider: true, inset: true },
        {
          avatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
          title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
          subtitle:
            "<span class='text--primary'>to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend."
        },
        { divider: true, inset: true },
        {
          avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
          title: "Oui oui",
          subtitle:
            "<span class='text--primary'>Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?"
        },
        { divider: true, inset: true },
        {
          avatar: "https://cdn.vuetifyjs.com/images/lists/4.jpg",
          title: "Birthday gift",
          subtitle:
            "<span class='text--primary'>Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?"
        },
        { divider: true, inset: true },
        {
          avatar: "https://cdn.vuetifyjs.com/images/lists/5.jpg",
          title: "Recipe to try",
          subtitle:
            "<span class='text--primary'>Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos."
        }
      ]
    };
  }
};
</script>