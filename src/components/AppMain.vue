<script>

import axios from 'axios';

import ProjectCard from './ProjectCard.vue';

export default {
  name: 'AppMain',

  data() {
    return {
      projects: [],
    }
  },

  components: {
    ProjectCard,
  },

  created() {

    this.getProjects();

  },

  methods: {

    getProjects() {

      axios.get('http://127.0.0.1:8000/api/projects?page=1').then(response => {
        // console.log(response.data.results.data);
        this.projects = response.data.results.data;
      });
    }

  },
}
</script>

<template>
  <div v-if="projects.length > 0" class="container pt-5">
    <h1>Tutti i progetti</h1>

    <hr>

    <div class="row">
      <div v-for="project in projects" class="col-4 mb-3">
        <ProjectCard :project="project"></ProjectCard>
      </div>
    </div>
  </div>

  <div v-else class="loading-screen">
    <div class="spinner-border" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.loading-screen {
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100%;
  min-height: 600px;
}
</style>