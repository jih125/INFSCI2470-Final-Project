<template>
  <nav>
    <v-toolbar color="indigo" dark>
      <v-toolbar-side-icon @click.stop="sideNav = !sideNav" class="hidden-sm-and-up"></v-toolbar-side-icon>
      <v-toolbar-title class="text-uppercase">
        <span class="font-weight-light">My</span>
        <span>Quiz</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn flat v-for="item in menuItems" :key="item.icon" :to="item.link">
          <v-icon left dark>{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-btn>
        <v-dialog v-model="dialog" persistent max-width="290">
          <template v-slot:activator="{ on }">
            <v-btn flat dark v-on="on">
              <v-icon left dark>exit_to_app</v-icon>Sign out
            </v-btn>
          </template>
          <v-card>
            <v-card-title class="headline">
              <h4>Sign out</h4>
            </v-card-title>
            <v-card-text>
              <p>Are you sure you want to sign out?</p>
            </v-card-text>
            <v-card-actions>
              <v-btn color="green darken-1" block round dark @click="dialog = false">Cancel</v-btn>
              <v-btn color="red darken-1" block round dark href="/">Sign out</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar-items>
    </v-toolbar>
    <v-navigation-drawer temporary class="indigo" dark v-model="sideNav" absolute>
      <v-list>
        <v-list-tile avatar>
          <v-list-tile-avatar>
            <img src="https://randomuser.me/api/portraits/men/85.jpg">
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title>Danlan Huang</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-divider></v-divider>
        <v-list-tile v-for="item in list" :key="item.icon" router :to="item.link">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>{{ item.title }}</v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      sideNav: false,
      dialog: false,
      menuItems: [
        {
          icon: "home",
          title: "Home",
          link: "/Home"
        },
        { icon: "people", title: "Challenge", link: "/Challange" },
        { icon: "person", title: "Profile", link: "/Profile" }
      ],
      list: [
        {
          icon: "home",
          title: "Home",
          link: "/Home"
        },
        { icon: "people", title: "Challenge", link: "/Challange" },
        { icon: "person", title: "Profile", link: "/Profile" },
        { icon: "exit_to_app", title: "Sign Out", link: "/" }
      ],
      signInList: [
        {
          icon: "",
          title: "Sign In",
          link: "/Home"
        }
      ]
    };
  }
};
</script>