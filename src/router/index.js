import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Planets from "../views/Planets.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/planets",
    name: "Planets",
    component: Planets
  }
];

const router = new VueRouter({
  routes
});

export default router;
