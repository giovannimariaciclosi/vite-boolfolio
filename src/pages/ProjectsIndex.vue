<script>
import axios from 'axios';

import ProjectCard from '../components/ProjectCard.vue';


export default {
  name: 'ProjectsIndex',

  data() {
    return {
      projects: [],

      currentPage: 1,
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

      axios.get('http://127.0.0.1:8000/api/projects?page=' + this.currentPage).then(response => {
        // console.log(response.data.results.data);
        this.projects = response.data.results.data;
      });
    },


    nextPage() {
      this.currentPage++;
      this.getProjects();
    },

    prevPage() {
      this.currentPage--;
      this.getProjects();
    },

  },
}



</script>

<template>
  <div v-if="projects.length > 0" class="container pt-5">
    <h1 class="text-center">I miei progetti</h1>

    <hr>

    <div class="row">
      <div v-for="project in projects" class="col-4 mb-3">
        <ProjectCard :project="project"></ProjectCard>
      </div>
    </div>

    <div class="d-flex justify-content-around">
      <button @click="prevPage()" class="btn btn-primary">Prev</button>
      <button @click="nextPage()" class="btn btn-primary">Next</button>
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