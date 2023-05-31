<script>
import axios from 'axios';

export default {
  name: 'SingleProject',

  data() {
    return {
      project: {},

      baseUrl: 'http://127.0.0.1:8000/',

      isLoading: true,
      projectFound: false,

    }
  },

  mounted() {
  },

  computed: {
    projectImage() {
      return this.baseUrl + 'storage/' + this.project.cover_image;
    }
  },

  created() {

    this.getProject();

  },

  methods: {

    getProject() {
      axios.get(this.baseUrl + 'api/projects/' + this.$route.params.slug).then(response => {

        this.isLoading = false;

        if (response.data.success) {

          this.project = response.data.project;
          this.projectFound = true;

        } else {

          this.projectFound = false;

        }
      });
    }
  },
}

</script>

<template>
  <div v-if="isLoading" id="spinner-container">
    <div class="spinner-border" role="status">
      <span class="visually-hidden">Caricamento...</span>
    </div>
  </div>

  <div v-else class="container py-5">
    <div v-if="projectFound">
      <div class="project-image text-center">
        <img :src="projectImage" alt="">
      </div>
      <h1>{{ project.title }}</h1>
      <div class="technologies">
        <span v-for="technology in project.technologies" class="badge rounded-pill"
          :style="{ backgroundColor: technology.color }">{{ technology.name }}</span>
      </div>

      <h4>{{ project.type ? project.type.name : 'Nessun tipo' }}</h4>
      <hr>
      <p>{{ project.description }}</p>
      <router-link class="btn btn-outline-primary" :to="{ name: 'projects.index' }">Torna indietro</router-link>

    </div>

    <div v-else>
      <div class="alert alert-danger">Nessun progetto trovato</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '../scss/variables.scss' as *;

#spinner-container {
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100%;
  min-height: 600px;
}

.project-image img {
  max-height: 400px;
  object-fit: cover;
}

.technologies {
  display: flex;
  justify-content: flex-start;
  gap: .5em;
  align-items: center;
  flex-wrap: wrap;
  // overflow-x: scroll;

  padding: .8em 0;
}
</style>