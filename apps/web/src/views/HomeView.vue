<script setup lang="ts">
import Carousel from '@/components/Carousel.vue';
import Search from '@/components/Search.vue';
import { useRouter } from 'vue-router';

const router = useRouter();
</script>

<template>
  <main>
    <section class="wrapper mt-lg-4 mb-5">
      <h2 class="text-center mb-3">
        Fique por dentro do que está rolando no mundo Tech!
      </h2>
      <Search />
    </section>

    <section class="wrapper mb-5">
      <Carousel />
    </section>

    <section>
      <h2 class="text-center mb-3">Próximos eventos</h2>
      <div class="events d-grid gap-4 mb-5">
        <div
          v-for="num in 6"
          class="card p-3"
          @click="router.push('/event-details')">
          <img
            src="/banner-php-mobile.png"
            class="card-img-top"
            alt=""
            aria-hidden="true" />
          <div class="card-body p-0">
            <p class="card-text text-center fw-bold mb-1">08 out 2023</p>
            <h5 class="card-title text-center mb-1">Lorem ipsum dolor sit.</h5>
            <p class="card-text text-center mb-0">online - gratuito</p>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
h2 {
  background-image: var(--hackaton-bg-vertical);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
}
h2 {
  background-image: var(--hackaton-bg-vertical);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
}

.events {
  grid-template-columns: repeat(auto-fill, minmax(12.5rem, 1fr));
}

.card {
  background: var(--hackaton-neutral-normal);
  cursor: pointer;
  &:hover {
    background: var(--hackaton-neutral-normal-hover);
  }
}
</style>
