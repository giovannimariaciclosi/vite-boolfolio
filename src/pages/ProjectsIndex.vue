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

      types: [],

      selectedTechnologyId: '',

      postsFound: false,
      isLoading: true,
    }
  },

  mounted() {
  },

  components: {
    ProjectCard,
  },

  created() {

    this.getProjects(this.apiURL);

  },

  methods: {

    getProjects(apiURL) {
      // + '&technology_id' + this.selectedTechnologyId
      axios.get(apiURL).then(response => {
        // console.log(response.data.results.data);

        // salvo i progetti
        this.projects = response.data.results.data;
        this.types = response.data.allTypes;
        console.log(response.data)

        // salvo le variabili di paginazione
        this.pagination = response.data.results;
      });
    },
  },
}



</script>

<template>
  <div class="container py-5">
    <h1 class="text-center pb-5">I miei progetti</h1>

    <form @submit.prevent="getProjects" action="" class="d-flex gap-3">
      <select name="type_id" id="type_id" class="form-select" v-model="selectedTechnologyId">
        <option value="">Tutte</option>
        <option v-for="tipo in types" :value="tipo.id">{{ tipo.name }}</option>
      </select>
      <button class="btn btn-primary my-btn-primary">Filtra</button>
    </form>

  </div>

  <div v-if="projects.length > 0" class="container">


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
@use '../scss/variables.scss' as *;

.projects-navigation {
  display: flex;
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;

  margin-top: 2em;

  .my-btn {
    color: $text-primary;
  }

  .my-btn-primary {
    background-color: $accent;
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