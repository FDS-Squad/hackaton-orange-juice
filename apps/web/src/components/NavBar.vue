<script setup lang="ts">
import { ref, watch } from 'vue';
import { RouterLink, useRoute } from 'vue-router';
import Switch from './Switch.vue';
import LoginForm from './LoginForm.vue';

const route = useRoute();
const btnClose = ref<HTMLElement | null>(null);

const watchRouteChange = () => {
  if (btnClose.value) {
    btnClose.value.click();
  }
};

watch(() => route.fullPath, watchRouteChange);
</script>

<template>
  <header class="header">
    <div class="wrapper d-flex align-items-center justify-content-between p-4">
      <h1 class="m-0">
        <RouterLink to="/home" aria-label="Voltar para a Home">
          <img src="/logo.png" alt="Tech42" class="logo" />
        </RouterLink>
      </h1>

      <div class="navigation d-flex gap-3">
        <Switch />

        <button
          class="menu-btn rounded-1 p-1"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target=".offcanvas">
          <v-icon name="fa-bars" color="#8cb4d3" scale="1.2" />
        </button>
        <div
          class="offcanvas offcanvas-end"
          tabindex="-1"
          aria-label="Abrir menu">
          <div class="offcanvas-header justify-content-end">
            <button
              ref="btnClose"
              type="button"
              class="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Fechar menu"></button>
          </div>
          <nav class="offcanvas-body px-0">
            <RouterLink
              to="/home"
              class="d-block py-2 px-4 mb-1 text-decoration-none fw-bold"
              >Home</RouterLink
            >
            <RouterLink
              to="/admin"
              class="d-block py-2 px-4 mb-1 text-decoration-none fw-bold">
              Painel do Administrador
            </RouterLink>
            <LoginForm />
            <p class="text-center text-white">
              É novo e tem eventos a incluir? <a href="#">Cadastre-se</a>
            </p>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
header {
  .logo {
    width: 7.5rem;
  }

  .menu-btn {
    background: rgba(177, 177, 177, 0.2) !important;
    border: 1px solid #8cb4d3;
  }

  .navigation {
    width: fit-content;
  }

  .offcanvas {
    background: var(--hackaton-primary-normal-hover);
  }

  .offcanvas-body {
    > a {
      color: var(--hackaton-neutral-normal);
      &:hover,
      &.router-link-exact-active {
        color: var(--hackaton-primary-normal);
        background: var(--hackaton-neutral-normal);
      }
    }
  }
}
</style>
