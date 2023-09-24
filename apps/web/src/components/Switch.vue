<script setup lang="ts">
import { ref } from 'vue';
import Modal from './Modal.vue';

const random = ref(0);

const btnOpen = ref<HTMLElement | null>(null);

const openModal = () => {
  if (btnOpen.value) {
    random.value = Math.floor(Math.random() * 3);
    btnOpen.value.click();
  }
};
</script>

<template>
  <div class="d-flex align-items-center gap-1">
    <img src="/moon.png" alt="" aria-hidden="true" />
    <button class="switch d-flex rounded-4" @click="openModal">
      <span class="fa-circle"></span>
    </button>
    <button
      ref="btnOpen"
      class="visually-hidden"
      data-bs-toggle="modal"
      data-bs-target="#modal"
      aria-hidden="true"></button>
  </div>
  <Modal :random="random" />
</template>

<style scoped>
.switch {
  background: var(--black) !important;
  border: 2px solid var(--white);
  width: 40px;
}

.fa-circle {
  height: 17px;
  aspect-ratio: 1/1;
  background-image: var(--hackaton-bg-vertical) !important;
  clip-path: circle();
}
</style>
