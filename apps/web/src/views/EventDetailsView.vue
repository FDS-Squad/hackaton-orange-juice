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
    <section
      class="event-details wrapper row justify-content-center mt-lg-4 gap-lg-5">
      <div class="card col-12 col-lg-6 p-4 mb-4 w-100">
        <img src="..." class="card-img-top" alt="..." />
        <div class="card-body pb-0">
          <h5 class="card-title text-center">Lorem ipsum dolor sit.</h5>
          <p class="card-text text-center mb-0">08 out 2023</p>
          <p class="card-text text-center mb-0">online</p>
          <p class="card-text text-center mb-0">gratuito</p>
        </div>
      </div>
      <div class="col-12 col-lg-6">
        <div class="description text-center pb-4 pb-lg-5">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit
          facilis necessitatibus, eos non quaerat nostrum debitis? Nobis odit,
          rem cum quibusdam iste perferendis voluptate nostrum obcaecati quas
          voluptas similique asperiores nesciunt sint repellendus iusto,
          praesentium, necessitatibus quam perspiciatis et eum quod cumque?
          Adipisci laboriosam eum dicta at ab quidem repellat.
        </div>
        <div
          class="actions d-flex justify-content-center align-items-end pt-lg-5 gap-3">
          <button class="btn btn-primary btn-sm" @click="copyLink">
            Copiar link
          </button>
          <button class="btn btn-primary btn-sm" @click="shareWA">
            Compartilhar WP
          </button>
          <button class="btn btn-primary btn-sm">Visitar site</button>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
.event-details {
  img {
    background: #ccc;
    width: 100%;
    height: 180px;
  }
}

@media screen and (min-width: 1200px) {
  .event-details {
    .card {
      width: 500px !important;
    }
  }
}
</style>
