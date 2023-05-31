import { createRouter, createWebHistory } from "vue-router";

import AppHome from "./pages/AppHome.vue";
import AppAbout from "./pages/AppAbout.vue";
import ProjectsIndex from "./pages/ProjectsIndex.vue";
import SingleProject from "./pages/SingleProject.vue";

const router = createRouter({
  history: createWebHistory(),

  routes: [
    {
      path: "/",
      name: "home",
      component: AppHome,
      meta: {
        title: "Home",
      },
    },
    {
      path: "/about-us",
      name: "about",
      component: AppAbout,
      meta: {
        title: "Chi sono",
      },
    },
    {
      path: "/projects",
      name: "projects.index",
      component: ProjectsIndex,
      meta: {
        title: "I miei progetti",
      },
    },
    {
      path: "/projects/:slug",
      name: "projects.show",
      component: SingleProject,
      // meta: {
      //   title: "I miei progetti",
      // },
    },
  ],
});

// funzione per modificare il titolo da visualizzare per ogni pagina
router.beforeEach((to) => {
  // espressione non contratta
  // if(to.meta?.title) {
  //   document.title = 'Boolfolio | ' + to.meta.title;
  // } else {
  //   document.title = 'Boolfolio';
  // }

  // espressione contratta
  document.title = to.meta?.title
    ? "Boolfolio | " + to.meta.title
    : "Boolfolio";
});

export { router };
