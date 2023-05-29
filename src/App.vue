<script>


import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';
import AppMain from './components/AppMain.vue';

export default {
  name: "App",
  data() {
    return {};
  },

  components: {
    AppHeader,
    AppMain,
    AppFooter,
  }
}

</script>

<template>
  <AppHeader></AppHeader>

  <AppMain></AppMain>

  <AppFooter></AppFooter>
</template>

<style lang="scss"></style>
