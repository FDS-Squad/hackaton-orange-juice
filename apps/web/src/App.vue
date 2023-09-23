<script setup lang="ts">
import { RouterView } from 'vue-router';
import Navbar from '@/components/NavBar.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  <Navbar />
  <RouterView />
  <Footer />
</template>
