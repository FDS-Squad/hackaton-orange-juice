<script setup lang="ts">
import { ref } from 'vue';

const isRemoteLocation = ref(true);
const textarea = ref<HTMLElement | null>(null);

const handleSize = () => {
  const element = textarea.value;

  element!.style.height = 'auto';
  element!.style.height = element!.scrollHeight + 'px';
};
</script>

<template>
  <main>
    <section class="wrapper mt-lg-4 mb-5">
      <h2 class="text-center mb-3 mb-lg-5">Cadastre seu evento tech!</h2>

      <form class="form mx-auto text-white">
        <div class="mb-4">
          <label for="event-name" class="sr-only">Nome do evento</label>
          <input
            type="text"
            class="form-control mb-3"
            id="event-name"
            placeholder="Título do evento" />

          <fieldset class="border-0 d-flex gap-3 mb-3">
            <label for="start-date" class="sr-only">Data de início</label>
            <input type="date" class="form-control" id="start-date" />

            <label for="end-date" class="sr-only">Data de fim</label>
            <input type="date" class="form-control" id="end-date" />
          </fieldset>

          <fieldset class="mb-3">
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="event-location"
                id="online-event"
                value="online"
                @change="isRemoteLocation = true"
                checked />
              <label class="form-check-label" for="online-event">
                online
              </label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="event-location"
                id="in-person-event"
                value="in-person"
                @change="isRemoteLocation = false" />
              <label class="form-check-label" for="in-person-event">
                presencial
              </label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="event-location"
                id="hybrid-event"
                value="hybrid"
                @change="isRemoteLocation = false" />
              <label class="form-check-label" for="hybrid-event">
                híbrido
              </label>
            </div>

            <div v-if="!isRemoteLocation" class="d-flex gap-3 mt-3">
              <label for="city" class="sr-only">Cidade</label>
              <input
                type="text"
                class="form-control w-75"
                id="city"
                placeholder="Cidade" />
              <label for="province" class="sr-only">Estado</label>
              <input
                type="text"
                class="form-control w-25"
                id="province"
                placeholder="Estado" />
            </div>
          </fieldset>

          <fieldset class="mb-3">
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="price"
                id="online-event"
                value="paid"
                checked />
              <label class="form-check-label" for="online-event"> pago </label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="price"
                id="in-person-event"
                value="free" />
              <label class="form-check-label" for="in-person-event">
                gratuito
              </label>
            </div>
          </fieldset>

          <label for="event-url" class="sr-only">Link do evento</label>
          <input
            type="text"
            class="form-control mb-3"
            id="event-url"
            placeholder="Link do evento" />

          <label for="image-url" class="sr-only">
            Imagem propaganda do evento
          </label>
          <input
            type="text"
            class="form-control mb-3"
            id="image-url"
            placeholder="Imagem propaganda do evento" />

          <label for="tags" class="sr-only">Tags do evento</label>
          <input
            type="text"
            class="form-control mb-3"
            id="tags"
            placeholder="Tags do evento" />

          <label for="description" class="sr-only">Descrição do evento</label>
          <textarea
            ref="textarea"
            id="description"
            class="form-control overflow-hidden w-100"
            placeholder="Descrição do evento"
            @input="handleSize"></textarea>
        </div>

        <div class="actions d-flex justify-content-between w-75 mx-auto">
          <button type="button" class="btn btn-primary">Voltar</button>
          <button type="submit" class="btn btn-primary">Confirmar</button>
        </div>
      </form>
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

.form {
  max-width: 45rem;
}
</style>
