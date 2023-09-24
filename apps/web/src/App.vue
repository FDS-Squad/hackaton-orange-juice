<script setup lang="ts">
import { RouterView } from 'vue-router';
import Navbar from '@/components/NavBar.vue';
import Footer from './components/Footer.vue';
import Loader from './components/Loader.vue';
</script>

<template>
  <Navbar />
  <RouterView />
  <Footer />
  <Loader />
</template>
