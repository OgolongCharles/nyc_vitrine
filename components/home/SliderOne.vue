<template>
  <!-- Site Slider Start -->
  <section class="slider-one">
    <div class="slider-one__carousel owl-carousel owl-theme">
      <div class="item slider-one__slider-1" style="background-image: url(/images/slider/1_10.jpg);">
        <div class="container slider__content">
          <p class="slider-one__text">Bienvenu à l'agence NYNE CORP</p>
          <div class="slider-one__title tp-caption tp-resizeme">SMART WEB<br> DESIGN AGENCY.</div>
          <a href="#" class="common_btn"><span>Découvrir plus</span></a>
          <!-- /.slider-one__text -->
        </div>
        <!-- /.container -->
      </div>
      <!-- /.item -->
      <div class="item slider-one__slider-2" style="background-image: url(/images/slider/1_7.jpg);">
        <div class="container slider__content">
          <p class="slider-one__text">Bienvenu à l'agence NYNE CORP</p>
          <div class="slider-one__title tp-caption tp-resizeme">SMART WEB<br> DESIGN AGENCY.</div>
          <a href="#" class="common_btn"><span>Découvrir plus</span></a>
        </div>
        <!-- /.container -->
      </div>
      <!-- /.item -->
    </div>
  </section>
    <!-- /.slider-one__carousel -->
</template>

<script>
    export default {
      name: "SliderOne",
      mounted() {
        // Slider
        if ($(".slider-one__carousel").length) {
          var slideOneWrap = $(".slider-one");
          var slideOneCarousel = $(".slider-one__carousel").owlCarousel({
            loop: true,
            items: 1,
            margin: 0,
            dots: true,
            nav: false,
            animateOut: "slideOutDown",
            animateIn: "fadeIn",
            active: true,
            smartSpeed: 1000,
            autoplay: 7000
          });
          slideOneWrap.find(".slide-one__left-btn").on("click", function (e) {
            slideOneCarousel.trigger("next.owl.carousel");
            e.preventDefault();
          });
          slideOneWrap.find(".slide-one__right-btn").on("click", function (e) {
            slideOneCarousel.trigger("prev.owl.carousel");
            e.preventDefault();
          });
        }
      }
    }
</script>

<style scoped>

</style>
