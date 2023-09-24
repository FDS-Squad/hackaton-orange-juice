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
    <div class="wrapper d-flex align-items-center justify-content-between">
      <h1 class="logo m-0"></h1>

      <div class="navigation d-flex gap-3">
        <Switch />

        <button
          class="btn btn-primary"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target=".offcanvas">
          <v-icon name="fa-bars" />
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
            <RouterLink to="/" class="d-block py-2 px-4 mb-1">Home</RouterLink>
            <RouterLink to="/event-details" class="d-block py-2 px-4 mb-1">
              Detalhes
            </RouterLink>
            <RouterLink to="/admin" class="d-block py-2 px-4 mb-1">
              Painel do Administrador
            </RouterLink>
            <LoginForm />
            <p class="text-center">
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
  .wrapper {
    padding: 20px 30px;
  }

  .logo {
    background: var(--primary);
    width: 150px;
    height: 60px;
  }

  .navigation {
    width: fit-content;
  }

  .offcanvas-body {
    > a {
      &:hover,
      &.router-link-exact-active {
        background: #ccc;
      }
    }
  }
}

@media screen and (min-width: 1280px) {
  header {
    .wrapper {
      padding: 32px 40px;
    }
  }
}
</style>
