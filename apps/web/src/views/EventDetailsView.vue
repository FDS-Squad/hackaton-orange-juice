<script setup lang="ts">
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useEventStore, type IEvent } from '@/stores/eventStore';

let url = window.location.href;

const route = useRoute();
const router = useRouter();

const events = useEventStore();
const event = ref<IEvent | undefined>(undefined);

if (route.params.id) {
  event.value = events.filteredEvents?.find(
    (event) => String(event.id) === route.params.id,
  );
}

const copyLink = async () => {
  try {
    await navigator.clipboard.writeText(url);
    alert('Copiado');
  } catch (error) {
    alert('Não copiou');
  }
};

const shareWA = () => {
  let msg = `Confira este evento: ${url}`;
  msg = encodeURIComponent(msg);
  let whatsappURL = `https://web.whatsapp.com/send?text=${msg}`;
  window.open(whatsappURL);
};
</script>

<template>
  <main>
    <section
      v-if="event"
      class="text-white wrapper row justify-content-center mt-md-4 gap-md-5">
      <div class="card col-12 col-md-5 p-4 mb-4">
        <img
          id="card-image"
          :src="event.imageUrl"
          onerror="this.onerror=null;this.src='/not-found.png'"
          class="card-img-top object-fit-cover h-100"
          alt="..." />
        <div class="card-body pb-0">
          <h5 class="card-title text-center">{{ event.title }}</h5>
          <p class="card-text text-center mb-1">
            {{
              event.start_date && event.end_date
                ? event.start_date + ' - ' + event.start_date
                : event.start_date
            }}
          </p>
          <p class="card-text text-center mb-1">
            {{
              event.locationType === 'in-person'
                ? event.city + ' / ' + event.state
                : event.locationType === 'both'
                ? 'Online • ' + event.city + ' / ' + event.state
                : 'Online'
            }}
          </p>
          <p class="card-text text-center mb-1">
            {{ event.price === 'paid' ? 'Evento pago' : 'Evento gratuito' }}
          </p>
        </div>
      </div>
      <div class="col-12 col-md-5">
        <div class="description text-center pb-4 pb-lg-5">
          {{ event.description }}
        </div>
        <div class="d-flex justify-content-center my-4">
          <a :href="event.eventLink" target="_blank" class="btn text-uppercase">
            Visitar site
          </a>
        </div>
        <div
          class="actions d-flex justify-content-center align-items-end pt-lg-5 gap-3">
          <button class="btn btn-sm secondary" @click="copyLink">
            Copiar link
          </button>
          <button class="btn btn-sm secondary" @click="shareWA">
            WhatsApp
          </button>
          <button @click="router.push('/home')" class="btn btn-sm secondary">
            Voltar
          </button>
        </div>
      </div>
    </section>
    <section v-else>
      <h2 class="text-center mb-3">
        Oops, parece que houve um erro ao carregar o evento!
      </h2>
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

img {
  background: #ccc;
  width: 100%;
  height: 180px;
}

.secondary {
  background: transparent !important;
  color: var(--white) !important;
}

.card {
  background: var(--hackaton-neutral-normal);
}

@media screen and (min-width: 1200px) {
  .event-details {
    .card {
      width: 500px !important;
    }
  }
}
</style>
