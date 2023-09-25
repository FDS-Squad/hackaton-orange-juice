<script setup lang="ts">
import { useRouter } from 'vue-router';
const router = useRouter();
</script>

<template>
  <div
    id="captions"
    class="carousel slide carousel-fade"
    data-bs-ride="carousel">
    <div class="carousel-indicators">
      <button
        type="button"
        data-bs-target="#captions"
        data-bs-slide-to="0"
        class="active"
        aria-current="true"
        aria-label="Evento em destaque 1"></button>
      <button
        type="button"
        data-bs-target="#captions"
        data-bs-slide-to="1"
        aria-label="Evento em destaque 2"></button>
      <button
        type="button"
        data-bs-target="#captions"
        data-bs-slide-to="2"
        aria-label="Evento em destaque 3"></button>
    </div>
    <div class="carousel-inner">
      <div
        class="carousel-item active"
        role="button"
        @click="router.push('/event-details/1')">
        <img
          src="/banner-php-mobile.png"
          class="d-md-none object-fit-contain w-100"
          alt="PHP Community Summit" />
        <img
          src="/banner-php-mobile.png"
          class="d-none d-md-block d-xl-none object-fit-contain w-100"
          alt="Female model wearing pink blouse in a purple background" />
        <img
          src="/banner-php-desktop.png"
          class="d-none d-xl-block object-fit-contain w-100"
          alt="PHP Community Summit" />
      </div>

      <div
        class="carousel-item"
        role="button"
        @click="router.push('/event-details/2')">
        <img
          src="/banner-codecon-mobile.png"
          class="d-md-none object-fit-contain w-100"
          alt="codecon feature" />
        <img
          src="/banner-codecon-tablet.png"
          class="d-none d-md-block d-xl-none object-fit-contain w-100"
          alt="codecon feature" />
        <img
          src="/banner-codecon-desktop.png"
          class="d-none d-xl-block object-fit-contain w-100"
          alt="codecon feature" />
      </div>

      <a
        href="https://discord.gg/orangejuicetech"
        target="_blank"
        class="carousel-item"
        role="button">
        <img
          src="/banner-orange-mobile.png"
          class="d-md-none object-fit-contain w-100"
          alt="orange hackathon" />
        <img
          src="/banner-orange-tablet.png"
          class="d-none d-md-block d-xl-none object-fit-contain w-100"
          alt="orange hackathon" />
        <img
          src="/banner-orange-desktop.png"
          class="d-none d-xl-block object-fit-contain w-100"
          alt="orange hackathon" />
      </a>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#captions"
      data-bs-slide="prev">
      <span
        class="carousel-control-prev-icon text-primary"
        aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#captions"
      data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<style scoped>
img {
  height: 250px;
}

.carousel-item:first-of-type {
  background: linear-gradient(90deg, #28343d 38.27%, #0b161d 61.45%);
}

.carousel-item:nth-of-type(2) {
  background: linear-gradient(180deg, #000 38.27%, #08c4f3 61.45%);
}

.carousel-item:last-of-type {
  background: #000;
}

@media screen and (min-width: 1200px) {
  img {
    height: 300px;
  }
}
</style>
