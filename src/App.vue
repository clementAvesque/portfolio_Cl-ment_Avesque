<script setup>
import { RouterView } from 'vue-router';
import nav_bar from './components/nav_bar.vue';
import  Footer  from './components/footer.vue';
</script>

<template>
    <RouterView />
    <nav_bar />
    <Footer />
    
</template>

<style scoped>


.geist {
  font-family: "Geist", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
}

.staatliches{
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


</style>
