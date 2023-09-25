<script setup lang="ts">
import Carousel from '@/components/Carousel.vue';
import Search from '@/components/Search.vue';
import { onBeforeMount, ref } from 'vue';
import { useEventStore, type IEvent } from '@/stores/eventStore';
import { useRouter } from 'vue-router';

const router = useRouter();

const newEvents = ref<IEvent[] | undefined>(undefined);

const events = useEventStore();

onBeforeMount(() => {
  if (newEvents.value) {
    newEvents.value = events.eventList;
  }
});
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
          v-for="event in events.filteredEvents"
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
