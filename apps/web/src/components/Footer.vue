<template>
  <footer class="footer">
    <div class="wrapper d-flex align-items-center justify-content-between p-4">
      <img src="/logo_footer.png" alt="Tech42" class="logo-footer" />
      <div class="text-end">
        <img src="/logo.png" alt="Tech42" class="logo" />
        <p class="text-white f-12 m-0">um site de dev para dev</p>
        <a href="#" class="text-decoration-none f-12 m-0">saiba mais</a>
      </div>
    </div>
  </footer>
</template>

<style scoped>
a {
  background-image: var(--hackaton-bg-vertical);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  &:hover {
    border-bottom: 1px solid var(--hackaton-neutral-normal);
  }
}

.logo {
  width: 7.5rem;
}

.logo-footer {
  height: 7.5rem;
}
</style>
