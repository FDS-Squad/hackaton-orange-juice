<script setup lang="ts">
import { watch } from 'vue';
import { RouterLink, useRoute } from 'vue-router';

const route = useRoute();

const watchRouteChange = () => {
  const btnClose = document.querySelector('.btn-close') as HTMLElement | null;
  if (btnClose) {
    btnClose.click();
  }
};

watch(() => route.fullPath, watchRouteChange);
</script>

<template>
  <header class="header">
    <div class="wrapper d-flex align-items-center justify-content-between">
      <h1 class="logo m-0"></h1>

      <div class="navigation d-flex gap-3">
        <div class="d-flex align-items-center gap-1">
          <v-icon name="fa-moon" color="yellow" />
          <button class="switch d-flex rounded-4">
            <v-icon name="fa-circle" color="#212529" />
          </button>
          <v-icon name="fa-sun" color="yellow" />
        </div>

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
            <form class="form">
              <label for="email" class="sr-only">Insira seu e-mail</label>
              <input
                type="email"
                id="email"
                placeholder="e-mail"
                class="mb-2" />
              <label for="password" class="sr-only">Insira sua senha</label>
              <input type="password" id="password" placeholder="senha" />
              <p class="reminder">
                Esqueceu sua senha? <a href="#">Clique aqui</a>
              </p>
              <button type="submit" class="btn btn-primary d-block mx-auto">
                Entrar
              </button>
            </form>
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
    .switch {
      background: #ccc;
      border: 2px solid #ccc;
      width: 40px;
    }
  }

  .offcanvas-body {
    > a {
      &:hover,
      &.router-link-exact-active {
        background: #ccc;
      }
    }

    .form {
      margin: 5rem auto;
      width: 15rem;
      .reminder {
        margin: 40px auto;
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
