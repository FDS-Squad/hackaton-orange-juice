<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
  <header class="header">
    <div class="wrapper">
      <div class="logo"></div>

      <div class="navigation">
        <div class="theme">
          <v-icon name="fa-moon" />
          <button class="switch">
            <v-icon name="fa-circle" />
          </button>
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
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/event-details">About</RouterLink>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
header {
  .wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 30px;
  }

  .logo {
    background: var(--primary);
    width: 150px;
    height: 60px;
  }

  .navigation {
    display: flex;
    gap: 1rem;
    width: fit-content;
    .theme {
      display: flex;
      align-items: center;
      gap: 4px;
      .switch {
        display: flex;
        background: #ccc;
        border: 2px solid #ccc;
        border-radius: 1rem;
        width: 40px;
      }
    }
  }

  .offcanvas-body > a {
    display: block;
    padding: 0.5rem 1.5rem;
    margin-bottom: 0.25rem;
    &:hover,
    &.router-link-exact-active {
      background: #ccc;
    }
  }
}
</style>
