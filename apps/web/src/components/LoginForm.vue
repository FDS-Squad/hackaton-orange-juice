<template>
  <form class="form">
    <label for="email" class="sr-only">Insira seu e-mail</label>
    <input
      type="email"
      id="email"
      placeholder="e-mail"
      class="form-control mb-2" />
    <label for="password" class="sr-only">Insira sua senha</label>
    <input
      type="password"
      id="password"
      class="form-control"
      placeholder="senha" />
    <p class="reminder">Esqueceu sua senha? <a href="#">Clique aqui</a></p>
    <button type="submit" class="btn btn-primary d-block mx-auto">
      Entrar
    </button>
  </form>
</template>

<style scoped>
.form {
  margin: 5rem auto;
  width: 15rem;
  .reminder {
    margin: 40px auto;
  }
}
</style>
