<script>
export default {
  name: 'AppHeader',

  data() {
    return {

    }
  },
}
</script>

<template>
  <div>
    <nav class="navbar navbar-expand-lg my-navbar">
      <div class="container-fluid">
        <router-link class="navbar-brand" :to="{ name: 'home' }">PORTFOLIO</router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link" aria-current="page" :to="{ name: 'home' }">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="{ name: 'projects.index' }">Progetti</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="{ name: 'about' }">Su di me</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<style lang="scss" scoped>
@use '../scss/variables.scss' as *;

.my-navbar {
  background-color: $primary-dark;
  border-bottom: 2px solid $secondary-dark;

  .router-link-active {
    font-weight: bold;
    color: $text-primary;
  }
}
</style>