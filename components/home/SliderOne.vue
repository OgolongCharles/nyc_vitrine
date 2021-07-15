<template>
  <!-- Site Slider Start -->
  <section class="slider-one">
    <div class="slider-one__carousel owl-carousel owl-theme">
      <div class="item slider-one__slider-1" style="background-image: url(/images/slider/1_10.jpg);">
        <div class="container slider__content">
          <p class="slider-one__text">Bienvenue à l'agence NYNE CORP</p>
          <div class="slider-one__title tp-caption tp-resizeme">SMART WEB<br> DESIGN AGENCY.</div>

          <!-- /.slider-one__text -->
        </div>
        <!-- /.container -->
      </div>
      <!-- /.item -->
      <div class="item slider-one__slider-2" style="background-image: url(/images/slider/1_7.jpg);">
        <div class="container slider__content">
          <p class="slider-one__text">Bienvenue à l'agence NYNE CORP</p>
          <div class="slider-one__title tp-caption tp-resizeme">SMART WEB<br> DESIGN AGENCY.</div>

        </div>
        <!-- /.container -->
      </div>
      <!-- /.item -->

          <!-- /.item -->
      <div class="item slider-one__slider-3" style="background-image: url(/images/slider/out.jpg);height" >
        <div class="container slider__content">
          <p class="slider-one__text"><br></p>
          <div class="slider-one__title tp-caption tp-resizeme">OUTSOURCING</div>
          <a href="/prog" class="common_btn"><span>Découvrir plus</span></a>
        </div>
        <!-- /.container -->
      </div>
      <!-- /.item -->

        <!-- /.item -->
      <div class="item slider-one__slider-3" style="background-image: url(/images/slider/pro1.jpg);height" >
        <div class="container slider__content">
          <p class="slider-one__text"><br></p>
          <div class="slider-one__title tp-caption tp-resizeme">{{$t("serPro")}}</div>
          <a href="/prog" class="common_btn"><span>Découvrir plus</span></a>
        </div>
        <!-- /.container -->
      </div>
      <!-- /.item -->

        <!-- /.item -->
      <div class="item slider-one__slider-4" style="background-image: url(/images/slider/QA.jpg);">
        <div class="container slider__content">
          <p class="slider-one__text"><br><br></p>
          <div class="slider-one__title tp-caption tp-resizeme">{{$t("serTwo")}}</div>
          <a href="/qa-testing" class="common_btn"><span>Découvrir plus</span></a>
        </div>
        <!-- /.container -->
      </div>
      <!-- /.item -->

         <!-- /.item -->
      <div class="item slider-one__slider-5" style="background-image: url(/images/slider/graph.jpg);">
        <div class="container slider__content">
          <p class="slider-one__text"><br></p>
          <div class="slider-one__title tp-caption tp-resizeme">{{$t("DESIGN")}}<br></div>
          <a href="/graphism-design" class="common_btn"><span>Découvrir plus</span></a>
        </div>
        <!-- /.container -->
      </div>
      <!-- /.item -->

          <!-- /.item -->
      <div class="item slider-one__slider-6" style="background-image: url(/images/slider/GD.jpg);">
        <div class="container slider__content">
          <p class="slider-one__text"><br></p>
          <div class="slider-one__title tp-caption tp-resizeme">{{$t("DIGITAL")}}<br></div>
          <a href="/digital-marketing" class="common_btn"><span>Découvrir plus</span></a>
        </div>
        <!-- /.container -->
      </div>
      <!-- /.item -->
         <!-- /.item -->
      <div class="item slider-one__slider-7" style="background-image: url(/images/slider/suit-690048.jpg);">
        <div class="container slider__content">
          <p class="slider-one__text"><br></p>
          <div class="slider-one__title tp-caption tp-resizeme">{{$t("BUSINESS")}}<br></div>
          <a href="/business" class="common_btn"><span>Découvrir plus</span></a>
        </div>
        <!-- /.container -->
      </div>
      <!-- /.item -->
        <!-- /.item -->
      <div class="item slider-one__slider-8" style="background-image: url(/images/slider/4884273.jpg);">
        <div class="container slider__content">
          <p class="slider-one__text"><br></p>
          <div class="slider-one__title tp-caption tp-resizeme">{{$t("ECHNOLOGIES")}}<br></div>
          <a href="/tech" class="common_btn"><span>Découvrir plus</span></a>
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
            smartSpeed: 100,
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
.slider-one__title{
  margin-bottom:50px;
}
@media(max-width: 600px){
.slider-one__title{
font-size: 38px;
}
.slider-one{
height: 70vh;

}
.item{
background-position: center;
background-size: cover;
background-repeat: repeat;
}
}
  @media(min-width:600px) and (max-width:800px){
    .slider-one{
height: 62vh;

}
  }
</style>
