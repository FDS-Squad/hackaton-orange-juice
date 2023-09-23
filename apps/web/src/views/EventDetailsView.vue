<script setup lang="ts">
let url = window.location.href;

const copyLink = async () => {
  try {
    await navigator.clipboard.writeText(url);
    alert('Copiado');
  } catch (error) {
    alert('Não copiou');
  }
};

const shareWA = () => {
  let msg = `Confira este evento: ${url}`;
  msg = encodeURIComponent(msg);
  let whatsappURL = `https://web.whatsapp.com/send?text=${msg}`;
  window.open(whatsappURL);
};
</script>

<template>
  <main>
    <section class="event-details wrapper">
      <div class="card p-4 w-100" style="width: 18rem">
        <img src="..." class="card-img-top" alt="..." />
        <div class="card-body pb-0">
          <h5 class="card-title text-center">Lorem ipsum dolor sit.</h5>
          <p class="card-text text-center">08 out 2023</p>
          <p class="card-text text-center">online</p>
          <p class="card-text text-center">gratuito</p>
        </div>
      </div>
      <div class="description">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit
        facilis necessitatibus, eos non quaerat nostrum debitis? Nobis odit, rem
        cum quibusdam iste perferendis voluptate nostrum obcaecati quas voluptas
        similique asperiores nesciunt sint repellendus iusto, praesentium,
        necessitatibus quam perspiciatis et eum quod cumque? Adipisci laboriosam
        eum dicta at ab quidem repellat.
      </div>
      <div class="actions">
        <button class="btn btn-primary btn-sm" @click="copyLink">
          Copiar link
        </button>
        <button class="btn btn-primary btn-sm" @click="shareWA">
          Compartilhar WP
        </button>
        <button class="btn btn-primary btn-sm">Visitar site</button>
      </div>
    </section>
  </main>
</template>

<style scoped>
.event-details {
  display: flex;
  flex-direction: column;
  gap: 32px;

  img {
    background: #ccc;
    width: 100%;
    height: 180px;
  }

  .actions {
    display: flex;
    gap: 1rem;
  }
}
</style>
