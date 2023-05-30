<script>


import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';

export default {
  name: "App",
  data() {
    return {};
  },

  components: {
    AppHeader,
    AppFooter,
  }
}

</script>

<template>
  <div class="app-container">
    <AppHeader></AppHeader>

    <router-view></router-view>

    <AppFooter></AppFooter>
  </div>
</template>

<style lang="scss" scoped>
.app-container {
  background-color: #10121c;
}
</style>
