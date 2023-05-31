<script>
export default {
  name: 'AppFooter',

  data() {
    return {

    }
  },
}
</script>

<template>
  <hr class="divisor">
  <footer class="pb-3 container">
    Copyright 2023
  </footer>
</template>

<style lang="scss" scoped>
@use '../scss/variables.scss' as *;

.divisor {
  border-top: 2px solid $secondary-dark;
  opacity: 1;
  margin-top: 3rem;
}
</style>