<template>
  <section class="commonSection porfolio">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 text-center">
          <h4 class="sub_title">Nos réalisations</h4>
          <h2 class="sec_title">Vitrine de travail</h2>
          <p class="sec_desc">
            Nous nous engageons à fournir à nos clients un service exceptionnel <br> tout en offrant à nos employés la meilleure formation.
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-4 col-sm-6 col-md-4">
          <div class="singlefolio">
            <img src="/images/portfolio/9.png" alt=""/>
            <div class="folioHover">
              <a class="cate" href="#">Graphic</a>
              <h4><nuxt-link to="/portfolio-detail">Design Styles</nuxt-link></h4>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-sm-6 col-md-4">
          <div class="singlefolio">
            <img src="/images/portfolio/12.png" alt=""/>
            <div class="folioHover">
              <a class="cate" href="#">Développement Web</a>
              <h4><nuxt-link to="/portfolio-detail">Vitrine Batiservice</nuxt-link></h4>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-sm-6 col-md-4">
          <div class="singlefolio">
            <img src="/images/portfolio/11.png" alt=""/>
            <div class="folioHover">
              <a class="cate" href="#">Community Management </a>
              <h4><nuxt-link to="/portfolio-detail">CEF IMMO FINANZ</nuxt-link></h4>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-sm-6 col-md-4">
          <div class="singlefolio">
            <img src="/images/portfolio/10.png" alt=""/>
            <div class="folioHover">
              <a class="cate" href="#">Community Management </a>
              <h4><nuxt-link to="/portfolio-detail">YAMO AFRICA</nuxt-link></h4>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-sm-6 col-md-4">
          <div class="singlefolio">
            <img src="/images/portfolio/Site_batiService.png" alt=""/>
            <div class="folioHover">
              <a class="cate" href="#">Graphic</a>
              <h4><nuxt-link to="/portfolio-detail">Design Styles</nuxt-link></h4>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-sm-6 col-md-4">
          <div class="singlefolio">
            <img src="/images/portfolio/LogoPro.png" alt=""/>
            <div class="folioHover">
              <a class="cate" href="#">Graphic</a>
              <h4><nuxt-link to="/portfolio-detail">Design Styles</nuxt-link></h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
    export default {
      name: "Portfolio"
    }
</script>

<style scoped>

</style>
