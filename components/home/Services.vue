<template>
  <section class="service_section commonSection">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 text-center">
          <h4 class="sec_title red_color">{{$t("services")}}</h4>

          <p class="sec_desc color_aaa">

          </p>
        </div>
      </div>
      <div class="row custom_column">
        <div class="col-lg-2 col-sm-4 col-md-2">
          <nuxt-link to="/prog" class="icon_box_1 text-center">
            <div class="flipper">
              <div class="front">
                  <img src="/images/service/NyneCorp-54.jpg" alt="">
                <h3>Outsourcing</h3>
              </div>
              <div class="back">
                 <img src="/images/service/NyneCorp-54.jpg" alt="">
                <h3>Outsourcing</h3>
              </div>
            </div>
          </nuxt-link>
        </div>
        <div class="col-lg-2 col-sm-4 col-md-2">
          <nuxt-link to="/prog" class="icon_box_1 text-center">
            <div class="flipper">
              <div class="front">
                 <img src="/images/service/NyneCorp-69.jpg" alt="">
                <h3>{{$t("serPro")}}</h3>
              </div>
              <div class="back">
              <img src="/images/service/NyneCorp-69.jpg" alt="">
                <h3>{{$t("serPro")}}</h3>
              </div>
            </div>
          </nuxt-link>
        </div>
        <div class="col-lg-2 col-sm-4 col-md-2">
          <nuxt-link to="/qa-testing" class="icon_box_1 text-center">
            <div class="flipper">
              <div class="front">
                 <img src="/images/service/NyneCorp-68.jpg" alt="">
                <h3>{{$t("serTwo")}}</h3>
              </div>
              <div class="back">
                <img src="/images/service/NyneCorp-68.jpg" alt="">
                <h3>{{$t("serTwo")}}</h3>
              </div>
            </div>
          </nuxt-link>
        </div>
        <div class="col-lg-2 col-sm-4 col-md-2">
          <nuxt-link to="/graphism-design" class="icon_box_1 text-center">
            <div class="flipper">
              <div class="front">
                <img src="/images/service/NyneCorp-71.jpg" alt="">
                <h3>{{$t("DESIGN")}}</h3>
              </div>
              <div class="back">
                <img src="/images/service/NyneCorp-71.jpg" alt="">
                <h3>{{$t("DESIGN")}}</h3>
              </div>
            </div>
          </nuxt-link>
        </div>
        <div class="col-lg-2 col-sm-4 col-md-2">
          <nuxt-link to="/digital-marketing" class="icon_box_1 text-center">
            <div class="flipper">
              <div class="front">
                 <img src="/images/service/NyneCorp-70.jpg" alt="">
                <h3>{{$t("DIGITAL")}}</h3>
              </div>
              <div class="back">
                  <img src="/images/service/NyneCorp-70.jpg" alt="">
                <h3>{{$t("DIGITAL")}}</h3>
              </div>
            </div>
          </nuxt-link>
         </div>
          <div class="col-lg-2 col-sm-4 col-md-2">
                <nuxt-link to="business" class="icon_box_1 text-center">
                  <div class="flipper">
                    <div class="front">
                        <img src="/images/service/NyneCorp-72.jpg" alt="">
                      <h3>{{$t("BUSINESS")}}</h3>
                    </div>
                    <div class="back">
                        <img src="/images/service/NyneCorp-72.jpg" alt="">
                      <h3>{{$t("BUSINESS")}}</h3>
                    </div>
                  </div>
                </nuxt-link>
         </div>
             <div class="col-lg-2 col-sm-4 col-md-2">
                <nuxt-link to="tech" class="icon_box_1 text-center">
                  <div class="flipper">
                    <div class="front">
                      <img src="/images/service/NyneCorp-67.jpg" alt="">
                      <h3>{{$t("TECHNOLOGIES")}}</h3>
                    </div>
                    <div class="back">
                      <img src="/images/service/NyneCorp-67.jpg" alt="">
                      <h3>{{$t("TECHNOLOGIES")}}</h3>
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
      name: "Services",
        mounted() {
        if ($('.custom_column').length > 0) {
          $('.custom_column').owlCarousel({
            items: 4,
            margin: 10,
            autoplay: true,
            nav: false,
            loop: true,
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
.icon_box_1{
  width: 200px !important;

}
.icon_box_1 h3{
height:50px;
}
img{
  height:200px;
  width:100% !important;
  margin-bottom: 15px;
}
.flipper{
  border:#4085f4 2px solid;
}
@media(max-width: 600px){
h3{
font-size: 12px !important;
}
.col-lg-2{
margin:62px !important;
}
}
</style>
