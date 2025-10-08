<script setup>
import { RouterView } from 'vue-router';
import nav_bar from './components/nav_bar.vue';
import Footer from './components/footer.vue';

</script>

<template>
  <RouterView />
  <nav_bar />
  <Footer />

</template>

<style>
.geist {
  font-family: "Geist", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
}

.staatliches {
  font-family: "Staatliches", sans-serif;
  font-weight: 400;
  font-style: normal;
}

h2 {
  font-family: "Staatliches", sans-serif;
  font-weight: 400;
  font-style: normal;
}

h1 {
  font-family: "Staatliches", sans-serif;
  font-weight: 400;
  font-style: normal;
}

:root {
    --blue: #4D56FF;
    --yellow: #FFCD03;
    --black: #6666663d;
    --white: #FFFFFF;
}
</style>
