<template>
  <section class="commonSection porfolio">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 text-center">
          <h4 class="sub_title">{{$t("Port1")}}</h4>
          <h2 class="sec_title">{{$t("Port2")}}</h2>
          <p class="sec_desc">

          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-4 col-sm-6 col-md-4">
          <div class="singlefolio">
            <img src="/images/portfolio/Netflix.png" alt=""/>
            <div class="folioHover">
              <a class="cate" href="#">Technologies,Business,Développement,Graphisme, CM, Formations</a>
              <h4><nuxt-link to="/portfolio-detail">Intégration Netflix</nuxt-link></h4>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-sm-6 col-md-4">
          <div class="singlefolio">
            <img src="/images/portfolio/nkap_group.png" alt=""/>
            <div class="folioHover">
              <a class="cate" href="#">Développement Web</a>
              <h4><nuxt-link to="/portfolio-detail">Vitrine NKAP GROUP</nuxt-link></h4>
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
            <img src="/images/portfolio/yamo.png" alt=""/>
            <div class="folioHover">
              <a class="cate" href="#">Community Management </a>
              <h4><nuxt-link to="/portfolio-detail">YAMO AFRICA</nuxt-link></h4>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-sm-6 col-md-4">
          <div class="singlefolio">
            <img src="/images/portfolio/12.png" alt=""/>
            <div class="folioHover">
              <a class="cate" href="#">Développement Web & CM </a>
              <h4><nuxt-link to="/portfolio-detail">Batiservices</nuxt-link></h4>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-sm-6 col-md-4">
          <div class="singlefolio">
            <img src="/images/portfolio/Barn-Selam.png" alt=""/>
            <div class="folioHover">
              <a class="cate" href="#">Site de bonnes annonces</a>
              <h4><nuxt-link to="/portfolio-detail">SELAM</nuxt-link></h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
    export default {
      name: "Portfolio",
            mounted() {
        if ($('.row').length > 0) {
          $('.row').owlCarousel({
            items: 4,
            loop:true,
            margin: 30,
            autoplay: true,
            nav: false,
            responsive: {
              0: {
                items: 1
              },
              560: {
                items: 2
              },
              768: {
                items: 3
              },
              992: {
                items: 3
              }
            }
          });
        }
      }

    }

</script>

<style scoped>

</style>
