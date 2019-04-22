<template>
  <div class="summary">
    <v-container fill-height fluid grid-list-xl text-xs-center>
      <v-layout column wrap>
        <v-flex pa-1 lg8 offset-lg0>
          <v-card>
            <v-card-text v-for="item in score" :key="item">
              <h2>You win {{item.value}} points!</h2>
            </v-card-text>
            <v-card-action>
              <v-flex d-flex>
                <v-btn
                  color="primary"
                  dark
                  v-for="item in btnItems"
                  :key="item"
                  :to="item.link"
                >{{item.title}}</v-btn>
              </v-flex>
              <v-flex>
                <v-list>
                  <v-list-group
                    v-for="item in items"
                    :key="item.title"
                    v-model="item.active"
                    no-action
                  >
                    <template v-slot:activator>
                      <v-list-tile>
                        <v-list-tile-content>
                          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                          <!-- <v-list-tile-text>{{item.true}}/{{item.false}}</v-list-tile-text> -->
                        </v-list-tile-content>
                        <v-list-tile-content>
                          <v-list-tile-title>
                            <font color="red">{{item.true}}</font>
                            /{{item.false}}
                          </v-list-tile-title>
                        </v-list-tile-content>
                        <v-list-tile-action>
                          <v-icon>{{ item.thumbup }} {{ item.thumbdown }} {{item.star}}</v-icon>
                        </v-list-tile-action>
                      </v-list-tile>
                    </template>

                    <v-list-tile v-for="subItem in item.items" :key="subItem.title" @click>
                      <v-list-tile-content>
                        <v-list-tile-title>{{ subItem.title }}</v-list-tile-title>
                      </v-list-tile-content>
                    </v-list-tile>
                  </v-list-group>
                </v-list>
              </v-flex>
            </v-card-action>
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
      score: [
        {
          value: 10
        }
      ],
      btnItems: [
        {
          title: "Play Again",
          link: "/Home"
        },
        {
          title: "New Quiz",
          link: "/game"
        },
        {
          title: "Challenge others",
          link: "/game"
        }
      ],
      items: [
        {
          thumbup: "thumb_up",
          thumbdown: "thumb_down",
          star: "star_border",
          true: "Stomach",
          false: "Epiglottis",
          // action: [{ icon: "thumb_up" }, { icon: "thumb_down" }],
          title: "1. Which part prevent food from entering the larynx?",
          items: [
            { title: "Explanation: xxxxxx" }
            // { action: "thumb_up" },
            // { action: "thumb_up" },
            // { action: "star_border" }
          ]
        },
        {
          thumbup: "thumb_up",
          thumbdown: "thumb_down",
          star: "star_border",
          true: "Stomach",
          false: "Epiglottis",
          // action: [{ icon: "thumb_up" }, { icon: "thumb_down" }],
          title: "2. Which part prevent food from entering the larynx?",
          items: [
            { title: "Explanation: xxxxxx" }
            // { action: "thumb_up" },
            // { action: "thumb_up" },
            // { action: "star_border" }
          ]
        }
      ]
    };
  }
};
</script>