<template>
  <section class="commonSection team">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 text-center">
          <h4 class="sub_title">L'équipe NYNE CORP</h4>
          <h2 class="sec_title">Les experts à votre disposition</h2>
          <p class="sec_desc">
            Nous nous engageons à fournir à nos clients un service exceptionnel tout en <br> offrant à nos employés la meilleure formation.
          </p>
        </div>
      </div>
    </div>
    <div class="team_slider">
      <div class="singleTM">
        <div class="tm_img">
          <img src="/images/team/AVTR-04.png" alt="">
          <div class="tm_overlay">
            <div class="team_social">
              <a href="#"><span>Facebook</span></a>
              <a href="#"><span>Twitter</span></a>
              <a href="#"><span>Youtube</span></a>
            </div>
            <a href="#" class="common_btn"><span>learn more</span></a>
          </div>
        </div>
        <div class="detail_TM">
          <h5>Evariste Guimkeng</h5>
          <h6>Senior Tester</h6>
        </div>
      </div>
      <div class="singleTM">
        <div class="tm_img">
          <img src="/images/team/AVTR-02.png" alt="">
          <div class="tm_overlay">
            <div class="team_social">
              <a href="#"><span>Facebook</span></a>
              <a href="#"><span>Twitter</span></a>
              <a href="#"><span>Youtube</span></a>
            </div>
            <a href="#" class="common_btn"><span>learn more</span></a>
          </div>
        </div>
        <div class="detail_TM">
          <h5>Lenine Djouatsa</h5>
          <h6>General Manager</h6>
        </div>
      </div>
      <div class="singleTM">
        <div class="tm_img">
          <img src="/images/team/team1.png" alt="">
          <div class="tm_overlay">
            <div class="team_social">
              <a href="#"><span>Facebook</span></a>
              <a href="#"><span>Twitter</span></a>
              <a href="#"><span>Youtube</span></a>
            </div>
            <a href="#" class="common_btn"><span>learn more</span></a>
          </div>
        </div>
        <div class="detail_TM">
          <h5>Rock Well MOMO</h5>
          <h6>Senior Developer</h6>
        </div>
      </div>
      <div class="singleTM">
        <div class="tm_img">
          <img src="/images/team/AVTR-05.png" alt="">
          <div class="tm_overlay">
            <div class="team_social">
              <a href="#"><span>Facebook</span></a>
              <a href="#"><span>Twitter</span></a>
              <a href="#"><span>Youtube</span></a>
            </div>
            <a href="#" class="common_btn"><span>learn more</span></a>
          </div>
        </div>
        <div class="detail_TM">
          <h5>Boresse Temgoua</h5>
          <h6>Senior Designer</h6>
        </div>
      </div>
      <div class="singleTM">
        <div class="tm_img">
          <img src="/images/team/team2.jpg" alt="">
          <div class="tm_overlay">
            <div class="team_social">
              <a href="#"><span>Facebook</span></a>
              <a href="#"><span>Twitter</span></a>
              <a href="#"><span>Youtube</span></a>
            </div>
            <a href="#" class="common_btn"><span>learn more</span></a>
          </div>
        </div>
        <div class="detail_TM">
          <h5>Charles Ferdinang Ogolong</h5>
          <h6>Senior developer</h6>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
    export default {
      name: "Team",
      mounted() {
        if ($('.team_slider').length > 0) {
          $('.team_slider').slick({
            autoplay: true,
            autoplaySpeed: 2000,
            slidesToShow: 3,
            dots: true,
            arrows: false,
            centerMode: true,
            centerPadding: '350px',
            responsive: [
              {
                breakpoint: 1600,
                settings: {
                  centerMode: true,
                  centerPadding: '40px',
                  slidesToShow: 4
                }
              },
              {
                breakpoint: 1199,
                settings: {
                  centerMode: true,
                  centerPadding: '40px',
                  slidesToShow: 3
                }
              },
              {
                breakpoint: 991,
                settings: {
                  centerMode: true,
                  centerPadding: '40px',
                  slidesToShow: 2
                }
              },
              {
                breakpoint: 600,
                settings: {
                  centerMode: true,
                  centerPadding: '30px',
                  slidesToShow: 1
                }
              }
            ]
          });
        }
      }
    }
</script>

<style scoped>

</style>
