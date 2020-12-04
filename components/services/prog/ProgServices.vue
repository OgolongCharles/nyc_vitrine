<template>
  <section class="service_section commonSection">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 text-center">
          <h4 class="sub_title red_color">Nos services</h4>
          <h2 class="sec_title white">Nous concevons des produits numériques qui <br> aident à développer les entreprises.</h2>
          <p class="sec_desc color_aaa">
            Nous nous engageons à fournir à nos clients un service exceptionnel <br> tout en offrant à nos employés la meilleure formation.
          </p>
        </div>
      </div>
      <div class="row custom_column">
        <div class="col-lg-3 col-sm-4 col-md-3">
          <nuxt-link to="/service-detail" class="icon_box_1 text-center">
            <div class="flipper">
              <div class="front">
                <i class="mei-web-design"></i>
                <h3>Développement Web <br/> E-Commerce</h3>
              </div>
              <div class="back">
                <i class="mei-web-design"></i>
                <h3>Développement Web <br/> E-Commerce</h3>
              </div>
            </div>
          </nuxt-link>
        </div>
        <div class="col-lg-3 col-sm-4 col-md-3">
          <nuxt-link to="/service-detail" class="icon_box_1 text-center">
            <div class="flipper">
              <div class="front">
                <i class="mei-computer-graphic"></i>
                <h3>Développement Web <br/> CMS</h3>
              </div>
              <div class="back">
                <i class="mei-computer-graphic"></i>
                <h3>Développement Web <br/> CMS</h3>
              </div>
            </div>
          </nuxt-link>
        </div>
        <div class="col-lg-3 col-sm-4 col-md-3">
          <nuxt-link to="/service-detail" class="icon_box_1 text-center">
            <div class="flipper">
              <div class="front">
                <i class="mei-development-1"></i>
                <h3>Développement Mobile <br/> IOS , ANDROID</h3>
              </div>
              <div class="back">
                <i class="mei-development-1"></i>
                <h3>Développement Mobile <br/> IOS , ANDROID</h3>
              </div>
            </div>
          </nuxt-link>
        </div>
        <div class="col-lg-3 col-sm-4 col-md-3">
          <nuxt-link to="/service-detail" class="icon_box_1 text-center">
            <div class="flipper">
              <div class="front">
                <i class="mei-development"></i>
                <h3>Développement App de Bureau <br/> IOS , ANDROID</h3>
              </div>
              <div class="back">
                <i class="mei-development"></i>
                <h3>Automatisation de Tests</h3>
              </div>
            </div>
          </nuxt-link>
        </div>
        <div class="col-lg-3 col-sm-4 col-md-3">
          <nuxt-link to="service_detail.html" class="icon_box_1 text-center">
            <div class="flipper">
              <div class="front">
                <i class="mei-app-development"></i>
                <h3>Developpement Applicatif <br/> App de bureau</h3>
              </div>
              <div class="back">
                <i class="mei-app-development"></i>
                <h3>Developpement Applicatif <br/> App de bureau</h3>
              </div>
            </div>
          </nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
    export default {
      name: "Services"
    }
</script>

<style scoped>

</style>
