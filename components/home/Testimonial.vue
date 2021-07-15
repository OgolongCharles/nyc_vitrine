<template>
  <section class="commonSection testimonial">
    <div class="container">
      <div class="row">
        <h2 class="sec_title text-center">Nos Compétences</h2>
        <div class="col-lg-10 col-lg-offset-1 col-sm-12 text-center">
          <div class="testimonial_content">
            <!-- items -->
              <div class="singleClient">
                <a href="/contact">
                  <img src="/images/client/symfony.png" alt=""/>
                </a>
              </div>
              <div class="singleClient">
                <a href="/contact">
                  <img src="/images/client/nuxtjs.jpg" alt=""/>
                </a>
              </div>
               <div class="singleClient">
                <a href="/contact">
                  <img src="/images/client/react.jpg" alt=""/>
                </a>
              </div>
              <div class="singleClient">
                <a href="/contact">
                  <img src="/images/client/vue.jpeg" alt=""/>
                </a>
              </div>
              <div class="singleClient">
                <a href="/contact">
                  <img src="/images/client/wordpress.png" alt=""/>
                </a>
              </div>
               <div class="singleClient">
                <a href="/contact">
                  <img src="/images/client/js.jpeg" alt=""/>
                </a>
              </div>
               <div class="singleClient">
                <a href="/contact">
                  <img src="/images/client/nodejs.png" alt=""/>
                </a>
              </div>
               <div class="singleClient">
                <a href="/contact">
                  <img src="/images/client/postman.png" alt=""/>
                </a>
              </div>
               <div class="singleClient">
                <a href="/contact">
                  <img src="/images/client/php.png" alt=""/>
                </a>
              </div>
               <div class="singleClient">
                <a href="/contact">
                  <img src="/images/client/react-native.png" alt=""/>
                </a>
              </div>
               <div class="singleClient">
                <a href="/contact">
                  <img src="/images/client/adobecc.png" alt=""/>
                </a>
              </div>
              <!-- end -->
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
    export default {
      name: "Testimonial",
           mounted() {
        if ($('.testimonial_content').length > 0) {
          $('.testimonial_content').owlCarousel({
            items: 4,
            margin: 30,
            autoplay: true,
            loop: true,
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
                items: 4
              }
            }
          });
        }
      }
    }
</script>

<style scoped>

</style>
