<template>
  <section class="commonSection porfolioPage">
    <div class="container">
      <div class="row">
        <h4 class="sec_title title-here text-center">Nos Réalisations</h4>
      </div><br>
      <div class="row"> 
        <div class="col-lg-12">
          <div class="folio_mixing">
            <ul>
              <li class="filter active" data-filter="all">All</li>
              <li class="filter" data-filter="graphic">Web Project</li>
              <li class="filter" data-filter="branding">branding</li>
              <li class="filter" data-filter="marketing">marketing</li>
              <li class="filter" data-filter="logos">logo</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="row" id="Grid">
        <div class="custom">
          <div class="col-lg-4 col-sm-6 col-md-4 mix  branding">
            <div class="singlefolio">
              <img src="/images/portfolio/L2.png" alt=""/>
              <div class="folioHover">
                <a class="cate" href="#">Graphic</a>
                <h4><nuxt-link to="/portfolio-detail">Design Styles</nuxt-link></h4>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-sm-6 col-md-4 mix graphic">
            <div class="singlefolio">
              <img src="/images/portfolio/w1.png" alt=""/>
              <div class="folioHover">
                <a class="cate" href="#">Graphic</a>
                <h4><nuxt-link to="/portfolio-detail">Design Styles</nuxt-link></h4>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-sm-6 col-md-4 mix logos">
            <div class="singlefolio">
              <img src="/images/portfolio/L1.png" alt=""/>
              <div class="folioHover">
                <a class="cate" href="#">Graphic</a>
                <h4><nuxt-link to="/portfolio-detail">Design Styles</nuxt-link></h4>
              </div>
            </div>
          </div>
           <div class="col-lg-4 col-sm-6 col-md-4 mix graphic">
            <div class="singlefolio">
              <img src="/images/portfolio/w3.png" alt=""/>
              <div class="folioHover">
                <a class="cate" href="#">Graphic</a>
                <h4><nuxt-link to="/portfolio-detail">Design Styles</nuxt-link></h4>
              </div>
            </div>
          </div>
           <div class="col-lg-4 col-sm-6 col-md-4 mix graphic">
            <div class="singlefolio">
              <img src="/images/portfolio/Netflix.png" alt=""/>
              <div class="folioHover">
                <a class="cate" href="#">Graphic</a>
                <h4><nuxt-link to="/portfolio-detail">Design Styles</nuxt-link></h4>
              </div>
            </div>
          </div>
           <div class="col-lg-4 col-sm-6 col-md-4 mix graphic">
            <div class="singlefolio">
              <img src="/images/portfolio/w3.png" alt=""/>
              <div class="folioHover">
                <a class="cate" href="#">Graphic</a>
                <h4><nuxt-link to="/portfolio-detail">Design Styles</nuxt-link></h4>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-sm-6 col-md-4 mix graphic">
            <div class="singlefolio">
              <img src="/images/portfolio/w2.png" alt=""/>
              <div class="folioHover">
                <a class="cate" href="#">Graphic</a>
                <h4><nuxt-link to="/portfolio-detail">Design Styles</nuxt-link></h4>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-sm-6 col-md-4 mix marketing">
            <div class="singlefolio">
              <img src="/images/portfolio/n1.png" alt=""/>
              <div class="folioHover">
                <a class="cate" href="#">Graphic</a>
                <h4><nuxt-link to="/portfolio-detail">Design Styles</nuxt-link></h4>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-sm-6 col-md-4 mix graphic">
            <div class="singlefolio">
              <img src="/images/portfolio/11.png" alt=""/>
              <div class="folioHover">
                <a class="cate" href="#">Graphic</a>
                <h4><nuxt-link to="/portfolio-detail">Design Styles</nuxt-link></h4>
              </div>
            </div>
          </div>
           <div class="col-lg-4 col-sm-6 col-md-4 mix graphic">
            <div class="singlefolio">
              <img src="/images/portfolio/9.png" alt=""/>
              <div class="folioHover">
                <a class="cate" href="#">Graphic</a>
                <h4><nuxt-link to="/portfolio-detail">Design Styles</nuxt-link></h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row mt_30">
        <div class="col-lg-12 text-center">
          <a class="common_btn red_bg" href="#"><span>Load More</span></a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
    export default {
      name: "PortfolioLoadMore",
      mounted() {
        $('#Grid').themeWar();
        $('.Grid').themeWar();
      }
    }
</script>

<style scoped>

</style>
