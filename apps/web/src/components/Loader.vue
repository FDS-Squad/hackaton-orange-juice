<script setup lang="ts">
import { useMainStore } from '@/stores/mainStore';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';

const { isLoading } = useMainStore();
</script>
´

<template>
  <loading
    v-model:active="isLoading"
    color="#900e37"
    :z-index="99999"
    :lock-scroll="true"
    :can-cancel="false"
    :is-full-page="true"
    :enforce-focus="false"
    background-color="#b0b0b0" />
</template>
