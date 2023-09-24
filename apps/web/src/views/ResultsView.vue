<script setup lang="ts">
import { defineProps } from 'vue';
import Search from '@/components/Search.vue';
import { useEventStore } from '@/stores/eventStore';

const { search } = defineProps(['search']);
const { filteredEvents } = useEventStore();
</script>

<template>
  <main>
    <section class="wrapper mt-lg-4 mb-5">
      <h2 class="text-center mb-3">
        Fique por dentro do que está rolando no mundo Tech!
      </h2>
      <Search />
    </section>

    <section>
      <h2 class="text-start mb-3">
        {{
          search === 'today'
            ? 'Hoje'
            : search === 'tomorrow'
            ? 'Amanhã'
            : search === 'this-week'
            ? 'Esta semana'
            : search === 'this-month'
            ? 'Este mês'
            : 'Categoria'
        }}:
      </h2>
      <div class="events d-grid gap-4 mb-5">
        <h3>6 encontrados</h3>
        <div v-for="num in 15" class="card flex-row flex-md-column">
          <img
            src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
            class="rounded-start-2 object-fit-cover"
            alt="..." />
          <div class="card-body">
            <h5 class="card-title text-center">Lorem ipsum dolor sit.</h5>
            <p class="card-text text-center mb-1">08 out 2023</p>
            <p class="card-text text-center mb-1">online</p>
            <p class="card-text text-center mb-0">gratuito</p>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
.events {
  grid-template-columns: repeat(auto-fill, minmax(12.5rem, 1fr));
  img {
    width: 50%;
    @media screen and (min-width: 768px) {
      border-radius: 0.375rem 0.375rem 0 0 !important;
      width: 100%;
    }
  }
}
</style>
