import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Challange from "./views/Challange";
import Signin from "./views/User/Signin";
import Signup from "./views/User/Signup";
import Profile from "./views/Profile";
import game from "./views/Quizgame/game";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "Signin",
      component: Signin
    },
    {
      path: "/home",
      name: "Home",
      component: Home
    },
    {
      path: "/signin",
      name: "Signin",
      component: Signin
    },
    {
      path: "/signup",
      name: "Signup",
      component: Signup
    },
    {
      path: "/profile",
      name: "Profile",
      component: Profile
    },
    {
      path: "/challange",
      name: "Challange",
      component: Challange
    },
    {
      path: "/game",
      name: "Game",
      component: game
    }
  ]
});
