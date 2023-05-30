<script>
import axios from 'axios';

import ProjectCard from '../components/ProjectCard.vue';


export default {
  name: 'ProjectsIndex',

  data() {
    return {
      apiURL: 'http://127.0.0.1:8000/api/projects',

      projects: [],

      pagination: {},
    }
  },

  components: {
    ProjectCard,
  },

  created() {

    this.getProjects(this.apiURL);

  },

  methods: {

    getProjects(apiURL) {

      axios.get(apiURL).then(response => {
        // console.log(response.data.results.data);

        // salvo i progetti
        this.projects = response.data.results.data;

        // salvo le variabili di paginazione
        this.pagination = response.data.results;
      });
    },
  },
}



</script>

<template>
  <div v-if="projects.length > 0" class="container pt-5">
    <h1 class="text-center pb-5">I miei progetti</h1>

    <div class="row">
      <div v-for="project in projects" class="col-md-6 col-lg-4 mb-3">
        <ProjectCard :project="project"></ProjectCard>
      </div>
    </div>

    <div class="projects-navigation">
      <button v-for="link in pagination.links" v-html="link.label" class="btn my-btn"
        :class="link.active ? 'my-btn-primary' : 'btn-outline-secondary'" :disabled="link.url == null"
        @click="getProjects(link.url)"></button>
    </div>

  </div>

  <div v-else class="loading-screen">
    <div class="spinner-border" role="status">
      <span class="visually-hidden">Caricamento...</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.projects-navigation {
  display: flex;
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;

  margin-top: 2em;

  .my-btn {
    color: white;
  }

  .my-btn-primary {
    background-color: #574aff;
  }
}

.loading-screen {
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100%;
  min-height: 600px;
}
</style>