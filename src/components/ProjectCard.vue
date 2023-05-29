<script>
export default {
  name: 'ProjectCard',

  data() {
    return {

    }
  },

  props: {
    project: Object,
  },

  computed: {

    // tronco la descrizione se è più lunga di 50 caratteri
    shortContent() {
      if (this.project.description.length > 50) {
        return this.project.description.substring(0, 50) + '...';
      } else {
        return this.project.description;
      }
    },


  },
}

</script>

<template>
  <div class="card">
    <!-- <img src="..." class="card-img-top" alt="..."> -->
    <div class="card-body">
      <h5 class="card-title">{{ project.title }}</h5>
      <p class="card-text">{{ shortContent }}</p>
      <!-- <a href="#" class="btn btn-primary">Go</a> -->
    </div>
  </div>
</template>

<style lang="scss" scoped></style>