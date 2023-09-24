<script setup lang="ts">
import { ref } from 'vue';

const quotes = ref([
  'Luz demais atrai bugs!',
  'Dev de verdade não usa modo claro!',
  'É sério que você quer usar modo claro???',
]);

const { random } = defineProps(['random']);
</script>

<template>
  <div
    class="modal fade"
    id="modal"
    ref="modal"
    tabindex="-1"
    aria-labelledby="modalLabel"
    aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-body text-center">
          <v-icon name="fa-power-off" scale="3" animation="ring" speed="slow" />
          <p class="mt-4 mb-0 fs-4">{{ quotes[random] }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
