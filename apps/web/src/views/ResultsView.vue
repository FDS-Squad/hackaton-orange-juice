<script setup lang="ts">
import Search from '@/components/Search.vue';
import { useEventStore } from '@/stores/eventStore';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

const { search } = defineProps(['search']);
const events = useEventStore();
</script>

<template>
  <main>
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
        <span class="ps-3"
          >{{ events.foundEvents?.length }} evento(s) encontrado(s)</span
        >
      </h2>

      <div class="events d-grid gap-4 mb-5">
        <div
          v-for="event in events.foundEvents"
          :key="event.id"
          class="card p-3"
          @click="router.push(`/event-details/${event.id}`)">
          <img
            :src="event.imageUrl"
            class="card-img-top"
            onerror="this.onerror=null;this.src='/not-found.png'"
            alt=""
            aria-hidden="true" />
          <div class="card-body p-0">
            <p class="card-text text-center fw-bold mb-1">
              {{
                event.start_date && event.end_date
                  ? event.start_date + ' - ' + event.start_date
                  : event.start_date
              }}
            </p>
            <h5 class="card-title text-center mb-1">{{ event.title }}</h5>
            <p class="card-text text-center mb-0">
              {{
                event.locationType === 'in-person'
                  ? event.city + ' / ' + event.state
                  : event.locationType === 'both'
                  ? 'Online • ' + event.city + ' / ' + event.state
                  : 'Online'
              }}
            </p>
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
