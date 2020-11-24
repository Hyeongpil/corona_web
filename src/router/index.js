import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue"
import News from "../views/News.vue"
import Virus from '../views/Virus.vue'
import Started from '../views/Started.vue'
import CoronaMap from "../views/CoronaMap.vue"
import Sido from "../views/Sido.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/news",
    name: "News",
    component: News
  },
  {
    path: "/virus",
    name: "Virus",
    component: Virus
  },
  {
    path: "/started",
    name: "Started",
    component: Started
  },
  {
    path: "/map",
    name: "Map",
    component: CoronaMap
  },
  {
    path: "/sido",
    name: "Sido",
    component: Sido
  }
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue")
  // }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
