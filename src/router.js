import { createRouter, createWebHistory } from "vue-router";

import AppHome from "./pages/AppHome.vue";
import AppAbout from "./pages/AppAbout.vue";
import ProjectsIndex from "./pages/ProjectsIndex.vue";

const router = createRouter({
  history: createWebHistory(),

  routes: [
    {
      path: "/",
      name: "home",
      component: AppHome,
      meta: {
        title: "Giovanni Maria Ciclosi | Portfolio",
      },
    },
    {
      path: "/about-us",
      name: "about",
      component: AppAbout,
      meta: {
        title: "Chi sono | Portfolio",
      },
    },
    {
      path: "/projects",
      name: "projects.index",
      component: ProjectsIndex,
      meta: {
        title: "I miei progetti | Portfolio",
      },
    },
  ],
});

router.beforeEach((to, from) => {
  document.title = to.meta?.title ?? "Giovanni Maria Ciclosi | Portfolio";
});

export { router };
