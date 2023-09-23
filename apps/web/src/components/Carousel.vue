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
      <!-- CARROSEL 01 -->
      <div class="carousel-item active">
        <img
          src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
          class="w-100 object-fit-cover"
          alt="..." />
        <div class="carousel-caption caption-2 d-md-block">
          <h5 class="carousel-title fw-medium text-uppercase">
            Título a exibir
          </h5>
          <p class="lh-llg">Lorem ipsum dolor sit amet consectetur.</p>
        </div>
      </div>
      <!-- CARROSSEL 02 -->
      <div class="carousel-item">
        <img
          src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
          class="w-100 object-fit-cover"
          alt="..." />
        <div class="carousel-caption caption-2 d-md-block">
          <h5 class="carousel-title fw-medium text-uppercase">
            Título a exibir
          </h5>
          <p class="lh-llg">Lorem ipsum dolor sit amet consectetur.</p>
        </div>
      </div>
      <!-- CARROSSEL 03 -->
      <div class="carousel-item">
        <img
          src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
          class="w-100 object-fit-cover"
          alt="..." />
        <div class="carousel-caption caption-3 d-md-block">
          <h5 class="carousel-title fw-medium text-uppercase">
            Título a exibir
          </h5>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#captions"
      data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
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

@media screen and (min-width: 1200px) {
  img {
    height: 300px;
  }
}
</style>
