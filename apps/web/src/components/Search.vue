<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useEventStore } from '@/stores/eventStore';

const router = useRouter();

const input = ref<HTMLInputElement | null>(null);
const list = ref<HTMLElement | null>(null);

const eventStore = useEventStore();

const getEvents = async (
  date: 'today' | 'tomorrow' | 'this-week' | 'this-month',
) => {
  await eventStore.searchEvents(date);
  router.push(`/events/${date}`);
};

onMounted(() => {
  if (input.value) {
    input.value.addEventListener('focus', () =>
      list.value!.classList.add('show'),
    );
    input.value.addEventListener('blur', () =>
      list.value!.classList.remove('show'),
    );
  }
});
</script>

<template>
  <div class="w-100">
    <label for="search" class="form-label sr-only"> pesquisar evento </label>
    <input
      ref="input"
      id="search"
      type="text"
      v-model="eventStore.query"
      class="form-control mx-auto"
      placeholder="pesquisar evento" />
    <ul
      ref="list"
      class="search-options d-flex flex-wrap justify-content-center gap-3 p-0">
      <li>
        <button class="btn btn-sm f-14" @click="getEvents('today')">
          Eventos hoje
        </button>
      </li>
      <li>
        <button class="btn btn-sm f-14" @click="getEvents('tomorrow')">
          Eventos amanhã
        </button>
      </li>
      <li>
        <button class="btn btn-sm f-14" @click="getEvents('this-week')">
          Eventos em uma semana
        </button>
      </li>
      <li>
        <button class="btn btn-sm f-14" @click="getEvents('this-month')">
          Eventos em um mês
        </button>
      </li>
    </ul>
  </div>
</template>

<style scoped>
#search {
  max-width: 530px;
}

.search-options {
  margin: 0;
  height: 0;
  opacity: 0;
  visibility: hidden;

  &.show {
    margin-top: 16px;
    height: 100%;
    opacity: 1;
    visibility: visible;
  }
}
</style>
